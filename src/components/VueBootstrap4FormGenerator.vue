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
                <!-- <template v-if="element.type === 'Array'">
                    <div v-for="(value, key, index) in model" :key="index">
                        <vue-bootstrap4-form-generator  :model="value" :schema="elements" />
                    </div>
                </template> -->
            </div>
        </template>
        <template v-else-if="schema.type === 'Array'">
            <div v-for="(value, key, index) in model" :key="index">
                <vue-bootstrap4-form-generator  :model="value" :schema="schema.schema" />
            </div>
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
            type: Object | Array,
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
        updateModel(event,name) {
            console.log(event);
        },
        removeKey(key) {
            this.$delete(this.model, key)
            // delete this.model[key];
        },
        hasAttributeCheck(name) {
            return _.has(this.model,name);
        }
    },
    components: {
        VueBootstrap4FormGenerator,
        InputElement
    }
}
</script>
