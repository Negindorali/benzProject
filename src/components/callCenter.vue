<template>
    <div>
        <div class="mainBox text-white text-center overflow-hidden mx-7 mb-5 pb-5 pt-3 cursor-pointer">
            <h5 class="mt-3 mb-2 font-bold">پشتیبانی مشتری</h5>
            <p class="px-4 pt-2 desc md:mx-10">با یک نماینده خدمات مشتری که مخصوصاً برای کمک به شما</p>
            <p class="px-4 pt-2 desc md:mx-10"> در انواع نیازها آموزش دیده است، تماس بگیرید.</p>
            <button type="submit" class="mt-5 contactUs mx-auto focus:outline-none text-sm  px-8 py-2.5 text-center">
                تماس با ما
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "callCenter"
}
</script>

<style scoped>
.mainBox {
    background: #000000;
    border-radius: 25px;
    box-shadow: 0px 3px 20px rgba(215, 215, 215, 0.25);
}
.desc{
    font-size: 14px;
}
.contactUs{
    background: #FFFFFF;
    border-radius: 10px;
    color: black;
}
</style>