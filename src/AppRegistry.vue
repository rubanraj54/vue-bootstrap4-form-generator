<template>
    <div id="app">
        <div class="container">
            <div class="card">
                <div class="card-header">
                    Root
                </div>
                <div class="card-body">
                    <vue-bootstrap4-form-generator :model="model" :schema="schema">
                    </vue-bootstrap4-form-generator>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const axios = require('axios');
    import VueBootstrap4FormGenerator from './components/VueBootstrap4FormGenerator'

    export default {
        name: 'App',
        data: function() {
            return {
                model: {
                    "id": "05bf9f68-96ac-40fb-be1c-35ff375d5583",
                    "url": "/registry/05bf9f68-96ac-40fb-be1c-35ff375d5583",
                    "data": "/data/05bf9f68-96ac-40fb-be1c-35ff375d5583",
                    "resource": "12/0/49/4/power",
                    "meta": {
                        "name": "Philip's computer"
                    },
                    "connector": {
                        "mqtt": {
                            "url": "tcp://linksmart-dev.fit.fraunhofer.de:1883",
                            "topic": "LS/v2/ZGW/linksmart-philip/senml",
                            "qos": 1
                        }
                    },
                    "retention": "1w",
                    "aggregation": [{
                        "id": "4efaf6fb",
                        "interval": "1m",
                        "data": "/aggr/4efaf6fb/05bf9f68-96ac-40fb-be1c-35ff375d5583",
                        "aggregates": [
                            "mean"
                        ],
                        "retention": ""
                    },
                    {
                        "id": "4efaf6fb",
                        "interval": "1m",
                        "data": "/aggr/4efaf6fb/05bf9f68-96ac-40fb-be1c-35ff375d5583",
                        "aggregates": [
                            "mean"
                        ],
                        "retention": ""
                    }],
                    "type": "float",
                    "format": "application/senml+json"
                },
                schema: {
                    type: "Object",
                    elements: [
                        {
                            label: "ID",
                            name: "id",
                            element_type: "input",
                            type: "text",
                            placeholder: "Enter ID"
                        },
                        {
                            label: "URL",
                            name: "url",
                            element_type: "input",
                            type: "text",
                            placeholder: "Enter url"
                        },
                        {
                            label: "Data",
                            name: "data",
                            element_type: "input",
                            type: "text",
                            placeholder: "Enter data"
                        },
                        {
                            label: "Resource",
                            name: "resource",
                            element_type: "input",
                            type: "text",
                            placeholder: "Enter Resource"
                        },
                        {
                            type: "Object",
                            name: "meta",
                            elements: [
                                {
                                    label: "Meta name",
                                    name: "name",
                                    element_type: "input",
                                    type: "text",
                                    placeholder: "Enter meta name"
                                },
                            ]
                        },
                        {
                            type: "Object",
                            name: "connector",
                            elements: [
                                {
                                    type: "Object",
                                    name: "mqtt",
                                    elements: [
                                        {
                                            label: "URL",
                                            name: "url",
                                            element_type: "input",
                                            type: "text",
                                            placeholder: "Enter url"
                                        },
                                        {
                                            label: "Topic",
                                            name: "topic",
                                            element_type: "input",
                                            type: "text",
                                            placeholder: "Enter topic"
                                        },
                                        {
                                            label: "QOS",
                                            name: "qos",
                                            element_type: "input",
                                            type: "number",
                                            placeholder: "Enter qos"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            label: "Retention",
                            name: "retention",
                            element_type: "input",
                            type: "text",
                            placeholder: "Enter retention"
                        },
                        {
                            type: "Array",
                            name: "aggregation",
                            schema: {
                                type: "Object",
                                elements: [
                                    {
                                        label: "ID",
                                        name: "id",
                                        element_type: "input",
                                        type: "text",
                                        placeholder: "Enter id"
                                    },
                                    {
                                        label: "Interval",
                                        name: "interval",
                                        element_type: "input",
                                        type: "text",
                                        placeholder: "Enter interval"
                                    },
                                    {
                                        label: "Data",
                                        name: "data",
                                        element_type: "input",
                                        type: "text",
                                        placeholder: "Enter data"
                                    },
                                    {
                                        type: "Array",
                                        name: "aggregates",
                                        schema: {
                                            type: "input",
                                            element: {
                                                label: "Aggregates",
                                                element_type: "input",
                                                type: "text",
                                                placeholder: "Enter aggregates"
                                            }
                                        }

                                    },
                                    {
                                        label: "Retention",
                                        name: "retention",
                                        element_type: "input",
                                        type: "text",
                                        placeholder: "Enter retention"
                                    },
                                ]
                            }
                        }

                    ]
                },
            }
        },
        mounted() {
            // axios.get("http://localhost:8081/static/json/registry.json")
            // .then(function (response) {
            //     this.model = response.data.entries;

            // }.bind(this))
            // .catch(function (error) {
            // })
        },
        components: {
            VueBootstrap4FormGenerator
        }
    }
</script>

<style scoped>
.card {
    margin-top: 10px;
}
</style>
