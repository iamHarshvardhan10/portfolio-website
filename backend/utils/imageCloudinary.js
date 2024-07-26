import { v2 as cloudinary } from 'cloudinary'

export const imageCloudinary = async (file, folder, height, quality) => {
    const options = { folder }

    if (height) {
        options.height = height
    }

    if (quality) {
        options.quality = quality
    }

    options.resource_type = 'auto'
    console.log("Options", options)
    return await cloudinary.uploader.upload(file.tempFilePath, options)
}