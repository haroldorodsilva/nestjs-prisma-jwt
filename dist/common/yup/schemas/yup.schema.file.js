"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yupFile = void 0;
const Yup = require("yup");
const FILE_SIZE = 20 * 1024 * 1024;
const SUPPORTED_FORMATS = [
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'image/png',
    'application/pdf'
];
const yupFile = (required) => {
    const schema = Yup.mixed()
        .test('fileSize', `Tamanho do arquivo deve ser menor ou igual a ${FILE_SIZE / 1024 / 1024}mb`, (value) => !value || value.size <= FILE_SIZE)
        .test('fileFormat', 'Formato de arquivo inválido. Envie apenas imagens ou PDF!', (value) => !value || SUPPORTED_FORMATS.includes(value.type));
    if (required)
        return schema.required('Adicione uma imagem ou PDF');
    return schema;
};
exports.yupFile = yupFile;
//# sourceMappingURL=yup.schema.file.js.map