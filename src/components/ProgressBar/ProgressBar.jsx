import React, { Component } from 'react'
import css from './style.module.css'
import Constants from '../../helpers/Constants'
import { sumValuesFloat } from '../../helpers/functions'
export default class ProgressBar extends Component {


  render() {

    const { inssPercentage, irpfPercentage } = this.props

    return (


      <div style={
        {
          background: isNaN(inssPercentage) ?
            `linear-gradient(to right, ${Constants.salaryColor} ${0}%,
            ${Constants.salaryColor} ${100}%)` :

            `linear-gradient(to right, ${Constants.inssColor} ${0}%,
            ${Constants.inssColor} ${inssPercentage}%,
            ${Constants.iprfColor} ${inssPercentage}%, ${Constants.iprfColor} ${sumValuesFloat(irpfPercentage, inssPercentage)}%,
            ${Constants.salaryColor} ${sumValuesFloat(irpfPercentage, inssPercentage)}%, ${Constants.salaryColor} ${100}%)`


        }
      } className={css.progressBar}></div>
    )
  }
}
