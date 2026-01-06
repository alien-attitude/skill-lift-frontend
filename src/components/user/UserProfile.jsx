import React from 'react';
import {MailIcon, Calendar1Icon, AwardIcon} from "lucide-react";

export function UserProfile() {
    return <div className= " bg-white rounded-lg shadow overflow-hidden">
        <div className= " bg-gradient-to-r from-blue-500 to-blue-600 h-32 "> </div>
            <div className= " px-6 pb-6 ">
                <div className= " flex flex-col sm:flex-row items-start sm:items-end -mt-16 mb-4 ">
                    <div className= " w-32 h-32 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center text-4xl font-bold text-gray-600 ">
                        JD
                    </div>

                    <div className= " mt-4 sm:mt-0 sm:ml-6 flex-grow ">
                        <h1 className= " text-2xl font-bold text-gray-800 ">John Doe</h1>
                        <p className= " text-gray-500 ">Full Stack Web Developer in Training</p>
                    </div>

                    {/*<div className= " mt-4 sm:mt-0 sm:ml-4 ">
                        <span className= " inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 ">
                            <AwardIcon size={16} className= " mr-2 " /> Pro Access Plan
                        </span>
                    </div>*/}
                </div>

                <div className= " grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 ">
                    <div className= " flex items-center text-gray-600 ">
                        <MailIcon size={18} className= "mr-2" />
                        <span className=" text-sm ">john.doe@email.com</span>
                    </div>

                    <div className= " flex items-center text-gray-600 ">
                        <Calendar1Icon size={18} className= "mr-2" />
                        <span className=" text-sm ">Joined June 15, 2023</span>
                    </div>

                    <div className= " flex items-center text-gray-600 ">
                        <AwardIcon size={18} className= "mr-2" />
                        <span className=" text-sm ">375 days of learning</span>
                    </div>
                </div>
            </div>
    </div>
}