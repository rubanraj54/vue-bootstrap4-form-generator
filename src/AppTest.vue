<template>
    <div id="app">
        <div class="container">
            <vue-bootstrap4-form-generator :model="model" :schema="schema">
            </vue-bootstrap4-form-generator>
        </div>
    </div>
</template>

<script>
    import VueBootstrap4FormGenerator from './components/VueBootstrap4FormGenerator'

    export default {
        name: 'App',
        data: function() {
            return {
                model: [{
                    "bn": "",
                    "vb": 23,
                    "vs": "dssdf"
                }],
                schema: {
                    // name: "users",
                    type: "Array",
                    schema: {
                        type: "Object",
                        elements: [
                            {
                                label: "Base name",
                                name: "bn",
                                element_type: "input",
                                type: "text",
                                placeholder: "Enter Base name"
                            },
                            {
                                label: "Value boolean",
                                name: "vb",
                                element_type: "input",
                                type: "number",
                                placeholder: "Enter Value boolean"
                            },
                            {
                                label: "Value string",
                                name: "vs",
                                element_type: "input",
                                type: "text",
                                placeholder: "Enter Value string"
                            }
                        ]
                    }
                },
            }
        },
        components: {
            VueBootstrap4FormGenerator
        }
    }
</script>

<style>

</style>
