import React, {useState} from 'react';
import {DashboardHeader} from '../components/dashboard/DashboardHeader.jsx'
import {ProgramProgress} from '../components/dashboard/ProgramProgress.jsx'
import {ProgramStats} from '../components/dashboard/ProgramStats.jsx'
import {CourseList} from '../components/dashboard/CourseList.jsx'
import {AuthModal} from '../components/auth/AuthModal.jsx'

export function App() {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    return <div className= " min-h-screen bg-gray-50 w-full" >
        <DashboardHeader onAuthClick ={() => setIsAuthModalOpen(true)}/>
        <main className= " container mx-auto px-4 py-8">
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left column - Program info */}
                <div className=" lg:col-span-2 space-y-6">
                    <ProgramProgress totalDays={1500} currentDays={375} />
                    <ProgramStats />
                    <CourseList />
                </div>
            </div>
        </main>
        {isAuthModalOpen && <AuthModal onClose={() => setIsAuthModalOpen(false)}/> }
    </div>
}