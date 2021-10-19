type OptionsProps = {
  value: string
  label: string
}
export const getLabelFromOptions = (
  options: OptionsProps[],
  findValue: string | undefined
) => {
  const find = options.find(({ value }) => value === findValue)
  if (find) return find.label
  return ''
}
