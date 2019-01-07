<template>
    <div>
        <template v-if="schema.type === 'Object'">
            <div v-for="(element, key, index) in schema.elements" :key="index">
                <template v-if="element.element_type === 'input' && hasAttributeCheck(element.name)">
                    <input-element :element="element" :model="model" @remove-key="removeKey" />
                </template>

                <template v-else-if="element.type === 'Object' && hasAttributeCheck(element.name)">
                    <div class="card">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-md-6">
                                    {{element.name}}
                                </div>
                                <div class="btn-group col-md-6 justify-content-end" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-sm btn-warning" @click="removeKey(element.name)">Remove {{element.name}}</button>
                                <!-- <button type="button" class="btn btn-sm btn-warning" @click="$emit('remove-key',element.name)">Remove {{element.name}}</button> -->
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <vue-bootstrap4-form-generator :isRoot="is_root" :defaults="defaults[element.name]" :parentType="schema.type" :model="model[element.name]" :schema="element" :parentElementName="element.name" @update-value="updateValue" @remove-index="removeIndex" @remove-key="removeKey"/>
                        </div>
                    </div>
                </template>

                <template v-else-if="element.type === 'Array'">
                    <vue-bootstrap4-form-generator :isRoot="is_root" :defaults="defaults[element.name][0]" :parentType="schema.type" :model="model[element.name]" :schema="element" :parentElementName="element.name" @update-value="updateValue" @remove-index="removeIndex" @remove-key="removeKey" @add-model-to-array="addModelToArray"/>
                </template>
            </div>
            <a v-if="show_add_new_property" href="" @click.prevent="show_add_new_property=false">+ Add new property</a>
            <div v-if="!show_add_new_property">
                <hr>
                <div class="row">
                    <div class="col-md-2">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                        {{selected_type}}
                                    </button>
                            <div class="dropdown-menu" aria-labelledby="triggerId">
                                <button class="dropdown-item" :class="{'active':selected_type == 'string'}" href="" @click.prevent = "selected_type = 'string'">string</button>
                                <button class="dropdown-item" :class="{'active':selected_type == 'number'}" href="" @click.prevent = "selected_type = 'number'">number</button>
                                <button class="dropdown-item" :class="{'active':selected_type == 'boolean'}" href="" @click.prevent = "selected_type = 'boolean'">boolean</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <input type="text" class="form-control" name="key" v-model="newkey" placeholder="key">
                            <small v-if="key_error !== ''" class="form-text text-danger">{{key_error}}</small>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group" v-if="selected_type == 'string'">
                            <input type="text" class="form-control" name="value" v-model="newvalue" placeholder="value">
                        </div>
                        <div class="form-group" v-if="selected_type == 'number'">
                            <input type="number" class="form-control" name="value" v-model.number="newvalue" placeholder="value">
                        </div>
                        <div class="form-check" v-if="selected_type == 'boolean'">
                            <label></label>
                            <input type="checkbox" class="form-check-input" name="" id="" v-model="newvalue">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <button type="button" class="btn btn-primary btn-sm" @click="addNewProperty">Add new property</button>
                        <button type="button" class="btn btn-danger btn-sm" @click="show_add_new_property = true">Close</button>
                    </div>
                </div>
                <hr>
            </div>
        </template>

        <template v-else-if="schema.type === 'Array'">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-6">
                            {{parentElementName}}
                        </div>
                        <div class="btn-group col-md-6 justify-content-end" role="group" aria-label="Basic example">
                           <button type="button" class="btn btn-sm btn-primary" @click="addModel()">Add {{parentElementName}}</button>
                           <button type="button" class="btn btn-sm btn-warning" @click="emitRemoveKey">Remove {{parentElementName}}</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div v-for="(value, key, index) in model" :key="index">
                        <vue-bootstrap4-form-generator :isRoot="is_root" :defaults="defaults" :parentElementIndex="key" :model="value" :parentElementName="parentElementName" :schema="schema.schema" :parentType="schema.type" @update-value="updateValue" @remove-index="removeIndex" @remove-key="removeKey" @add-model-to-array="addModelToArray"/>
                        <button v-if="schema.schema.type !== 'input'" type="button" class="btn btn-sm btn-warning" @click="removeModel(key)">Remove {{parentElementName}}</button>
                        <hr>
                    </div>
                </div>
            </div>
        </template>

        <template v-else-if="schema.type === 'input'">
            <input-element :element="schema.element" :model.sync="model" :parentElementName="parentElementName" :parentElementIndex="parentElementIndex" @remove-key="removeKey" @update-value="updateValue" @remove-index="removeIndex"/>
        </template>

        <template v-else>
            <div>
                fkj
            </div>
        </template>
    </div>
