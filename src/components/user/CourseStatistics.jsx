import React from 'react';
import {TrendingUpIcon, ClockIcon, BookOpenIcon, VideoIcon,
CodeIcon, CheckCircleIcon, CalendarIcon} from "lucide-react";

export function CourseStatistics() {
    const stats = [{
        id:1,
        label: "Overall Completion",
        value: '68%',
        icon: CheckCircleIcon,
        color: 'text-green-600',
        bgcolor: 'bg-green-100',
        trend: '+12%'
    }, {
        id:2,
        label: "Weeks Covered",
        value: '18/24',
        icon: CalendarIcon,
        color: 'text-blue-600',
        bgcolor: 'bg-blue-100',
        trend: '75%'
    }, {
        id:3,
        label: "Modules Completed",
        value: '42/60',
        icon: BookOpenIcon,
        color: 'text-purple-600',
        bgcolor: 'bg-purple-100',
        trend: '+70%'
    }, {
        id:4,
        label: "Videos Watched",
        value: '156/200',
        icon: VideoIcon,
        color: 'text-red-600',
        bgcolor: 'bg-red-100',
        trend: '71%'
    }, {
        id:5,
        label: "Projects Completed",
        value: '8/12',
        icon: CodeIcon,
        color: 'text-amber-600',
        bgcolor: 'bg-amber-100',
        trend: '67%'
    }, {
        id:6,
        label: "Study Hours Spent",
        value: '284h',
        icon: ClockIcon,
        color: 'text-indigo-600',
        bgcolor: 'bg-indigo-100',
        trend: '+45h'
    }];
    return <div className= " bg-white rounded-lg shadow-lg p-6 ">
        <div className= " flex items-center justify-between mb-6 ">
            <h2 className= " text-xl font-bold text-gray-800 "> Course Statistics</h2>
            <div className= " flex items-center text-sm text-green-600 font-medium space-x-2 ">
                <TrendingUpIcon size={16} className= "mr-1" />
                <span>On Track</span>
            </div>
        </div>

        <div className= " grid grid-cols-2 gap-4 mt-6 md:grid-cols-3 ">
            {stats.map(stat => <div key = {stat.id} className= " bg-gray-50 rounded-lg p-4 ">
                <div className= " flex items-start justify-between mb-2 ">
                    <div className={`${stat.bgcolor} p-2 rounded-lg`} >
                        <stat.icon size={20} className={stat.color} />
                    </div>
                    <span className= " text-xs font-medium text-green-600 ">
                        {stat.trend}
                    </span>
                </div>

                <p className= " text-2xl font-bold text-gray-800 ">
                    {stat.value}
                </p>
                <p className= " text-sm text-gray-500 ">
                    {stat.label}
                </p>
            </div>)}
        </div>
    </div>;
}