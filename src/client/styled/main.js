// @flow
import styled from 'styled-components';
import COLORS from './configs/colors';

export const PageWrapper: string = styled('div')`
  background-color: ${COLORS.mainDark};
  ${(props: { windowHeight: string}) => props.windowHeight && `min-height: ${props.windowHeight}px;`};
`;

export const HeaderWrapper: string = styled('div')`
  background-color: ${COLORS.mainLight};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px 0px;
  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;
    &:first-child {
      padding-left: 35px;
    }
    &:last-child {
      padding-right: 35px;
    }
    > div {
      display: flex;
      align-items: flex-end;
      > h3 {
        margin-right: 16px;
        font-size: 1.5rem;
      }
    }
  }
`;

export const IconWrapper: string = styled('p')`
  font-size: 42px;
  letter-spacing: 1px;
  padding: 15px 5px;
  border: 3px solid #FFF;
  background-color: ${COLORS.main};
  font-weight: 500;
  color: #FFF;
`;
