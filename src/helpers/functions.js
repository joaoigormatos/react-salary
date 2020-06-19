

function calcINSS(value) {
  let sum = 0.0;
  if (value <= 1045.00) {

    return value * 0.075
  }
  if (value > 6101.06) {
    return 713.10
  }
  if (value > 1045.00) {
    sum += (1045.00 * 0.075)

  }

  if (value >= 1045.01 && value <= 2089.60) {
    if (value === 1045.01) {
      sum += (value - 1045.0) * 0.09
    }
    else {
      sum += (value - 1045.01) * 0.09
    }
  } else if (value >= 2089.60) {
    sum += (2089.60 - 1045.01) * 0.09
  }

  if (value > 2089.61 && value <= 3134.40) {
    if (value === 2089.61) {
      sum += (value - 2089.60) * 0.12
    }
    else {

      sum += (value - 2089.61) * 0.12
    }
  } else if (value >= 3134.40) {
    sum += (3134.40 - 2089.61) * 0.12
  }


  if (value > 3134.41 && value <= 6101.06) {
    if (value === 3134.41) {
      sum += (value - 3134.40) * 0.14
    }
    else {

      sum += (value - 3134.41) * 0.14
    }
  }
  return sum;
}
function calcIRPF(valueAfterInss) {

  if (valueAfterInss <= 1903.98) return 0

  if (valueAfterInss >= 1903.99 && valueAfterInss <= 2826.65)
    return valueDiscountIPRF(valueAfterInss, 0.075, 142.80)

  else if (valueAfterInss >= 2826.66 && valueAfterInss <= 3751.05)
    return valueDiscountIPRF(valueAfterInss, 0.15, 354.80)

  else if (valueAfterInss >= 3751.06 && valueAfterInss <= 4664.68)
    return valueDiscountIPRF(valueAfterInss, 0.225, 636.13)

  else if (valueAfterInss >= 4664.69)
    return valueDiscountIPRF(valueAfterInss, 0.275, 869.36)


}
function calcValueLiquid(valueAfterInss, valueDeduction) {


  return valueAfterInss - valueDeduction

}
function valueDiscountIPRF(valueAfterInss, discountPercentage, deductionValue) {
  let valueDiscount = 0
  let valueDeduction = 0
  valueDiscount = valueAfterInss * discountPercentage
  console.log(valueDiscount)
  valueDeduction = valueDiscount - deductionValue
  console.log(valueDeduction)

  return valueDeduction
}

function calcPercentage(realValue, value) {
  return parseFloat((value * 100) / realValue).toFixed(2)
}
function sumValuesFloat(value, value2) {
  value = parseFloat(value)
  value2 = parseFloat(value2)

  console.log(value + value2)
  return value + value2
}

export { calcINSS, calcIRPF, calcValueLiquid, calcPercentage, sumValuesFloat }