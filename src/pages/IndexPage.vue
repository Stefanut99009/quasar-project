<template>
  <q-page>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 row">
      <div class="card col-md-4 col-lg-4 q-pa-md">
        <div class="text-h4 text-bold">View Blog</div>
        <div class="text-grey-7">Please login your account below</div>
        <form @submit.prevent="submitLogin">
          <div class="column">
            <q-input
              class="q-mt-sm"
              outlined
              @blur="validateInputValue('email')"
              label="Enter email *"
              v-model="form.email.value"
              :error="form.email.error"
              :error-message="form.email.msg"
              autocomplete="email"
            >
              <template v-slot:append>
                <q-icon name="email"></q-icon>
              </template>
            </q-input>
            <q-input
              class="q-mt-sm"
              outlined
              @blur="validateInputValue('password')"
              :type="isPassword ? 'password' : 'text'"
              label="Enter password *"
              v-model="form.password.value"
              :error="form.password.error"
              :error-message="form.password.msg"
              autocomplete="current-password"
            >
              <template v-slot:append>
                <q-icon name="lock" class="q-mr-sm"></q-icon>
                <q-icon @click="isPassword = !isPassword" :name="isPassword ? 'visibility_off' : 'visibility'"></q-icon>
              </template>
            </q-input>
          </div>
          <q-btn flat @click="forgotPassword">Forgot Password</q-btn>
          <q-btn
  :disabled="!isFormValidComputed"
  type="submit"
  label="Login"
  class="custom-btn"
></q-btn>
        </form>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.q-btn {
  cursor: default !important;
}
</style>

<script setup>
import { ref, computed } from 'vue'
import Hooks from '../hooks'

const { isFormValid, validateInput } = Hooks()

const form = ref({
  email: {
    value: '',
    email: true,
    requiredMsg: 'Email is required',
    emailMsg: 'Invalid email address',
    required: true,
    error: false,
    msg: ''
  },
  password: {
    value: '',
    requiredMsg: 'Password is required',
    required: true,
    error: false,
    msg: ''
  }
})

const isPassword = ref(true)

// Validate the form dynamically using a computed property
const isFormValidComputed = computed(() => isFormValid(form.value))

const validateInputValue = (field) => {
  validateInput(form.value, field)
}

const submitLogin = () => {
  if (!isFormValidComputed.value) {
    console.log('Form is invalid')
    return
  }
  console.log('Form submitted:', form.value)
}

const forgotPassword = () => {
  console.log('Forgot password clicked')
}
</script>
