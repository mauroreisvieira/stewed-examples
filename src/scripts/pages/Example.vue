<template>
    <div>
        <router-link
            class="navigation__item"
                v-for="(menu, index) in this.examples"
                :key="index"
                to="/login-example"
                :title="menu.name" >
                {{ menu.name }}
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data: function () {
            return {
                menus: this.$router.options.routes,
                examples: undefined
            }
        },
        mounted() {
            this.examples = this.menus[1].children;
            console.log('menus', this.examples)
        }
    }
</script>
