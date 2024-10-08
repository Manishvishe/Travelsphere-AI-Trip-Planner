import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'


function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[70px] text-center mt-16'>
       <span className='text-gray-500'> Discover Your Next Adventure with AI:</span> Personalized Itineraries at Your Fingertips</h1>
   
      <p className='text-xl text-green-500 text-center'>Your Personal trip planner and travel curator, creating custom itineraries tailored to your intrests and budget</p>
     
      <Link to={'/create-trip'}>
        <Button variant="outline">Get Started, it's Free</Button>
      </Link>
     

    </div>
  )
}

export default Hero