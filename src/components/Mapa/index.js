import dynamic from "next/dynamic";

const Mapa = dynamic(() => import('@/components/Mapa/index'), {
    ssr: false
});

export default Mapa