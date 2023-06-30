import Image from 'next/image'
import React from 'react'

export default function SingleTemp({image,title,id,desc,price}) {
  return (
    <div className=''>
       
     <div className="singleProduct">
     <Image src={image} alt="" width={300} height={300} />
     <h2>{title}</h2>
     <p >{desc}</p>
     <p>{price}</p>
     </div>
    </div>
  )
}
