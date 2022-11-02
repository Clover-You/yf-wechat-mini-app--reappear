import { createApp } from 'vue'
import { Button, Popup, ConfigProvider, OverLay, Icon, Animate } from '@nutui/nutui-taro';

import store from './store/index'

import './app.less'

const App = createApp({
  onShow(options) { },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(store)
App.use(Button)
App.use(Popup)
App.use(ConfigProvider)
App.use(OverLay)
App.use(Icon)
App.use(Animate)

export default App
