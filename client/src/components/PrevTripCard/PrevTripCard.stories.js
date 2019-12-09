import React from 'react';
import { storiesOf } from '@storybook/react';
import PrevTripCard from './PrevTripCard';

storiesOf('PrevTripCard', module)
  .add("Default", () => (
    <PrevTripCard to="/route" />
  )
)
