import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Calendar from './Calendar';
import Currency from '../Currency/Currency';

storiesOf('Calendar', module).add('default', () => {
  const CalendarData = styled.div`
    ${(props) => (!props.inMonth ? 'opacity: 0.5' : null)};
    margin-bottom: 1px;
    padding: 4px;
  `;

  return (
    <div style={{ 'background-color': '#FAFAFA', padding: '8px' }}>
      <div style={{ width: '90%', margin: '0 auto' }}>
        <Calendar
          month={5}
          year={2018}
          renderDay={(date, inMonth) => (
            <React.Fragment>
              <CalendarData style={{ color: '#f79c31' }} inMonth={inMonth}>
                <Currency value={200 * Math.random()} />
              </CalendarData>
              <CalendarData style={{ color: '#2ca8df' }} inMonth={inMonth}>
                <Currency value={200 * Math.random()} />
              </CalendarData>
            </React.Fragment>
          )}
        />
      </div>
    </div>
  );
});
