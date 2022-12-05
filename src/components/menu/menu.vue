<template>
    <div id="under_side_bar" @click="closeMenu()" class="z-30">
        <aside class="m-0 text-right" aria-label="Sidebar" id="sideBar" @click.stop>
            <div class="overflow-y-auto bg-gray-100 max-h-screen min-h-screen">
                <div class="headerMenu w-full relative">
<!--                    <span class="pi pi-times closeIcon m-2 p-1 bg-white" @click="closeMenu()"></span>-->
                    <img src="@/assets/img/logo.png" class="absolute block w-25 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                </div>
                <div class="my-10 py-5 w-full px-5 justify-center">
                    <button class="menuButton px-20 my-3 py-2 justify-center">صفحه اصلی</button>
                    <button class="menuButton px-20 my-3 py-2 justify-center">خدمات ما</button>
                    <button class="menuButton px-20 my-3 py-2 justify-center">درباره ما</button>
                    <button class="menuButton px-20 my-3 py-2 justify-center">تماس با ما</button>
                </div>
            </div>
        </aside>
    </div>
</template>

<script>

export default {
    name: "menuAside",
    props: {
        closeMenu: {
            default: false
        }
    },
    data() {
        return {
            isHide: false,
            hideMe: false,
        }
    },
}
</script>

<style scoped>
#under_side_bar{
    position: fixed;
    left: calc(50% - (412px/2));
    right: calc(50% - (412px/2));
    top: 0;
    bottom: 0;
    background: #0f0f0f9e;
    min-height: 100vh;
    max-height: 100vh;
}

#sideBar {
    position: fixed;
    left: calc(50% - (412px/2));
    right: calc(50% - (412px/2));
    top: 0;
    bottom: 0;
    width: 290px;
    min-height: 100vh;
    max-height: 100vh;
}

.headerMenu {
    background-color: black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100px;
    padding: 0;
}

.menuButton {
    font-size: 9pt;
    border: 0.5px solid #A4A4A4;
    border-radius: 5px;
    width: inherit;
    font-weight: 500;
}

.closeIcon {
    border-radius: 5px;
    cursor: pointer;
}

.nums, .callCenter {
    font-size: 10pt;
}
</style>