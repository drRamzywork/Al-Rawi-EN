


import React, { useState } from 'react';
import styles from './index.module.scss';
import { RiArrowUpDoubleFill } from 'react-icons/ri';
import BottomSheet from './BottomSheet';
import VideoComponent from './VideoComponent';
import Menu from './Menu';


const DraggableBox = () => {
  const [isClosed, setIsClosed] = useState(true);
  const [currentVideo, setCurrentVideo] = useState('https://toot.one/rawai/en/1.mp4');
  const [muted, setMuted] = useState(true);
  const [showElements, setShowElements] = useState(false);

  return (
    <div className={styles.main_container}>

      <VideoComponent
        muted={muted}
        setMuted={setMuted}
        isClosed={isClosed}
        currentVideo={currentVideo}
        setIsClosed={setIsClosed}
        showElements={showElements}
        setShowElements={setShowElements}
      />

      <button className="ButtonOpenSheet" onClick={() => setIsClosed(false)}>
        <RiArrowUpDoubleFill />
      </button>


      <Menu
        showElements={showElements}
        setShowElements={setShowElements}
        setIsClosed={setIsClosed}
        setCurrentVideo={setCurrentVideo}
        setMuted={setMuted}
        currentVideo={currentVideo}
      />




      <BottomSheet
        isClosed={isClosed}
        setIsClosed={setIsClosed}
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
        setMuted={setMuted}
      />

    </div>
  );
};

export default DraggableBox;