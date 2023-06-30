import getSingle from '@/app/libs/singleProduct'
import getProduct from '@/app/libs/singleProduct'
import Image from 'next/image'
import singleTemp from '@/components/SingleTemp'

import React from 'react'
import SingleTemp from '@/components/SingleTemp'

export default async function singleProduct({params:{id}}) {
    const product=await getSingle(id)
    // console.log(product)
  return (
    <div>
     <SingleTemp title={product.title} image={product.image} desc={product.description}        price={product.price}
/>
    </div>
  )
}
