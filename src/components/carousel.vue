<template>
    <div>
        <div id="default-carousel" class="mt-10">
            <img class="loading rounded-lg mx-auto" :src="item.src" alt="..." v-for="item in items" :key="item.id" :style="item.style">
            <div class="flex gap-1 max-w-fit mt-[-15px] mx-auto z-20 relative">
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
                    src: "https://gamervip.net/wp-content/uploads/2021/11/241045287_1733898810333571_5729143874879046218_n-1392x727.jpg",
                    style: {
                        display: "block"
                    }
                },
                {
                    id: 2,
                    color: "#FCB812",
                    src: "https://redcapes.it/wp-content/uploads/2020/08/Ryan-Reynolds-Dwayne-Johnson-Black-Adam-1392x727.jpg",
                    style: {
                        display: "none"
                    }
                },
                {
                    id: 3,
                    color: "#FCB812",
                    src: "https://redcapes.it/wp-content/uploads/2019/07/mindhunter-1-e1619085314476-1392x727.jpg",
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