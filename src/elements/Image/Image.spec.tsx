import { render, screen, waitFor } from '@testing-library/react'
import type { Attributes } from 'global'

import Image from './Image'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: Attributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

describe('Element: Image', () => {
  it('render a image and test the correct src attribute', async () => {
    const alt = 'example-image-for-test'
    const src = '/images/mock/test.png'

    render(<Image src={src} alt={alt} width={100} height={100} />)

    const img = screen.getByAltText(alt)
    const srcAttr = img.getAttribute('src')
    expect(srcAttr).toBe(src)
  })
})
