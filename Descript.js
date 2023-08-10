import React from 'react'
import { products } from './product'

const Descript = ({product}) => {
  return (
    <div>
    {
              products.map((products, i) => (
                <div key={i}>{ products.description}</div>
        ))
    }
    </div>
  )
}

export default Descript
