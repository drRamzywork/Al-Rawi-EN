
// import { useState } from 'react';
// import { BottomSheet } from 'react-spring-bottom-sheet';

// import 'react-spring-bottom-sheet/dist/style.css';
// import styles from './index.module.scss';

// function VideoPlayer() {
//   const [currentVideo, setCurrentVideo] = useState('1');
//   const [isSheetOpen, setIsSheetOpen] = useState(false);

//   const handleVideoEnd = () => {
//     if (currentVideo === 'intro') {
//       setIsSheetOpen(true);
//     }
//   };

//   return (
//     <div className={styles.videoContainer}>
//       {/* Video element */}
//       {/* <video
//         className={styles.videoElement}
//         src={`/assets/videos/${currentVideo}.mp4`}
//         onEnded={handleVideoEnd}
//         controls
//         autoPlay
//       /> */}

//       {/* <BottomSheet
//         open={isSheetOpen}
//         onDismiss={() => setIsSheetOpen(false)}
//         blocking={false}
//         className={styles.fullScreenSheet}
//       >
//         <div className={styles.bottomSheetContent}>
//           <button onClick={() => setCurrentVideo('2')}>فيديو 1</button>
//           <button onClick={() => setCurrentVideo('3')}>فيديو 2</button>
//           <button onClick={() => setCurrentVideo('4')}>فيديو 4</button>
//           <button onClick={() => setCurrentVideo('5')}>فيديو 5</button>
//         </div>
//       </BottomSheet> */}


//       <BottomSheet >My awesome content here</BottomSheet>

//     </div >
//   );
// }

// export default VideoPlayer;




// import { useState } from 'react';
// import { BottomSheet } from 'react-spring-bottom-sheet';
// import 'react-spring-bottom-sheet/dist/style.css';
// import styles from './index.module.scss'; // Import the SCSS module

// import { useDrag } from '@use-gesture/react'


// function VideoPlayer() {
//   const [currentVideo, setCurrentVideo] = useState('intro');
//   const [isSheetOpen, setIsSheetOpen] = useState(false);

//   const handleVideoEnd = () => {
//     if (currentVideo === 'intro') {
//       setIsSheetOpen(true);
//     }
//   };


//   function PullRelease() {
//     const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

//     // Set the drag hook and define component movement based on gesture data
//     const bind = useDrag(({ down, movement: [mx, my] }) => {
//       api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
//     })

//     // Bind it to a component
//     return <animated.div {...bind()} style={{ x, y }} />
//   }

//   return (
//     <div className={styles.videoContainer}>
//       {/* Video element */}
//       {/* <video
//         className={styles.videoElement}
//         src={`/assets/videos/${currentVideo}.mp4`}
//         onEnded={handleVideoEnd}
//         controls
//         autoPlay
//       /> */}

//       {/* Bottom sheet rendered inside the current component */}
//       {/* <BottomSheet
//         open={isSheetOpen}
//         onDismiss={() => setIsSheetOpen(false)}
//         blocking={false}
//         className={styles.fullScreenSheet}
//       // containerElement={document.querySelector('.bottom-sheet-container')}
//       >
//         <div className={styles.bottomSheetContent}>
//           <h1>hhhhhhhh</h1>
//           <h1>hhhhhhhh</h1>
//           <h1>hhhhhhhh</h1>
//           <h1>hhhhhhhh</h1>
//           <h1>hhhhhhhh</h1>
//         </div>
//       </BottomSheet> */}



//       <PullRelease />

//       {/* Container for bottom sheet */}
//       <div className="bottom-sheet-container"></div>
//     </div>
//   );
// }

// export default VideoPlayer;
