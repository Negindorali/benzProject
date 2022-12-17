<template>
    <div>
        <h6 class="mx-auto text-center pt-10 font-bold">امداد حمل</h6>
        <div class="w-full p-5 flex pt-20 flex-wrap -mx-3">
            <div class="w-full p-5 flex flex-wrap -mx-3">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-10">
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                            نام و نام خانوادگی
                        </label>
                        <input v-model="name"
                               class="rounded-none focus:outline-none rounded-lg bg-gray-50 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                               id="name" type="text" placeholder="مثال : محمد یاریان">
                    </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-10">
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                            شماره همراه
                        </label>
                        <input v-model="phone"
                               class="rounded-none focus:outline-none rounded-lg bg-gray-50 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                               id="phone" type="text" placeholder="مثال : ۰۹۹۱۳۷۷۹۰۵۶">
                    </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-10">
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="confirmCode">
                            تایید شماره همراه
                        </label>
                        <input v-model="confirmCode"
                               class="rounded-none focus:outline-none rounded-lg bg-gray-50 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                               id="confirmCode" type="text" placeholder="مثال : ۴۴۵۶">
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
                        <label for="reason" class="block mb-2 text-sm font-medium text-gray-900 ">دلیل حمل</label>
                        <select id="reason"
                                class="bg-gray-50 focus:outline-none rounded-lg bg-gray-50 text-gray-900 text-gray-900 text-sm rounded-lg  block w-full p-2.5">
                            <option value="justOne">فقط درخواست جابجایی دارم</option>
                            <option value="US">مشکلی برای خودرو پیش آمده درخواست حمل تا تعمیرگاه را دارم</option>
                        </select>
                    </div>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-10">
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="from">
                            مبدا
                        </label>
                        <input v-model="from"
                               class="rounded-none focus:outline-none rounded-lg bg-gray-50 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                               id="from" type="text" placeholder="با کلیک روی مبدا مکان موردنظرتان را وارد کنید.">
                    </div>
                    <div style="height: 400px;">

                        <mapir :apiKey="mapirToken">
                            <mapNavigationControl position="top-right"/>
                            <mapGeolocateControl position="top-right"/>
                            <mapMarker
                                    :coordinates.sync="coordinates"
                                    color="blue"
                                    @click="getlatLng"
                                    :draggable="true"
                                    @dragend="getlatLng"
                            />
                        </mapir>
                    </div>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-10">
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="destination">
                            مقصد
                        </label>
                        <input v-model="destination"
                               class="rounded-none focus:outline-none rounded-lg bg-gray-50 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                               id="destination" type="text"
                               placeholder="با کلیک روی مقصد مکان موردنظرتان را وارد کنید.">
                    </div>
                    <div style="height: 400px;">

                        <mapir :apiKey="mapirToken">
                            <mapNavigationControl position="top-right"/>
                            <mapGeolocateControl position="top-right"/>
                            <mapMarker
                                    :coordinates.sync="destCoordinate"
                                    color="red"
                                    @click="getDestination"
                                    :draggable="true"
                                    @dragend="getDestination"
                            />
                        </mapir>
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
import {mapGeolocateControl, mapir, mapMarker, mapNavigationControl} from "mapir-vue";
import axios from "axios";

