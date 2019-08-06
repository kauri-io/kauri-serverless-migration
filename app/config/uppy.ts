export default {
    debug: true,
    autoProceed: true,
    allowMultipleUploads: false,
    restrictions: {
        maxFileSize: 10000000,
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1,
        allowedFileTypes: [
            'image/*',
            'jpeg',
            'png',
            'images/*',
            'jpg',
            'image/jpeg',
            'image/png',
        ],
    },
}
