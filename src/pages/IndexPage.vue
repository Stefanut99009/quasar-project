<template>
  <q-page>
    <div class="row">
      <div class="col-12 col-md-4 col-lg-4">
        <div class="text-h4 text-bold">View Blog</div>
        <div class="text-grey-7">Please login your account below</div>
        <div class="column">
          <q-input
          v-model="form.email.value"
          :error="form.email.error"
          :error-message="form.email.msg">
          </q-input>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
})
</script>
