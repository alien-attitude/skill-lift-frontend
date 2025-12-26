import React from 'react';
import {UserIcon, MenuIcon} from 'lucide-react'

export function DashboardHeader() {
    return <header className= "bg-white shadow ">
        <div className="container mx-auto px-4 ">
            <div className="flex justify-between items-center h-16 ">
                {/* Logo*/}
                <div className=" flex items-center">
                    <div className=" flex-shrink-0">
                        <span className= "text-blue-600 font-bold text-3xl ">
                            Skill Lift
                        </span>
                    </div>
                    {/* Navigation */}
                    <nav className= "hidden md:block ml-10 ">
                        <div className= "flex items-center space-x-4 ">
                            <a href= "#" className= " text-gray-900 hover:text-blue-600 px-3 rounded-md font-medium text-2xl ">
                                Dashboard
                            </a>
                            <a href= "#" className= " text-gray-900 hover:text-blue-600 px-3 rounded-md font-medium text-lg ">
                                Courses
                            </a>
                            <a href= "#" className= " text-gray-900 hover:text-blue-600 px-3 rounded-md font-medium text-lg ">
                                Resources
                            </a>
                            <a href= "#" className= " text-gray-900 hover:text-blue-600 px-3 rounded-md font-medium text-lg ">
                                Community
                            </a>
                            <a href= "#" className= " text-gray-900 hover:text-blue-600 px-3 rounded-md font-medium text-lg ">
                                Blog
                            </a>
                        </div>
                    </nav>
                </div>
                {/* Right side actions*/}
                <div className= "flex items-center ">
                    <button className= "flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-lg">
                        <UserIcon size={18} />
                        <span>Sign In</span>
                    </button>
                    {/* Mobile menu button*/}
                    <div className= "md:hidden ml-4 ">
                        <button className= "text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-600 ">
                            <MenuIcon size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
}