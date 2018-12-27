<template>
    <div>
        <template v-if="schema.type === 'Object'">
            <!-- <span>{{schema.name}}</span> -->
            <div v-for="(element, key, index) in schema.elements" :key="index">
                <!-- <span>{{element.label}}</span> -->
                <template v-if="element.element_type === 'input'">
                      <div class="form-group">
                        <label>{{element.label}}</label>
                        <input :type="element.type" class="form-control" v-model='model[element.name]' @keyup.stop="updateModel($event,element.name)" :placeholder="element.placeholder">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                    </div>
                </template>
                <template v-if="element.type === 'Object'">
                    <vue-bootstrap4-form-generator :model="model[element.name]" :schema="element">
                    </vue-bootstrap4-form-generator>
                </template>
            </div>
        </template>
    </div>
</template>

<script>

import VueBootstrap4FormGenerator from './VueBootstrap4FormGenerator'

export default {
    name: "VueBootstrap4FormGenerator",
    props: {
        model: {
            type: Object,
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
        }
    },
    components: {
        VueBootstrap4FormGenerator
    }
}
</script>
