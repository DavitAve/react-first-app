import { useState } from "react";

const useImageUpload = (handleChange) => {
  const [imageData, setImageData] = useState(null);

  const readImageFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const img = {
        name: file.name,
        size: file.size,
        type: file.type,
        dataURL: reader.result,
      };
      setImageData(img);
      handleChange && handleChange(img);
    };

    reader.readAsDataURL(file);
  };

  return [imageData, readImageFile];
};

export default useImageUpload;
