import styles from '@/styles/Navbar.module.css'
import "react-tooltip/dist/react-tooltip.css";
import Link from 'next/link';
import { Tooltip as ReactTooltip, Tooltip } from "react-tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faTools,
  faEnvelope,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'

  // funcoes q chamarao as cores add no bt
const usaHome = () => {
    const root = document.documentElement;
    root.style.setProperty('--hue-color', '200');
  };
  const usaSobre = () => {
    const root = document.documentElement;
    root.style.setProperty('--hue-color', '280');
  };
  const usaSkills = () => {
    const root = document.documentElement;
    root.style.setProperty('--hue-color', '20');
  };
  const usaPortfolio = () => {
    const root = document.documentElement;
    root.style.setProperty('--hue-color', '10');
  };
  const usaContato = () => {
    const root = document.documentElement;
    root.style.setProperty('--hue-color', '85');
  };

export default function Navbarmobile() {
    return (   
            <div className={styles.iconesmenumobile}>
            <Link
              href={{
                  pathname: '/',
              }}
              onClick={usaHome}
              data-tooltip-delay-hide={300}
              className="tool-home">
              <FontAwesomeIcon className={styles.icones} icon={faHome}/>
              <Tooltip className='tool-home' anchorSelect=".tool-home" place="top">HOME</Tooltip>            
            </Link>
            <Link
              href={{
                  pathname: '/sobre',
              }}
              onClick={usaSobre}
              data-tooltip-delay-hide={300}
              className="tool-user">
              <FontAwesomeIcon className={styles.icones} icon={faUser}/>
              <Tooltip className='tool-user' anchorSelect=".tool-user" place="top">BREVE RESUMO</Tooltip>            
            </Link>
            <Link
              href={{
                  pathname: '/skills',
              }}
              onClick={usaSkills}
              data-tooltip-delay-hide={300}
              className="tool-skills">
              <FontAwesomeIcon className={styles.icones} icon={faTools}/>
              <Tooltip className='tool-skills' anchorSelect=".tool-skills" place="top">HABILIDADES</Tooltip>            
            </Link>
            <Link
              href={{
                  pathname: '/works',
              }}
              onClick={usaPortfolio}
              data-tooltip-delay-hide={300}
              className="tool-portfolio">
              <FontAwesomeIcon className={styles.icones} icon={faSuitcase}/>
              <Tooltip className='tool-portfolio' anchorSelect=".tool-portfolio" place="top">PORTFOLIO</Tooltip>            
            </Link>
            <Link
              href={{
                  pathname: '/contato',
              }}
              onClick={usaContato}
              data-tooltip-delay-hide={300}
              className="tool-contato">
              <FontAwesomeIcon className={styles.icones} icon={faEnvelope}/>
              <Tooltip className='tool-contato' anchorSelect=".tool-contato" place="top">CONTATO</Tooltip>            
            </Link>
            </div>    
    )
  }
  