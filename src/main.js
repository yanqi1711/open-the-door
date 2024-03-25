import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { Button, ConfigProvider, Card, PasswordInput, NumberKeyboard, Toast } from 'vant';
import 'vant/lib/index.css';

axios.defaults.baseURL = 'http://localhost:8080'
const app = createApp(App)

app.use(Button);
app.use(ConfigProvider)
app.use(Card)
app.use(PasswordInput)
app.use(NumberKeyboard)
app.use(Toast)

app.mount('#app')
