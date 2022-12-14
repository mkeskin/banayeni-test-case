import { render, getByText } from '@testing-library/react'

import Breadcrumb from './Breadcrumb'

describe('Element: Breadcrumb', () => {
  it('render a breadcrumb and test the children', async () => {
    const { container } = render(<Breadcrumb items={[]} />)

    const home = getByText(container, 'Home')
    expect(container).toContainElement(home)
  })
})
