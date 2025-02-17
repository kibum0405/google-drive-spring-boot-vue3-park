 /*eslint-disable*/
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Vuetify 플러그인 경로
import axios from 'axios';
import Managing from "./components";
import router from './router';
Vue.config.productionTip = false;
import './GlobalStyle.css';

// backend host url
axios.backend = null; //"http://localhost:8088";

// axios.backendUrl = new URL(axios.backend);
axios.fixUrl = function(original){

  if(!axios.backend && original.indexOf("/")==0) return original;

  var url = null;

  try{
    url = new URL(original);
  }catch(e){
    url = new URL(axios.backend + original);
  }

  if(!axios.backend) return url.pathname;

  url.hostname = axios.backendUrl.hostname;
  url.port = axios.backendUrl.port;

  return url.href;
}

const templateFiles = import.meta.glob("./components/**/*.vue");
const app = createApp(App);
app.config.globalProperties.$ManagerLists = [];
Object.keys(templateFiles).forEach(function(tempFiles) {
  if (!tempFiles.includes("Manager.vue") && tempFiles.includes("vue")) {
    app.config.globalProperties.$ManagerLists.push(
      tempFiles.replace("./components/", "").replace(".vue", "")
    );
  }
});
const pluralCaseList = []

pluralCaseList.push( {plural: "filemanagements/files", pascal: "FilemanagementFile"} )


app.config.globalProperties.$ManagerLists.forEach(function(item, idx) {
  pluralCaseList.forEach(function(tmp) {
    if(item.toLowerCase() == tmp.pascal.toLowerCase()) {
      var obj = {
        name: item,
        plural: tmp.plural
      }
      app.config.globalProperties.$ManagerLists[idx] = obj
    }
  })
})

app.use(router);
app.use(vuetify);
app.mount('#app');
