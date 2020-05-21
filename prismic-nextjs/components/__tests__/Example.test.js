import { render } from '@testing-library/react';
import Example from '../Example';

describe('<Example />', () => {
  test('example test', () => {
    const { container } = render(<Example />);
    expect(container).toHaveTextContent('Welcome to Next.js!');
  });
});
