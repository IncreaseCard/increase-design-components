import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import newTheme from '../../themes/new';

const e = React.createElement;
export const Heading = styled(({ size, children, ...props }) => e(`h${size}`, props, children))`
  margin: 0;
  font-family: ${(props) => props.theme.typography.titleFontFamily};
  font-size: ${(props) => props.theme.typography.headingFontSizes[props.size - 1]};
  line-height: ${(props) => props.theme.typography.headingLineHeights[props.size - 1]};
  font-weight: 600;
`;

Heading.propTypes = {
  size: propTypes.oneOf([1, 2, 3, 4, 5, 6])
};

Heading.defaultProps = {
  theme: newTheme
};

export default Heading;
