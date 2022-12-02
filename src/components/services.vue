<template>
    <div>
        <div class="grid grid-cols-2 md:grid-cols-4 px-2 mb-10 items-center w-full">
            <div :key="index" v-for="(item,index) in services" :style="{'background-image':'url(' + item.img + ')'}" class="serviceBox bg-local m-2 relative">
                <div class="py-4 text-center descBox text-white">
                    {{ item.desc }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CarsServices",
    data() {
        return {
            services:[
                {serviceID:'',desc:'امداد اورژانسی',img:require('@/assets/img/Rectangle38.png')},
                {serviceID:'',desc:'امداد حمل',img:require('@/assets/img/Rectangle39.png')},
                {serviceID:'',desc:'سرویس در محل',img:require('@/assets/img/Rectangle40.png')},
                {serviceID:'',desc:'خدمات تعمیرگاهی',img:require('@/assets/img/Rectangle37.png')},
            ]
        }
    }
}
</script>

<style scoped>
@media  (min-width: 768px) {
    .serviceBox{
        height: 237px !important;
    }
}
.serviceBox {
    background-repeat: no-repeat;
    height: 151px;
    background-size: 100% 100%;
    filter: drop-shadow(0px 2px 20px rgba(225, 225, 225, 0.25));
    border-radius: 21.8618px;
}
.descBox{
    position: absolute;
    background: #000000;
    border-radius: 13px 13px 21.8618px 21.8618px;
    bottom: 0;
    right: 0;
    left: 0;
}
</style>