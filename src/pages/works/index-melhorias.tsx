import styles from '@/styles/Posts.module.css';
import Cardportfolio from '@/components/Cardportfolio';
import Espacador from '@/components/Espacador';
import Botaoglow from '@/components/Botaoglow';
import { useState } from 'react';
import React from 'react';

type Works = {
    id: string;
    nome: string;
    Works: any;
    descricao: string;
    tipo: string;
    work: string;
};

export async function getStaticProps() {
    const data = await fetch('https://arthurdev-portfolio.vercel.app/api/trabalhos')
    const works = await data.json()
    return {
        props: { works }
    }    
}

export default function Works({ works }) {
    const[busca, setBusca] = useState('');



    const worksFiltrados = works.filter((work: { tipo: any; }) => work.tipo != (busca));
    console.log(worksFiltrados)


    let checkboxMarcado = false;

    const handleCheckboxChange = (ev) => {

        checkboxMarcado = ev.target.checked;

        if (ev.target.checked) {
          setBusca(ev.target.value);
        } else {
          // Retorna o valor antigo quando desmarcado
          setBusca('');
          console.log(ev)
          console.log(busca)
        }
    };

    return (
        <>
        <div className={styles.telaportfolio}>
            <div className={styles.esquerdaportfolio}>
                <div className={styles.stickycontainer}>
                    <h1>Trabalhos recentes</h1>
                    <Espacador />
                    <label>
                    <input
                        type='checkbox'
                        value=''
                        name=''
                        onChange={handleCheckboxChange}
                    />
                    Todos
                    </label>
                    <label>
                    <input
                        type='checkbox'
                        value='Institucional'
                        name='Institucional'
                        onChange={handleCheckboxChange}
                    />
                    Sites
                    </label>
                    <label>
                    <input
                        type='checkbox'
                        value='Saas'
                        name='Saas'
                        onChange={handleCheckboxChange}
                    />
                    SaaS
                    </label>
                    <label>
                    <input
                        type='checkbox'
                        value='Identidade Visual'
                        name='Identidade Visual'
                        onChange={handleCheckboxChange}
                    />
                    Identidade Visual
                    </label>
                    
                    <Espacador />
                    <Botaoglow />
                </div>
            </div>
            <div className='direita'>
                <div className={styles.formata}>
                    <div
                    className={styles.coluna}>
                    {worksFiltrados.map((work: any) => (<Cardportfolio key={works.id} work={work} />))}
                    </div>
                </div>   
                <Espacador />
                <Espacador />             
            </div>
        </div>
        </>
    )
}