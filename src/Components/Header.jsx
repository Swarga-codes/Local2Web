'use client'

import React, { useRef } from 'react'
import { Airplay,MonitorUp} from 'lucide-react'
import Player from './Player'
export default function Header() {
  const videoRef=useRef()

  return (
    <>
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
          <Airplay />
          </span>
          <span className="font-bold">Local2Web</span>
        </div>
     
        <div>
          <button
            type="button"
            className="flex rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={()=>videoRef.current.click()}
            >
            <MonitorUp />
            <span className='ml-3'>Choose a Video</span>
          </button>
        </div>
        
                 
                </div>
               
              </div>
              
            
              <Player videoRef={videoRef}/>
          
              </>
           
         
        )}
     
    
  
