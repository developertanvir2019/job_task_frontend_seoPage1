import React from 'react'
import CommonCard from '../CommonCard/CommonCard'
import './DoingCard.css'

const DoingCard = () => {
    return (
        <div className='incomplete_card'>

            {/* Header */}
            <div className='flex justify-between px-2 items-center py-3'>
                <div className="capsule-container">
                    <div className="capsule_todo"></div>
                    <span className="text font-semibold text-gray-500">Doing</span>
                </div>
                <h3 className='text-xl font-semibold text-gray-600'>0</h3>
            </div>

            {/* all card part */}
            <div className='all_card'>
                <CommonCard />
                <CommonCard />
                <CommonCard />
                <CommonCard />
                <CommonCard />
                <CommonCard />
                <CommonCard />
            </div>
        </div>
    )
}

export default DoingCard