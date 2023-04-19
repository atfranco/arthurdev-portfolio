import TRUNK from '../../node_modules/vanta/src/vanta.trunk'
import { useEffect, useRef, useState } from "react";
import styles from '../styles/Celulas.module.css'

export default function Vtrunk() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TRUNK({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x8e1616,
          spacing: 10.00,
          chaos: 5.00
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