import React from 'react';
import PropTypes from 'prop-types';

import { Container, Icon, Text } from './styles';

export function InfoWithIcon({ icon, text }) {
  return (
    <Container>
      <Icon src={icon} aria-hidden />
      <Text>{text}</Text>
    </Container>
  );
}

InfoWithIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default InfoWithIcon;
