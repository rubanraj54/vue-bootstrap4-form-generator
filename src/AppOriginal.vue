<template>
<div id="app">
    <div class="container">
        <div class="card">
            <div class="card-header">
                Root
            </div>
            <div class="card-body">
                <vue-bootstrap4-form-generator :model="model" :schema="schema" :defaults="defaults">
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
    data: function () {
        return {
            model: {
                "id": "",
                "url": "",
                "data": "",
                "resource": "",
                "meta": null,
                "connector": {
                    "mqtt": {
                        "url": "",
                        "topic": "",
                        "qos": 0
                    }
                },
                "retention": "",
                "aggregation": null,
                // "aggregation": [{
                //     "id": "",
                //     "interval": "",
                //     "data": "",
                //     "aggregates": [""],
                //     "retention": ""
                // }],
                "type": "",
                "format": ""
            },
            // defaults: {
            //     "id": "default id",
            //     "url": "default url",
            //     "data": "default data",
            //     "resource": "default resource",
            //     "meta": {
            //         "name": "default Philip's computer"
            //     },
            //     "connector": {
            //         "mqtt": {
            //             "url": "default mqtt url",
            //             "topic": "default mqtt topic",
            //             "qos": 3
            //         }
            //     },
            //     "retention": "default retention 1w",
            //     "aggregation": [{
            //         "id": "default id",
            //         "interval": "default interval",
            //         "data": "default data",
            //         "aggregates": [
            //             "default mean"
            //         ],
            //         "retention": "default retention"
            //     }],
            //     "type": "default  float",
            //     "format": "default application/senml+json"
            // },

            defaults: {
                "id": "",
                "url": "",
                "data": "",
                "resource": "",
                "meta": {},
                "connector": {
                    "mqtt": {
                        "url": "",
                        "topic": "",
                        "qos": 0
                    }
                },
                "retention": "",
                "aggregation": [{
                    "id": "",
                    "interval": "",
                    "data": "",
                    "aggregates": [""],
                    "retention": ""
                }],
                "type": "",
                "format": ""
            },

            schema: {
                "type": "Object",
                "name": null,
                "removeObjectButtonText" : function(parentElementName) {
                    return '<i class="fas fa-times-circle"></i>';
                },
                "elements": [{
                    "label": "id",
                    "name": "id",
                    "element_type": "input",
                    "type": "text",
                    "placeholder": "Enter id"
                }, {
                    "label": "url",
                    "name": "url",
                    "element_type": "input",
                    "type": "text",
                    "placeholder": "Enter url"
                }, {
                    "label": "data",
                    "name": "data",
                    "element_type": "input",
                    "type": "text",
                    "placeholder": "Enter data"
                }, {
                    "label": "resource",
                    "name": "resource",
                    "element_type": "input",
                    "type": "text",
                    "placeholder": "Enter resource"
                }, {
                    "type": "Object",
                    "canDuplicate":true,
                    "canRemove":true,
                    "canAddProperty":true,
                    "name": "meta",
                    "elements": []
                }, {
                    "type": "Object",
                    "name": "connector",
                    "elements": [{
                        "type": "Object",
                        "name": "mqtt",
                        "elements": [{
                            "label": "url",
                            "name": "url",
                            "element_type": "input",
                            "type": "text",
                            "placeholder": "Enter url"
                        }, {
                            "label": "topic",
                            "name": "topic",
                            "element_type": "input",
                            "type": "text",
                            "placeholder": "Enter topic"
                        }, {
                            "label": "qos",
                            "name": "qos",
                            "element_type": "input",
                            "type": "number",
                            "placeholder": "Enter qos"
                        }]
                    }]
                }, {
                    "label": "retention",
                    "name": "retention",
                    "element_type": "input",
                    "type": "text",
                    "placeholder": "Enter retention"
                }, {
                    "type": "Array",
                    "name": "aggregation",
                    "canAdd" : true,
                    "addButtonText" : function(parentElementName) {
                        return '<i class="fas fa-plus-circle"></i>';
                    },
                    "removeButtonText" : function(parentElementName) {
                        return '<i class="fas fa-times-circle"></i>';
                    },
                    "removeObjectButtonText" : function(parentElementName) {
                        return '<i class="fas fa-minus-circle"></i>';
                    },
                    "duplicateButtonText" : function(parentElementName) {
                        return '<i class="fas fa-clone"></i>';
                    },
                    "canRemove" : true,
                    "schema": {
                        "type": "Object",
                        "canDuplicate":true,
                        "canRemove":true,
                        "canAddProperty":true,                    
                        "name": null,
                        "elements": [{
                            "label": "id",
                            "name": "id",
                            "element_type": "input",
                            "type": "text",
                            "placeholder": "Enter id"
                        }, {
                            "label": "interval",
                            "name": "interval",
                            "element_type": "input",
                            "type": "text",
                            "placeholder": "Enter interval"
                        }, {
                            "label": "data",
                            "name": "data",
                            "element_type": "input",
                            "type": "text",
                            "placeholder": "Enter data"
                        }, {
                            "type": "Array",
                            "name": "aggregates",
                            "canAdd" : true,
                            "canRemove" : true,
                            "addButtonText" : function(parentElementName) {
                                return '<i class="fas fa-plus-circle"></i>';
                            },
                            "removeButtonText" : function(parentElementName) {
                                return '<i class="fas fa-times-circle"></i>';
                            },                                
                            "schema": {
                                "type": "input",
                                "element": {
                                    "label": null,
                                    "name": null,
                                    "element_type": "input",
                                    "type": "text",
                                    "placeholder": "Enter null"
                                }
                            }
                        }, {
                            "label": "retention",
                            "name": "retention",
                            "element_type": "input",
                            "type": "text",
                            "placeholder": "Enter retention"
                        }]
                    }
                }, {
                    "label": "type",
                    "name": "type",
                    "element_type": "input",
                    "type": "text",
                    "placeholder": "Enter type"
                }, {
                    "label": "format",
                    "name": "format",
                    "element_type": "input",
                    "type": "text",
                    "placeholder": "Enter format"
                }]
            }
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
