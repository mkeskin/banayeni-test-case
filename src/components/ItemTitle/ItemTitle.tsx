import type { ItemTitleProps } from './types'

import Link from 'next/link'
import Badge from '@elements/Badge'

const ItemTitle = (props: ItemTitleProps) => {
  const { title, category } = props

  return (
    <>
      <Link className="inline-flex items-center" href={category.href}>
        <span className="font-semibold text-gray-800">{category.title}</span>
        <svg
          className="h-5 w-5 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <h1 className="text-xl font-bold">{title}</h1>
    </>
  )
}

ItemTitle.displayName = 'Item Title'

export default ItemTitle
