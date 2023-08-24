import React from 'react'
import { Triangle } from 'react-loader-spinner'

export const Loader = () => {
    return (
        <div className='h-full flex items-center justify-center'>
            <Triangle
                height="80"
                width="80"
                color="#020024"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}
