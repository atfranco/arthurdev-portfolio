import styles from '@/styles/Navbar.module.css'
import "react-tooltip/dist/react-tooltip.css";
import Link from 'next/link';
import Logotipo from '@/components/Logotipo'
import { Tooltip as ReactTooltip, Tooltip } from "react-tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faInstagram,
  } from '@fortawesome/free-brands-svg-icons'
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
    root.style.setProperty('--hue-color', '50');
  };
  const usaContato = () => {
    const root = document.documentElement;
    root.style.setProperty('--hue-color', '85');
  };

export default function Navbar() {
    return (   
        <div className={styles.navbar}>
            <div className={styles.logomenu}>
                <h1 className={styles.logo}>ATF</h1>
                <h2 className={styles.logo}>WEB</h2>
            </div>
            <div className={styles.iconesmenu}>
            <Link
              href={{
                  pathname: '/',
              }}
              onClick={usaHome}
              data-tooltip-delay-hide={300}
              className="tool-home">
              <FontAwesomeIcon className={styles.icones} icon={faHome}/>
              <Tooltip className='tool-home' anchorSelect=".tool-home" place="right">HOME</Tooltip>            
            </Link>
            <Link
              href={{
                  pathname: '/sobre',
              }}
              onClick={usaSobre}
              data-tooltip-delay-hide={300}
              className="tool-user">
              <FontAwesomeIcon className={styles.icones} icon={faUser}/>
              <Tooltip className='tool-user' anchorSelect=".tool-user" place="right">BREVE RESUMO</Tooltip>            
            </Link>
            <Link
              href={{
                  pathname: '/skills',
              }}
              onClick={usaSkills}
              data-tooltip-delay-hide={300}
              className="tool-skills">
              <FontAwesomeIcon className={styles.icones} icon={faTools}/>
              <Tooltip className='tool-skills' anchorSelect=".tool-skills" place="right">HABILIDADES</Tooltip>            
            </Link>
            <Link
              href={{
                  pathname: '/works',
              }}
              onClick={usaPortfolio}
              data-tooltip-delay-hide={300}
              className="tool-portfolio">
              <FontAwesomeIcon className={styles.icones} icon={faSuitcase}/>
              <Tooltip className='tool-portfolio' anchorSelect=".tool-portfolio" place="right">PORTFOLIO</Tooltip>            
            </Link>
            <Link
              href={{
                  pathname: '/contato',
              }}
              onClick={usaContato}
              data-tooltip-delay-hide={300}
              className="tool-contato">
              <FontAwesomeIcon className={styles.icones} icon={faEnvelope}/>
              <Tooltip className='tool-contato' anchorSelect=".tool-contato" place="right">CONTATO</Tooltip>            
            </Link>
            </div>
            <div className={styles.socialmenu}>
                <a
                href='https://www.linkedin.com/in/arthur-franco-dev'
                target="_blank">
                <FontAwesomeIcon className={styles.icones} icon={faLinkedin}/>
                </a>
                <a
                href='https://www.instagram.com/tutaoo'
                target="_blank">
                <FontAwesomeIcon className={styles.icones} icon={faInstagram}/>
                </a>
                <a
                href='https://github.com/atfranco'
                target="_blank">
                <FontAwesomeIcon className={styles.icones} icon={faGithub}/>
                </a>
            </div>
        </div>        
    )
  }
  