export default {
    methods: {
        // 获取隐藏数据
        getHideData(type) {
            this.hideFormList = []
            if (type === 'all') {
                this.$parent.$parent.hideFormList = this.hideFormList
            }
            const isHideForm = []
            // this.formItemList.forEach((formItem, index) => {
            //   if (index > this.firstIndex) {
            //     Object.keys(this.form).forEach((key) => {
            //       if (formItem.model === key) {
            //         if (typeof this.form[key] === 'string' && this.form[key] !== '' && this.form[key] !== null) {
            //           isHideForm.push(true)
            //         } else if (this.form[key] instanceof Array && this.form[key].length > 0) {
            //           isHideForm.push(true)
            //         } else if (typeof this.form[key] === 'number' && this.form[key] !== '' && this.form[key] !== null) {
            //           isHideForm.push(true)
            //         }
            //       }
            //     })
            //   }
            // })
            this.formItemList.forEach((formItem) => {
                // 判断是否为隐藏字段
                if (isHideForm.length === 0 || type === 'all') {
                    // if (isHideForm.length > 0 || type === 'all') {
                    Object.keys(this.form).forEach((key) => {
                        if (formItem.model === key) {
                            if (typeof this.form[key] === 'string' && this.form[key] !== '' && this.form[key] !== null) {
                                this.getItemData(formItem, key, type)
                            } else if (this.form[key] instanceof Array && this.form[key].length > 0) {
                                this.getItemData(formItem, key, type)
                            } else if (typeof this.form[key] === 'number' && this.form[key] !== '' && this.form[key] !== null) {
                                this.getItemData(formItem, key, type)
                            } else if (typeof this.form[key] === 'boolean' && this.form[key] !== '' && this.form[key] !== null) {
                                this.getItemData(formItem, key, type)
                            }
                        }
                    })
                }
            })
        },
        getItemData(formItem, key, type) {
            if (['inputSearch', 'input', 'autocomplete', 'number'].includes(formItem.type)) {
                this.hideFormList.push({
                    attrsModel: formItem.type === 'inputSearch' ? formItem.attrs.model : '',
                    type: formItem.type,
                    key,
                    value: this.form[key],
                    label: formItem.label,
                })
            } else if (formItem.type === 'selectTree') {
                this.hideFormList.push({
                    type: formItem.type,
                    key,
                    label: formItem.label,
                    value: this.form[key],
                })
            } else if (formItem.type === 'select' || formItem.type === 'radio') {
                if (formItem.initialValue instanceof Array && this.form[key].length > 0) {
                    const optionLabel = []
                    formItem.options.forEach((option) => {
                        this.form[key].forEach((valueItem) => {
                            if (option.value === valueItem) {
                                optionLabel.push({ label: option.label, value: valueItem })
                            }
                        })
                    })
                    this.hideFormList.push({
                        type: formItem.type,
                        key: key,
                        value: optionLabel,
                        label: formItem.label,
                    })
                } else if (this.form[key] !== '' || this.form[key] !== null) {
                    const optionLabel = []
                    formItem.options.forEach((item) => {
                        if (item.value === this.form[key]) {
                            optionLabel.push({ label: item.label, value: item.value })
                        }
                    })
                    this.hideFormList.push({
                        type: formItem.type,
                        key: key,
                        value: optionLabel,
                        label: formItem.label,
                    })
                }
            } else if (formItem.type === 'date' && this.form[key] !== null) {
                if (formItem.initialValue instanceof Array) {
                    this.hideFormList.push({
                        type: formItem.attrs.type, // 这里添加具体的时间控件的类型用于展示判断
                        valueFormat: formItem.attrs.valueFormat,
                        key: key,
                        value: this.form[key],
                        label: formItem.label,
                    })
                } else if (this.form[key] !== null) {
                    this.hideFormList.push({
                        type: formItem.attrs.type,
                        key: key,
                        value: this.form[key],
                        label: formItem.label,
                    })
                }
            } else if (
                formItem.type === 'range' &&
                this.form[key] !== '' &&
                this.form[key] !== null &&
                this.form[key] !== undefined
            ) {
                this.hideFormList.push({
                    type: formItem.type,
                    key: key,
                    value: this.form[key] + formItem.separator + this.form[formItem.maxModel],
                    label: formItem.label,
                })
            }
            if (type === 'all') {
                this.$parent.$parent.hideFormList = this.hideFormList
            }

            // console.log(this.hideFormList);
        },
    },
}
