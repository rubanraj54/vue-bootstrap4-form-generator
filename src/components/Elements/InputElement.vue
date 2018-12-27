<template>
    <div class="form-group">
        <label>{{element.label}}</label> <button type="button" class="btn btn-sm btn-primary" @click="$emit('remove-key',element.name)">x</button>
        <template v-if="typeof model === 'object'">
            <input :type="element.type" class="form-control" v-model='model[element.name]' :placeholder="element.placeholder">
        </template>
        <template v-else>
            <input :type="element.type" class="form-control" v-model='model' :placeholder="element.placeholder">
        </template>
    </div>
</template>

<script>
export default {
    name: "Input",
    props: {
        element: {
            type: Object,
            required: false
        },
        model: {
            type: Object| Array | String | Number | Boolean,
            required: false
        }
    }
}
</script>
