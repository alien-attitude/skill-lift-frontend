import React from 'react';
import {DashboardHeader} from '../components/dashboard/DashboardHeader.jsx'
import {ProgramProgress} from '../components/dashboard/ProgramProgress.jsx'
import {ProgramStats} from '../components/dashboard/ProgramStats.jsx'
import {CourseList} from '../components/dashboard/CourseList.jsx'

export function App() {
    return <div>
        <DashboardHeader/>
        <main>
            <div>
                {/* Left column - Program info */}
                <div className=" lg:col-span-2 space-y-6">
                    <ProgramProgress totalDays={1500} currentDays={375} />
                    <ProgramStats />
                    <CourseList />
                </div>

            </div>
        </main>
    </div>
}