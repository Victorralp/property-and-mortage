import { Cloudinary } from 'cloudinary-core';

const cloudinary = new Cloudinary({
  cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  secure: true
});

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
  formData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export const getOptimizedImageUrl = (publicId, options = {}) => {
  const defaultOptions = {
    quality: 'auto',
    fetch_format: 'auto',
    width: options.width || 800,
    height: options.height || 600,
    crop: options.crop || 'fill',
    ...options
  };

  return cloudinary.url(publicId, defaultOptions);
};

export const getThumbnailUrl = (publicId) => {
  return getOptimizedImageUrl(publicId, {
    width: 400,
    height: 300,
    crop: 'fill'
  });
};

export default cloudinary;
