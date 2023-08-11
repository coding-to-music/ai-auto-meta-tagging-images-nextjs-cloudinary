const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  folder_name: process.env.CLOUDINARY_FOLDER_NAME,
});

// const folder_name = process.env.CLOUDINARY_FOLDER_NAME;

// console.log('cloud_name', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
// console.log('api_key', process.env.CLOUDINARY_API_KEY);
// console.log('api_secret', process.env.CLOUDINARY_API_SECRET);
// console.log('folder_name', folder_name);

export default async function handler(req, res) {
  const { image } = JSON.parse(req.body);
  const results = await cloudinary.uploader.upload(image, {
    categorization: "google_tagging",
    auto_tagging: 0.6,
  });
  res.status(200).json(results);
}
