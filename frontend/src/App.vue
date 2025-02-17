<template>
    <v-app id="inspire">
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import SNSApp from './SNSApp.vue'

export default {

    components: {
        VApp,
        VMain
    },
    name: "App",
    data: () => ({
        useComponent: "",
        drawer: true,
        components: [],
        sideBar: true,
        urlPath: null,
    }),
    
    async created() {
      var path = document.location.href.split("#/")
      this.urlPath = path[1];

    },

    mounted() {
        var me = this;
        me.components = this.$ManagerLists;
    },

    methods: {
        openSideBar(){
            this.sideBar = !this.sideBar
        },
        changeUrl() {
            var path = document.location.href.split("#/")
            this.urlPath = path[1];
        },
        goHome() {
            this.urlPath = null;
        },
    }
};
</script>
<style>
*{
    font-family: Gulim !important;
}
</style>