</template>

<script>
import VueBootstrap4FormGenerator from './VueBootstrap4FormGenerator.vue'
import InputElement from './Elements/InputElement.vue'
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
        defaults: {
            type: Object | Array | String | Number | Boolean,
            default: function () {
                return {}
            }
        },
        parentElementName: {
            type: String,
            default: "Root"
        },
        parentType: {
            type: String,
            required: false
        },
        parentElementIndex: {
            type: String | Number,
            required: false
        },
        isRoot: {
            type: Boolean,
            default: true
        },
    },
    data: function () {
        return {
            is_root: false,
            show_add_new_property: true,
            selected_type: "string",
            newkey: "",
            newvalue:"",
            key_error:"",
        }
    },
    mounted() {

    },
    methods: {
        removeKey(key) {
            if (this.isRoot == true && this.schema.type == "Array") {
                this.model = [];
            } else {
                this.$delete(this.model, key)
            }
        },
        emitRemoveKey() {
            if (this.isRoot == true && this.schema.type == "Array") {
                this.model.splice(0,this.model.length);
            } else {
                this.$emit('remove-key',this.parentElementName)
            }
        },
        clearAll(key) {
            this.model[key] = [];
        },
        hasAttributeCheck(name) {
            return _.has(this.model, name);
        },
        updateValue(payload) {

            if ((this.parentType == "Array" && this.schema.type == "input")) {
                this.$emit('update-value', payload);
            } else if (this.parentType == "Object" && this.schema.type == "Array") {
                this.$emit('update-value', payload);
            } else {
                this.model[payload.name][payload.index] = payload.value;

            }
        },
        removeIndex(payload) {

            if ((this.parentType == "Array" && this.schema.type == "input")) {
                this.$emit('remove-index', payload);
            } else if (this.parentType == "Object" && this.schema.type == "Array") {
                this.$emit('remove-index', payload);
            } else {
                this.model[payload.name].splice([payload.index],1);
            }
        },
        addModel() {
            let model = null;

            if (this.isRoot == true && this.schema.type == "Array") {
                model = _.cloneDeep(this.defaults[0]);
            } else {
                model = _.cloneDeep(this.defaults);
            }

            if (!_.isEmpty(this.model) || Array.isArray(this.model)) {
                this.model.push(model);
            } else {
                this.$emit("add-model-to-array",{"key":this.parentElementName,"defaults":_.cloneDeep(this.defaults)});
            }
        },
        addModelToArray(payload) {
            let key = payload.key;
            let value = payload.defaults;
            if(!_.has(this.model,key)) {
                this.$set(this.model, key, [value]);
            } else {
                this.model[key].push(value);
                console.log("addModelToArray: key already present in the model")
            }
        },
        removeModel(index) {
            this.model.splice(index, 1);
        },
        addNewProperty() {
            let key = _.clone(this.newkey);
            let value = _.clone(this.newvalue);
            let type = "text";

            if (key === "") {
                this.key_error = "key is mandatory";
                return;
            }

            if (_.has(this.model,key)) {
                this.key_error = "Duplicate key";
                return;
            }

            if (this.selected_type === "number") {
                value = Number(value);
                type = "number";
            }

            if (this.selected_type === "boolean") {
                type = "checkbox";
            }

            let element = {
                element_type: "input",
                label: key,
                name: key,
                placeholder: "Enter " + key,
                type: type
            };

            this.$set(this.model, key, value);
            this.schema.elements.push(element);
        }
    },
    watch: {
        selected_type(newVal,oldVal) {
            if (newVal == "boolean") {
                this.newvalue = false;
            } else if (newVal == "number") {
                this.newvalue = 0;
            } else {
                this.newvalue = "";
            }
        },
        newkey(newVal,oldVal) {
            this.key_error = "";
        }
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
