import React, { Component } from 'react';
import ContainerValue from './components/ContainerValue/ContainerValue'
import InputValue from './components/InputValue/InputValue.jsx'
import ProgressBar from './components/ProgressBar/ProgressBar.jsx'
import css from './App.module.css'
import { calcINSS, calcIRPF, calcValueLiquid, calcPercentage } from './helpers/functions'
class App extends Component {
  constructor() {
    super()
    this.state = {
      inssBase: 0,
      discountInss: 0,
      irpfBase: 0,
      discountIrpf: 0,
      realSalary: 0
    }
  }
  handleInputValue = (value) => {
    const discountInss = calcINSS(parseFloat(value))
    const irpfBase = value - discountInss
    const discountIrpf = calcIRPF(irpfBase)
    const realSalary = calcValueLiquid(irpfBase, discountIrpf)



    this.setState({
      discountInss,
      irpfBase,
      discountIrpf,
      inssBase: value,
      realSalary
    })
  }
  render() {
    const { irpfBase, discountIrpf, inssBase, discountInss, realSalary } = this.state
    const inssPercentage = calcPercentage(inssBase, discountInss)
    const irpfPercentage = calcPercentage(inssBase, discountIrpf)


    return (
      <div className={`container ${css.mainContainer}`} >
        <h1 style={{ textAlign: 'center' }}>React Salary</h1>

        <div style={{ padding: "15px" }}>
          <InputValue typeInput="number" description="Salário bruto" onHandleInput={this.handleInputValue} />
          <ContainerValue
            inssBase={inssBase}
            irpfBase={irpfBase}
            realSalary={realSalary}
            discountIrpf={discountIrpf}
            discountInss={discountInss}
          />
          <ProgressBar inssPercentage={inssPercentage} irpfPercentage={irpfPercentage} />
        </div>
      </div>


    );
  }
}

export default App;
