import React from 'react'
import './Incomplete.css'

const Incomplete = () => {
    return (
        <div className='incomplete_card'>

            {/* Header */}
            <div className='flex justify-between px-3 items-center'>
                <div className="capsule-container">
                    <div className="capsule"></div>
                    <span className="text font-semibold text-gray-500">Incomplete</span>
                </div>
                <h3 className='text-xl font-semibold text-gray-600'>0</h3>
            </div>

            {/* all card part */}


        </div>

    )
}

export default Incomplete