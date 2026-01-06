import React from 'react';
import {BookOpenIcon, PlayCircleIcon} from "lucide-react";

export function ActiveCourses() {
    const courses = [{
        id:1,
        title: "Full Stack Web Development",
        progress: 80,
        currentModule: 'React Advanced Patterns',
        nextModule: 'React Testing',
        timeSpent: '44h',
        lastAccessed: '3 hours ago',
        image: "/web-development.jpg"
    }, {
        id:2,
        title: "Data Science & Machine Learning",
        progress: 45,
        currentModule: 'Neural Networks Fundamentals',
        nextModule: 'Backpropagation Algorithm',
        timeSpent: '28h',
        lastAccessed: '16 hours ago',
        image: "/data-science.jpg"
    }, {
        id:3,
        title: "Cloud Architecture & DevOps",
        progress: 60,
        currentModule: 'Kubernetes Orchestration',
        nextModule: 'Service Mesh Implementation',
        timeSpent: '35h',
        lastAccessed: '1 day ago',
        image: "/devops.jpg"
    }];
    return <div className= " bg-white rounded-lg shadow-lg p-6 ">
        <h2 className= " text-xl font-bold text-gray-800 mb-6 ">
            My Active Courses
        </h2>

        <div className= " space-y-6 ">
            {courses.map(course => <div key={course.id} className= " border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className= " flex flex-col md:flex-row">
                    <div className= " md:w-48 h-32 md:h-auto flex-shrink-0 ">
                        <img src={course.image} alt= {course.title} className= "w-full h-full object-cover" />
                    </div>

                    <div className= " flex-grow p-4 ">
                        <div className= " flex items-center justify-between mb-1 ">
                            <h3 className= " font-bold text-gray-800 ">{course.title}</h3>
                            <span className= " text-sm text-gray-500 ">
                                {course.lastAccessed}
                            </span>
                        </div>

                        <div className= " mb-3 ">
                            <div className= " flex items-center justify-between mb-1 ">
                                <span className= " text-sm text-gray-700 ">
                                    {course.progress}% Complete
                                </span>
                                <span className= " text-sm text-gray-500 ">
                                    {course.timeSpent} spent
                                </span>
                            </div>
                            <div className= " w-full bg-gray-200 rounded-full h-2.5 ">
                                <div className=" bg-blue-600 h-2.5 rounded-full " style={{
                                    width: `${course.progress}%`
                                }}></div>
                            </div>
                        </div>

                        <div className= " flex flex-col sm:flex-row sm:items-center justify-between gap-3  ">
                            <div className= " space-y-1 ">
                                <div className= " flex items-center text-sm text-gray-600 ">
                                    <BookOpenIcon size={14} className= " mr-2 " />
                                    <span>Current: {course.currentModule}</span>
                                </div>
                                <div className= " flex items-center text-sm text-gray-600 ">
                                    <PlayCircleIcon size={14} className= " mr-2 " />
                                    <span>Next: {course.nextModule}</span>
                                </div>
                            </div>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap ">
                                Continue Learning
                            </button>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    </div>;
}