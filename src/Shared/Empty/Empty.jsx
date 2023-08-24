import React from 'react'
import emptyimg from '../../assets/Images/empty.png'

export const Empty = () => {
  return (
    <div className='flex items-center justify-center'>
      <img className='w-1/2' src={emptyimg} alt="empty" />
    </div>
  )
}
