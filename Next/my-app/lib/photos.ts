const BASE_URL = 'https://jsonplaceholder.typicode.com';

export type TPhoto = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const getPhoto = async (photoId: number) => {
  const res = await fetch(`${BASE_URL}/photos/${photoId}`, {});
  const data = await res.json();
  return data as TPhoto;
};

export const getPhotos = async (albumId: number = 1) => {
  const res = await fetch(`${BASE_URL}/albums/${albumId}/photos`, {
    cache: 'force-cache', // SSG: 같은 url은 다시 부르지 않음
  });

  const data = await res.json();
  return data as TPhoto[];
};
