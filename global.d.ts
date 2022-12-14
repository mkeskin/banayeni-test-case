/// Define global types in here

import { HTMLAttributes, ButtonHTMLAttributes, ImgHTMLAttributes } from 'react'

type Attributes<T> = T extends HTMLButtonElement
  ? ButtonHTMLAttributes<HTMLButtonElement>
  : T extends HTMLSpanElement
  ? HTMLAttributes<HTMLSpanElement>
  : T extends HTMLImageElement
  ? ImgHTMLAttributes<HTMLImageElement>
  : HTMLAttributes<T>
