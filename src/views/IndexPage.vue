<template>
  <transition-group name="slide-fade">
    <ClientInformationComponent v-if="hasClient == false" />
  </transition-group>
</template>

<script setup>
import { useClientStore } from '@stores/client.js'

import ClientInformationComponent from '@components/ClientInformationComponent.vue'

const store = useClientStore()
const { hasClient } = store
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.3s linear;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
