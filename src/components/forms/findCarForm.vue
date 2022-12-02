<template>
    <div class="flex">
        <div class="md:z-30 min-w-[93%] md:mt-[-4rem] md:mx-auto mainBox overflow-hidden mx-5 px-3 my-7 pb-10 pt-3 cursor-pointer">
            <h4 class="title text-xl md:text-2xl font-bold pb-5">خودروی خود را انتخاب کنید</h4>

            <div class="md:flex md:gap-5">
                <select v-for="(item,index) in searchElements" :key="index" class="mt-5 text-sm searchSelect block w-full p-2.5">
                    <option selected>{{ item.name }}</option>
                    <option value="US">United States</option>
                </select>

                <button type="submit"
                        class="text-white mt-5 md:mr-5 searchBtn focus:outline-none text-sm w-full md:w-1/2 px-5 py-2.5 text-center">
                    جستجو
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "findCarForm",
    data() {
        return {
            searchElements:[
                {name:'سال ساخت',options:''},
                {name:'مدل',options:''},
                {name:'سازنده',options:''},
                {name:'موتور',options:''},
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
.title {
    border-bottom: 0.3px solid #9A9A9A;
}
.searchSelect{
    background: #F8F8F8!important;
    border-radius: 12px!important;
    color: #858585!important;
}
.searchBtn{
    background: #000000;
    border-radius: 12px;
}
</style>