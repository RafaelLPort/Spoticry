

export const getYouTubeThumbnail = (url) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    return '';
  };
  