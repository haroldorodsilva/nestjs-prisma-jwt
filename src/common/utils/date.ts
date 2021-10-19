import { format, parseISO } from 'date-fns'

export const dateFormat = 'dd/MM/yyyy'
export const dateTimeFormat = 'dd/MM/yyyy HH:mm:ss'

export const formatDateTime = (
    value: string | Date | undefined,
    mask: string = dateTimeFormat
): string => {
    if (!value) return ''
    return format(typeof value === 'string' ? parseISO(value) : value, mask)
}
