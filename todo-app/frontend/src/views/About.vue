<template>
  <div class="about">
    <h1>Hello {{ title }}</h1>
    <h1>This is an {{ $route.meta.name }}</h1>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
