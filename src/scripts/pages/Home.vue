<template>
    <div>
        <router-link
            class="navigation__item"
                v-for="(menu, index) in this.menus"
                :key="index"
                :to="menu.path"
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
                menus: this.$router.options.routes
            }
        },
        mounted() {
        }
    }
</script>
