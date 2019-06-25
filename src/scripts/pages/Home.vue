<template>
    <div>
        <h1>Welcome...</h1>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data: function () {
            return {
                menus: this.$router.options.routes
            }
        },
        mounted() {}
    }
</script>
