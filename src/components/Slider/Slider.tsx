import { RefObject, useCallback } from 'react'
import type { SliderProps } from './types'

import { useEffect, useState, useRef } from 'react'
import cx from 'clsx'

const Slider = (props: SliderProps) => {
  const { items } = props

  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    const cursor = current === items.length - 1 ? 0 : current + 1
    setCurrent(cursor)
  }, [current, items.length])

  const ref = useRef<HTMLDivElement>() as RefObject<HTMLDivElement>
  let timer = useRef<NodeJS.Timer | null>(null)

  useEffect(() => {
    const resetInterval = () => {
      if (timer.current) {
        clearInterval(timer.current)
        timer.current = null
      }
    }

    const startInterval = (ms: number) => {
      timer.current = setInterval(() => {
        if (timer.current) {
          next()
        }
      }, ms)
    }

    resetInterval()
    startInterval(5000)
  }, [next])

  return (
    <div className="after:content-[''] after:block after:pb-[100%] relative flex w-full">
      <div ref={ref} className="relative flex flex-1 w-fit overflow-hidden">
        {items.map((item, i) => (
          <div
            className={cx('absolute w-full h-full transition-opacity', {
              'opacity-1 ': current === i,
              'opacity-0': current !== i,
            })}
            key={i}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex space-x-2 absolute left-1/2 -translate-x-1/2 bottom-2 rounded-full py-1 px-1.5 bg-black/10">
        {[...Array(items.length)].map((_, i) => (
          <span
            className={cx('block w-2 h-2 bg-gray-200/50 rounded-full', {
              'bg-white': i === current,
              'bg-gray-200/50': i !== current,
            })}
            onClick={(event) => {
              event.preventDefault()
              setCurrent(i)
            }}
            role="button"
            key={i}
          />
        ))}
      </div>
    </div>
  )
}

Slider.displayName = 'Slider'

export default Slider
