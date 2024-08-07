import React, { useEffect, useState } from "react" 
import ReactPlayer from "react-player" 

const Video = (props) => {
    const [videoUrl, setVideoUrl] = useState(props.url) 
    const [isPlaying, setIsPlaying] = useState(true) 
    return (
        <>
            <ReactPlayer
                width="100%"
                height="100%"
                url={videoUrl}
                controls
                playing={isPlaying}
                muted
            />
            
        </>
    ) 
} 

export default Video 
