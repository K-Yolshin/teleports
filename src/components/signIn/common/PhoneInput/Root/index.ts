import styled from 'styled-components';

import { Root as InputBox, Input } from '@/components/signIn/common/Input';
import { Text as Select } from '@/components/signIn/common/Select';

/**
 * Base layout of the Phone.
 */
const Root = styled.div`
  position: relative;

  display: flex;

  ${InputBox} {
    flex: 1 1 0%;
  }

  ${Input} {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-left: 0;
  }

  ${Select} {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
`;

export default Root;
