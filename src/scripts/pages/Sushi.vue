<template>
    <div class="sushi">
        <header></header>
        <main>
            <h1>Hello Mauro</h1>
        </main>
        <footer></footer>

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
    $theme-colors: (
      "primary"   : #d93c2c,
      "accent"    : #6c916c,
      "grayscale" : #454b57,
      "warning"   : #f5c85c,
      "danger"    : #f26175,
      "info"      : #82a2ff,
      "success"   : #69dd95
      ) !default;

    $theme-font-size: 14px !default;
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

    .sushi {
      height: 100%;

      form {
        max-width: 380px;
        margin: auto;
        padding: var(--space-xl);
      }

      h1 {
        --heading-font-size: var(--typography-hg);
        --heading-color: var(--color-grayscale-darker);
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
    }
</style>
