import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ApiTemp({title,id,image,desc,price}) {
  return (
    <div className='products'>
    <Link href={`/product/${id}`} >
    <Image src={image} alt="" width={300} height={300} />
     <h2 className='line-clamp2'>{title}</h2>
     <p className='line-clamp'>{desc}</p>
     <p className='line-through' >${price}</p>
     <p >${price}</p>

    </Link>
    </div>
    
  )
}
