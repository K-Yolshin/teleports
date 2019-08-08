import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Root, { Props } from '../Root';

/**
 * LinkRoot element of the Link.
 */
const LinkRoot = styled(Link)<Props>`${Root}`;

export default LinkRoot;
