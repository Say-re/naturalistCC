// @flow
import styled from 'styled-components';
import COLORS from './configs/colors';

export const PageWrapper: string = styled('div')`
  background-color: ${COLORS.mainDark};
  ${(props: { windowHeight: string}) => props.windowHeight && `min-height: ${props.windowHeight}px;`};
  ${(props: { windowWidth: string}) => props.windowWidth && `min-width: ${props.windowWidth}px;`};
`;
