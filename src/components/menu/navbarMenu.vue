<template>
    <div class="navbarBg">
        <nav class="z-10 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <div class="flex">
                    <button @click="isHidden =true" type="button"
                            class="inline-flex items-center cursor-pointer p-2 text-sm rounded-lg">
                        <img src="@/assets/img/Menu.svg">
                    </button>
                </div>

                <a href="#" class="flex items-center mx-auto">
                    <img src="@/assets/img/logo.png" class="img-fluid" alt="benz Logo">
                </a>

                    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                            aria-expanded="false"
                            class="focus:outline-none rounded-lg text-sm p-2.5 mr-1">
                        <img src="@/assets/img/BuyBasket.svg"/>
                    </button>

                <div class="justify-between asideMenu items-center w-full" id="navbar-search">
                    <transition name="fade">
<!--                        <menu-aside :close-menu="()=>{isHidden=false}" v-if="isHidden"></menu-aside>-->
                    </transition>
                </div>
            </div>
        </nav>
        <div class="w-full py-5 px-5">
            <div class="flex items-center">
                <label for="simple-search" class="sr-only">جستجو در وبسایت</label>
                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <img src="@/assets/img/Search_alt_light.svg">
                    </div>
                    <input type="text" id="simple-search" class="bg-gray-50 text-sm focus:outline-none bg-gray-100 block w-full pl-10 p-2.5" placeholder="جستجو در وبسایت" required>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "navbarMenu",
    data() {
        return {
            isHidden: false
        }
    },
}
</script>

<style scoped>
.navbarBg{
    background-color: #000000;
    border-radius: 0px 0px 20px 20px;
}
#simple-search{
    border-radius: 12px!important;
}
</style>