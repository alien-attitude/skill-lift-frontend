import React from 'react';
import {UsersIcon, BookOpenIcon, TrophyIcon, GraduationCapIcon} from "lucide-react";

export function ProgramStats() {
    const stats = [{
        id:1,
        name: "Active Students",
        value: '10,392',
        icon: UsersIcon,
        color: 'text-blue-500',
        bgcolor: 'bg-blue-100'
    }, {
        id:2,
        name: "Available Courses",
        value: '124',
        icon: BookOpenIcon,
        color: 'text-purple-500',
        bgcolor: 'bg-purple-100'
    }, {
        id:3,
        name: "Completion Rate",
        value: '94%',
        icon: TrophyIcon,
        color: 'text-green-500',
        bgcolor: 'bg-green-100'
    }, {
        id:4,
        name: "Job Placement",
        value: '87%',
        icon: GraduationCapIcon,
        color: 'text-orange-500',
        bgcolor: 'bg-orange-100'
    }
    ]
    return <div className=" bg-white rounded-lg shadow-lg p-6">

        <h2 className="text-xl font-bold text-gray-800">
            Program Statistics
        </h2>

        <div className=" grid grid-cols-2 gap-4  md:grid-cols-4 ">
            {stats.map(stat => <div key={stat.id} className=" bg-gray-50 rounded-lg p-4 ">
                <div className=" flex items-center ">
                    <div className={`${stat.bgcolor} p-3 rounded-full`} >
                        <stat.icon size={24} className= {stat.color} />
                        {/* <span className= {`${stat.color} font-semibold`}> {stat.value}</span>*/}
                    </div>
                    <div className= " ml-3 ">
                        <p className= " text-sm font-medium text-gray-500 "> {stat.name}</p>
                        <p className= " font-semibold text-gray-800 text-lg "> {stat.value}</p>
                    </div>
                </div>
            </div>)}
        </div>
    </div>;
}