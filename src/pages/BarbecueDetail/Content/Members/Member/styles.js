import styled, { css } from 'styled-components';
import { pxToRem } from 'logic/pxToRem';
import { COLORS } from 'visual/constants';

export const Container = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid ${COLORS.goldLight};
`;

export const LeftColumn = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const TogglePaid = styled.button`
  width: ${pxToRem(25)};
  height: ${pxToRem(25)};
  border-radius: ${pxToRem(25)};
  font-size: 0;
  border: none;
  border: ${pxToRem(2)} solid;
  color: transparent;
  background-color: transparent;
  margin-right: ${pxToRem(20)};
  outline: none;
  flex-shrink: 0;

  ${p => p.paid && css`
    background-color: ${COLORS.primary};
  `}

  ${p => !p.paid && css`
    border-color: ${COLORS.gold};
  `}
`;

export const Name = styled.button`
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(21)};
  line-height: ${pxToRem(25)};
  color: ${COLORS.dark};
  background-color: transparent;
  border: none;
  width: 100%;
  text-align: left;
`;

export const Budget = styled(Name)`
  flex-shrink: 0;
  width: auto;

  ${p => p.paid && css`
    text-decoration: line-through;
  `}
`;
