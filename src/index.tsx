import * as React from 'react'
import type { ElementType, ReactNode } from 'react'

const isElementType = (thing: unknown): thing is ElementType => {
  return !Array.isArray(thing)
}

type componentWithProps =
  | [ElementType, Record<string, unknown>?]
  | ElementType

const composeComponents = (...components: componentWithProps[]) => ({
  children,
}: {
  children: ReactNode
}) =>
  components.reduceRight<JSX.Element>((child, component) => {
    let Component: ElementType,
      params: Record<string, unknown> | undefined

    if (isElementType(component)) Component = component
    else [Component, params] = component

    return <Component {...(params || {})}>{child}</Component>
  }, children as JSX.Element)

export default composeComponents
