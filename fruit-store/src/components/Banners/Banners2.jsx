import React from 'react'
import BannerPng from "../../assets/fruit-plate2.png"
import { motion } from "framer-motion"
import {  FedUp } from "../../utility/animation"

const Banners2 = () => {
    return (
        <div>
            <section>
                <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
                
                    <div className='flex flex-col justify-center'>
                        <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                            <motion.h1
                                variants={FedUp(0.5)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}

                                className='text-3xl lg:text-6xl font-bold uppercase'>
                                {" "}
                                Online Fruit Store
                            </motion.h1>
                            <motion.p
                                variants={FedUp(0.7)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >Welcome to your one-stop destination for the freshest fruits, delivered straight to your doorstep. Our online fruit store offers a wide variety of seasonal and exotic fruits, handpicked to ensure the highest quality and taste.</motion.p>
                            <motion.p
                                variants={FedUp(0.9)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >Shop conveniently from our easy-to-use platform, and enjoy quick delivery services that bring farm-fresh goodness right to you. Download our app for an even more seamless shopping experience, with exclusive offers and deals just a tap away</motion.p>
                            <motion.div
                                variants={FedUp(1.1)}
                                initial="hidden"
                                animate="visible"
                                className='flex justify-center md:justify-start'>
                                <button className='primary-btn '>Download the App</button>
                            </motion.div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <motion.img
                        initial={{opacity:0, x:200, rotate:75}}
                        whileInView={{opacity:1, x:0, rotate:0}}
                        transition={{transition:1, delay:0.2}}
                        viewport={{once:true}}
                        src={BannerPng} alt="" className='w-[350px] md:max-w-[500px] h-full object-cover drop-shadow' />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Banners2
