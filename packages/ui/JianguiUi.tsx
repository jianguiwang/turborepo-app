import * as React from 'react'

interface Props {
  children?: React.ReactNode
}

export const JianguiUi = ({ children }: Props) => {
  return (
    <div>
      <h1>jiangui-ui</h1>
      {children}
    </div>
  )
}
export const boo = '1'
