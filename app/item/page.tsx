'use client'

import type { Item } from 'types/item'

import NextImage from 'next/image'
import { useEffect } from 'react'

import Breadcrumb from '@elements/Breadcrumb'
import List from '@elements/List'
import Badge from '@elements/Badge'
import Button from '@elements/Button'
import Image from '@elements/Image'
import Slider from '@components/Slider'
import ItemSellerBadge from '@components/ItemSellerBadge'
import ItemTitle from '@components/ItemTitle'
import ItemDescription from '@components/ItemDescription'
import ItemPrice from '@components/ItemPrice'

import useItemStore from '@store/item'
import { truncate } from '@utils/string'

const breadcrumbs = [
  {
    title: 'Elektronik',
    href: '#',
  },
  {
    title: 'Telefon',
    href: '#',
  },
  {
    title: 'Cep Telefonu',
    href: '#',
  },
  {
    title: 'Samsung Cep Telefonu',
    href: '#',
  },
]

const category = {
  title: 'Samsung',
  href: '#',
}

export default function ItemPage() {
  const [item, getItem] = useItemStore(
    (state) => [state.item, state.getItem] as const
  )

  useEffect(() => {
    getItem(1).then(({ itemName }) => {
      document.title = truncate(itemName)
    })
  }, [])

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-5 lg:mt-0 xl:col-span-4">
          <ImageGallery item={item} />
        </div>
        <div className="flex-auto lg:col-span-7 xl:col-span-8 mt-4 md-mt-0">
          <Details item={item} />
        </div>
      </div>
    </div>
  )
}

const ImageGallery = ({ item }: { item: Item | undefined }) => {
  const { sliderImage: images } = item || { sliderImage: [] }

  if (!item)
    return (
      <div className="after:content-[''] after:block after:pb-[100%] relative flex w-full">
        <div className="relative flex flex-1 animate-pulse">
          <div className="absolute w-full h-full bg-slate-100 rounded-lg"></div>
        </div>
      </div>
    )

  return (
    <Slider
      items={images!.map(({ imageUrl }, i) => (
        <Image
          className="rounded-lg"
          src={imageUrl}
          alt={`image-${i + 1}`}
          fill
          loader={({ src }) => src} // just to fix cors policy errors
          key={i}
        />
      ))}
    />
  )
}

const Details = ({ item }: { item: Item | undefined }) => {
  const {
    itemName,
    description: itemDescription,
    price,
    currencyTypeName,
    instalment,
    seller,
    tag: tags,
  } = item || {
    itemName: '',
    description: '',
    price: 0,
    currencyTypeName: '',
    instalment: '',
    seller: { name: '', rating: 0 },
    tag: [],
  }

  if (!item)
    return (
      <>
        <div className="flex w-96 h-5 bg-slate-100 rounded-sm"></div>
        <div className="my-4">
          <div className="block w-24 h-5 bg-slate-100 rounded-sm mb-2" />
          <div className="block w-96 h-6 bg-slate-100 rounded-sm mt-2"></div>
        </div>
        <div className="my-4">
          <div className="block w-64 h-5 bg-slate-100 rounded-sm"></div>
        </div>
      </>
    )

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <div className="my-4">
        <ItemTitle category={category} title={itemName} />
      </div>
      <div className="flex space-x-2 my-4">
        {tags.map(({ tagName, tagBackgroundColor, tagTextColor }) => (
          <Badge
            className="py-1.5"
            style={{
              background: `${tagBackgroundColor}`,
              color: `${tagTextColor}`,
            }}
            key={tagName}
          >
            {tagName === 'GARANTILI' && (
              <NextImage
                className="mr-1"
                src="/images/guarante.svg"
                width={13}
                height={16}
                alt="guarante"
              />
            )}
            {tagName}
          </Badge>
        ))}
      </div>
      <div className="mt-10 mb-6">
        <ItemDescription description={item.description} />
      </div>

      <ItemSellerBadge name={seller.name} rating={seller.rating} href="#" />

      <div className="mt-10">
        <ItemPrice
          amount={price}
          currencyType={currencyTypeName}
          discount={5}
        />
      </div>

      <List
        className="mt-10"
        items={[
          <>
            <NextImage
              src="/images/shipping-box.svg"
              width={23}
              height={23}
              alt=""
            />
            <span>Ücretsiz Kargo</span>
          </>,
          <>
            <NextImage
              src="/images/credit-card.svg"
              width={23}
              height={23}
              alt=""
            />
            <span className="border-b border-gray-800" role="button">
              {instalment}
            </span>
          </>,
          <>
            <NextImage
              src="/images/money-guard.svg"
              width={23}
              height={23}
              alt=""
            />
            <span className="border-b border-gray-800" role="button">
              Paran Güvende
            </span>
          </>,
        ]}
      />
      <div className="flex space-x-4 mt-14">
        <Button className="!py-0 !px-3 !bg-gray-100 !border-gray-100" rounded>
          <NextImage
            src="/images/share.svg"
            width={24}
            height={22}
            alt="share"
          />
        </Button>
        <Button className="!py-0 !px-3 !bg-gray-100 !border-gray-100" rounded>
          <NextImage
            src="/images/heart.svg"
            width={24}
            height={22}
            alt="like"
          />
        </Button>
        <Button className="!bg-gray-800 !text-white !px-10" size="xl">
          Hemen Al
        </Button>
      </div>
    </>
  )
}
