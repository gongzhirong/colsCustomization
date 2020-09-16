# 组件 ColsCustomization
> 基于 vue+iview
> 该组件目前作用于辅助iview列自定义控制
> 并根据特定规则把数据存储于localStorage中

## 组件包安装
`npm i cols-customization --save`

## 组件注册
```javascript
import ColsCustomization from 'cols-customization'
Vue.use(ColsCustomization)
```

#### 具体使用方法查看@/src/app.vue例子

## 参数传入
> * @param model 关联使用的table绑定cols的变量（重点：该值最会在第一次初始化数据的时候会赋值到本组件，后续修改不再由父级传值回来渲染）
> * @param clos 模块初始化列数据
> * @param colsCode 列配置存储的key值
