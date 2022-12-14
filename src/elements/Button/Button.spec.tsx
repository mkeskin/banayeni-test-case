import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import Button from './Button'

describe('Element: Button', () => {
  it('render a button and test the click event', async () => {
    const handleClick = jest.fn()

    render(<Button onClick={handleClick}>Touch me</Button>)

    fireEvent.click(screen.getByText(/touch/i))
    await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1))
  })
})
