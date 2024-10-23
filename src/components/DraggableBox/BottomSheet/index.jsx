import React, { useState, useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { RiArrowUpSLine, RiArrowDownSLine, } from 'react-icons/ri';



function usePrevious(value) {
  const previousValueRef = useRef();
  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);
  return previousValueRef.current;
}


const BottomSheet = ({ isClosed, setIsClosed, currentVideo
  , setCurrentVideo, setMuted }) => {

  const [isOpen, setIsOpen] = useState(false);
  function onClose() {
    setIsOpen(false);
  }

  function onOpen() {
    setIsOpen(true);
  }

  function onToggle() {
    setIsOpen(!isOpen);
  }

  const prevIsOpen = usePrevious(isOpen);
  const controls = useAnimation();

  function onDragEnd(event, info) {
    const shouldClose =
      info.velocity.y > 20 || (info.velocity.y >= 0 && info.point.y > 45);
    if (shouldClose) {
      controls.start("hidden");
      onClose();
    } else {
      controls.start("visible");
      onOpen();
    }
  }

  useEffect(() => {
    if (prevIsOpen && !isOpen) {
      controls.start("hidden");
    } else if (!prevIsOpen && isOpen) {
      controls.start("visible");
    } else if (isClosed) {
      controls.start("closed");
    } else if (!isClosed) {
      controls.start("hidden");
    }
  }, [controls, isOpen, isClosed, prevIsOpen]);

  const handleDoubleClick = (e) => {
    switch (e.detail) {
      case 1:
        // console.log("click");
        break;
      case 2:
        if (!prevIsOpen && isOpen) {
          controls.start("hidden");
          setIsOpen(false);
        } else if (prevIsOpen && !isOpen) {
          controls.start("visible");
          setIsOpen(true);
        }

        break;

      default:
        return;
    }
  };

  return (
    <>
      <motion.div
        drag="y"
        onDragEnd={onDragEnd}
        initial="hidden"
        animate={controls}
        className={'bottom_sheet_container'}

        transition={{
          type: "spring",
          damping: 40,
          stiffness: 400
        }}
        variants={{
          // hidden: { y: "calc(100% - 256px)" },
          // visible: { y: "10%" },
          visible: { y: 104 },
          // hidden: { y: "70%" },
          hidden: { y: "80%" },
          closed: { y: "100%" }


        }}
        dragConstraints={{ top: 0 }}
        dragElastic={0.2}
        style={{
          display: "inline-block",
          backgroundColor: "white",
          width: 320,
          height: 768,
          border: "1px solid #E0E0E0",
          boxShadow:
            "0px 2px 5px rgba(0, 0, 0, 0.06), 0px 2px 13px rgba(0, 0, 0, 0.12)",
          borderRadius: "13px 13px 0px 0px",
          overflow: "hidden",
          zIndex: 1000
        }}
      >
        <div className="DragHandleEdge" onClick={handleDoubleClick}>
          <div className="DragHandle" />
        </div>
        <div className="Navbar">
          <div className="ButtonGroup">
            <span className="ButtonExpandCollapse" onClick={onToggle}>
              <span className="IconExpandCollapse"> {isOpen ? <RiArrowDownSLine /> : <RiArrowUpSLine />}</span>
              <span className="LabelExpandCollapse">
                {isOpen ? "Collapse" : "expand"}
              </span>
            </span>
            <span className="CloseIcon" onClick={() => setIsClosed(true)}>
              <IoClose />
            </span>
          </div>



        </div>

        <div className="btns_container">

          <button className={currentVideo === 'https://toot.one/rawai/en/2.mp4' ? 'active' : ''}
            onClick={() => { setCurrentVideo('https://toot.one/rawai/en/2.mp4'); setIsClosed(true); setMuted(false) }}> To which era does the Urwa Palace date back?</button>
          <button className={currentVideo === 'https://toot.one/rawai/en/3.mp4' ? 'active' : ''}
            onClick={() => { setCurrentVideo('https://toot.one/rawai/en/3.mp4'); setIsClosed(true); setMuted(false) }}>Where are the palaces of Urwa ibn al-Zubayr located?</button>
          <button className={currentVideo === 'https://toot.one/rawai/en/4.mp4' ? 'active' : ''}
            onClick={() => { setCurrentVideo('https://toot.one/rawai/en/4.mp4'); setIsClosed(true); setMuted(false) }}>What are the most important archaeological landmarks in the palaces of Urwa bin Al-Zubayr?</button>
        </div>

      </motion.div >
    </>
  )
}

export default BottomSheet