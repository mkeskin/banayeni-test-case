import type { RefObject } from 'react'

import Link from 'next/link'
import { useEffect, useRef, forwardRef } from 'react'
import cx from 'clsx'

import type { BreadcrumbProps } from './types'

const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>((props, ref) => {
  const { items, className, ...rest } = props

  const scrollableRef =
    useRef<HTMLOListElement>() as RefObject<HTMLOListElement>

  useEffect(() => {
    const scrollable = scrollableRef.current

    setTimeout(() => {
      // Slide the scroll to end of content for
      // showing last breadcrumb item on mobile screens
      if (scrollable) scrollable.scrollLeft = scrollable.scrollWidth
    }, 200)
  }, [])

  return (
    <nav
      ref={ref}
      className={cx(className, 'flex items-center relative')}
      {...rest}
      aria-label="Breadcrumb"
    >
      <span className="block sm:hidden absolute left-0 h-full w-[42px] bg-gradient-to-r from-transparent to-white opacity-90" />
      <Link href="#" className="fill-gray-400 hover:fill-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="14"
          viewBox="0 0 13.003 14"
        >
          <g>
            <path
              d="M281.688,386.482a1.232,1.232,0,0,1,.358.867l-.018,2.483h-3.273l.018-2.483a1.218,1.218,0,0,1,.358-.867,1.232,1.232,0,0,1,.867-.358h.82A1.232,1.232,0,0,1,281.688,386.482Z"
              transform="translate(-273.89 -375.832)"
              fillRule="evenodd"
            ></path>
            <path
              d="M131.852,35.906v7.237a2,2,0,0,1-2,2h-1.5V42.635a2.511,2.511,0,0,0-2.5-2.5h-1a2.512,2.512,0,0,0-2.5,2.5v2.507h-1.5a2,2,0,0,1-2-2V35.906a2,2,0,0,1,.954-1.7l4.5-2.765a2,2,0,0,1,2.1,0l4.5,2.765a1.991,1.991,0,0,1,.954,1.7Z"
              transform="translate(-118.849 -31.142)"
              fillRule="evenodd"
            ></path>
          </g>
        </svg>
        <span className="sr-only">Home</span>
      </Link>
      <svg
        className="h-5 w-5 flex-shrink-0 text-gray-400"
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
      <ol
        ref={scrollableRef}
        role="list"
        className="flex items-center space-x-1 overflow-x-scroll no-scrollbar scroll-smooth"
      >
        {items.map(({ title, href }, i) => (
          <li className="flex shrink-0 items-center" key={`${i}-${href}`}>
            {i > 0 && (
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-400"
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
            )}
            <Link
              href={href}
              className="lg:ml-1 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              {title}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
})

Breadcrumb.displayName = 'Breadcrumb'

export default Breadcrumb
