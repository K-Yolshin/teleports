import React from 'react';

import Root from './Root';
import Popup from './Popup';

interface Props {
  isShown: boolean;
  text: React.ReactText;
  children: React.ReactNode | React.ReactNodeArray;
}

const InputPopup = (p: Props) => (
  <Root>
    {p.children}
    {p.isShown && (
      <Popup>
        {p.text}
      </Popup>
    )}
  </Root>
);

export default InputPopup;
