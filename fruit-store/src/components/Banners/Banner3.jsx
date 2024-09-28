import React from 'react'
import BannerPng from "../../assets/banner-bg.jpg"
import { motion } from "framer-motion"
import {  FedLeft } from "../../utility/animation"

const bgStyle = {
    backgroundImage: `url(${BannerPng})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat: "no-repeat",

}

const Banners3 = () => {
    return (
        <div>
            <section className='container mb-12'>
                <div style={bgStyle} className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
                    <div></div>

                    <div className='flex flex-col justify-center'>
                        <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                            <motion.h1
                                variants={FedLeft(0.5)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}

                                className='text-3xl lg:text-6xl font-bold uppercase'>
                                {" "}
                                Get Fresh Fruits Today
                            </motion.h1>
                            <motion.p
                                variants={FedLeft(0.7)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >Craving fresh, juicy fruits? Look no further! Our online store offers a wide selection of fruits picked at their peak ripeness and delivered to you with care. Enjoy the convenience of ordering your favorites from the comfort of your home.</motion.p>
                          
                            <motion.div
                                variants={FedLeft(0.9)}
                                initial="hidden"
                                animate="visible"
                                className='flex justify-center md:justify-start'>
                                <button className='primary-btn '>Order Now</button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Banners3
