import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Scroll, GlobalHidden } from './styles';

export function Modal({ opened, children }) {
  return (
    <Container opened={opened} aria-hidden={!opened}>
      <GlobalHidden opened={opened} />
      <Scroll>
        <Content>{children}</Content>
      </Scroll>
    </Container>
  );
}

Modal.propTypes = {
  opened: PropTypes.bool,
  children: PropTypes.node,
};

Modal.defaultProps = {
  opened: false,
  children: <></>,
};

export default Modal;
