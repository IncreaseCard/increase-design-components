import styled from 'styled-components';
import PropTypes from 'prop-types';

import newTheme from '../../themes/new';

const SwitchWrapper = styled.div`
  position: relative;
  height: 15px;
  width: 25px;
  border: 1px solid
    ${(props) => (props.value ? props.theme.colors.brand.green[500] : props.theme.colors.gray[300])};
  background-color: ${(props) =>
    props.value ? props.theme.colors.brand.green[500] : props.theme.colors.white[100]};
  border-radius: 8px;
  box-sizing: border-box;
  margin: 1px;
`;

SwitchWrapper.propTypes = {
  theme: PropTypes.object,
  value: PropTypes.bool
};

SwitchWrapper.defaultProps = {
  theme: newTheme,
  value: false
};

export default SwitchWrapper;
