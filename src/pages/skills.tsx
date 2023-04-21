import dynamic from 'next/dynamic';

const Chartforce = dynamic(() => import('@/components/Chartforce'), {
    ssr: false,
  })

export default function Skills() {
    return(
        <div className='tela'>
            <Chartforce />
            <div className='esquerda'>
            </div>
            <div className='direita'></div>
        </div>
    )
}