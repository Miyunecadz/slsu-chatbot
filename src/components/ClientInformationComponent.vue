<template>
  <div class="justify-items-center grid items-center h-screen">
    <div class="card mx-2 md:w-96 bg-base-100 shadow-2xl rounded-md">
      <div class="flex p-5 px-10 gap-3 bg-sky-700">
        <div class="mt-2 md:mt-0">
          <img src="@/assets/slsu-logo.png" width="120" alt="SLSU Logo" />
        </div>
        <div class="w-full h-full text-slate-50 mt-1">
          <p class="text-sm">Welcome to</p>
          <p class="text-md md:text-xl">SLSU Graduate Studies</p>
          <p class="text-sm">Chat Bot</p>
        </div>
      </div>
      <div class="card-body items-center">
        <form action="" method="post" @submit.prevent="">
          <div class="form-group my-2">
            <label for="fullname">Full Name</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              class="border-b-2 focus:outline-0 input-sm w-full"
            />
          </div>
          <div class="form-group my-2">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              class="border-b-2 focus:outline-0 input-sm w-full"
            />
          </div>
          <div class="card-actions w-full grid justify-items-center mt-4">
            <button class="btn btn-primary">Continue</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useClientStore } from '@stores/client.js'
</script>
