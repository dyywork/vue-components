import dyySearchForm from "./dyySearchForm";
import dyyTable from "./dyyTable";
import dyyTooltip from "./dyyTooltip";

const components = [
    dyySearchForm,
    dyyTable,
    dyyTooltip
]

const install = (Vue, options) => {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))


    Vue.prototype.$DUI = options || {}
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    // 以下是具体的组件列表
    dyySearchForm,
    dyyTable,
    dyyTooltip
}
