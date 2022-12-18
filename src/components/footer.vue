<template>
    <div class="w-full text-white mainBox py-5 grid grid-cols-2 md:grid-cols-3 md:pt-16">
       <div class="col-span-2 md:col-span-1">
           <div class="flex mx-5 mt-4">
               <img alt="logo" src="@/assets/img/logo.png">

               <p class="mx-3 mt-2">فروشگاه <span class="font-bold">ماشین</span></p>
           </div>

           <p class="px-6 my-5 pl-10 text-right leading-7 text-justify footerDesc">
               قطعات اورجینال مرسدس بنز با خودروی شما مطابقت دارند که دیگران نمی توانند. آنها به طور خاص برای عملکرد با
               قطعات و سیستم های دیگر طراحی شده اند و از بهترین مواد موجود ساخته شده اند.
           </p>
       </div>

        <div class="mainBox mx-2 cursor-pointer md:pr-6 md:mt-5">
            <h3 class="font-bold"> خدمات ما</h3>

            <ul class="leading-9 pt-3">
                <li><a href="#">پشتیبانی</a></li>

                <li><a href="#">سوالات متداول</a></li>

                <li><a href="#">مقالات</a></li>
            </ul>
        </div>


        <div class="mainBox mx-2 mt-5 cursor-pointer">
            <h3 class="font-bold"> تماس باما</h3>

            <ul class="leading-9 pt-3">
                <li>
                    <a href="#" class="flex text-left"><span><img src="@/assets/img/phone.svg" class="mt-2 ml-2" alt=""></span>۴۴۴۴ ۴۵۹۶ ۰۲۱</a>
                </li>

                <li>
                    <a href="#" class="flex"><span><img src="@/assets/img/email.svg" class="mt-2 ml-2" alt=""></span>hi@honareresane.com</a>
                </li>
            </ul>

            <div class="grid grid-cols-3 md:grid-cols-9 ml-10 mt-4">
                <div class="socialBox py-1 ml-4 mr-0">
                    <img src="@/assets/img/Instagram.png" alt="" class="mx-auto">
                </div>
                <div class="socialBox py-1 ml-4 mr-0">
                    <img src="@/assets/img/Telegram.png" alt="" class="mx-auto">
                </div>
                <div class="socialBox py-1 ml-4 mr-0">
                    <img src="@/assets/img/whatsapp.png" alt="" class="mx-auto">
                </div>
            </div>
        </div>

        <div class="col-span-2 mt-4 md:col-span-3">
            <hr>
            <h1 class="text-white text-[10px] mt-4 text-center">
                طراحی شده توسط آژانس خلاقیت هنر  رسانه
            </h1>
        </div>
<!--        <div class="grid grid-cols-2 mb-5 pt-4 items-center px-5 ">-->
<!--            -->
<!--        </div>-->
    </div>
</template>

<script>
export default {
    name: "footerBox"
}
</script>

<style scoped>
.mainBox {
    background: #000000;
    border-radius: 25px 25px 0px 0px;
}

.footerDesc {
    font-size: 19px;
}

.socialBox {
    background: #FFFFFF;
    border-radius: 5px;
}
</style>