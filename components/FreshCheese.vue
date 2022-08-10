<template lang="pug">
details
  summary.h2.cursor-pointer Filters
  .px-4.pl-8.pt-4
    ul.list-none.flex.flex-wrap
      li.flex.items-center.mr-5.mb-3
        input#thingy.toggle(v-model='options', type='checkbox')
        label.label.ml-1(for='thingy') {{ labelText }}
</template>

<script setup lang="ts">
const options = ref<boolean>(false);
const labelText = computed(() => 'Cheese');
</script>
