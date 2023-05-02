import React from 'react'
import Games from '../Games/Games'
import UseFetch from '../UseFetch/UseFetch'

export default function All() {
    const {all}= UseFetch()
  return (
    <>
    <Games items={all}/>
    </>
  )
}
