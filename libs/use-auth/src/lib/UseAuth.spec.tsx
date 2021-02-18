import React from 'react';
import { render } from '@testing-library/react';

import UseAuth from './UseAuth';

describe('UseAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseAuth />);
    expect(baseElement).toBeTruthy();
  });
});
