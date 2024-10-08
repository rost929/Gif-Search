import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getImages = async () => {
    setIsLoading(true);
    const newImages = await getGifs(category);
    setIsLoading(false);
    setImages(newImages);
  };

  useEffect(() => {
    if (category) getImages();
  }, []);

  return {
    images,
    isLoading
  };
};
