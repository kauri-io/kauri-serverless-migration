import initUppy from '../../lib/init-uppy'
const config = require('../../config').default

const TriggerImageUploader = (
    setFieldsValue: any,
    fieldName: any,
    callback?: any
) => {
    const uppy = initUppy({ allowGifs: false, trigger: '.image-upload' })
    uppy.on('upload-success', (file, { hash }) => {
        console.log(file, hash)
        if (setFieldsValue && fieldName) {
            setFieldsValue({
                [fieldName]: {
                    background: `https://${config.getApiURL()}:443/ipfs/${hash}`,
                },
            })
        }
        if (callback)
            callback(file, `https://${config.getApiURL()}:443/ipfs/${hash}`)
    })
}

export default TriggerImageUploader
