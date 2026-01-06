import React from 'react'
import {UserHeader} from "../components/user/UserHeader.jsx";
import {UserProfile} from "../components/user/UserProfile.jsx";
import {CourseStatistics} from "../components/user/CourseStatistics.jsx";
import {ActiveCourses} from "../components/user/ActiveCourses.jsx";


export function UserDashboard() {
    return <div>
        <UserHeader/>

        <main className=" container mx-auto px-6 py-8 ">
            <UserProfile/>
            <div className= " grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 ">
                <div className= " lg:col-span-2 space-y-6 ">
                    <CourseStatistics/>
                    <ActiveCourses />
                </div>
            </div>
        </main>
    </div>

}