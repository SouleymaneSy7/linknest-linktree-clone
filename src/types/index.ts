import * as React from 'react'
import { StaticImageData } from 'next/image'

export type ContainerTypes<T extends React.ElementType> = {
  as?: T
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<T>

export type ListPropsType<Item, As extends React.ElementType> = {
  items: Item[]
  renderItem: (item: Item) => React.ReactNode
  as?: As
}

export interface TitleProps extends React.HTMLAttributes<HTMLElement> {
  level: keyof React.JSX.IntrinsicElements
  children: React.ReactNode
}

export type VisuallyHiddenPropsType = {
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<'span'>

export type IconPropsType = {
  strokeWidth?: string
  stroke?: string
} & React.ComponentPropsWithoutRef<'svg'>

export interface ProfileInfoPropsType {
  profileName: string
  profileImg: StaticImageData
  profileWork: string
  profileBio: string
}

export interface ProfileLinksPropsType {
  linkList: {
    name: string
    title: string
    url: string
  }[]
}

export interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  cx?: number
  cy?: number
  cr?: number
  className?: string
  glow?: boolean
  [key: string]: unknown
}
