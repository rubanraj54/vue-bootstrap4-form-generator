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
                    "root_id": "111",

                    "users": [{
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
                        {
                            "id": 2,
                            "name": {
                                "first_name": "Rubanraj",
                                "last_name": "Ravichandran"
                            },
                            "address": {
                                "country": "Germany"
                            },
                            "email": "rubanraj54@gmail.com",
                        },
                    ],
                    "category": ['age', 'blog']
                },
                schema: {
                    type: "Object",
                    elements: [{
                            label: "Root id",
                            name: "root_id",
                            element_type: "input",
                            type: "text",
                            placeholder: "Enter root id"
                        },
                        {
                            name: "users",
                            type: "Array",
                            schema: {
                                type: "Object",
                                elements: [{
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
                                        elements: [{
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
                        },
                        {
                            name: "category",
                            type: "Array",
                            schema: {
                                type: "input",
                                element: {
                                    label: "Category",
                                    element_type: "input",
                                    type: "text",
                                    placeholder: "Enter category"
                                }
                            }
                        }

                    ],

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
