import type { ItemPriceProps } from './types'

import Link from 'next/link'
import { useMemo } from 'react'
import Rating from '@components/Rating'

const calculateDiscount = (
  amount: ItemPriceProps['amount'],
  discount: Required<ItemPriceProps>['discount'],
  discountType: ItemPriceProps['discountType'] = 'percentage'
) => {
  const price =
    discountType === 'percentage'
      ? amount - amount * (discount / 100)
      : amount - discount

  return price
}

const toLocalePrice = (price: number, currencyType: string) =>
  price.toLocaleString('tr-TR', {
    style: 'currency',
    currency: currencyCodes[currencyType as keyof typeof currencyCodes],
  })

const currencyCodes = {
  TL: 'TRY',
  USD: 'USD',
}

const ItemPrice = (props: ItemPriceProps) => {
  const { amount, discount, discountType = 'percentage', currencyType } = props

  const [main, fraction] = useMemo(() => {
    const price =
      discount && discount > 0
        ? calculateDiscount(amount, discount, discountType)
        : amount

    const localePrice = toLocalePrice(price, currencyType)

    return localePrice.split(/(.{3})\s*$/)
  }, [amount, currencyType, discount, discountType])

  const mainPrice = useMemo(
    () => toLocalePrice(amount, currencyType),
    [amount, currencyType]
  )

  const discountPrice = useMemo(() => {
    return !discount
      ? ''
      : discountType === 'percentage'
      ? `${discount}%`
      : `${toLocalePrice(discount, currencyType)} ${currencyType}`
  }, [currencyType, discount, discountType])

  return (
    <>
      <span className="block text-gray-800">
        <b className="text-4xl font-bold">{main}</b>
        <i className="text-xl font-bold not-italic">{fraction}</i>
      </span>
      {discount && (
        <span className="inline-flex items-center mt-4 bg-gray-100 rounded-full">
          <s className="bg-gray-200 line-through rounded-full py-2 px-4">
            {mainPrice}
          </s>
          <i className="not-italic pl-2 pr-6">{discountPrice} bizden olsun</i>
        </span>
      )}
    </>
  )
}

ItemPrice.displayName = 'Item Price'

export default ItemPrice
