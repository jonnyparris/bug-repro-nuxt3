<template lang="pug">
.login-page
  h2.font-bold.text-2xl Login
  form.mt-3(autocomplete='on', @submit.prevent='signIn')
    .form-control
      label(for='email') Email
      input.input.input-bordered.form-control(
        v-model='email',
        placeholder='your@email.com',
        type='email',
        minlength='6',
        maxlength='255'
      )
    .form-control.mt-3
      label(for='password') Password
      input.input.input-bordered.form-control(
        v-model='password',
        type='password',
        minlength='12',
        maxlength='255'
      )
    .flex.justify-between.mt-3
      NuxtLink.btn.btn-ghost(to='/') No account yet?
      button.mt-3.btn.btn-success(type='submit', @click='signIn') Login
</template>

<script lang="ts" setup>
const email = ref('')
const password = ref('')

const $supabase = useSupabaseClient()

$supabase.auth.onAuthStateChange((event, session) => {
  console.log('Auth state change event:', event)
})

// onBeforeMount(async () => {
//   if (auth.session) await navigateTo('/pro')
// })

const signIn = async () => {
  console.log('signing in...');

}
</script>
