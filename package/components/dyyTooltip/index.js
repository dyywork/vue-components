import dyyTooltip from "./dyyTooltip";

dyyTooltip.install = function (Vue) {
    Vue.component(dyyTooltip.name, dyyTooltip)
}

export default dyyTooltip