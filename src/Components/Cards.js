import React from 'react'
import Card from './Card';
import {useState} from 'react';

 const Cards = (props) => {

    let courses = props.courses;
    let category = props.category;
       const [likedCourses, setLikedCourses] = useState([]);


    function getcourses() {
       if(category === "All") {

        let allCourses = [];
        Object.values(courses).forEach(Array =>{
            Array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;

       }
       else{
        //main sirf specific category ka aaray pass karunga
        return courses[category];
       }
        
    }

   return (
    <div  className="flex flex-wrap justify-center gap-4 mb-4">
       {
        getcourses().map( (course) => (
            <Card   key = {course.id} course={course}
                   likedCourses = {likedCourses}
                   setLikedCourses = {setLikedCourses} />

        ) )
       }
    </div>
  )
}
export default Cards