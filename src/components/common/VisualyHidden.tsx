'use client'

import * as React from 'react'
import { VisuallyHiddenPropsType } from '@/types'

const VisualyHidden: React.FC<VisuallyHiddenPropsType> = ({
  children,
  ...delegatedProps
}) => {
  const [forceShow, setForceShow] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (event: KeyboardEvent): void => {
        if (event.key === 'Alt') {
          setForceShow(true)
        }
      }

      const handleKeyUp = (event: KeyboardEvent): void => {
        if (event.key === 'Alt') {
          setForceShow(false)
        }
      }

      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)

      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('keyup', handleKeyUp)
      }
    }
  }, [])

  if (forceShow) {
    return <React.Fragment>{children}</React.Fragment>
  }

  return (
    <span className="visually-hidden" {...delegatedProps}>
      {children}
    </span>
  )
}

export default VisualyHidden
