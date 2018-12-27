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
                model: {
                    "id": 1,
                    "name": {
                        "first_name": "Vladimir",
                        "last_name": "Nitzsche"
                    },
                    "address": {
                        "country": "Mayotte"
                    },
                    "email": "franecki.anastasia@gmail.com",
                },
                schema: {
                    type: "Object",
                    elements: [
                        {
                            label: "ID",
                            name: "id",
                            element_type: "input",
                            type: "number",
                            placeholder: "Enter Id"
                        },
                        {
                            label: "Email",
                            name: "email",
                            element_type: "input",
                            type: "email",
                            placeholder: "Enter Email"
                        },
                        {
                            label: "Name",
                            name: "name",
                            type: "Object",
                            elements: [
                                {
                                    label: "First Name",
                                    name: "first_name",
                                    element_type: "input",
                                    input_type: "text"
                                },
                                {
                                    label: "Last Name",
                                    name: "last_name",
                                    element_type: "input",
                                    input_type: "text"
                                },
                            ]
                        }
                    ]
                }
            }
        },
        components: {
            VueBootstrap4FormGenerator
        }
    }
</script>

<style>

</style>
