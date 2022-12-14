import NextImage from 'next/image'
import { forwardRef } from 'react'
import cx from 'clsx'

import styles from './Image.module.scss'
import type { ImageProps } from './types'

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <NextImage
      ref={ref}
      className={cx(styles.image, className)}
      loading="lazy"
      style={{ objectFit: 'cover' }}
      quality={100}
      {...rest}
    />
  )
})

Image.displayName = 'Image'

export default Image
