<template>
    <div>
        <div id="default-carousel" class="relative mt-5" data-carousel="static">
            <div class="relative h-56 overflow-hidden rounded-lg">
                <div class="loading absolute inset-0 z-20" v-for="item in items" :key="item.id" :style="item.style">
                    <img src="@/assets/img/carsImg.png" width="430px" class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                </div>
            </div>
            <div class="absolute z-20 flex -translate-x-1/2 gap-1 bottom-5 mb-2 left-1/2">
                <button type="button" class="rounded-full" :class="{'w-4 h-0.2 bg-white':current===1,'w-1 h-1 bg-white':current!==1}"></button>
                <button type="button" class="rounded-full" :class="{'w-4 h-0.2 bg-white':current===2,'w-1 h-1 bg-white':current!==2}"></button>
                <button type="button" class="rounded-full" :class="{'w-4 h-0.2 bg-white':current===3,'w-1 h-1 bg-white':current!==3}"></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "carouselBenz",
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
@keyframes loading {
    from {
        opacity: .6;
    }
}

.loading {
    animation: loading 1s linear;
}
</style>