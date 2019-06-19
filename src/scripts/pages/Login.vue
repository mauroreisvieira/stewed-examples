<template>
    <div>
        <form>
            <h1>Create Password</h1>
            <div class="form-field form-field--column">
                <label for="textfield-1">New Password (min 8 chars)</label>
                <div class="textfield textfield--outlined">
                    <input
                        type="password"
                        name="textfield-1"
                        value="textfield"
                        class="textfield__control"
                    />
                </div>
            </div>
            <div class="form-field form-field--column">
                <label for="textfield-2">Confirm Password</label>
                <div class="textfield textfield--outlined">
                    <input
                        type="password"
                        name="textfield-2"
                        value="textfield"
                        class="textfield__control"
                    />
                </div>
            </div>
            <div class="form-field demo-switch">
                <label for="switch-1" class="flex-1">Enable Touch ID at login</label>
                <div class="switch" tabindex="1">
                    <input class="switch__control" id="switch-1" type="checkbox" />
                    <div class="switch__background"></div>
                </div>
            </div>
            <div class="form-field">
                <button class="btn flex-1 btn--lg btn--primary">Next</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        }
    }
</script>

<style lang="scss">

    $theme-font-size: 14px !default;
    $theme-colors: (
        "primary"   : #449E6B,
        "accent"    : #455a64,
        "grayscale" : #454b57,
        "warning"   : #f5c85c,
        "danger"    : #f26175,
        "info"      : #82a2ff,
        "success"   : #69dd95
    ) !default;

    $theme-font-sizes: (
      "hg" : 22px,
      "base" : $theme-font-size
    ) !default;

    @import "./../../../node_modules/stewed/src/packages/theme/index";
    @import "./../../../node_modules/stewed/src/packages/variables";
    @import "./../../../node_modules/stewed/src/packages/typography/index";
    @import "./../../../node_modules/stewed/src/packages/form-field/index";
    @import "./../../../node_modules/stewed/src/packages/textfield/index";
    @import "./../../../node_modules/stewed/src/packages/switch/index";
    @import "./../../../node_modules/stewed/src/packages/button/index";

    html {
        font-size: $theme-font-size;
    }

    body {
        background-color: var(--color-accent-darker);
    }

    .app {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 380px;
        min-height: 80vh;
        margin: 0 auto;
        padding: 0;
    }

    main {
        width: 100%;
    }

    form {
        margin: auto;
        padding: var(--space-xl);
    }

    h1 {
        --heading-font-size: var(--typography-hg);
        --heading-color: var(--color-grayscale-lighter);
    }

    .flex-1 {
        flex: 1;
    }

    .form-field {
        color: var(--color-grayscale-light);

        label {
            font-weight: 300;
        }
    }

    .textfield .textfield__control {
        --textfield-border-color: var(--color-grayscale-base);
        --textfield-fg: var(--color-grayscale-light);
    }
</style>
