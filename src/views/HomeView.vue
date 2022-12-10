<template>
    <div>
        <navbar-menu></navbar-menu>

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
import FooterBox from "@/components/footer";
// import ProductCarousel from "@/components/productCarousel";

export default {
    name: 'HomeView',
    components: {
        FooterBox,
       NavbarMenu, LoadingComponents},
    data() {
        return {
            loading: false,
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