!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).VueBootstrap4FormGenerator={})}(this,function(e){"use strict";var t=require("lodash/has"),n=require("lodash/debounce"),a={name:"InputElement",props:{element:{type:Object,required:!0},model:{type:Object|Array|String|Number|Boolean,required:!1},parentElementName:{type:String,required:!1},parentElementIndex:{type:String|Number,required:!1}},methods:{updateValue:n(function(e){this.$emit("update-value",{name:this.parentElementName,index:this.parentElementIndex,value:e.target.value})},60),removeIndex:function(){this.$emit("remove-index",{name:this.parentElementName,index:this.parentElementIndex})}},computed:{readOnly:function(){return t(this.element,"readonly")&&this.element.readonly},canRemove:function(){return t(this.element,"canRemove")&&this.element.canRemove}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"object"==typeof e.model?n("div",{staticClass:"form-group"},[n("label",[e._v(e._s(e.element.label))]),e._v(" "),n("div",{staticClass:"input-group"},["number"==e.element.type?n("input",{directives:[{name:"model",rawName:"v-model.number.trim",value:e.model[e.element.name],expression:"model[element.name]",modifiers:{number:!0,trim:!0}}],staticClass:"form-control",attrs:{type:e.element.type,placeholder:e.element.placeholder,readonly:e.readOnly},domProps:{value:e.model[e.element.name]},on:{input:function(t){t.target.composing||e.$set(e.model,e.element.name,e._n(t.target.value.trim()))},blur:function(t){e.$forceUpdate()}}}):n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.model[e.element.name],expression:"model[element.name]",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:e.element.type,placeholder:e.element.placeholder,readonly:e.readOnly},domProps:{value:e.model[e.element.name]},on:{input:function(t){t.target.composing||e.$set(e.model,e.element.name,t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),e.canRemove?n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(t){e.$emit("remove-key",e.element.name)}}},[n("i",{staticClass:"fas fa-times-circle"})])]):e._e()])]):n("div",{staticClass:"form-group"},[n("div",{staticClass:"input-group"},[n("input",{staticClass:"form-control",attrs:{type:e.element.type,placeholder:e.element.placeholder,readonly:e.readOnly},domProps:{value:e.model},on:{keyup:function(t){t.stopPropagation(),e.updateValue(t)}}}),e._v(" "),e.canRemove?n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:e.removeIndex}},[n("i",{staticClass:"fas fa-times-circle"})])]):e._e()])])};r._withStripped=!0;var o,s,l,i,m,d=(o={render:r,staticRenderFns:[]},l=void 0,i=!1,(m=("function"==typeof(s=a)?s.options:s)||{}).__file="/home/ravichandran/repos/vue-bootstrap4-form-generator/src/components/Elements/InputElement.vue",m.render||(m.render=o.render,m.staticRenderFns=o.staticRenderFns,m._compiled=!0,i&&(m.functional=!0)),m._scopeId=l,m),c=require("lodash"),p=(require("lodash/has"),{name:"VueBootstrap4FormGenerator",props:{model:{type:Object|Array|String|Number|Boolean,default:function(){return{}}},schema:{type:Object,default:function(){return{}}},defaults:{type:Object|Array|String|Number|Boolean,default:function(){return{}}},parentElementName:{type:String,default:"Root"},parentType:{type:String,required:!1},parentElementIndex:{type:String|Number,required:!1},isRoot:{type:Boolean,default:!0},duplicateButtonText:{type:String,default:""},removeObjectButtonText:{type:String,default:""}},data:function(){return{is_root:!1,showAddNewProperty:!0,selected_type:"string",newkey:"",newvalue:"",keyError:""}},mounted:function(){},methods:{removeKey:function(e){if(1==this.isRoot&&"Array"==this.schema.type)this.model=[];else{this.$delete(this.model,e);var t=this.schema.elements.findIndex(function(t){return t.name===e});this.schema.elements.splice(t,1)}},emitDuplicateModel:function(e,t){if(1==this.isRoot&&"Array"==this.schema.type){var n=e+1,a=c.cloneDeep(this.model[e]);this.model.splice(n,0,a)}else this.$emit("duplicate-model",{key:e,parentElementName:t})},handleDuplicateModel:function(e){var t=e.key+1,n=c.cloneDeep(this.model[e.key]);this.model.splice(t,0,n)},emitRemoveKey:function(){1==this.isRoot&&"Array"==this.schema.type?this.model.splice(0,this.model.length):this.$emit("remove-key",this.parentElementName)},clearAll:function(e){this.model[e]=[]},hasAttributeCheck:function(e){return c.has(this.model,e)},updateValue:function(e){"Array"==this.parentType&&"input"==this.schema.type?this.$emit("update-value",e):"Object"==this.parentType&&"Array"==this.schema.type?this.$emit("update-value",e):this.model[e.name][e.index]=e.value},removeIndex:function(e){"Array"==this.parentType&&"input"==this.schema.type?this.$emit("remove-index",e):"Object"==this.parentType&&"Array"==this.schema.type?this.$emit("remove-index",e):this.model[e.name].splice([e.index],1)},addModel:function(){var e=null;e=1==this.isRoot&&"Array"==this.schema.type?c.cloneDeep(this.defaults[0]):c.cloneDeep(this.defaults),!c.isEmpty(this.model)||Array.isArray(this.model)?(this.model||(this.model=[]),this.model.push(e)):this.$emit("add-model-to-array",{key:this.parentElementName,defaults:c.cloneDeep(this.defaults)})},addModelToArray:function(e){var t=e.key,n=e.defaults;c.has(this.model,t)?(this.model[t]||(this.model[t]=[]),this.model[t].push(n)):this.$set(this.model,t,[n])},removeModel:function(e){this.model.splice(e,1)},addNewProperty:function(){var e=c.clone(this.newkey),t="",n="text";if(""!==e)if(c.has(this.model,e))this.keyError="Duplicate key";else{"number"===this.selected_type&&(t=0,n="number"),"boolean"===this.selected_type&&(t=!1,n="checkbox");var a={element_type:"input",label:e,name:e,placeholder:"Enter "+e,type:n};this.$set(this.model,e,t),this.schema.elements.push(a),this.resetAddNewProperty()}else this.keyError="key is mandatory"},resetAddNewProperty:function(){this.showAddNewProperty=!0,this.newkey="",this.keyError=""}},watch:{selected_type:function(e,t){this.newvalue="boolean"!=e&&("number"==e?0:"")},newkey:function(e,t){this.keyError=""}},components:{VueBootstrap4FormGenerator:y,InputElement:d},computed:{type:function(){return this.schema.type},canAdd:function(){return"Array"==this.type&&this.schema.canAdd},canRemove:function(){return"Array"==this.type&&this.schema.canRemove},canRemoveObject:function(){return"Array"==this.parentType&&"Object"==this.schema.type&&this.schema.canRemove},canDuplicateObject:function(){return"Array"==this.parentType&&"Object"==this.schema.type&&this.schema.canDuplicate},canAddProperty:function(){return"Object"==this.type&&this.schema.canAddProperty}}}),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["Object"===e.schema.type?[e._l(e.schema.elements,function(t,a,r){return n("div",{key:r},["input"===t.element_type&&e.hasAttributeCheck(t.name)?[n("input-element",{attrs:{element:t,model:e.model},on:{"remove-key":e.removeKey}})]:"Object"===t.type&&e.hasAttributeCheck(t.name)?[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[e._v("\n                                "+e._s(t.name)+"\n                            ")]),e._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"btn-group float-right",attrs:{role:"group","aria-label":"Object of object"}},[t.canRemove?n("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},domProps:{innerHTML:e._s(e.schema.removeObjectButtonText?e.schema.removeObjectButtonText(t.name):"Remove "+t.name)},on:{click:function(n){e.removeKey(t.name)}}},[e._v("Remove "+e._s(t.name))]):e._e()])])])]),e._v(" "),n("div",{staticClass:"card-body"},[n("vue-bootstrap4-form-generator",{attrs:{isRoot:e.is_root,defaults:e.defaults[t.name],parentType:e.schema.type,model:e.model[t.name],schema:t,parentElementName:t.name},on:{"update-value":e.updateValue,"remove-index":e.removeIndex,"remove-key":e.removeKey}})],1)])]:"Array"===t.type?[n("vue-bootstrap4-form-generator",{attrs:{isRoot:e.is_root,defaults:e.defaults[t.name][0],parentType:e.schema.type,model:e.model[t.name],schema:t,parentElementName:t.name},on:{"update-value":e.updateValue,"remove-index":e.removeIndex,"remove-key":e.removeKey,"add-model-to-array":e.addModelToArray,"duplicate-model":e.handleDuplicateModel}})]:e._e()],2)}),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8"},[e.showAddNewProperty&&e.canAddProperty?n("a",{attrs:{href:""},on:{click:function(t){t.preventDefault(),e.showAddNewProperty=!1}}},[e._v("+ Add new property")]):e._e(),e._v(" "),!e.showAddNewProperty&&e.canAddProperty?n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"input-group col-md-8"},[n("div",{staticClass:"input-group-prepend"},[n("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("\n                                            "+e._s(e.selected_type)+"\n                                        ")]),e._v(" "),n("div",{staticClass:"dropdown-menu"},[n("button",{staticClass:"dropdown-item",class:{active:"string"==e.selected_type},attrs:{href:""},on:{click:function(t){t.preventDefault(),e.selected_type="string"}}},[e._v("string")]),e._v(" "),n("button",{staticClass:"dropdown-item",class:{active:"number"==e.selected_type},attrs:{href:""},on:{click:function(t){t.preventDefault(),e.selected_type="number"}}},[e._v("number")]),e._v(" "),n("button",{staticClass:"dropdown-item",class:{active:"boolean"==e.selected_type},attrs:{href:""},on:{click:function(t){t.preventDefault(),e.selected_type="boolean"}}},[e._v("boolean")])])]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newkey,expression:"newkey"}],staticClass:"form-control",class:{"is-invalid":""!==e.keyError},attrs:{type:"text",name:"key",placeholder:"key"},domProps:{value:e.newkey},on:{input:function(t){t.target.composing||(e.newkey=t.target.value)}}}),e._v(" "),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:e.addNewProperty}},[n("i",{staticClass:"fas fa-save"})]),e._v(" "),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:e.resetAddNewProperty}},[n("i",{staticClass:"fas fa-times-circle"})])]),e._v(" "),n("br")]),e._v(" "),""!==e.keyError?n("small",{staticClass:"form-text text-danger"},[e._v("\n                            "+e._s(e.keyError)+"\n                        ")]):e._e()])]):e._e()]),e._v(" "),n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"float-right"},[e.canDuplicateObject?n("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},domProps:{innerHTML:e._s(e.duplicateButtonText)},on:{click:function(t){e.emitDuplicateModel(e.parentElementIndex,e.parentElementName)}}}):e._e(),e._v(" "),e.canRemoveObject?n("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},domProps:{innerHTML:e._s(e.removeObjectButtonText)},on:{click:function(t){e.removeModel(e.key)}}}):e._e()])])])]:"Array"===e.schema.type?[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[e._v("\n                        "+e._s(e.parentElementName)+"\n                    ")]),e._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"btn-group float-right",attrs:{role:"group","aria-label":"Basic example"}},[e.canRemove?n("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},domProps:{innerHTML:e._s(e.schema.removeButtonText?e.schema.removeButtonText(e.parentElementName):"Remove "+e.parentElementName)},on:{click:e.emitRemoveKey}}):e._e()])])])]),e._v(" "),n("div",{staticClass:"card-body"},[e._l(e.model,function(t,a,r){return n("div",{key:r,style:["Object"==e.schema.schema.type?{backgroundColor:"#f1f1f1",padding:"10px",marginTop:"10px"}:{}]},[n("vue-bootstrap4-form-generator",{attrs:{isRoot:e.is_root,defaults:e.defaults,parentElementIndex:a,model:t,parentElementName:e.parentElementName,schema:e.schema.schema,parentType:e.schema.type,"duplicate-button-text":e.schema.duplicateButtonText?e.schema.duplicateButtonText(e.parentElementName):"Duplicate "+e.parentElementName,"remove-object-button-text":e.schema.removeObjectButtonText?e.schema.removeObjectButtonText(e.parentElementName):"Remove "+e.parentElementName},on:{"update-value":e.updateValue,"remove-index":e.removeIndex,"remove-key":e.removeKey,"add-model-to-array":e.addModelToArray,"duplicate-model":e.handleDuplicateModel}})],1)}),e._v(" "),n("div",{staticClass:"row float-right",class:{"mt-2":"Array"==e.type&&e.schema.schema.elements}},[n("div",{staticClass:"col-md-6"},[e.canAdd?n("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},domProps:{innerHTML:e._s(e.schema.addButtonText?e.schema.addButtonText(e.parentElementName):"Add "+e.parentElementName)},on:{click:function(t){e.addModel()}}}):e._e()])])],2)])]:"input"===e.schema.type?[n("input-element",{attrs:{element:e.schema.element,model:e.model,parentElementName:e.parentElementName,parentElementIndex:e.parentElementIndex},on:{"update:model":function(t){e.model=t},"remove-key":e.removeKey,"update-value":e.updateValue,"remove-index":e.removeIndex}})]:[n("div",[e._v("\n            Invalid data given\n        ")])]],2)};u._withStripped=!0;var y=function(e,t,n,a,r,o,s,l){var i,m=("function"==typeof n?n.options:n)||{};if(m.__file="/home/ravichandran/repos/vue-bootstrap4-form-generator/src/components/VueBootstrap4FormGenerator.vue",m.render||(m.render=e.render,m.staticRenderFns=e.staticRenderFns,m._compiled=!0,r&&(m.functional=!0)),m._scopeId=a,t&&(i=function(e){t.call(this,s(e))}),void 0!==i)if(m.functional){var d=m.render;m.render=function(e,t){return i.call(t),d(e,t)}}else{var c=m.beforeCreate;m.beforeCreate=c?[].concat(c,i):[i]}return m}({render:u,staticRenderFns:[]},function(e){e&&e("data-v-77f7b216_0",{source:"\n.card[data-v-77f7b216] {\n    margin-top: 10px;\n}\n",map:{version:3,sources:["/home/ravichandran/repos/vue-bootstrap4-form-generator/src/components/VueBootstrap4FormGenerator.vue"],names:[],mappings:";AAoXA;IACA,iBAAA;CACA",file:"VueBootstrap4FormGenerator.vue",sourcesContent:['<template>\n    <div>\n        <template v-if="schema.type === \'Object\'">\n            <div v-for="(element, key, index) in schema.elements" :key="index">\n                <template v-if="element.element_type === \'input\' && hasAttributeCheck(element.name)">\n                    <input-element :element="element" :model="model" @remove-key="removeKey" />\n                </template>\n\n                <template v-else-if="element.type === \'Object\' && hasAttributeCheck(element.name)">\n                    <div class="card">\n                        <div class="card-header">\n                            <div class="row">\n                                <div class="col-md-6">\n                                    {{element.name}}\n                                </div>\n                                <div class="col-md-6">\n                                    <div class="btn-group float-right" role="group" aria-label="Object of object">\n                                        <button v-if="element.canRemove" type="button" class="btn btn-sm btn-danger" @click="removeKey(element.name)" v-html="(schema.removeObjectButtonText) ? schema.removeObjectButtonText(element.name) : (\'Remove \' + element.name)">Remove {{element.name}}</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="card-body">\n                            <vue-bootstrap4-form-generator :isRoot="is_root" :defaults="defaults[element.name]" :parentType="schema.type" :model="model[element.name]" :schema="element" :parentElementName="element.name" @update-value="updateValue" @remove-index="removeIndex" @remove-key="removeKey"/>\n                        </div>\n                    </div>\n                </template>\n\n                <template v-else-if="element.type === \'Array\'">\n                    <vue-bootstrap4-form-generator :isRoot="is_root" :defaults="defaults[element.name][0]" :parentType="schema.type" :model="model[element.name]" :schema="element" :parentElementName="element.name" @update-value="updateValue" @remove-index="removeIndex" @remove-key="removeKey" @add-model-to-array="addModelToArray" @duplicate-model="handleDuplicateModel"/>\n                </template>\n            </div>\n            <div class="row">\n                <div class="col-md-8">\n                    <a v-if="showAddNewProperty && canAddProperty" href="" @click.prevent="showAddNewProperty=false">+ Add new property</a>\n                    <div v-if="!showAddNewProperty && canAddProperty">\n                        <div class="row">\n                            <div class="input-group col-md-8">\n                                <div class="input-group-prepend">\n                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"\n                                            aria-expanded="false">\n                                                {{selected_type}}\n                                            </button>\n                                    <div class="dropdown-menu">\n                                        <button class="dropdown-item" :class="{\'active\':selected_type == \'string\'}" href="" @click.prevent = "selected_type = \'string\'">string</button>\n                                        <button class="dropdown-item" :class="{\'active\':selected_type == \'number\'}" href="" @click.prevent = "selected_type = \'number\'">number</button>\n                                        <button class="dropdown-item" :class="{\'active\':selected_type == \'boolean\'}" href="" @click.prevent = "selected_type = \'boolean\'">boolean</button>\n                                    </div>\n                                </div>\n                                <input type="text" class="form-control" :class="{\'is-invalid\' : (keyError !== \'\')}" name="key" v-model="newkey" placeholder="key">\n                                <div class="input-group-append">\n                                    <button class="btn btn-success" type="button" @click="addNewProperty">\n                                        <i class="fas fa-save"></i>\n                                    </button>\n                                    <button class="btn btn-danger" type="button" @click="resetAddNewProperty">\n                                        <i class="fas fa-times-circle"></i>\n                                    </button>\n                                </div>\n                                <br/>\n                            </div>\n                            <small v-if="keyError !== \'\'" class="form-text text-danger">\n                                {{keyError}}\n                            </small>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-md-4">\n                    <div class="float-right">\n                        <button v-if="canDuplicateObject" type="button" class="btn btn-sm btn-primary" @click="emitDuplicateModel(parentElementIndex,parentElementName)" v-html="duplicateButtonText"></button>\n                        <button v-if="canRemoveObject" type="button" class="btn btn-sm btn-danger" @click="removeModel(key)" v-html="removeObjectButtonText"></button>\n                    </div>\n                </div>\n            </div>\n        </template>\n\n        <template v-else-if="schema.type === \'Array\'">\n            <div class="card">\n                <div class="card-header">\n                    <div class="row">\n                        <div class="col-md-6">\n                            {{parentElementName}}\n                        </div>\n                        <div class="col-md-6">\n                            <div class="btn-group float-right" role="group" aria-label="Basic example">\n                            <button v-if="canRemove" type="button" class="btn btn-sm btn-danger" @click="emitRemoveKey" v-html="(schema.removeButtonText) ? schema.removeButtonText(parentElementName) : (\'Remove \' + parentElementName)"></button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="card-body">\n                    <div v-for="(value, key, index) in model" :key="index" :style="[schema.schema.type == \'Object\' ? {backgroundColor:\'#f1f1f1\', padding:\'10px\', marginTop:\'10px\'} : {}]">\n                        <vue-bootstrap4-form-generator :isRoot="is_root" \n                                                        :defaults="defaults" \n                                                        :parentElementIndex="key" \n                                                        :model="value" \n                                                        :parentElementName="parentElementName" \n                                                        :schema="schema.schema" \n                                                        :parentType="schema.type" \n                                                        :duplicate-button-text="(schema.duplicateButtonText) ? schema.duplicateButtonText(parentElementName) : (\'Duplicate \' + parentElementName)"\n                                                        :remove-object-button-text="(schema.removeObjectButtonText) ? schema.removeObjectButtonText(parentElementName) : (\'Remove \' + parentElementName)"\n                                                        @update-value="updateValue" \n                                                        @remove-index="removeIndex" \n                                                        @remove-key="removeKey" \n                                                        @add-model-to-array="addModelToArray" \n                                                        @duplicate-model="handleDuplicateModel"/>\n                    </div>\n                    \n                    <div class="row float-right" :class="{\'mt-2\': (type == \'Array\' && schema.schema.elements) }">\n                        <div class="col-md-6">\n                            <button v-if="canAdd" type="button" class="btn btn-sm btn-primary" @click="addModel()" v-html="(schema.addButtonText) ? schema.addButtonText(parentElementName) : (\'Add \' + parentElementName)">\n                            </button>                                                        \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </template>\n\n        <template v-else-if="schema.type === \'input\'">\n            <input-element :element="schema.element" :model.sync="model" :parentElementName="parentElementName" :parentElementIndex="parentElementIndex" @remove-key="removeKey" @update-value="updateValue" @remove-index="removeIndex"/>\n        </template>\n\n        <template v-else>\n            <div>\n                Invalid data given\n            </div>\n        </template>\n    </div>\n</template>\n\n<script>\nimport VueBootstrap4FormGenerator from \'./VueBootstrap4FormGenerator.vue\'\nimport InputElement from \'./Elements/InputElement.vue\'\nvar _ = require(\'lodash\');\nvar has = require(\'lodash/has\');\n\nexport default {\n    name: "VueBootstrap4FormGenerator",\n    props: {\n        model: {\n            type: Object | Array | String | Number | Boolean,\n            default: function () {\n                return {}\n            }\n        },\n        schema: {\n            type: Object,\n            default: function () {\n                return {}\n            }\n        },\n        defaults: {\n            type: Object | Array | String | Number | Boolean,\n            default: function () {\n                return {}\n            }\n        },\n        parentElementName: {\n            type: String,\n            default: "Root"\n        },\n        parentType: {\n            type: String,\n            required: false\n        },\n        parentElementIndex: {\n            type: String | Number,\n            required: false\n        },\n        isRoot: {\n            type: Boolean,\n            default: true\n        },\n        duplicateButtonText: {\n            type: String,\n            default: ""\n        },\n        removeObjectButtonText: {\n            type: String,\n            default: ""\n        },\n    },\n    data: function () {\n        return {\n            is_root: false,\n            showAddNewProperty: true,\n            selected_type: "string",\n            newkey: "",\n            newvalue:"",\n            keyError:"",\n        }\n    },\n    mounted() {\n\n    },\n    methods: {\n        removeKey(key) {\n            if (this.isRoot == true && this.schema.type == "Array") {\n                this.model = [];\n            } else {\n                this.$delete(this.model, key);\n                let index = this.schema.elements.findIndex((element => element.name === key));\n                this.schema.elements.splice(index,1);\n            }\n        },\n\n        emitDuplicateModel(key,parentElementName) {\n            if (this.isRoot == true && this.schema.type == "Array") {\n                let index = key + 1;\n                let model = _.cloneDeep(this.model[key]);\n                this.model.splice(index,0,model);\n            } else {\n                // this.$emit(\'remove-key\',this.parentElementName)\n                this.$emit("duplicate-model",{key:key,parentElementName:parentElementName});\n            }\n        },\n        handleDuplicateModel(payload) {\n            let index = payload.key + 1;\n            let model = _.cloneDeep(this.model[payload.key]);\n            this.model.splice(index,0,model);\n        },\n        emitRemoveKey() {\n            if (this.isRoot == true && this.schema.type == "Array") {\n                this.model.splice(0,this.model.length);\n            } else {\n                this.$emit(\'remove-key\',this.parentElementName)\n            }\n        },\n        clearAll(key) {\n            this.model[key] = [];\n        },\n        hasAttributeCheck(name) {\n            return _.has(this.model, name);\n        },\n        updateValue(payload) {\n\n            if ((this.parentType == "Array" && this.schema.type == "input")) {\n                this.$emit(\'update-value\', payload);\n            } else if (this.parentType == "Object" && this.schema.type == "Array") {\n                this.$emit(\'update-value\', payload);\n            } else {\n                this.model[payload.name][payload.index] = payload.value;\n\n            }\n        },\n        removeIndex(payload) {\n\n            if ((this.parentType == "Array" && this.schema.type == "input")) {\n                this.$emit(\'remove-index\', payload);\n            } else if (this.parentType == "Object" && this.schema.type == "Array") {\n                this.$emit(\'remove-index\', payload);\n            } else {\n                this.model[payload.name].splice([payload.index],1);\n            }\n        },\n        addModel() {\n            let model = null;\n\n            if (this.isRoot == true && this.schema.type == "Array") {\n                model = _.cloneDeep(this.defaults[0]);\n            } else {\n                model = _.cloneDeep(this.defaults);\n            }\n\n            if (!_.isEmpty(this.model) || Array.isArray(this.model)) {\n                if (!this.model) {\n                    this.model = [];\n                }\n                this.model.push(model);\n            } else {\n                this.$emit("add-model-to-array",{"key":this.parentElementName,"defaults":_.cloneDeep(this.defaults)});\n            }\n        },\n        addModelToArray(payload) {\n            let key = payload.key;\n            let value = payload.defaults;\n            if(!_.has(this.model,key)) {\n                this.$set(this.model, key, [value]);\n            } else {\n                if (!this.model[key]) {\n                    this.model[key] = [];\n                }\n                this.model[key].push(value);\n            }\n        },\n        removeModel(index) {\n            this.model.splice(index, 1);\n        },\n        addNewProperty() {\n            let key = _.clone(this.newkey);\n            let value = "";\n            let type = "text";\n\n            if (key === "") {\n                this.keyError = "key is mandatory";\n                return;\n            }\n\n            if (_.has(this.model,key)) {\n                this.keyError = "Duplicate key";\n                return;\n            }\n\n            if (this.selected_type === "number") {\n                value = 0;\n                type = "number";\n            }\n\n            if (this.selected_type === "boolean") {\n                value = false;\n                type = "checkbox";\n            }\n\n            let element = {\n                element_type: "input",\n                label: key,\n                name: key,\n                placeholder: "Enter " + key,\n                type: type\n            };\n\n            this.$set(this.model, key, value);\n            this.schema.elements.push(element);\n            this.resetAddNewProperty();\n        },\n        resetAddNewProperty() {\n            this.showAddNewProperty = true;\n            this.newkey = "";\n            this.keyError="";\n        }\n    },\n    watch: {\n        selected_type(newVal,oldVal) {\n            if (newVal == "boolean") {\n                this.newvalue = false;\n            } else if (newVal == "number") {\n                this.newvalue = 0;\n            } else {\n                this.newvalue = "";\n            }\n        },\n        newkey(newVal,oldVal) {\n            this.keyError = "";\n        }\n    },\n    components: {\n        VueBootstrap4FormGenerator,\n        InputElement\n    },\n    computed: {\n        type() {\n            return this.schema.type;\n        },\n        canAdd() {\n            return (this.type == "Array" && this.schema.canAdd);\n        },\n        canRemove() {\n            return (this.type == "Array" && this.schema.canRemove);\n        },\n        canRemoveObject() {\n            return (this.parentType == "Array" && this.schema.type == "Object" && this.schema.canRemove);\n        },\n        canDuplicateObject() {\n            return (this.parentType == "Array" && this.schema.type == "Object" && this.schema.canDuplicate);\n        },\n        canAddProperty() {\n            return (this.type == "Object" && this.schema.canAddProperty);\n        },\n    }\n}\n<\/script>\n\n<style scoped>\n.card {\n    margin-top: 10px;\n}\n</style>\n']},media:void 0})},p,"data-v-77f7b216",!1,0,function e(){var t=document.head||document.getElementsByTagName("head")[0],n=e.styles||(e.styles={}),a="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,r){if(!document.querySelector('style[data-vue-ssr-id~="'+e+'"]')){var o=a?r.media||"default":e,s=n[o]||(n[o]={ids:[],parts:[],element:void 0});if(!s.ids.includes(e)){var l=r.source,i=s.ids.length;if(s.ids.push(e),a&&(s.element=s.element||document.querySelector("style[data-group="+o+"]")),!s.element){var m=s.element=document.createElement("style");m.type="text/css",r.media&&m.setAttribute("media",r.media),a&&(m.setAttribute("data-group",o),m.setAttribute("data-next-index","0")),t.appendChild(m)}if(a&&(i=parseInt(s.element.getAttribute("data-next-index")),s.element.setAttribute("data-next-index",i+1)),s.element.styleSheet)s.parts.push(l),s.element.styleSheet.cssText=s.parts.filter(Boolean).join("\n");else{var d=document.createTextNode(l),c=s.element.childNodes;c[i]&&s.element.removeChild(c[i]),c.length?s.element.insertBefore(d,c[i]):s.element.appendChild(d)}}}}});function h(e){h.installed||(h.installed=!0,e.component("VueBootstrap4FormGenerator",y))}var v={install:h},f=null;"undefined"!=typeof window?f=window.Vue:"undefined"!=typeof global&&(f=global.Vue),f&&f.use(v),e.install=h,e.default=y,Object.defineProperty(e,"__esModule",{value:!0})});
