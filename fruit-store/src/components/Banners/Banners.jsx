import React from 'react'
import BannerPng from "../../assets/fruits-splash.png"
import { motion } from "framer-motion"
import {  FedUp } from "../../utility/animation"

const Banners = () => {
    return (
        <div>
            <section className='bg-secondary/10'>
                <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
                    <div className='flex justify-center items-center'>
                        <motion.img
                        initial={{opacity:0, scale:0.5}}
                        whileInView={{opacity:1, scale:1}}
                        transition={{type:"spring", stiffness:100, delay:0.2}}
                        viewport={{once:true}}
                        src={BannerPng} alt="" className='w-[300px] md:max-w-[400px] h-full object-cover drop-shadow' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                            <motion.h1
                                variants={FedUp(0.5)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}

                                className='text-3xl lg:text-6xl font-bold uppercase'>
                                {" "}
                                Brand Info
                            </motion.h1>
                            <motion.p
                                variants={FedUp(0.7)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >At our store, we believe in delivering the freshest fruits right to your doorstep. Each piece is carefully selected to ensure the highest quality, providing you with the best taste and nutritional value. Whether you're looking for a quick snack or ingredients for a wholesome meal, our variety of fruits is perfect for every occasion.</motion.p>
                            <motion.p
                                variants={FedUp(0.9)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >From exotic varieties to everyday staples, our selection is curated to meet all your needs. We take pride in offering a seamless shopping experience, from easy online ordering to fast and reliable delivery. Discover the joy of fresh, delicious fruits that not only satisfy your taste buds but also contribute to a healthier lifestyle. Order now and enjoy the natural goodness delivered with care.</motion.p>
                            <motion.div
                                variants={FedUp(1.1)}
                                initial="hidden"
                                animate="visible"
                                className='flex justify-center md:justify-start'>
                                <button className='primary-btn '>Learn More</button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Banners
