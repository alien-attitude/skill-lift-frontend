import React from 'react';
import { BellIcon, SettingsIcon, LogOutIcon, HomeIcon} from "lucide-react";
import { useNavigate } from 'react-router'

export function UserHeader() {
    const navigate = useNavigate();
    return <header className= " bg-white shadow ">
        <div className= " container mx-auto px-6 ">
            <div className=" flex items-center justify-between h-16 ">
                <div className= " flex items-center ">
                    <div className= " flex-shrink-0 ">
                        <span className= "text-blue-600 font-bold text-3xl ">
                            Skill Lift
                        </span>
                    </div>

                    <nav className= "hidden md:block ml-10 ">
                        <div className= "flex items-center space-x-4 ">
                            <a href= "#" className= " text-gray-900 hover:text-blue-600 px-3 rounded-md font-medium text-2xl ">
                                My Dashboard
                            </a>
                            <a href= "#" className= " text-gray-600 hover:text-blue-600 px-3 rounded-md font-medium text-lg ">
                                My Courses
                            </a>
                            <a href= "#" className= " text-gray-600 hover:text-blue-600 px-3 rounded-md font-medium text-lg ">
                                Resources
                            </a>
                            <a href= "#" className= " text-gray-600 hover:text-blue-600 px-3 rounded-md font-medium text-lg ">
                                Community
                            </a>
                            <a href= "#" className= " text-gray-600 hover:text-blue-600 px-3 rounded-md font-medium text-lg ">
                                Blog
                            </a>
                        </div>
                    </nav>
                </div>

                <div className=" flex items-center space-x-6 ">
                    <button className=" text-gray-600 hover:text-gray-700 relative ">
                        <BellIcon size={24} />
                        <span className= " absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center ">
                            3
                        </span>
                    </button>

                    <button className=" text-gray-600 hover:text-gray-700 ">
                        <SettingsIcon size={24} />
                    </button>

                    <button onClick={() => navigate('/')} className=" text-gray-600 hover:text-gray-700 " title=" Back to Home ">
                        <HomeIcon size={24} />
                    </button>

                    <div className=" flex items-center space-x-3 ">
                        <div className=" w-8 h-8 bg-blue-600 rounded-full text-white flex justify-center items-center font-bold text-sm">
                            JD
                        </div>
                        <button className=" text-gray-600 hover:text-gray-700 ">
                            <LogOutIcon size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>;
}