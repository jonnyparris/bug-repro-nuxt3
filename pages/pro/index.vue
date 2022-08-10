<template lang="pug">
div Pro page...
</template>
<script setup>
definePageMeta({ middleware: 'auth' })
navigateTo('/pro/create-event')
</script>
