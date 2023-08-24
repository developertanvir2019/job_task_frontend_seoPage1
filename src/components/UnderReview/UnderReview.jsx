import React from 'react'
import CommonCard from '../CommonCard/CommonCard'

const UnderReview = () => {
    return (
        <div className='incomplete_card'>

            {/* Header */}
            <div className='flex justify-between px-2 items-center py-3'>
                <div className="capsule-container">
                    <span className="text font-semibold text-gray-500">Under Review</span>
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
            </div>
        </div>
    )
}

export default UnderReview