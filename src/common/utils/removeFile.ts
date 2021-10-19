import fs from 'fs'
import { join } from 'path'

const removeFile = (fileName?: string, subFolder?: string) => {
    if (!fileName) return false
    const folder = join(__dirname, '..', '..', 'uploads')
    const filePath = subFolder
        ? join(folder, subFolder, fileName)
        : join(folder, fileName)

    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath)
    }
    return true
}

const removeFilePath = (path: string) => {
    if (!path) return false

    if (fs.existsSync(path)) {
        fs.unlinkSync(path)
    }
    return true
}

export { removeFile, removeFilePath }
