<template>
    <div>
        <template v-if="schema.type === 'Object'">
            <div v-for="(element, key, index) in schema.elements" :key="index">
                <template v-if="element.element_type === 'input' && hasAttributeCheck(element.name)">
                    <input-element :element="element" :model="model" @remove-key="removeKey"/>
                </template>
                <template v-if="element.type === 'Object' && hasAttributeCheck(element.name)" >
                    <vue-bootstrap4-form-generator :model="model[element.name]" :schema="element" />
                </template>
                <template v-if="element.type === 'Array'">
                    <div v-if="element.schema.type === 'Object'" v-for="(value, key, index) in model[element.name]" :key="index">
                        <vue-bootstrap4-form-generator  :model="value" :schema="element.schema" />
                        <button type="button" class="btn btn-sm btn-primary" @click="addModel()">Add</button>
                    </div>
                    <div v-if="element.schema.type === 'input'">
                        <label>{{element.schema.element.label}}</label>
                        <button type="button" class="btn btn-sm btn-primary" @click="clearAll(element.name)">x</button>
                        <div v-for="(value, key, index) in model[element.name]" :key="index">
                            <input-element :element="element.schema.element" :parentElementName="element.name" :parentElementIndex="key" :model="value" @remove-key="removeKey" @update-value="updateValue"/>
                        </div>
                    </div>
                </template>
            </div>
        </template>
        <template v-else-if="schema.type === 'Array'">
            <div v-for="(value, key, index) in model" :key="index">
                <vue-bootstrap4-form-generator  :model="value" :schema="schema.schema" />
            </div>
            <button type="button" class="btn btn-sm btn-primary" @click="addModel()">Add</button>
        </template>
        <template v-else-if="schema.type === 'input'">
            <input-element :element="schema.element" :model.sync="model" @remove-key="removeKey"/>
        </template>
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
        }
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
        }
    },
    components: {
        VueBootstrap4FormGenerator,
        InputElement
    }
}
</script>
