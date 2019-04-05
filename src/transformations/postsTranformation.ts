import { Dimensions } from 'react-native';

import { IPost } from '../types/post';

const R = require('ramda');

const DEVICE_WIDTH = Dimensions.get('window').width;

const decodePreviewUrl = R.pipe(
  R.prop('url'),
  R.replace(/&amp;/g, '&'),
);

const scaleImageHeightToDeviceWidth = ({
  width,
  height,
}: { width: number, height: number }) => {
  return DEVICE_WIDTH * (height / width);
};

const transformPreviewImage = R.pipe(
  R.path(['preview', 'images']),
  R.head,
  R.prop('source'),
  R.applySpec({
    width: R.always(DEVICE_WIDTH),
    height: scaleImageHeightToDeviceWidth,
    url: decodePreviewUrl,
  }),
);

const tranformPost = R.map(
  R.pipe(
    R.prop('data'),
    R.applySpec({
      title: R.prop('title'),
      id: R.prop('id'),
      author: R.prop('author'),
      totalComments: R.prop('num_comments'),
      score: R.prop('score'),
      image: transformPreviewImage,
    }),
  ),
);

export const tranformPosts: (response: Object) => IPost[] = R.pipe(
  R.path(['data', 'children']),
  tranformPost,
);
