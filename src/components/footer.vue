<template>
    <div>
        <div class="w-full text-white mainBox py-5">
            <div class="flex mx-5 mt-4">
                <img src="@/assets/img/logo.png">
                <p class="mx-3 mt-2">فروشگاه <span class="font-bold">ماشین</span></p>
            </div>
            <p class="px-6 my-5 pl-10 text-right leading-7 text-justify footerDesc">
                قطعات اورجینال مرسدس بنز با خودروی شما مطابقت دارند که دیگران نمی توانند. آنها به طور خاص برای عملکرد با
                قطعات و سیستم های دیگر طراحی شده اند و از بهترین مواد موجود ساخته شده اند.
            </p>
            <div class="grid grid-cols-2 mb-5 pt-4 items-center px-5 ">
                <div class="mainBox mx-5 cursor-pointer">
                    <h3 class="font-bold"> خدمات ما</h3>
                    <ul class="leading-9 pt-3">
                        <li><a href="#">پشتیبانی</a></li>
                        <li><a href="#">سوالات متداول</a></li>
                        <li><a href="#">مقالات</a></li>
                    </ul>
                </div>
                <div class="mainBox mx-5 cursor-pointer">
                    <h3 class="font-bold"> تماس باما</h3>
                    <ul class="leading-9 pt-3">
                        <li><a href="#" class="flex"><span><img src="@/assets/img/phone.svg" class="mt-2 ml-2" alt=""></span>021 4596 4444</a>
                        </li>
                        <li><a href="#" class="flex"><span><img src="@/assets/img/email.svg" class="mt-2 ml-2" alt=""></span>hi@honareresane.com</a>
                        </li>
                    </ul>
                    <div class="grid w-full grid-cols-3 gap-4 mt-4">
                        <div class="socialBox p-2">
                            <img src="@/assets/img/insta.svg" alt="" class="mx-auto" width="30">
                        </div>
                        <div class="socialBox p-2">
                            <img src="@/assets/img/Telegram.svg" alt="" class="mx-auto" width="30">
                        </div>
                        <div class="socialBox py-2 ">
                            <img src="@/assets/img/whatsapp.svg" class="mx-auto" width="30" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
.socialBox{
    background: #FFFFFF;
    border-radius: 5px;
}
</style>