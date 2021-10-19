// export const formatCurrency = (value: string | number) => {
//   const intl = new Intl.NumberFormat('pt-BR', {
//     style: 'currency',
//     currency: 'BRL'
//   })

//   return intl.format(typeof value === 'string' ? Number(value) : value)
// }

export const formatCurrency = (text: string | number | undefined) => {
    if (!text || text === 'undefined') return '0,00'

    let value = `${typeof text === 'string' ? text : text.toFixed(2)}`
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d)(\d{2})$/, '$1,$2')
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.')

    return value
}
