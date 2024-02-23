<template>
    <router-view />
    <PopupUnit></PopupUnit>
</template>

<script>
import PopupUnit from '@/components/popupUnit/index';
export default {
    name: "App",
    components: { PopupUnit },
    data() {
        return {

        };
    },
    watch: {

    },
    methods: {

    }
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