export default {
    name: "refillCars",
    components: {
        mapir,
        mapMarker,
        mapNavigationControl,
        mapGeolocateControl
    },
    data() {
        return {
            coordinates: [51.420296, 35.732379],
            destCoordinate: [51.420296, 35.732379],
            from: '',
            description: '',
            confirmCode: '',
            destination: '',
            phone: '',
            mapirToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZhZjI0ZjA0Y2U2NTQ2ZDAyYzMwNjBmMzAxYWY0NTMxYjhkOTEwODVhMDQ3MGY1ZDc3YjYwY2M4OGRiNjVkZjZkMjIyZWNkZjNmMTJkYmExIn0.eyJhdWQiOiIyMDI5NSIsImp0aSI6ImZhZjI0ZjA0Y2U2NTQ2ZDAyYzMwNjBmMzAxYWY0NTMxYjhkOTEwODVhMDQ3MGY1ZDc3YjYwY2M4OGRiNjVkZjZkMjIyZWNkZjNmMTJkYmExIiwiaWF0IjoxNjcwNjg5MDc4LCJuYmYiOjE2NzA2ODkwNzgsImV4cCI6MTY3MzE5NDY3OCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.h-KYgigwSQbp9KYjIjWgBLQRpMy6ABa40dyF4pF99UmndnhDNs-fckFePIdRPkm7GlggWm9yKphj_TJ5b9TyA8m1_gNarjRiPzhAS5ZNGNUaSfnGHA1cUbc71DuUKgohAe2sOmXUkKin0q-ErzDdCczJjLVc218dRkCxLuJIrAY5yZ5yVgK79-Q6misDYP3yLpWaV5uDA3a1VzXppq4G9hm0GCGmsef_WryEx9z1fFuOzoVbuNj2yEKn3mBi2vAyKvV1HRMKMoXy_KLTk8xy-GsSQArOxKvw4Nk8Nvuks0WzSlLygNncQozltpm5Z4kueep-0TrI4xzx6uSjuk20vg"
        };
    },
    methods: {
        getlatLng() {
            axios({
                method: 'GET',
                baseURL: 'https://map.ir/reverse',
                params: {lat: this.coordinates[1], lon: this.coordinates[0]},
                timeout: 15000,
                headers: {
                    'x-api-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZhZjI0ZjA0Y2U2NTQ2ZDAyYzMwNjBmMzAxYWY0NTMxYjhkOTEwODVhMDQ3MGY1ZDc3YjYwY2M4OGRiNjVkZjZkMjIyZWNkZjNmMTJkYmExIn0.eyJhdWQiOiIyMDI5NSIsImp0aSI6ImZhZjI0ZjA0Y2U2NTQ2ZDAyYzMwNjBmMzAxYWY0NTMxYjhkOTEwODVhMDQ3MGY1ZDc3YjYwY2M4OGRiNjVkZjZkMjIyZWNkZjNmMTJkYmExIiwiaWF0IjoxNjcwNjg5MDc4LCJuYmYiOjE2NzA2ODkwNzgsImV4cCI6MTY3MzE5NDY3OCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.h-KYgigwSQbp9KYjIjWgBLQRpMy6ABa40dyF4pF99UmndnhDNs-fckFePIdRPkm7GlggWm9yKphj_TJ5b9TyA8m1_gNarjRiPzhAS5ZNGNUaSfnGHA1cUbc71DuUKgohAe2sOmXUkKin0q-ErzDdCczJjLVc218dRkCxLuJIrAY5yZ5yVgK79-Q6misDYP3yLpWaV5uDA3a1VzXppq4G9hm0GCGmsef_WryEx9z1fFuOzoVbuNj2yEKn3mBi2vAyKvV1HRMKMoXy_KLTk8xy-GsSQArOxKvw4Nk8Nvuks0WzSlLygNncQozltpm5Z4kueep-0TrI4xzx6uSjuk20vg',
                    Accept: 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                this.from = response.data.address
            });
        },
        getDestination() {
            axios({
                method: 'GET',
                baseURL: 'https://map.ir/reverse',
                params: {lat: this.destCoordinate[1], lon: this.destCoordinate[0]},
                timeout: 15000,
                headers: {
                    'x-api-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZhZjI0ZjA0Y2U2NTQ2ZDAyYzMwNjBmMzAxYWY0NTMxYjhkOTEwODVhMDQ3MGY1ZDc3YjYwY2M4OGRiNjVkZjZkMjIyZWNkZjNmMTJkYmExIn0.eyJhdWQiOiIyMDI5NSIsImp0aSI6ImZhZjI0ZjA0Y2U2NTQ2ZDAyYzMwNjBmMzAxYWY0NTMxYjhkOTEwODVhMDQ3MGY1ZDc3YjYwY2M4OGRiNjVkZjZkMjIyZWNkZjNmMTJkYmExIiwiaWF0IjoxNjcwNjg5MDc4LCJuYmYiOjE2NzA2ODkwNzgsImV4cCI6MTY3MzE5NDY3OCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.h-KYgigwSQbp9KYjIjWgBLQRpMy6ABa40dyF4pF99UmndnhDNs-fckFePIdRPkm7GlggWm9yKphj_TJ5b9TyA8m1_gNarjRiPzhAS5ZNGNUaSfnGHA1cUbc71DuUKgohAe2sOmXUkKin0q-ErzDdCczJjLVc218dRkCxLuJIrAY5yZ5yVgK79-Q6misDYP3yLpWaV5uDA3a1VzXppq4G9hm0GCGmsef_WryEx9z1fFuOzoVbuNj2yEKn3mBi2vAyKvV1HRMKMoXy_KLTk8xy-GsSQArOxKvw4Nk8Nvuks0WzSlLygNncQozltpm5Z4kueep-0TrI4xzx6uSjuk20vg',
                    Accept: 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                this.destination = response.data.address
            });
        },

    },
    mounted() {
        this.getlatLng();
        this.getDestination();
    }
};
</script>

<style scoped>
.searchBtn {
    background: #000000;
    border-radius: 12px;
}
</style>
