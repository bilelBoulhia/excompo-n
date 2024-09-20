'use client';
import React from "react";
import {motion} from "framer-motion";
import bg1 from "@/app/assets/events images/bg3.png";
import {shadowVariants} from "@/app/(main)/sections/Events";
import {BackgroundBeams} from "@/components/ui/BackgroundBeams";



export default function Index() {
    return (
        <div className='flex flex-col mt-[4rem] items-center justify-center p-5 gap-2'>

            <BackgroundBeams/>
            <div className='grid  md:grid-cols-2 grid-cols-1 gap-12'>





                    {[...Array(6)].map((_, i) => (
                        <div key={i} >

                            <motion.div
                                style={{zIndex: -4}}

                                initial={{x:-3}}
                                whileInView={{x:0}}
                                transition={{duration: 0.3, ease: 'easeInOut'}}
                                className=" z-1 max-w-3xl">
                                <div className="max-w-3xl hover:cursor-default mx-auto pl-2 overflow-hidden">

                                <motion.h1
                                    whileHover={{scale: 1.02}}
                                    className="text-2xl  md:text-3xl font-extrabold text-left tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 ">
                                 HI Family Event
                                </motion.h1>

                                </div>
                            </motion.div>

                            <motion.div
                                initial={{x: -3}}
                                whileInView={{x: 0}}
                                viewport={{once:true}}
                                transition={{duration: 0.3, ease: 'easeInOut'}}   >
                                <motion.img
                                    src={bg1.src}
                                    variants={shadowVariants}
                                    initial="hidden"

                                    whileInView="visible"
                                    whileHover={{scale: 1.02}}
                                    className="rounded-xl min-w-full max-h-[60vh] object-cover   "/>

                            </motion.div>

                        </div>
                    ))}

                </div>

        </div>
    )
}