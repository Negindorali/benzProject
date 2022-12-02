<template>
    <div>
        <div id="default-carousel" class="relative mt-5 px-5" data-carousel="static">
            <div class="flex px-3">
                <p class="text-right">قطعات مرسدس بنز با کلاس</p>
                <div class="absolute z-20 flex -translate-x-1/2 gap-1 mb-4 buttonsGroups">
                    <button @click="slider('next')" type="button" class="px-3 py-2  buttonDes"><span><img src="@/assets/img/right.svg" alt=""></span></button>
                    <button @click="slider('prev')" type="button" class="px-3 py-2 mx-2 buttonDes"><span><img src="@/assets/img/left.svg" alt=""></span></button>
                </div>
            </div>

            <div class="owl-carousel owl-theme relative mx-5 mb-10 mt-7 overflow-hidden rounded-lg">
                <div class="item slideBox" v-for="item in items" :key="item.src">
                     <img :src="item.src" :alt="item.alt">
                    <h6 class="text-center font-bold mx-auto pt-8">{{item.text}}</h6>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
window.$ = window.jquery = window.jQuery = require("jquery");

import 'owl.carousel/dist/assets/owl.carousel.min.css';

let owl_carousel = require('owl.carousel');

window.fn = owl_carousel;

export default {
    name: "productCarousel",
    props: {
        items: {
            required: true,
            type: Array
        }
    },
    data() {
        return {
            owl: null
        }
    },
    methods: {
        slider(direction) {
            this.owl.trigger(`${direction}.owl.carousel`);
        }
    },
    mounted() {
        // eslint-disable-next-line no-undef
        $(document).ready(() => {
            // eslint-disable-next-line no-undef
            this.owl = $('.owl-carousel').owlCarousel({
                margin: 10,
                rtl: true,
                loop: true,
                responsive:{
                    0:{
                        items:3
                    },
                    1000:{
                        items:6
                    }
                }
            });
        });
    }
}
</script>

<style scoped>
.buttonDes {
    background: #F2F2F2;
    border-radius: 6px;
}

.buttonsGroups {
    top: -0.2rem;
    left: 3.5rem;
}

.slideBox {
    background: #FFFFFF;
    box-shadow: 0px 3px 20px rgba(215, 215, 215, 0.25);
    border-radius: 15px;
    width: 4.5rem;
}

</style>