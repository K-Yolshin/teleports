import React from 'react';
import styled from 'styled-components';
import getStyles from './getStyles';

// @ts-ignore;
import { IMaskInput } from 'react-imask';
import Props from './Props';

export const InputView = styled.input<Props>`${getStyles}`;
export const TextareaView = styled.textarea<Props>`${getStyles}`;
export const MaskInputView = styled(IMaskInput)<Props>`${getStyles}`;

const Input = (p: Props) => {
  if (p.isMultiline) return <TextareaView {...p} />;
  if (p.mask) return <MaskInputView {...p} />;
  return <InputView {...p} />;
};

export default Input;
