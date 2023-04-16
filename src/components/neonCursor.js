import { neonCursor } from 'threejs-toys/src/cursors/neon';

export default function neonCursor() { 
          neonCursor({
            el: vantaRef.current,
            shaderPoints: 16,
            curvePoints: 80,
            curveLerp: 0.5,
            radius1: 5,
            radius2: 30,
            velocityTreshold: 10,
            sleepRadiusX: 100,
            sleepRadiusY: 100,
            sleepTimeCoefX: 0.0025,
            sleepTimeCoefY: 0.0025
          });
    }
  return (
      <div ref={vantaRef}></div>
);
