import React from 'react'

type ButtonPropsType = {
  children: React.ReactNode
  type: 'button' | 'submit'
} & React.ComponentPropsWithoutRef<'button'>

const Buttons: React.FC<ButtonPropsType> = ({
  children,
  type,
  ...delegatedProps
}) => {
  return (
    <button type={type} {...delegatedProps}>
      {children}
    </button>
  )
}

export default Buttons
