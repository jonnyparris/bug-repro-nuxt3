<template lang="pug">
.w-screen.min-h-screen.body-background
  .container.mx-auto.flex.flex-col.justify-between
    main.px-5.md_p-5
      slot.flex.flex-col
</template>
<!-- <script setup>
onBeforeMount(() => {
  auth.session = useSupabaseClient().auth.session()
})
</script> -->