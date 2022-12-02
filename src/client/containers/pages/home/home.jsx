// @flow
import React from 'react';
import type { Element } from 'react';

// SVGS
import HomePageSvg from './nccWebsite-white.svg';

// Styles
import { HomePageWrapper } from '../../../styled/home';

const Home = (): Element<*> => {
  return (
    <HomePageWrapper>
      <HomePageSvg />
    </HomePageWrapper>
  );
};

export default Home;
