# 一个辅助于vue-router的插件
---
生成一全局 _routes 栈  去映射真正的routers的交互顺序，并且通过keyName生成的字符去保证路由的唯一性，就可以实现原生app的页面跳转 例如A->B->A 对于_routes来说生成的是3个 _route .
#### 使用方式
---
```
import Vue from 'vue'
import router from './router' 
import Navigation from 'bc-navigation'

Vue.use(Navigation, {router})
```
#### 或者搭配vuex使用
```
import Vue from 'vue'
import router from './router' // vue-router 实例
import store from './store' // vuex store 实例
import Navigation from 'bc-navigation'

Vue.use(Navigation, {router, store})
```
#### 已实现api：
- [x]  forward
- [x]  back
- [x]  replace
- [x]  refresh
- [x]  reset

```
this.$navigation.on('forward', (to, from) => {})
this.$navigation.on('back', (to, from) => {})
this.$navigation.on('replace', (to, from) => {})
this.$navigation.on('refresh', (to, from) => {})
this.$navigation.on('reset', () => {})
```
#### 实例方法
```
this.$navigation.getRoutes()    // 获取_routes
this.$navigation.cleanRoutes()  // 清空_routes 
//(如果_routes.length ===1 ,可在beforeEach进行拦截，可模拟实现目前router未实现的cleanRoutes)  
```