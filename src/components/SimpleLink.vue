<template>
  <a
    class="simple-link"
    :href="link"
    :target="target"
  >{{ text }}</a>
</template>

<script>
export default {
  name: 'SimpleLink',
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: '#'
    },
    target: {
      type: String,
      default: '_self'
    }
  }
}
</script>

<style scoped>
.simple-link {
  color: #16346a;
  text-decoration: none;
}
</style>
