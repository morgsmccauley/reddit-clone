import React from 'react';
import { Image as RNImage } from 'react-native';

import { IImage } from '../types/post';

interface Props {
  image: IImage;
}

const Image = ({ image }: Props) => (
  <RNImage
    style={{ height: image.height, width: image.width }}
    resizeMode="contain"
    source={{ uri: image.url }}
  />
);

export default Image;
