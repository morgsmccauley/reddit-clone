import { Dimensions } from 'react-native';

import { IPost, IImage } from '../types/post';
import { prop, isEmpty } from '../utils/object';

const DEVICE_WIDTH = Dimensions.get('window').width;

const decodePreviewUrl = (url: string) => url.replace(/&amp;/g, '&');

const scaleImageHeightToDeviceWidth = (width: number, height: number) => {
  return DEVICE_WIDTH * (height / width);
};

const scaleAndSanitizeImage = (image: { url: string, width: number, height: number }) => ({
  url: decodePreviewUrl(image.url),
  width: DEVICE_WIDTH,
  height: scaleImageHeightToDeviceWidth(image.width, image.height),
});

const transformImage = (data: any): IImage | undefined => {
  const { source: image, variants } = prop(data, 'preview', 'images', 0);
  const gif = prop(variants, 'gif', 'source');
  if (!isEmpty(gif)) {
    return scaleAndSanitizeImage(gif);
  }
  if (!isEmpty(image)) {
    return scaleAndSanitizeImage(image);
  }
  return;
};

const transformPost = (rawPost: any): IPost => {
  const { data } = rawPost;
  return {
    title: data.title,
    id: data.id,
    author: data.author,
    totalComments: data.num_comments,
    score: data.score,
    image: transformImage(data),
  };
};

export const tranformPosts = (response: any): IPost[] => {
  const rawPosts = prop(response, 'data', 'children');
  return rawPosts.map(transformPost);
};
