import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { WebContainer } from "@webcontainer/api";

const wcInstance = await WebContainer.boot();

console.log(wcInstance)

createApp(App).mount('#app')
