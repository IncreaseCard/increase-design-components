import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import newTheme from '../../themes/new';
import RadioButtonFill from './RadioButtonFill';
import RadioButtonControl from './RadioButtonControl';
import RadioButtonControlWrapper from './RadioButtonControlWrapper';

const RadioButtonWrapper = styled.label`
  font-size: ${(props) => props.theme.typography.bodyFontSizes[0]};
  line-height: ${(props) => props.theme.typography.bodyLineHeights[0]};
  color: ${(props) => props.theme.colors.brandBlueRegular};
  font-family: ${(props) => props.theme.typography.bodyFontFamily};
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  ${(props) => {
    if (props.disabled) {
      return `
            opacity: 0.2;
          `;
    }
    return `
            &:hover {
              color: ${props.theme.colors.darkBlueRegular};
            }
          `;
  }};
`;

RadioButtonWrapper.propTypes = {
  theme: PropTypes.object
};

RadioButtonWrapper.defaultProps = {
  theme: newTheme,
  checked: false,
  readOnly: true
};

export const RadioButton = function({ label, name, disabled, ...other }) {
  return (
    <RadioButtonWrapper disabled={disabled}>
      <RadioButtonControlWrapper>
        <RadioButtonControl disabled={disabled} name={name} {...other} />
        <RadioButtonFill />
      </RadioButtonControlWrapper>
      {label}
    </RadioButtonWrapper>
  );
};

RadioButton.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

RadioButton.defaultProps = {
  disabled: false
};

export default RadioButton;
