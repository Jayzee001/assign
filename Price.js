import React from 'react'
import { products } from './product'


const Price = ({product}) => {
  return (
    <div>
        {
              products.map((products, i) => (
                <p key={i} ><b>${ products.price}</b></p>
        ))
    }
    </div>
  )
}

export default Price
