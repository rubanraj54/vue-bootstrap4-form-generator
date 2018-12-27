<template>
    <div class="form-group">
        <label>{{element.label}}</label> <button type="button" class="btn btn-sm btn-primary" @click="$emit('remove-key',element.name)">x</button>

        <input :type="element.type" class="form-control" v-model='model[element.name]' :placeholder="element.placeholder">
    </div>
</template>

<script>
export default {
    name: "Input",
    props: {
        element: Object,
        default: function() {
            return {}
        },
        model: Object,
        default: function() {
            return {}
        }
    }
}
</script>
