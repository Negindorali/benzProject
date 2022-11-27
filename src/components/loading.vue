<template>
    <div class="w-full justify-center z-30">
        <orbit-spinner class="mx-auto" :animation-duration="2000" :size="80" color="black" />
    </div>
</template>

<script>
import { OrbitSpinner } from 'epic-spinners'

export default {
    name:'loadingComponents',
    components: {
        OrbitSpinner
    },
}
</script>