import dyySearchForm from "./dyySearchForm";
import dyyTable from "./dyyTable";
import dyyCode from "./dyyCode";
import dyyTooltip from "./dyyTooltip";

const components = [
    dyySearchForm,
    dyyTable,
    dyyCode,
    dyyTooltip
]

const install = (Vue) => {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    // 以下是具体的组件列表
    dyySearchForm,
    dyyTable,
    dyyCode,
    dyyTooltip
}