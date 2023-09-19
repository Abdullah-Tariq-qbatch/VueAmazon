<template>
  <section class="bg-gray-50">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900">
        <img src="@/assets/mainLogo.svg" class="w-8 h-8 mr-2" />
        Amazon Project
      </div>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Sign in to your account
          </h1>
          <div class="space-y-4 md:space-y-6">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
                >Your email</label
              >
              <input
                type="text"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#27C498] focus:border-[#27C498] focus:outline-none focus:ring-0 block w-full p-2.5"
                placeholder="name@gmail.com"
                required=""
                v-model="email"
              />
              <p v-show="emailError" class="block my-2 text-sm font-medium text-red-500">
                Email is required
              </p>
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900"
                >Password</label
              >
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#27C498] focus:border-[#27C498] focus:outline-none focus:ring-0 block w-full p-2.5"
                required=""
                v-model="password"
              />
              <p v-show="passwordError" class="block my-2 text-sm font-medium text-red-500">
                Password is required
              </p>
            </div>
            <ButtonView role="primary" styles="w-full" @click="submit">
              <span v-if="!authStore.loading">Sign in</span>
              <div v-else role="status">
                <IconSpinner />
              </div>
            </ButtonView>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don't have an account yet?
              <a class="font-medium text-[#27C498] hover:underline">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonView from '../components/inputs/Button/ButtonView.vue'
import IconSpinner from '../components/icons/IconSpinner.vue'
import { ref } from 'vue'
import { useAuthStore } from '../stores/authStore'

const authStore = useAuthStore()
const email = ref('')
const password = ref('')

const emailError = ref(false)
const passwordError = ref(false)

const submit = async () => {
  if (email.value === '') emailError.value = true
  else emailError.value = false
  if (password.value === '') passwordError.value = true
  else passwordError.value = false
  if (!emailError.value && !passwordError.value) await authStore.login(email.value, password.value)
  email.value = ''
  password.value = ''
}
</script>

<style></style>
