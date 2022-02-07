import Vue from 'vue'
import { Button } from 'element-ui'
import {Form, FormItem} from 'element-ui'
import {Input} from 'element-ui'
// 导入弹框提示组件
import {Message} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message // 对Message进行全局挂载，这样所有组件都可以通过this访问$message,从而可以进行弹框提示
