import React from 'react';
import {CalendarIcon, AwardIcon} from 'lucide-react';
import PropTypes from 'prop-types';

export function ProgramProgress({totalDays, currentDays}) {
    const progressPercentage = Math.min(Math.round(currentDays / totalDays * 100), 100);
    return <div className=" bg-white rounded-lg shadow-lg p-6">

        <div className = "flex items-center justify-between mb - 4">
            <h2 className= "text-xl font-bold text-gray-800 "> Program Progress</h2>
            <div className= "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium ">
                Day {currentDays} of {totalDays}
            </div>
        </div>

        <div className= "mb-2 flex items-center justify-between ">
            <span className= "text-sm font-medium text-gray-700 ">
                {progressPercentage}% Complete
            </span>
            <span className= " text-sm font-medium text-gray-500 ">
                {totalDays - currentDays} Days Left
            </span>
        </div>

        <div className= " w-full bg-gray-200 rounded-full h-2.5 ">
            <div className= " bg-blue-600 h-2.5 rounded-full " style={{width: `${progressPercentage}%`}}></div>
        </div>

        <div className= " mt-6 grid grid-cols-2 gap-4 ">
            <div className= " bg-gray-50 rounded-lg p-4 ">
                <div className=" flex items-center ">
                    <div className= " bg-blue-100 p-2 rounded-full ">
                        <CalendarIcon size={24} className= " text-blue-600 " />
                    </div>
                    <div className= " ml-3 ">
                        <p className= " text-sm font=medium text-gray-500 "> Start Date</p>
                        <p className= " font-semibold text-gray-800 "> June 15, 2023</p>
                    </div>
                </div>
            </div>

            <div className= " bg-gray-50 rounded-lg p-4 ">
                <div className= " flex items-center ">
                    <div className= " bg-green-100 p-2 rounded-full ">
                        <AwardIcon size={24} className= "text-green-600 " />
                    </div>
                    <div className= " ml-3 ">
                        <p className= " text-sm font-medium text-gray-500 "> Completion Date</p>
                        <p className= " font-semibold text-gray-800 vgggg "> June 23, 2027</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;

}

ProgramProgress.propTypes = {
        totalDays: PropTypes.number.isRequired,
        currentDays: PropTypes.number.isRequired
}