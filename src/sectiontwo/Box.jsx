import React from 'react'

const Box = ({ customer, num, rank }) => {

    return (
        <div className='p-7 bg-[#0b2545] flex flex-col rounded-lg text-[#f1f6f9] gap-[10px] text-xs w-60'>
            <span>{customer} </span>
            <span className='text-[#f78da7] text-4xl font-semibold'>{num}
            </span>
            <span>{rank}</span>
        </div>
    )
}

export default Box