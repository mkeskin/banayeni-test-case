import { forwardRef } from 'react'
import cx from 'clsx'

import styles from './List.module.scss'
import type { ListProps } from './types'

const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => {
  const { items, className, ...rest } = props

  return (
    <ul ref={ref} className={cx(styles.list, className)} {...rest}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
})

List.displayName = 'List'

export default List
