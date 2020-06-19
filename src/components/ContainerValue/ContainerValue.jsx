import React, { Component } from 'react'
import InputValue from '../InputValue/InputValue'
import css from './style.module.css'
import { formatNumber } from '../../helpers/formatHelpers.js'
import { calcPercentage } from '../../helpers/functions'
export default class ContainerValue extends Component {


  formatNumberPercentagem = (value, rawSalary) => {
    return `R$ ${formatNumber(value)} (${calcPercentage(rawSalary, value)}%)`
  }
  formatNumberNormal(value) {
    return `R$ ${formatNumber(value)}`
  }
  render() {
    const { inssBase, irpfBase, discountIrpf, discountInss, realSalary } = this.props
    const inssBaseFlot = parseFloat(inssBase).toFixed(2)
    return (
      <div style={{ padding: "10px" }} className={`${css.bordered} ${css.containerInput}`}>
        <InputValue
          description="Base INSS:"
          value={inssBase === 0 ? '' : this.formatNumberNormal(inssBaseFlot)}
          typeInput="text"
          size={22}
          readOnly={true} />
        <InputValue
          description="Desconto INSS:"
          typeInput="text" size={22}
          value={inssBase === 0 ? '' : this.formatNumberPercentagem(discountInss, inssBase)}
          color="#e67e22"
          readOnly={true} />
        <InputValue
          description="Base IRPF:"
          value={inssBase === 0 ? '' : this.formatNumberNormal(irpfBase)}
          size={22}
          readOnly={true} />
        <InputValue description="Desconto IRPF:"
          typeInput="text" size={22}
          value={inssBase === 0 ? '' : this.formatNumberPercentagem(discountIrpf, inssBase)}
          color="#c0392b"
          readOnly={true} />
        <InputValue
          description="Salário líquido:"
          typeInput="text"
          value={inssBase === 0 ? '' : this.formatNumberPercentagem(realSalary, inssBase)}
          size={22}
          color="#16a085"
          readOnly={true} />
      </div>
    )
  }
}
