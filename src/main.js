import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 1. 引入你需要的组件
import { Button,ConfigProvider,Card } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App)

app.use(router)
app.use(Button);
app.use(ConfigProvider)
app.use(Card)

app.mount('#app')
