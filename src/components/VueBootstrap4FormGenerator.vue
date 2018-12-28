<template>
    <div>
        <!-- <br> -->
        <!-- <div class="card"> -->
            <!-- <div class="card-header">
                {{parentElementName}}
            </div> -->
            <!-- <div class="card-body"> -->
                <template v-if="schema.type === 'Object'">
                    <div v-for="(element, key, index) in schema.elements" :key="index">
                        <template v-if="element.element_type === 'input' && hasAttributeCheck(element.name)">
                            <input-element :element="element" :model="model" @remove-key="removeKey"/>
                        </template>
                        <template v-else-if="element.type === 'Object' && hasAttributeCheck(element.name)" >
                            <div class="card">
                                <div class="card-header">
                                    {{element.name}}
                                </div>
                                <div class="card-body">
                                    <!-- <vue-bootstrap4-form-generator :model="model" :schema="schema">
                                    </vue-bootstrap4-form-generator> -->
                                    <vue-bootstrap4-form-generator :model="model[element.name]" :schema="element" :parentElementName="element.name"/>
                                </div>
                            </div>
                        </template>
                        <template v-else-if="element.type === 'Array'">
                            <div class="card">
                                <div class="card-header">
                                    {{element.name}}
                                </div>
                                <div class="card-body">
                                    <div v-if="element.schema.type === 'Object'" v-for="(value, key, index) in model[element.name]" :key="index">
                                        <!-- <vue-bootstrap4-form-generator :model="model" :schema="schema">
                                        </vue-bootstrap4-form-generator> -->
                                        <vue-bootstrap4-form-generator  :model="value" :schema="element.schema" :parentElementName="element.name"/>
                                        <hr>
                                    </div>
                                    <div v-if="element.schema.type === 'input'">
                                        <!-- <label>{{element.schema.element.label}}</label> -->
                                        <!-- <button type="button" class="btn btn-sm btn-primary" @click="clearAll(element.name)">x</button> -->
                                        <div v-for="(value, key, index) in model[element.name]" :key="index">
                                            <input-element :element="element.schema.element" :parentElementName="element.name" :parentElementIndex="key" :model="value" @remove-key="removeKey" @update-value="updateValue"/>
                                            <hr>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-sm btn-primary" @click="addModel()">Add</button>
                                </div>
                            </div>
                        </template>
                        <!-- <template v-else>
                            <div>
                            something wrong
                            </div>
                        </template> -->
                    </div>
                </template>
                <template v-else-if="schema.type === 'Array'">
                    <div class="card">
                        <div class="card-header">
                            {{element.name}}
                        </div>
                        <div class="card-body">
                            <div v-for="(value, key, index) in model" :key="index">
                                <!-- <div class="card-header">
                                    {{schema.name}}
                                    <div class="float-right">
                                        <button type="button" class="btn btn-sm btn-warning" @click="removeModel(index)">Remove</button>
                                    </div>
                                </div> -->
                                <vue-bootstrap4-form-generator :model="value" :schema="schema.schema"/>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-sm btn-primary" @click="addModel()">Add</button>
                </template>
                <template v-else-if="schema.type === 'input'">
                    <input-element :element="schema.element" :model.sync="model" @remove-key="removeKey"/>
                </template>
                <template v-else>
                    <div>
                        fkj
                    </div>
                </template>
            <!-- </div> -->
        <!-- </div> -->
    </div>
</template>

<script>

import VueBootstrap4FormGenerator from './VueBootstrap4FormGenerator'
import InputElement from './Elements/InputElement'
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
        parentElementName: {
            type: String,
            default: "Root"
        },
    },
    data: function() {
        return {
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
            return _.has(this.model,name);
        },
        updateValue(payload) {
            this.model[payload.name][payload.index] = payload.value;
        },
        addModel() {
            let model = _.cloneDeep(this.model[0]);
            this.model.push(model);
        },
        removeModel(index) {
            this.model.splice(index,1);
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
