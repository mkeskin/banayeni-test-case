import { forwardRef } from 'react'
import cx from 'clsx'

import styles from './Button.module.scss'
import type { ButtonProps } from './types'

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size = 'md',
    rounded = false,
    children,
    type = 'button',
    className,
    ...rest
  } = props

  return (
    <button
      ref={ref}
      type={type}
      className={cx(styles.button, className, {
        [styles.round]: rounded,
      })}
      {...rest}
      data-size={size}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
