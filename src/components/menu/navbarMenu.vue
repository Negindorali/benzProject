<template>
    <div class="navbarBg">
        <div class="flex flex-wrap justify-between md:justify-between md:p-2 px-2 md:mr-5 items-center md:py-6">
            <div class="flex md:hidden">
                <button @click="isHidden =true" type="button" class="inline-flex items-center cursor-pointer p-2 text-sm rounded-lg">
                    <img alt="Menu" src="@/assets/img/Menu.svg">
                </button>
            </div>

            <div class="mx-auto md:mx-0 flex block mx-auto">
                <a href="#" class="flex">
                    <img src="@/assets/img/logo.png" class="img-fluid mt-2" alt="benz Logo">
                    <h1 class="text-white mr-2 mt-3 hidden md:block">خودرو شاپ</h1>
                </a>
            </div>

           <div class="mx-auto text-center hidden md:block">
               <menu class="text-white">
                   <ul class="flex gap-5">
                      <router-link :to="{name:items.link}" v-for="(items,index) in menuTabs" :key="index">
                          <li @click="activeTab(items.value)" class="mx-3">
                              {{items.name}}
                              <transition name="show">
                                  <hr class="h-px bg-white mx-auto mt-1.5 border-0" v-if="items.hide" :key="items.value">
                              </transition>
                          </li>
                      </router-link>
                   </ul>
               </menu>
           </div>

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

            <transition name="show">
                <menu-aside :close-menu="()=>{isHidden=false}" v-if="isHidden"></menu-aside>
            </transition>
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

import MenuAside from "@/components/menu/menu";
export default {
    name: "navbarMenu",
    components: {MenuAside},
    data() {
        return {
            isHidden: false,
            menuTabs:[
                {name:'صفحه اصلی',value:'mainPage',hide:false,link:'home'},
                {name:'خدمات ما',value:'ourServices',hide:false,link:''},
                {name:'درباره ما',value:'aboutUs',hide:false,link:''},
                {name:'تماس با ما',value:'contactUS',hide:false,link:''},
            ],
            currentTab:'mainPage'
        }
    },
    watch: {
        currentTab: {
            immediate: true,
            handler(newValue, oldValue) {
                this.menuTabs.find((x) => x.value === newValue).hide = true;

                if (oldValue)
                    this.menuTabs.find((x) => x.value === oldValue).hide = false;
            }
        }
    },
    methods:{
        activeTab(name) {
            this.currentTab = name;
        }
    }

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
.show-enter-active,
.show-leave-enter {
    transform: translateX(0);
    transition: all .3s linear;
}
.show-enter,
.show-leave-to {
    transform: translateX(100%);
    transition: all .3s linear;
}

hr{
    width: 11px;
    height: 3.5px;
    border-radius: 8px;
}
</style>