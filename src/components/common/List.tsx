import * as React from 'react'

type ListPropsType<Item, As extends React.ElementType> = {
  items: Item[]
  renderItem: (item: Item) => React.ReactNode
  as?: As
}

function List<Item, As extends React.ElementType>({
  items,
  renderItem,
  as,
  ...delegatedProps
}: ListPropsType<Item, As> &
  Omit<React.ComponentPropsWithoutRef<As>, keyof ListPropsType<Item, As>>) {
  const Component = as ?? 'ul'

  return (
    <Component {...delegatedProps} role="list">
      {items.map(renderItem)}
    </Component>
  )
}

export default List
