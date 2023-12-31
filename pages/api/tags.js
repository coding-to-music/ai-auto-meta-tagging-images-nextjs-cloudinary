const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// console.log("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
// console.log("api_key", process.env.CLOUDINARY_API_KEY);
// console.log("api_secret", process.env.CLOUDINARY_API_SECRET);
// // console.log("folder_name", folder_name);

export default async function handler(req, res) {
  const tags = await cloudinary.api.tags({
    max_results: 50,
  });
  res.status(200).json(tags);
}
