<template>
    <div>
        <h5 class="mx-7 text-right font-bold">محصولات  ویژه</h5>

        <div class="grid grid-cols-2 md:grid-cols-4 mb-5 items-center px-5 w-full">
            <div :key="index" v-for="(item,index) in services" class="m-2 mainBox overflow-hidden mx-5 my-7 pt-3 cursor-pointer md:p-4 md:pt-12">
                <img :src="item.img" class="mx-auto" alt="">
                <h4 class="mb-4 mt-2">{{item.title}}</h4>
                <div class="flex">
                    <p class="my-3 price">{{item.price}}تومان</p>
                    <button class="my-3 text-white flex buyBtn mr-auto focus:outline-none text-sm px-3 py-1 text-center">
                        خرید
                        <img src="@/assets/img/buyIcon.svg" class="mr-2" alt=""/>
                    </button>
                </div>
            </div>
        </div>
        <div class="hidden md:block">
            <button class="my-3 mx-auto text-white flex showMore mr-auto focus:outline-none text-sm px-4 py-2.5 text-center">
               مشاهده بیشتر
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "specialProduct2",
    data() {
        return {
            services:[
                {title:'نشان هود',price:'14,000',img:require('@/assets/img/hood.png')},
                {title:'فیلتر روغن',price:'340,000',img:require('@/assets/img/filterOil.png')},
                {title:'نشان هود',price:'14,000',img:require('@/assets/img/hood.png')},
                {title:'فیلتر روغن',price:'340,000',img:require('@/assets/img/filterOil.png')},
            ]
        }
    }
}
</script>

<style scoped>
.mainBox {
    background: #FFFFFF;
    box-shadow: 0px 3px 20px rgba(215, 215, 215, 0.25);
    border-radius: 25px;
}
.buyBtn{
    background: #000000;
    border-radius: 8px;
    font-size: 10px;
}
.price{
    font-size: 13px;
}
.showMore{
    background: #000000;
    border-radius: 14.5668px;
}
</style>