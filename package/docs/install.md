## 安装
<br/>

```bash
npm install DUI
```
<br/>

## 引用  
<br/>

- 这里打包组件库时过滤所有 `node_modules` 中的依赖 `Vue.use(DUI, options)` `options` 传入组件库中所需要的依赖也可以传入自定义的方法， `dayjs` 为必传  
<br/>

```js
import dayjs form 'dayjs';
import DUI form '@/dyywork/dyy-ui';
improt '@/dyywork/dyy-ui/lib/index.css';

Vue.use(DUI, { dayjs: dayjs });
```
