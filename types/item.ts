type SliderImage = {
  imageUrl: string
}

type Tag = {
  tagName: string
  tagBackgroundColor: string
  tagTextColor: string
}

type Seller = {
  name: string
  description: string
  rating: number
  totalSold: number
}

export type Item = {
  id: string
  itemName: string
  price: number
  currencyTypeName: string
  instalment: string
  sliderImage: SliderImage[]
  description: string
  tag: Tag[]
  seller: Seller
}
