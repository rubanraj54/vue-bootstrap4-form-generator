<template>
    <div class="form-group" v-if="typeof model === 'object'">
        <label>{{element.label}}</label>
        <div class="input-group">
            <input :type="element.type" class="form-control" v-model='model[element.name]' :placeholder="element.placeholder">
            <!-- <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"> -->
            <div class="input-group-append">
                <!-- <button class="btn btn-outline-secondary" type="button">Button</button> -->
                <button type="button" class="btn btn-sm btn-danger" @click="$emit('remove-key',element.name)">
                    <i class="fas fa-times-circle"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="form-group" v-else>
        <div class="input-group">
            <input :type="element.type" class="form-control" v-bind:value='model' :placeholder="element.placeholder" @keyup.stop="updateValue($event)">
            <div class="input-group-append">
                <button type="button" class="btn btn-sm btn-danger" @click="removeIndex">
                    <i class="fas fa-times-circle"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
var _ = require('lodash');

export default {
    name: "InputElement",
    props: {
        element: {
            type: Object,
            required: false
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
        updateValue: _.debounce(function(event) {
            this.$emit('update-value',{name:this.parentElementName,index:this.parentElementIndex,value:event.target.value});
        }, 60),
        removeIndex() {
            this.$emit('remove-index',{name:this.parentElementName,index:this.parentElementIndex});
        }
    }
}
</script>

