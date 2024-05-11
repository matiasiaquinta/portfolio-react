//Services Page

import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import { ScanFace } from "lucide-react";


const PageServices = () => {

    return(
        //fragment
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />

            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
                
                {/* md:grid-cols-2 -> tengo 2 columnas que son mis 2 divs */}

                {/* primera columna */}
                <div className="max-w-[450px] mt-20 md:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        Mis {" "}
                        <span className="font-bold text-secondary">Servicios</span>
                    </h1>
                    
                    <p className="mb-3 text-xl text-gray-300">jlasjd lnasjkdnasjkd nakjsndjkand kand jk sndjkad najk dan sjkda nasd adasdsad asdasdadasd dasdadasd  ndajksndjkasndajkdnsjkanajksdnsjk dnaksdnaskjdnk</p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta Conmigo</button>
                </div>

                {/* segunda columna */}
                {/* SLIDER*/}
                <div className="mb-5">
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default PageServices;