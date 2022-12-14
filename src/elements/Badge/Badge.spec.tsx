import { render } from '@testing-library/react'

import Badge from './Badge'

describe('Element: Badge', () => {
  it('render a badge and test the content', () => {
    const { container } = render(<Badge>Success!</Badge>)

    expect(container).toHaveTextContent(/success/i)
  })
})
