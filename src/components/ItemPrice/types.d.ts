export type ItemPriceProps = {
  amount: number
  currencyType: string
  discount?: number
  discountType?: 'percentage' | 'price'
}
