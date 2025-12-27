import React from 'react';
import {ClockIcon, UsersIcon, StarIcon} from "lucide-react";

export function CourseList() {
    const courses = [{
        id:1,
        title: "Full Stack Web Development",
        description: "Learn the fundamentals of web development with React, Node.js and MongoDB",
        image: "/web-development.jpg",
        duration: "12 weeks",
        students: 4820,
        rating: 4.8
    }, {
        id:2,
        title: "Data Science & Machine Learning",
        description: "Master data analysis, visualization and machine learning algorithms",
        image: "/data-science.jpg",
        duration: "16 weeks",
        students: 3654,
        rating: 4.9
    }, {
        id: 3,
        title: "Cloud Architecture & DevOps",
        description: "Build and deploy scalable applications using modern cloud services",
        image: "/devops.jpg",
        duration: "10 weeks",
        students: 2567,
        rating: 4.7
    }];
    return <div className= " bg-white rounded-lg shadow-lg p-6 ">
        <div className= " flex items-center justify-between mb-4 ">
            <h2 className= "text-xl font-bold text-gray-800">
                Featured Courses
            </h2>
            <a href= "#" className= " text-blue-600 hover:text-blue-800 text-sm font-medium hover:shadow-xl transition duration-200 ease-in-out"> View All Courses</a>
        </div>

        <div className= " space-y-4 ">
            {courses.map(course => <div key={course.id} className= " flex border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow ">
                <div className= " w-24 h-24 md:w-36 md:h-auto flex-shrink-0 ">
                    <img src={course.image} alt= {course.title} className= "w-full h-full object-cover " />
                </div>

                <div className = " p-4 flex flex-col justify-between flex-grow " >
                    <div>
                        <h3 className= " font-bold text-gray-800 ">{course.title}</h3>
                        <p className= "text-gray-600 mb-2">{course.description}</p>
                    </div>

                    <div className=" flex items-center mt-2 text-sm text-gray-600 space-x-4 ">
                        <div className= "flex items-center space-x-2 text-sm font-medium ">
                            <ClockIcon size={16} />
                            <span>{course.duration}</span>
                        </div>

                        <div className= "flex items-center space-x-2 text-sm font-medium ">
                            <UsersIcon size={16} className="mr-1" />
                            <span>{course.students.toLocaleString()} students</span>
                        </div>

                        <div className= " flex items-center space-x-2 text-sm font-medium ">
                            <StarIcon size={16} className= "text-yellow-500 mr-1" />
                            <span >{course.rating.toFixed(1)}</span>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    </div>
}