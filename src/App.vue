<template>
    <router-view />
    <PopupUnit></PopupUnit>
</template>

<script>
import PopupUnit from '@/components/popupUnit/index';
import { mapMutations, mapGetters, mapActions } from 'vuex';
export default {
    name: "App",
    components: { PopupUnit },
    data() {
        return {

        };
    },
    created() {
        this.$store.commit('setScreenAndRem');
        window.addEventListener('resize', this.setScreenAndRem);
    },
    destroyed() {
        window.removeEventListener('resize', this.setScreenAndRem);
    },
    watch: {

    },
    methods: {
        ...mapMutations(['setScreenAndRem']),
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
