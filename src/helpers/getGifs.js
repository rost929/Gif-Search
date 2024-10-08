
export const getGifs = async (category) => {
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=KmSZcRrDIfEyR54wiQzoeyiZzW7r6q7g&q=${category}&limit=${limit}`;

    const response = await fetch(url);

    const { data } = await response.json();
    console.log(data);

    const gifs = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        gifUrl: gif.images.downsized_medium.url

    }));

    console.log(gifs);
    return gifs
  };