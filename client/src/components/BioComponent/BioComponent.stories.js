import React from 'react';
import { storiesOf } from '@storybook/react';
import BioComponent from './BioComponent';

storiesOf('BioComponent', module)
  .add("Default", () => (
    <BioComponent />
  )
)
