import type { Attributes } from 'global'

export type ButtonProps = Attributes<HTMLButtonElement> & {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  rounded?: boolean
}
