<template>
    <div class="app">
        <header class="header">
            <Logo />
            <Nav />
        </header>
        <main class="main">
            <router-view />
        </main>
    </div>
</template>

<script>
    import Logo from './scripts/components/Logo.vue'
    import Nav from './scripts/components/Nav.vue'

    export default {
        name: 'app',
        components: { Logo, Nav },
        data: function () {
            return {}
        },
        mounted() {
        }
    }
</script>

<style lang="scss">
  @import "./styles/app.scss";
</style>
