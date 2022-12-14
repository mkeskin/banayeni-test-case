import { forwardRef } from 'react'
import cx from 'clsx'

import styles from './Badge.module.scss'
import type { BadgeProps } from './types'

const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <span ref={ref} className={cx(styles.badge, className)} {...rest}>
      {children}
    </span>
  )
})

Badge.displayName = 'Badge'

export default Badge
