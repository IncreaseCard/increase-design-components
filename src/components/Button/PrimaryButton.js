import newTheme from '../../themes/new';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  disabled: PropTypes.bool,
  href: PropTypes.string,
  tabIndex: PropTypes.number
};

const defaultProps = {
  disabled: false,
  theme: newTheme
};

const PrimaryButton = styled.button`
  border: none;
  display: inline-block;

  &:disabled {
    opacity: 0.2;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  font-size: ${(props) => props.theme.typography.bodyFontSizes[0]};
  line-height: ${(props) => props.theme.typography.bodyLineHeights[0]};
  white-space: nowrap;

  background-color: ${(props) => props.theme.colors.secondary.blue};
  border-radius: 3px;
  color: ${(props) => props.theme.colors.white};
  padding: 6px 20px;
  text-shadow: 0 1px 3px ${(props) => props.theme.colors.darkShadow};

  &:disabled {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.primary.blue};
    color: ${(props) => props.theme.colors.primary.blue};
    text-shadow: none;
  }
  &:hover:not([disabled]) {
    background-color: ${(props) => props.theme.colors.primary.blue};
  }
`;

PrimaryButton.propTypes = propTypes;
PrimaryButton.defaultProps = defaultProps;

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
