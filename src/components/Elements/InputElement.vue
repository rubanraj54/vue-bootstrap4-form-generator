<template>
    <div class="form-group has-clear-right" v-if="typeof model === 'object'">
        <span class="form-control-feedback vbt-simple-filter-clear" @click="$emit('remove-key',element.name)">
            <i class="fas fa-times"></i>
        </span>
        <input v-if="element.type == 'number'" :type="element.type" class="form-control" v-model.number.trim='model[element.name]' :placeholder="element.placeholder" :readonly="readOnly">
        <input v-else :type="element.type" class="form-control" v-model.trim='model[element.name]' :placeholder="element.placeholder" :readonly="readOnly">
    </div>
    <div class="form-group has-clear-right" v-else>
        <span class="form-control-feedback vbt-simple-filter-clear" @click="removeIndex">
            <i class="fas fa-times"></i>
        </span>
        <input :type="element.type" class="form-control" v-bind:value='model' :placeholder="element.placeholder" @keyup.stop="updateValue($event)" :readonly="readOnly">
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

<style scoped>
.has-clear-right {
        position: relative;
    }
    .has-clear-right .form-control {
        padding-right: 2.375rem;
    }
    .has-clear-right .form-control-feedback {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        display: block;
        width: 2.375rem;
        height: 2.375rem;
        line-height: 2.375rem;
        text-align: center;
        cursor: pointer;
    }
    .has-clear-right .form-control-feedback:hover {
        color: red;
    }
</style>
