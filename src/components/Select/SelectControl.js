import PropTypes from 'prop-types';
import styled from 'styled-components';

import newTheme from '../../themes/new';

const propTypes = {
  theme: PropTypes.object
};

const defaultProps = {
  theme: newTheme
};

const SelectControl = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.grayShade};
  border-radius: 3px;
  color: ${(props) => props.theme.colors.brandBlueRegular};
  height: 32px;
  padding-left: 12px;
  padding-right: 24px;
  position: relative;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.brandBlueRegular};
  }
`;

SelectControl.propTypes = propTypes;
SelectControl.defaultProps = defaultProps;

export default SelectControl;
