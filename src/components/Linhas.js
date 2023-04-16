

(function() {

  const container = document.getElementById('app');

  const options = {
    onSpeedUp: (ev) => {					
    },
    onSlowDown: (ev) => {
    },
    // mountainDistortion || LongRaceDistortion || xyDistortion || turbulentDistortion || turbulentDistortionStill || deepDistortionStill || deepDistortion
    distortion: xyDistortion, 
    
    length: 400,
    roadWidth: 9,
    islandWidth: 2,
    lanesPerRoad: 3,

    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,

    totalSideLightSticks: 50,
    lightPairsPerRoadWay: 30,

    // Percentage of the lane's width
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,

    /*** These ones have to be arrays of [min,max].  ***/
    lightStickWidth: [0.02, 0.05],
    lightStickHeight: [0.3, 0.7],

    movingAwaySpeed: [20, 50],
    movingCloserSpeed: [-150, -230],

    /****  Anything below can be either a number or an array of [min,max] ****/

    // Length of the lights. Best to be less than total length
    carLightsLength: [400 * 0.05, 400 * 0.2],
    // Radius of the tubes
    carLightsRadius: [0.03, 0.08],
    // Width is percentage of a lane. Numbers from 0 to 1
    carWidthPercentage: [0.1, 0.5],
    // How drunk the driver is.
    // carWidthPercentage's max + carShiftX's max -> Cannot go over 1. 
    // Or cars start going into other lanes 
    carShiftX: [-0.5, 0.5],
    // Self Explanatory
    carFloorSeparation: [0, 0.1],

    colors: {
      roadColor: 0x080808,
      islandColor: 0x131318,
      shoulderLines: 0x131318,
      brokenLines: 0x131318,
      /***  Only these colors can be an array ***/
      leftCars: [0xF1EECE, 0xE6E2B1, 0xDFD98A],
      rightCars: [0xF1EECE, 0xE6E2B1, 0xDFD98A],
      sticks: 0xF1EECE,
    }
  };

  const myApp = new App(container, options);
  myApp.loadAssets().then(myApp.init)
})()

export default function Linhas() {
  return (
    <div id="#app"></div>
  )
}