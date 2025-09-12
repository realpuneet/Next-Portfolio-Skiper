import About from '@/components/sections/About'
import {Hero} from '@/components/sections/Hero'
import Video from '@/components/sections/Video'
import React from 'react'

const Home = () => {
  return (
    <div className="overflow-x-hidden">
        <section className="min-h-screen flex items-center justify-center">
        <Hero />
      </section>
        
        <About />
      
      <section className="min-h-screen bg-[#ffffff] flex items-center justify-center w-full">
        <Video />
      </section>
    
      {/* <section className="min-h-screen bg-[#ff99ff] flex items-center justify-center w-full">
        
      </section>
       */}    
    
    </div>
  )
}

export default Home