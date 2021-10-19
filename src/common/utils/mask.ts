export const clearMaskNumber = (value?: string) => {
    if (value) return value.replace(/\D+/g, '')
    return ''
}

export const formatTelefone = (phone: string | undefined) => {
    if (!phone) return ''

    let mask = phone.replace(/\D/g, '')
    mask = mask.replace(/^0/, '')

    if (mask.length > 10) {
        return mask.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3')
    }

    if (mask.length > 5) {
        return mask.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3')
    }

    if (mask.length > 2) {
        return mask.replace(/^(\d\d)(\d{0,5})/, '($1) $2')
    }

    return mask.replace(/^(\d*)/, '($1')
}
