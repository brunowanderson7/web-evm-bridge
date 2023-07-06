import { createApp } from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBridge } from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faBridge);

import router from './router'

import './css/index.css'

import { createPinia } from 'pinia'

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).use(createPinia()).mount('#app')
