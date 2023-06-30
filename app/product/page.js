"use client"
import React from 'react'
import getData from '../libs/products'
import ApiTemp from '@/components/ApiTemp'
import Link from 'next/link'

export default async function displayProducts() {
    const data=await getData()
  return (
    <div className='main'>
        <div className='text'>
            <h2>Flash Sales</h2>
            <h4 className='time'>Time Left: 00h:55:03s</h4>
            <Link href="">See All</Link>
        </div>
        <div className='products'>
        {
        data.map((product)=>(
        <ApiTemp title={product.title} desc={product.description}
      image={product.image}     
      price={product.price}
        id={product.id}
        key={product.id}
        />
            ))
        }
        </div>
      
    </div>
  )
}
