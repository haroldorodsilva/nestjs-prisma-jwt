import * as Yup from 'yup'

const FILE_SIZE = 20 * 1024 * 1024

const SUPPORTED_FORMATS = [
  'image/jpg',
  'image/jpeg',
  'image/gif',
  'image/png',
  'application/pdf'
]

export const yupFile = (required: boolean) => {
  const schema = Yup.mixed()
    .test(
      'fileSize',
      `Tamanho do arquivo deve ser menor ou igual a ${
        FILE_SIZE / 1024 / 1024
      }mb`,
      (value) => !value || value.size <= FILE_SIZE
    )
    .test(
      'fileFormat',
      'Formato de arquivo inválido. Envie apenas imagens ou PDF!',
      (value) => !value || SUPPORTED_FORMATS.includes(value.type)
    )

  if (required) return schema.required('Adicione uma imagem ou PDF')

  return schema
}
