<template>
    <div>
        <h6 class="mx-auto text-center pt-10 font-bold">امداد اورژانسی</h6>
        <div class="w-full p-5 flex pt-20 flex-wrap">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                        نام و نام خانوادگی
                    </label>
                    <input v-model="name"
                           class="rounded-none focus:outline-none rounded-r-lg bg-gray-50 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                           id="name" type="text" placeholder="مثال : محمد یاریان">
                </div>
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                        شماره همراه
                    </label>
                    <input v-model="phone"
                           class="rounded-none focus:outline-none rounded-r-lg bg-gray-50 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                           id="phone" type="text" placeholder="مثال : ۰۹۹۱۳۷۷۹۰۵۶">
                </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="desc">
                        توضیحات
                    </label>
                    <textarea
                            v-model="description"
                            class="rounded-none focus:outline-none rounded-r-lg bg-gray-50 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                            id="desc" type="text" placeholder="توضیحات موردنظر خود را وارد کنید." rows="5"></textarea>
                </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="carType">
                        نوع ماشین
                    </label>
                    <input v-model="carType"
                           class="rounded-none focus:outline-none rounded-r-lg bg-gray-50 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                           id="carType" type="text" placeholder="مثال : نیسان">
                </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="carModel">
                        مدل ماشین
                    </label>
                    <input v-model="carModel"
                           class="rounded-none focus:outline-none rounded-r-lg bg-gray-50 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                           id="carModel" type="text" placeholder="مثال : مدل ۸۶">
                </div>
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
            <div class="w-full px-3 mb-6 md:mb-0">
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="from">
                        ادرس ماشین
                    </label>
                    <input v-model="carAddress"
                           class="rounded-none focus:outline-none rounded-r-lg bg-gray-50 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                           id="from" type="text" placeholder="با کلیک روی مبدا مکان موردنظرتان را وارد کنید.">
                </div>
                <div style="height: 400px;">
                <mapir :apiKey="mapirToken"  @click="getlatLng">
                    <mapNavigationControl position="top-right"/>
                    <mapGeolocateControl position="top-right"/>
                    <mapMarker
                            :coordinates.sync="coordinates"
                            color="blue"
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
    name: "EmergencyAid",
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
            carAddress: '',
            phone: '',
            description: '',
            carType: '',
            carModel: '',
            confirmCode: '',
            name: '',
            mapirToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZhZjI0ZjA0Y2U2NTQ2ZDAyYzMwNjBmMzAxYWY0NTMxYjhkOTEwODVhMDQ3MGY1ZDc3YjYwY2M4OGRiNjVkZjZkMjIyZWNkZjNmMTJkYmExIn0.eyJhdWQiOiIyMDI5NSIsImp0aSI6ImZhZjI0ZjA0Y2U2NTQ2ZDAyYzMwNjBmMzAxYWY0NTMxYjhkOTEwODVhMDQ3MGY1ZDc3YjYwY2M4OGRiNjVkZjZkMjIyZWNkZjNmMTJkYmExIiwiaWF0IjoxNjcwNjg5MDc4LCJuYmYiOjE2NzA2ODkwNzgsImV4cCI6MTY3MzE5NDY3OCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.h-KYgigwSQbp9KYjIjWgBLQRpMy6ABa40dyF4pF99UmndnhDNs-fckFePIdRPkm7GlggWm9yKphj_TJ5b9TyA8m1_gNarjRiPzhAS5ZNGNUaSfnGHA1cUbc71DuUKgohAe2sOmXUkKin0q-ErzDdCczJjLVc218dRkCxLuJIrAY5yZ5yVgK79-Q6misDYP3yLpWaV5uDA3a1VzXppq4G9hm0GCGmsef_WryEx9z1fFuOzoVbuNj2yEKn3mBi2vAyKvV1HRMKMoXy_KLTk8xy-GsSQArOxKvw4Nk8Nvuks0WzSlLygNncQozltpm5Z4kueep-0TrI4xzx6uSjuk20vg"
        }
    },
    methods: {
        getlatLng(e) {
            this.coordinates=Object.values(e.actualEvent.lngLat)
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
                this.carAddress = response.data.address
            });
        },
        getlatLngs() {
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
                this.carAddress = response.data.address
            });
        },

    },
    mounted() {
        this.getlatLngs();
    }

}
</script>

<style scoped>
.searchBtn {
    background: #000000;
    border-radius: 12px;
}
</style>