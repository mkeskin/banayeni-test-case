import type { Attributes } from 'global'

export type BreadcrumbItem = {
  title: string
  href: string
}

export type BreadcrumbProps = Omit<Attributes<HTMLDivElement>, 'children'> & {
  items: BreadcrumbItem[]
}
