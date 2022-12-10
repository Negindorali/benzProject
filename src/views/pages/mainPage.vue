<template>
    <div class="container mx-auto">
        <carousel-benz></carousel-benz>

        <find-car-form></find-car-form>

        <product-carousel :items="items"></product-carousel>

        <cars-services></cars-services>

        <special-products></special-products>

        <call-center></call-center>

        <special-product2></special-product2>

        <trust-us></trust-us>
    </div>
</template>

<script>
import CarouselBenz from "@/components/carousel";
import FindCarForm from "@/components/forms/findCarForm";
import ProductCarousel from "@/components/productCarousel";
import CarsServices from "@/components/services";
import SpecialProducts from "@/components/specialProducts";
import CallCenter from "@/components/callCenter";
import SpecialProduct2 from "@/components/specialProduct2";
import TrustUs from "@/components/trustUs";
export default {
    name: "mainPage",
    components: {
        TrustUs,
        SpecialProduct2, CallCenter, SpecialProducts, CarsServices, ProductCarousel, FindCarForm, CarouselBenz},
    data() {
        return {
            loading: false,
            items: [
                {
                    src: require("@/assets/img/g_class_-_gclasssuv3.png"),
                    alt: "...",
                    text:'SL C lass'
                },
                {
                    src: require("@/assets/img/g_class_-_gclasssuv2.png"),
                    alt: "...",
                    text:'G C lass'
                }
            ]
        }
    },
}
</script>

<style scoped>

</style>