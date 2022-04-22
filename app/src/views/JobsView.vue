<template>
    <div>
        <div></div>
    </div>
</template>

<script lang="ts">

import {reactive, defineComponent} from 'vue';

export default defineComponent({

    setup() {
        const state = reactive({
            count: 0
        })

        return state;
    }


})
    
</script>

<style>

</style>
