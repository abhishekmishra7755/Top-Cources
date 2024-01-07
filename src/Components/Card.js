import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {toast } from 'react-toastify';

 const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses= props.setLikedCourses;

    function clickHandler() {

          //logic 
   if(likedCourses.includes(course.id)){
    //phle se like hua pda tha
   setLikedCourses( (prev) => prev.filter((cid) => (cid !== course.id))  );
          toast.warning("like removed");
   }

  else {
    //phle se like nhi hai ye courses
    //insert krna hai liked courcses me
  
    if(likedCourses.length === 0) {
        setLikedCourses([course.id]);

    }
    
    else{
        //non empty phle se
        setLikedCourses((prev) => [...prev,  course.id]);
    }
          toast.success("Liked successfully");


  }


       

    
}

  return (
    <div className = "w-[300px] bg-bgDark  bg-opacity-80 rounded-md overflow-hidden">
       <div className="relative">
           <img src={course.image.url} />
     

       <div  className='absolute   right-2 bottom-3 bg-white rounded-full  grid place-items-center   w-[40px] h-[40px]'>
        <button onClick = {clickHandler} >
       {
        likedCourses.includes(course.id) ?
        (<FcLikePlaceholder fontSize = "1.75rem"  />) :
        (<FcLike  fontSize="1.75rem"/>)
       }
        </button>    
      </div>

       </div>

       <div   className="p-4">
        <p  className="text-white font-semibold text-lg leading-6"> {course.title}</p>
        <p className="text-white  mt-2">
        {
            course.description.length > 100 ?
            (course.description.substr(0,100)) + "...":
            (course.description) 

        }
        </p>
       </div>


    </div>
  )
}

export  default Card 
