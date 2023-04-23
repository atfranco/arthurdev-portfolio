import Image from "next/image";
import logo from '../../public/imagens/logo.png'

export default function Logotipo() {
    return (
        <>
        <Image src={logo}/>
        </>
    )
}