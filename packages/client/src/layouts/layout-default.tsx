import * as React from 'react'
import { Footer, Header } from '../components'

export const Default: React.FC = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}
