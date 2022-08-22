<template lang="pug">
div
  h1 Secret page
  p  Some secret content
</template>
<script setup>
definePageMeta({ middleware: 'auth' });
</script>
