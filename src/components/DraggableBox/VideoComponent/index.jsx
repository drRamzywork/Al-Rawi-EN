import React, { useEffect, useRef } from 'react'
import styles from './index.module.scss';

const VideoComponent = ({ currentVideo, muted
  , setMuted, isClosed, setIsClosed, showElements, setShowElements }) => {

  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setIsClosed(false);
  };
  const handleUnmute = () => {
    if (videoRef.current) {
      setMuted(false)

      videoRef.current.play();
      if (muted === true) {
        videoRef.current.muted = false;
      }

    }
  };



  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
      videoRef.current.play().catch((error) => {
        console.error('Autoplay failed:', error);
      });



      if (isClosed === false) {
        videoRef.current.pause();
      }

    }

  }, [currentVideo, muted, isClosed]);




  // Show MenuLogic

  // useEffect(() => {
  //   const handleTimeUpdate = (event) => {
  //     if (event.target.currentTime = 5) {
  //       setShowElements(true);
  //     }
  //   };

  //   const video = document.querySelector('video');
  //   video.addEventListener('timeupdate', handleTimeUpdate);

  //   return () => {
  //     video.removeEventListener('timeupdate', handleTimeUpdate);
  //   };
  // }, []);


  useEffect(() => {
    const handleTimeUpdate = (event) => {
      const currentTime = event.target.currentTime;

      // Set showElements to true only if the current time is near 5 seconds
      if (currentTime >= 4.9 && currentTime <= 5.1) {
        setShowElements(true);
      }
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (video) {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [setShowElements, currentVideo]);


  console.log(showElements, "setShowElementssetShowElements")

  return (
    <>
      <div className={styles.video_container} onClick={handleUnmute}>
        <video
          key={currentVideo}
          ref={videoRef}
          className={styles.videoElement}
          src={currentVideo}
          controls
          autoPlay
          playsInline
          muted={muted}
          onEnded={handleVideoEnd}
        />
      </div>

    </>
  )
}

export default VideoComponent