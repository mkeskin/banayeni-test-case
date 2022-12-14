import type { ItemDescriptionProps } from './types'

const ItemDescription = (props: ItemDescriptionProps) => {
  const { description } = props

  return (
    <span className="text-2xl leading-8 font-normal text-gray-800">
      {description}
    </span>
  )
}

ItemDescription.displayName = 'Item Description'

export default ItemDescription
