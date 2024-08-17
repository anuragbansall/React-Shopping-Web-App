import React from 'react'
import StarPng from '../assets/star.png'

function StarRating({ratingCount, totalVotes}) {

    const ratingArr = []
    for(let i=0; i<ratingCount; i++){
        ratingArr.push(<img src={StarPng} key={i} className='h-[1.3rem]' />)
    }

  return (
    <div className='flex gap-2 justify-start items-center h-[1.2rem] my-2'>
        <span className='flex gap-0.5'>{ratingArr}</span>
        <span>({totalVotes})</span>
    </div>
  )
}

export default StarRating