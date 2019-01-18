<template>
    <div class="form-group" v-if="typeof model === 'object'">
        <label>{{element.label}}</label>
        <div class="input-group">
            <input v-if="element.type == 'number'" :type="element.type" class="form-control" v-model.number='model[element.name]' :placeholder="element.placeholder" :readonly="readOnly">
            <input v-else :type="element.type" class="form-control" v-model='model[element.name]' :placeholder="element.placeholder" :readonly="readOnly">
            <div class="input-group-append" v-if="canRemove">
                <button type="button" class="btn btn-sm btn-danger" @click="$emit('remove-key',element.name)">
                    <i class="fas fa-times-circle"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="form-group" v-else>
        <div class="input-group">
            <input :type="element.type" class="form-control" v-bind:value='model' :placeholder="element.placeholder" @keyup.stop="updateValue($event)" :readonly="readOnly">
            <div class="input-group-append" v-if="canRemove">
                <button type="button" class="btn btn-sm btn-danger" @click="removeIndex">
                    <i class="fas fa-times-circle"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
var has = require('lodash/has');
var debounce = require('lodash/debounce');

export default {
    name: "InputElement",
    props: {
        element: {
            type: Object,
            required: true
        },
        model: {
            type: Object| Array | String | Number | Boolean,
            required: false
        },
        parentElementName: {
            type: String,
            required: false
        },
        parentElementIndex: {
            type: String | Number,
            required: false
        },
    },
    methods: {
        updateValue: debounce(function(event) {
            this.$emit('update-value',{name:this.parentElementName,index:this.parentElementIndex,value:event.target.value});
        }, 60),
        removeIndex() {
            this.$emit('remove-index',{name:this.parentElementName,index:this.parentElementIndex});
        }
    },
    computed: {
        readOnly() {
            return (has(this.element,"readonly") && this.element.readonly);
        },
        canRemove() {
            return (has(this.element,"canRemove") && this.element.canRemove);
        }
    },
}
</script>

