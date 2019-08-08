import React, { FC } from 'react';

import Text from '@/components/common/Text';

import content from '../content';

const { photosText } = content;

/**
 * Helper of the photos input.
 */
const PhotosText: FC<any> = ({ t }) => (
  <>
    <Text>{t(photosText[0])}</Text>
    <Text color="gray">{t(photosText[1])}</Text>
    <Text color="gray">{t(photosText[2])}</Text>
    <Text color="gray">{t(photosText[3])}</Text>
  </>
);

export default PhotosText;
