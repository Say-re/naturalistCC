// @flow

import CORE from '../../css/core';

export const appendCoreStyles = (): void => {
  const head = document.getElementsByTagName('head');
  if (head && head !== null) {
    const id = 'intelCoreCSS';
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = id;
    style.innerHTML = CORE;
    head[0].appendChild(style);
  }
};

export default appendCoreStyles;
