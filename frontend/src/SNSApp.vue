<template>
    <v-app id="inspire">
        <div>
            <v-app-bar color="primary" app clipped-left flat>
                <v-toolbar-title>
                    <span class="second-word font uppercase"
                        style="font-weight:700;"
                    >
                        <v-app-bar-nav-icon
                            @click="openSideBar()"
                            style="z-index:1;
                            height:56px;
                            width:30px;
                            margin-right:10px;
                            font-weight:300;
                            font-size:55px;"
                        >
                            <div style="line-height:100%;">≡</div>
                        </v-app-bar-nav-icon>
                    </span>
                </v-toolbar-title>
                <span v-if="urlPath!=null" 
                    class="mdi mdi-home" 
                    key="" 
                    to="/" 
                    @click="goHome()"
                    style="margin-left:10px; font-size:20px; cursor:pointer;"
		        ></span> 
                <v-spacer></v-spacer>

            </v-app-bar>

            <v-navigation-drawer app clipped flat :value="sideBar">
                <v-list>
                    <v-list-item
                        class="px-2"
                        key="files"
                        to="/filemanagements/files"
                        @click="changeUrl()"
                        color="primary"
                        style="font-weight:700;"
                    >
                        파일
                    </v-list-item>


                </v-list>
            </v-navigation-drawer>
        </div>

        <v-main>
            <v-container style="padding:0px;" v-if="urlPath" fluid>
                <router-view></router-view>
            </v-container>
            <v-container style="padding:0px;" v-else fluid>
                <div style="width:100%; margin:0px 0px 20px 0px; position: relative;">
                    <v-img style="width:100%; height:300px;"
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-IsZwoYj8yobpFySuytSuI26N/user-ha9EUDa76s1yoHT6JzgqOaFI/img-xoDPtBMlS4mR9Ietz1AsEo4E.png?st=2024-01-30T05%3A04%3A07Z&se=2024-01-30T07%3A04%3A07Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-01-30T00%3A31%3A11Z&ske=2024-01-31T00%3A31%3A11Z&sks=b&skv=2021-08-06&sig=qkBcoHcFYaW3vvu5dafTWHMmEqoTge113NQeEzqXH98%3D"
                    ></v-img>
                    <div class="App-main-text-overlap">구글 드라이브</div>
                    <div class="App-sub-text-overlap">지금까지 없던 혁신적인 서비스! 언제 어디서나 손쉽게 이용할 수 있고, 다양한 기능을 제공합니다. 더 이상 시간을 낭비하지 마세요. 지금 바로 저희 서비스를 체험해보세요. 최고의 편리함을 느껴보십시오!</div>
                </div>
                <v-row class="pa-0 ma-0">
                    <v-col cols="4" class="pa-0 pa-0" v-for="(aggregate, index) in aggregate" :key="index">
                        <div 
                            class="flip-card pa-4"
                        >
                            <v-card
                                :key="aggregate.key"
                                :to="aggregate.route"
                                @click="changeUrl()"
                                class="mx-auto main-card pa-4"
                                style="text-align: center; border-radius: 10px;"
                                outlined
                            >
                                <div class="d-flex justify-center" style="width:120px; height:120px; border-radius: 10px; margin: 0 auto; background-color:white;">
                                    <v-img style="width:100%; height:100%; object-fit:contain; border-radius: 10px;" :src="aggregate.ImageUrl"></v-img>
                                </div>
                                <div style="text-align: center;">
                                    <h2 class="main-card-title">{{ aggregate.title }}</h2>
                                </div>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

export default {
    name: "App",
    data: () => ({
        useComponent: "",
        drawer: true,
        components: [],
        sideBar: true,
        urlPath: null,
        flipped: [],
        ImageUrl: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-IsZwoYj8yobpFySuytSuI26N/user-ha9EUDa76s1yoHT6JzgqOaFI/img-xoDPtBMlS4mR9Ietz1AsEo4E.png?st=2024-01-30T05%3A04%3A07Z&se=2024-01-30T07%3A04%3A07Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-01-30T00%3A31%3A11Z&ske=2024-01-31T00%3A31%3A11Z&sks=b&skv=2021-08-06&sig=qkBcoHcFYaW3vvu5dafTWHMmEqoTge113NQeEzqXH98%3D',
        aggregate: [
            { 
                title: '파일', 
                description: 'File을 관리하는 화면입니다.', 
                key: 'files', 
                route: '/filemanagements/files',
                ImageUrl: '',
            },
            
        ],
    }),
    
    async created() {
      var path = document.location.href.split("#/")
      this.urlPath = path[1];

    },
    watch: {
        cards(newCards) {
            this.flipped = new Array(newCards.length).fill(false);
        },
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
            this.flipped.fill(false);
        },
        goHome() {
            this.urlPath = null;
        },
        flipCard(index) {
            this.$set(this.flipped, index, true);
        },
        unflipCard(index) {
            this.$set(this.flipped, index, false);
        },
    }
};
</script>
<style>
</style>
