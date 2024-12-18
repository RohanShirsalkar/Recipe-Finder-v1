const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dcvz0ffnm",
  api_key: "258938177377992",
  api_secret: "1v8_z6qbK6UMwpMEG21Qz-WhVNo",
});

const uploadOnCloudinary = async (path) => {
  try {
    if (!path) {
      return null;
    }
    // upload process
    const response = await cloudinary.uploader.upload(path, {
      resource_type: "auto",
    });

    // on upload
    console.log("file uploaded", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(path);
    return null;
  }
};

export { uploadOnCloudinary };
