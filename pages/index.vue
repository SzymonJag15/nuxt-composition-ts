<template>
    <div class="Home">
        <b-container>
            <b-row>
                <b-col class="Home__content">
                    <button @click="increment">Increment</button>
                    <p>Counter : {{ counter }}</p>
                    <button @click="decrement">Decrement</button>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="Home__content">
                    <Logo />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, useStore } from '@nuxtjs/composition-api';

import Logo from '@/components/Logo.vue';

export default defineComponent({
    components: {
        Logo
    },
    setup () {
        const counter = ref(0)
        const store: any = useStore()
        console.log('test', store.state.name)

        const increment = () => counter.value++
        const decrement = () => counter.value--

        return {
            counter,
            increment,
            decrement
        }
    }
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
