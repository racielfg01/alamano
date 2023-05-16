'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo =()=>{
    const router =useRouter();

    return(
        <div onClick={()=>router.push('/')}>

            <Image
            alt="Logo"
            className=" cursor-pointer"
            height={100}
            width={100}
            src="/images/logo3.png"
            
            />
        </div>
    )
}

export default Logo;