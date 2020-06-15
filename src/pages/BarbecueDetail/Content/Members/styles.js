import styled, { css } from 'styled-components';

export const Container = styled.ul`
  ${p => p.isLoading && css`
    opacity: 0.5;
  `}
`;

export const AddMember = styled.button``;

export const AddMemberIcon = styled.img``;

export const AddMemberText = styled.span``;
