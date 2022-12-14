'use client'

import { useEffect } from 'react'

export default function IndexPage() {
  useEffect(() => {
    window.location.href = '/item'
  }, [])

  return <></>
}
