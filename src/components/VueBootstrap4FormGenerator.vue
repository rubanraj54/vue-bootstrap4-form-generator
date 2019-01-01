<template>
    <div>
        <template v-if="schema.type === 'Object'">
            <div v-for="(element, key, index) in schema.elements" :key="index">
                <template v-if="element.element_type === 'input' && hasAttributeCheck(element.name)">
                    <input-element :element="element" :model="model" @remove-key="removeKey" />
                </template>

                <template v-else-if="element.type === 'Object' && hasAttributeCheck(element.name)">
                    <div class="card">
                        <div class="card-header">
                            {{element.name}}
                        </div>
                        <div class="card-body">
                            <vue-bootstrap4-form-generator :isRoot="is_root" :defaults="defaults[element.name]" :parentType="schema.type" :model="model[element.name]" :schema="element" :parentElementName="element.name" @update-value="updateValue" @remove-index="removeIndex"/>
                        </div>
                    </div>
                </template>

                <template v-else-if="element.type === 'Array'">
                    <vue-bootstrap4-form-generator :isRoot="is_root" :defaults="defaults[element.name][0]" :parentType="schema.type" :model="model[element.name]" :schema="element" :parentElementName="element.name" @update-value="updateValue" @remove-index="removeIndex" />
                </template>
            </div>
        </template>

        <template v-else-if="schema.type === 'Array'">
            <div class="card">
                <div class="card-header">
                    {{parentElementName}}
                </div>
                <div class="card-body">
                    <!-- {{defaults[0]}} -->
                    <div v-for="(value, key, index) in model" :key="index">
                        <vue-bootstrap4-form-generator :isRoot="is_root" :defaults="defaults" :parentElementIndex="key" :model="value" :parentElementName="parentElementName" :schema="schema.schema" :parentType="schema.type" @update-value="updateValue" @remove-index="removeIndex" />
                        <button v-if="schema.schema.type !== 'input'" type="button" class="btn btn-sm btn-warning" @click="removeModel(key)">Remove {{parentElementName}}</button>
                        <hr>
                    </div>
                    <button type="button" class="btn btn-sm btn-primary" @click="addModel()">Add {{parentElementName}}</button>
                </div>
            </div>
        </template>

        <template v-else-if="schema.type === 'input'">
            <input-element :element="schema.element" :model.sync="model" :parentElementName="parentElementName" :parentElementIndex="parentElementIndex" @remove-key="removeKey" @update-value="updateValue" @remove-index="removeIndex"/>
        </template>

        <template v-else>
            <div>
                fkj
            </div>
        </template>
    </div>
</template>

<script>
import VueBootstrap4FormGenerator from './VueBootstrap4FormGenerator.vue'
import InputElement from './Elements/InputElement.vue'
var _ = require('lodash');

export default {
    name: "VueBootstrap4FormGenerator",
    props: {
        model: {
            type: Object | Array | String | Number | Boolean,
            default: function () {
                return {}
            }
        },
        schema: {
            type: Object,
            default: function () {
                return {}
            }
        },
        defaults: {
            type: Object | Array | String | Number | Boolean,
            default: function () {
                return {}
            }
        },
        parentElementName: {
            type: String,
            default: "Root"
        },
        parentType: {
            type: String,
            required: false
        },
        parentElementIndex: {
            type: String | Number,
            required: false
        },
        isRoot: {
            type: Boolean,
            default: true
        },
    },
    data: function () {
        return {
            is_root: false
        }
    },
    mounted() {

    },
    methods: {
        removeKey(key) {
            this.$delete(this.model, key)
        },
        clearAll(key) {
            this.model[key] = [];
        },
        hasAttributeCheck(name) {
            return _.has(this.model, name);
        },
        updateValue(payload) {

            if ((this.parentType == "Array" && this.schema.type == "input")) {
                this.$emit('update-value', payload);
            } else if (this.parentType == "Object" && this.schema.type == "Array") {
                this.$emit('update-value', payload);
            } else {
                this.model[payload.name][payload.index] = payload.value;

            }
        },
        removeIndex(payload) {

            if ((this.parentType == "Array" && this.schema.type == "input")) {
                this.$emit('remove-index', payload);
            } else if (this.parentType == "Object" && this.schema.type == "Array") {
                this.$emit('remove-index', payload);
            } else {
                this.model[payload.name].splice([payload.index],1);
            }
        },
        addModel() {
            let model = null;
            if (this.isRoot == true && this.schema.type == "Array") {
                model = _.cloneDeep(this.defaults[0]);
            } else {
                model = _.cloneDeep(this.defaults);
            }
            this.model.push(model);
        },
        removeModel(index) {
            this.model.splice(index, 1);
        },
    },
    components: {
        VueBootstrap4FormGenerator,
        InputElement
    }
}
</script>

<style scoped>
.card {
    margin-top: 10px;
}
</style>
