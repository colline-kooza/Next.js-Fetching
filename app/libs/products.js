import React from 'react'

export default async function getData() {
  const response=await fetch("https://fakestoreapi.com/products?limit=10")
  return await response.json()
  
}
