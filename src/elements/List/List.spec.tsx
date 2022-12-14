import { render, getByText } from '@testing-library/react'

import List from './List'

describe('Element: List', () => {
  it('render a list and test the children', async () => {
    const { container } = render(<List items={[<p key={0}>Test Item</p>]} />)

    expect(container).toContainHTML('<p>Test Item</p>')
  })
})
