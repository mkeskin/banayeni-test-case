import type { ItemSellerBadgeProps } from './types'

import Link from 'next/link'
import Image from 'next/image'
import Rating from '@components/Rating'

const ItemSellerBadge = (props: ItemSellerBadgeProps) => {
  const { name, rating, href } = props

  return (
    <Link
      className="inline-flex items-center p-1 text-gray-800 rounded-md border border-gray-200"
      href={href}
    >
      <Image
        src="/images/user.svg"
        width={15}
        height={18}
        alt="user-icon"
        className="ml-1 mr-2"
      />
      Satıcı:&nbsp;<span className="font-bold mr-2">{name}</span>
      <Rating value={rating} />
    </Link>
  )
}

ItemSellerBadge.displayName = 'Item Seller Badge'

export default ItemSellerBadge
