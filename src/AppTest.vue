<template>
<div id="app">
    <div class="container">
        <vue-bootstrap4-form-generator :defaults="defaults" :model="model" :schema="schema">
        </vue-bootstrap4-form-generator>
    </div>
</div>
</template>

<script>
import VueBootstrap4FormGenerator from './components/VueBootstrap4FormGenerator'

export default {
    name: 'App',
    data: function () {
        return {
            model: [{
                "bn": "",
                "bt": 0,
                "bu": "",
                "bver": 0,
                "n": "",
                "t": 0,
                "u": "",
                "v": 0,
                "vs": "",
                "vb": false
            }],
            // model: [{
            //     "bn": "",
            //     "vb": 23,
            //     "vs": "dssdf"
            // }],
            // defaults: [
            //     {
            //         "bn": "default name",
            //         "vb": 0,
            //         "vs": "default string"
            //     }
            // ],
            defaults: [{
                "bn": "",
                "bt": 0,
                "bu": "",
                "bver": 0,
                "n": "",
                "t": 0,
                "u": "",
                "v": 0,
                "vs": "",
                "vb": false
            }],

            schema: {
                "type": "Array",
                "name": null,
                "canAdd": true,
                "canRemove": true,
                "schema": {
                    "type": "Object",
                    "name": null,
                    "canRemove": false,
                    "canDuplicate": false,
                    "canAddProperty": true,
                    "elements": [{
                        "label": "bn",
                        "name": "bn",
                        "element_type": "input",
                        "type": "text",
                        "placeholder": "Enter bn",
                        "readonly": true,
                    }, {
                        "label": "bt",
                        "name": "bt",
                        "element_type": "input",
                        "type": "number",
                        "placeholder": "Enter bt",
                        "canRemove": true
                    }, {
                        "label": "bu",
                        "name": "bu",
                        "element_type": "input",
                        "type": "text",
                        "placeholder": "Enter bu",
                        "canRemove": true
                    }, {
                        "label": "bver",
                        "name": "bver",
                        "element_type": "input",
                        "type": "number",
                        "placeholder": "Enter bver"
                    }, {
                        "label": "n",
                        "name": "n",
                        "element_type": "input",
                        "type": "text",
                        "placeholder": "Enter n"
                    }, {
                        "label": "t",
                        "name": "t",
                        "element_type": "input",
                        "type": "number",
                        "placeholder": "Enter t"
                    }, {
                        "label": "u",
                        "name": "u",
                        "element_type": "input",
                        "type": "text",
                        "placeholder": "Enter u"
                    }, {
                        "label": "v",
                        "name": "v",
                        "element_type": "input",
                        "type": "number",
                        "placeholder": "Enter v"
                    }, {
                        "label": "vs",
                        "name": "vs",
                        "element_type": "input",
                        "type": "text",
                        "placeholder": "Enter vs"
                    }]
                }
            },
            // schema: {
            //     // name: "users",
            //     type: "Array",
            //     schema: {
            //         type: "Object",
            //         elements: [{
            //                 label: "Base name",
            //                 name: "bn",
            //                 element_type: "input",
            //                 type: "text",
            //                 placeholder: "Enter Base name"
            //             },
            //             {
            //                 label: "Value boolean",
            //                 name: "vb",
            //                 element_type: "input",
            //                 type: "number",
            //                 placeholder: "Enter Value boolean"
            //             },
            //             {
            //                 label: "Value string",
            //                 name: "vs",
            //                 element_type: "input",
            //                 type: "text",
            //                 placeholder: "Enter Value string"
            //             }
            //         ]
            //     }
            // },
        }
    },
    components: {
        VueBootstrap4FormGenerator
    }
}
</script>

<style>

</style>
