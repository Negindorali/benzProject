<template>
    <div>
        <h6 class="mx-auto text-center pt-10 font-bold">سرویس در محل</h6>
        <div class="w-full p-5 flex pt-20 flex-wrap">
            <div class="w-full p-5  flex flex-wrap">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-10">
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                            نام و نام خانوادگی
                        </label>
                        <input v-model="name"
                               class="rounded-none focus:outline-none rounded-lg bg-gray-50 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                               id="name" type="text" placeholder="مثال : محمد یاریان">
                    </div>

                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-10">
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                            شماره همراه
                        </label>
                        <input v-model="phone"
                               class="rounded-none focus:outline-none rounded-lg bg-gray-50 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                               id="phone" type="text" placeholder="مثال : ۰۹۹۱۳۷۷۹۰۵۶">
                    </div>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-10">
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
                            توضیحات
                        </label>
                        <textarea
                                v-model="description"
                                class="rounded-none focus:outline-none rounded-lg bg-gray-50 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                id="description" type="text" placeholder="توضیحات موردنظر خود را وارد کنید."
                                rows="5"></textarea>
                    </div>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-10">
                    <div class="mb-6">
                        <label for="reason" class="block mb-2 text-sm font-medium text-gray-900 ">سرویس های
                            درخواستی</label>
                        <select id="reason"
                                class="bg-gray-50 focus:outline-none rounded-lg bg-gray-50 text-gray-900 text-gray-900 text-sm rounded-lg  block w-full p-2.5">
                            <option value="justOne">حضور کارشناس فنی برای عیب یابی</option>
                            <option value="US">تعویض لاستیک</option>
                            <option value="US">شستشو تخصصی</option>
                            <option value="US">پولیش تخصصی</option>
                            <option value="US">تعویض روغن تخصصی</option>
                            <option value="US">تعمیرات سرپایی</option>
                            <option value="US">توضیحات بیشتر..</option>
                        </select>
                    </div>
                </div>
                <div class="w-full p-5 flex pt-20 flex-wrap">
                    <button @click="$toast('درخواست شما با موفقیت ثبت شد.',null,'success',3500)"
                            class="text-white mt-5 searchBtn focus:outline-none text-sm px-5 mr-auto py-2.5 text-center">
                        ثبت درخواست
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "on-siteService",
    data() {
        return {
            from: '',
            description: '',
            confirmCode: '',
            destination: '',
            phone: '',
        }
    }
}
</script>

<style scoped>
.searchBtn {
    background: #000000;
    border-radius: 12px;
}
</style>