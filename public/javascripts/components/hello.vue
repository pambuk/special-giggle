<template>
    <div class="cruel">
        Cruel
        <span>{{ who }}</span>

        <h1 class="title">
            Bulma
        </h1>

        <p class="subtitle">
            Modern CSS framework based on <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
        </p>

        <div class="field">
            <div class="control">
                <input class="input" type="text" placeholder="Input">
            </div>
        </div>

        <div class="field">
            <p class="control">
          <span class="select">
            <select>
              <option>Select dropdown</option>
            </select>
          </span>
            </p>
        </div>

        <div class="buttons">
            <a class="button is-primary">Primary</a>
            <a class="button is-link">Link</a>
        </div>
    </div>
</template>

<script>
    module.exports = { // This is important, I got errors when using `export default`
        data() {
            return {
                who: "World"
            }
        },
        mounted() {
            setTimeout(() => {
                console.log('We can use ES6 too!')
            }, 1000)
        }
    }
</script>

<style scoped>
    .cruel {
        color: green;
    }
</style>