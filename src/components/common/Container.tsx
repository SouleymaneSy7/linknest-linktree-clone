import * as React from 'react'
import { ContainerTypes } from '@/types'

function Container<C extends React.ElementType>({
  as,
  children,
  ...delegatedProps
}: ContainerTypes<C>) {
  const Component = as || 'div'
  return <Component {...delegatedProps}>{children} </Component>
}

export default Container
