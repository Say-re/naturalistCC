// @flow
import React from 'react';
import type { Element } from 'react';

// STYLES
import { HeaderWrapper, IconWrapper } from '../../styled/main';

const Header = (): Element<*> => {
  return (
    <HeaderWrapper>
      <div>
        <div>
          <IconWrapper>NC<sub>2</sub></IconWrapper>
        </div>
        <div>
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Projects</h3>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
