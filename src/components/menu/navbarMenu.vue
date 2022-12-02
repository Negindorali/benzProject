<template>
    <div class="navbarBg">
        <div class="flex flex-wrap justify-between md:justify-between md:p-2 md:mr-5 items-center md:py-6">
            <div class="flex md:hidden">
                <button @click="isHidden =true" type="button" class="inline-flex items-center cursor-pointer p-2 text-sm rounded-lg">
                    <img alt="Menu" src="@/assets/img/Menu.svg">
                </button>
            </div>

            <a href="#" class="flex items-center sm:mx-auto md:mx-0">
                <img src="@/assets/img/logo.png" class="img-fluid" alt="benz Logo">
                <h1 class="text-white mr-2 hidden md:block">خودرو شاپ</h1>
            </a>

            <menu class="text-white hidden md:block">
                <ul class="flex gap-6">
                    <li>صفحه اصلی</li>
                    <li>خدمات ما</li>
                    <li>درباره ما</li>
                    <li>تماس با ما</li>
                </ul>
            </menu>

            <div class="flex md:ml-6">
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                        aria-expanded="false"
                        class="focus:outline-none rounded-lg text-sm  mr-1 hidden md:block">
                    <img alt="Search_alt_light_white" src="@/assets/img/Search_alt_light_white.svg">
                </button>

                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="focus:outline-none rounded-lg text-sm  mr-1 md:mx-6">
                    <img class="hidden md:block" alt="Buy_desktop" src="@/assets/img/Buy_desktop.svg"/>
                    <img class="md:hidden p-2.5" alt="BuyBasket" src="@/assets/img/BuyBasket.svg"/>
                </button>

                <button class="focus:outline-none rounded-lg text-sm p-2.5 mr-12 bg-white hidden md:flex">
                    <img alt="User" class="ml-4" src="@/assets/img/User.svg"/>
                    <span class="ml-4 pt-[0.1rem]">ورود/عضویت</span>
                </button>
            </div>

            <!--            <div class="justify-between asideMenu items-center w-full" id="navbar-search">-->
            <!--                <transition name="fade">-->
            <!--                    &lt;!&ndash;                        <menu-aside :close-menu="()=>{isHidden=false}" v-if="isHidden"></menu-aside>&ndash;&gt;-->
            <!--                </transition>-->
            <!--            </div>-->
        </div>

        <div class="w-full py-5 px-5 block md:hidden">
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