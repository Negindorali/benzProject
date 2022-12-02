<template>
    <div>
        <h6 class="mx-7 text-right">لوازم جانبی و قطعات برتر</h6>
        <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="mainBox overflow-hidden mx-5 my-7 pb-10 pt-3 cursor-pointer" v-for="(item,index) in productInfo" :key="index">
                <img :src="item.img" class="mx-auto px-0" alt="" width="430px" style="border-radius: 25px">
                <h5 class="my-3 mt-5 mx-5">{{ item.titleProduct }}</h5>
                <p class="subtitles py-3 mx-5" v-for="(text,key) in item.options" :key="key">{{ text }}</p>
                <button type="submit" :key="item.titleProduct"
                        class="mt-5 moreProductBtn ml-10 float-left flex focus:outline-none text-sm w-25 px-3 py-2.5 text-center">
                    محصولات بیشتر <span><img src="@/assets/img/Vector.png" class="mr-2 mt-2"></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "specialProducts",
    data() {
        return {
            productInfo: [
                {
                    options: [
                        'سیستم های ورودی هوا',
                        'انژکتورهای سوخت',
                        'حسگرها',
                        'بدنه دریچه گاز',
                    ],
                    titleProduct: 'ورودی هوا و تحویل سوخت',
                    img: require('@/assets/img/AirintakeandFuelDelivery2.png')
                },
                {
                    options: [
                        'سیستم های ورودی هوا',
                        'انژکتورهای سوخت',
                        'حسگرها',
                        'بدنه دریچه گاز',
                    ],
                    titleProduct: 'ورودی هوا و تحویل سوخت',
                    img: require('@/assets/img/AirintakeandFuelDelivery1.png')
                },
                {
                    options: [
                        'سیستم های ورودی هوا',
                        'انژکتورهای سوخت',
                        'حسگرها',
                        'بدنه دریچه گاز',
                    ],
                    titleProduct: 'ورودی هوا و تحویل سوخت',
                    img: require('@/assets/img/AirintakeandFuelDelivery2.png')
                },
            ],
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

.subtitles {
    border-bottom: 0.3px solid #9A9A9A;
}

.moreProductBtn {
    background: #F2F2F2;
    border-radius: 6px !important;
}
</style>