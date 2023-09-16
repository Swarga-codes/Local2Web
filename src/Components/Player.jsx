import React, { useState } from 'react'
import 'vidstack/styles/defaults.css';
import 'vidstack/styles/community-skin/video.css';

import { MediaCommunitySkin, MediaOutlet, MediaPlayer, MediaPoster } from '@vidstack/react';
import About from './About';

function Player({videoRef}) {
    const [video,setVideo]=useState("")
    const uploadVideoHandler=(event)=>{
        const file = event.target.files[0];
        if (file) {
          const videoURL = URL.createObjectURL(file);
          setVideo(videoURL);
        }
    }
  return (
    <>
    {!video &&
    <About/>
    }
        <div className='Player'>
    
    <MediaPlayer
      src={video}
      autoplay
    //   poster="https://media-files.vidstack.io/poster.png"
      controls
    >
      <MediaOutlet />
    </MediaPlayer>
    <input id="file-upload" name="file-upload" type="file" className="hidden" accept='.mkv,video/*' ref={videoRef}
    onChange={(e)=>uploadVideoHandler(e)}
    />
    </div>

  
    </>
  )
}

export default Player