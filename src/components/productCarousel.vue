<template>
    <div>
        <carousel :navigationEnabled="true" :paginationEnabled="false">
            <slide>
                Slide 1 Content
            </slide>
            <slide>
                Slide 2 Content
            </slide>
            <slide>
                Slide 2 Content
            </slide>
            <slide>
                Slide 2 Content
            </slide>
            <slide>
                Slide 2 Content
            </slide>
        </carousel>
    </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'

export default {
    name: "productCarousel",
    components: [Carousel, Slide]
}
</script>

<style scoped>

</style>