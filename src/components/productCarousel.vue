<template>
    <div>
        <div id="default-carousel" class="relative mt-5 px-5" data-carousel="static">
            <div class="flex px-3">
                <p class="text-right">قطعات مرسدس بنز با کلاس</p>
                <div class="absolute z-20 flex -translate-x-1/2 gap-1 mb-4 buttonsGroups">
                    <button type="button" class="px-3 py-2  buttonDes"><span><img src="@/assets/img/right.svg" alt=""></span></button>
                    <button type="button" class="px-3 py-2 mx-2 buttonDes"><span><img src="@/assets/img/left.svg" alt=""></span></button>
                </div>
            </div>
            <div class="relative grid grid-cols-4 h-56 overflow-hidden rounded-lg">
                <div class="loading slideBox absolute inset-0 z-20" v-for="(item,index) in 6" :key="index" >
                    <img src="@/assets/img/g_class_-_gclasssuv2.png"
                         class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                </div>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: "productCarousel",
    data() {
        return {
            items: [
                {
                    id: 1,
                    color: "#FCB812",
                    style: {
                        display: "block"
                    }
                },
                {
                    id: 2,
                    color: "#FCB812",
                    style: {
                        display: "none"
                    }
                },
                {
                    id: 3,
                    color: "#FCB812",
                    style: {
                        display: "none"
                    }
                },
            ],
            timer: null,
            current: 1,
        }
    },
    mounted() {
        this.timer = setInterval(() => {
            this.items.find(x => x.id === this.current).style.display = "none";

            this.current++;

            if (this.current > this.items.length)
                this.current = 1;

            this.items.find(x => x.id === this.current).style.display = "block";
        }, 2000);
    },
    destroyed() {
        clearInterval(this.timer);
    }
}
</script>

<style scoped>
.buttonDes {
    background: #F2F2F2;
    border-radius: 6px;
}

.buttonsGroups {
    top: -0.2rem;
    left: 3.5rem;
}

.slideBox {
    background: #FFFFFF;
    box-shadow: 0px 3px 20px rgba(215, 215, 215, 0.25);
    border-radius: 15px;
    border: 1px solid red;
}
</style>