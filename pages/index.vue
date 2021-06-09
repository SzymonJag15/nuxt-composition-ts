<template>
  <div class="Home">
    <div class="Home__content">
      <nuxt-link to="/testowy">Testowy</nuxt-link>
      <p
        v-gsap.fromTo="[
          { opacity: 0, y: -350 },
          { opacity: 1, y: 0, duration: 3 },
        ]"
      >
        NUXT GSAP
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const counter = ref(0)

    const increment = () => counter.value++
    const decrement = () => counter.value--

    return {
      counter,
      increment,
      decrement,
    }
  },
})
</script>

<style lang="scss" scoped>
.Home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 30px;

  &__content {
    text-align: center;
  }
}
</style>
