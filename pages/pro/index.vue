<template lang="pug">
div loading...
</template>
<script setup>
definePageMeta({ middleware: 'auth' })
navigateTo('/pro/create-event')
</script>
