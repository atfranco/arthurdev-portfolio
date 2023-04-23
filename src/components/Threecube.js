import { useEffect, useRef, useState } from "react";
import styles from '../styles/Celulas.module.css'
import * as THREE from 'three';

export default function Topografia() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        Terrain({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 100.00,
          minWidth: 100.00,
          scale: 1.00,
          scaleMobile: 1.00,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
      <div className={styles.containercells} ref={vantaRef}></div>
  );
}
