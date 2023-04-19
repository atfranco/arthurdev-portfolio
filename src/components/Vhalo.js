import HALLO from '../../node_modules/vanta/src/vanta.halo'
import { useEffect, useRef, useState } from "react";
import styles from '../styles/Celulas.module.css'

export default function Vhalo() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALLO({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          baseColor: 0x431313,
          backgroundColor: 0x431313,
          amplitudeFactor: 2.0,
          xOffset: 0.5,
          yOffset: 0.5,
          size: 3.00
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