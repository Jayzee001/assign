import React from 'react'
import { products } from './product'

const Name = ({product}) => {
  return (
    <div>
        {
        products.map((products, i) => (
        <h3 key={i}>{ products.name}</h3>
        ))
    }
    </div>
  )
}

export default Name
