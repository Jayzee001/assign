import React from 'react'
import { products } from './product'
import './prod.css'

const Image = ({product}) => {
  return (
    <div className='contain'style ={{height:'355px', width:'240px'}}>
        {
              products.map((products, i) => (
                <div className='img' style ={{height:'355px', width:'240px'}} key={i}>
            <img src={ products.img} alt='img' />
                </div>
        ))
    }
    </div>
  )
}

export default Image
