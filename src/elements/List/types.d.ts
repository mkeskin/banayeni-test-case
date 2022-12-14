import type { Attributes } from 'global'
import React from 'react'

export type ListProps = Omit<Attributes<HTMLUListElement>, 'children'> & {
  items: React.ReactNode[]
}
