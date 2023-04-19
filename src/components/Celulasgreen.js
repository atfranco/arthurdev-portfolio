import CELLS from '../../node_modules/vanta/src/vanta.cells'
import { useEffect, useRef, useState } from "react";
import styles from '../styles/Celulas.module.css'

export default function Celulasgreen() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CELLS({
          THREE,
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          color1: 0x00ff62,
          color2: 0x0a5226,
          size: 3,
          speed: 2
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