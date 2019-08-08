import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Root, { Props } from '../Root';

/**
 * NavLinkRoot element of the Link.
 */
const LinkRoot = styled(NavLink)<Props>`${Root}`;

export default LinkRoot;
