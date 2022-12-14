import { ImageProps as NextImageProps } from 'next/image'

export type ImageProps = Omit<
  NextImageProps,
  'children' | 'loading' | 'style' | 'quality'
> & {}
