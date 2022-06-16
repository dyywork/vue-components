import mgSearchForm from "./mgSearchForm";
import mgTable from "./mgTable";
import dyyCode from "./dyyCode";
import dyyTooltip from "./dyyTooltip";

const components = [
    mgSearchForm,
    mgTable,
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
    mgSearchForm,
    mgTable,
    dyyCode,
    dyyTooltip
}