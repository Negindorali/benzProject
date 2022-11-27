<template>
    <div>
        <navbar-menu></navbar-menu>
        <carousel-benz></carousel-benz>
        <find-car-form></find-car-form>
        <!--       <product-carousel></product-carousel>-->
        <cars-services></cars-services>
        <special-products></special-products>
        <call-center></call-center>
        <special-product2></special-product2>
        <trust-us></trust-us>
        <loading-components class="absolute loadingBox z-30 opacity-100" v-if="loading"></loading-components>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
        <footer-box></footer-box>
    </div>
</template>

<script>
// @ is an alias to /src

import {Axios} from "@/main";
import LoadingComponents from "@/components/loading";
import NavbarMenu from "@/components/menu/navbarMenu";
import CarouselBenz from "@/components/carousel";
import FindCarForm from "@/components/forms/findCarForm";
// import ProductCarousel from "@/components/productCarousel";
import CarsServices from "@/components/services";
import SpecialProducts from "@/components/specialProducts";
import CallCenter from "@/components/callCenter";
import SpecialProduct2 from "@/components/specialProduct2";
import TrustUs from "@/components/trustUs";
import FooterBox from "@/components/footer";

export default {
    name: 'HomeView',
    components: {
        FooterBox,
        TrustUs,
        SpecialProduct2,
        CallCenter, SpecialProducts, CarsServices, FindCarForm, CarouselBenz, NavbarMenu, LoadingComponents},
    data() {
        return {
            loading: false
        }
    },
    created() {
        Axios.interceptors.request.use((config) => {
            this.loading = true
            return config;
        }, (error) => {
            this.loading = false
            return Promise.reject(error);
        });

        Axios.interceptors.response.use((response) => {
            this.loading = false
            return response;
        }, (error) => {
            this.loading = false
            return Promise.reject(error);
        });
    }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.loadingBox {
    top: 22rem;
}
</style>