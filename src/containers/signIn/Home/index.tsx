import React from 'react';

import Component from '@/components/common/Home';

import TravelAgent from './TravelAgent';
import Customer from './Customer';
import Shipper from './Shipper';

/**
 * Container of the links to specific sign in pages.
 */
const Home = () => (
  <Component>
    <Shipper />
    <TravelAgent />
    <Customer />
  </Component>
);

export default Home;
