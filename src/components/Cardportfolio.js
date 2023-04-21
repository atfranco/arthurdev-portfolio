import React, { useState } from "react";
import styles from '@/styles/Cardfolio.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {
    faLink
  } from '@fortawesome/free-solid-svg-icons'
import Espacador from './Espacador';
import FsLightbox from "fslightbox-react";

export default function Cardportfolio({ work }) {

    const [toggler, setToggler] = useState(false);

    return (   
        <div>
            <FsLightbox
			toggler={toggler}
            loadOnlyCurrentSource={true}
			sources={
                    [            
                    <Image
                    src={`/imagens/portfolio/${work.imagem}`}
                    width={600}
                    height={400}
                    alt={work.nome}/>  				
                    ]
                    }
			/>
        <div className='animaportfolio'>
            <div className={styles.portfoliocomponente}>
                <div className={styles.fora}>              
                <Image
                src={`/imagens/portfolio/${work.imagem}`}
                layout="fill"
                alt={work.nome}
                onClick={() => setToggler(!toggler)}
                className={styles.foto}/>   
                </div>
                <div className={styles.card}>
                    <div className={styles.divideesq}>
                        <h2>{work.nome}</h2>
                        <Espacador />
                        <h3>{work.descricao}</h3>
                    </div>
                    <div className={styles.dividedir}>
                        <h4>{work.tipo}</h4>
                        <Espacador />
                        <Link
                        href={`${work.endereco}`}
                        target={'_blank'}>  
                        <FontAwesomeIcon className={styles.icone} icon={faLink}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}