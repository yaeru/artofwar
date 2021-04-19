<template>
  <div class="hello">
    <h1>{{ mensaje }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    mensaje: String
  }
}
</script>