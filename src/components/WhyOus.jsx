import React from 'react';
import { motion } from "framer-motion";

const WhyOus = () => {

    const features = [
        {
            title: "Wide Range of Cars",
            desc: "Choose from economy to luxury vehicles — we’ve got something for every journey and budget.",
            icon: "🚘",
        },
        {
            title: "Affordable & Transparent Pricing",
            desc: "No hidden fees or surprises. What you see is what you pay.",
            icon: "💰",
        },
        {
            title: "24/7 Customer Support",
            desc: "Our dedicated team is available anytime to help you on the road.",
            icon: "📞",
        },
        {
            title: "Easy Booking Process",
            desc: "Book your car in just a few clicks — fast, simple, and secure.",
            icon: "⚡",
        },
    ];


    return (
        <div className='mt-2 max-w-11/12 mx-auto'>
            
            <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 relative overflow-hidden">
                {/* Decorative gradient blur circle */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute top-40 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>

                <div className="max-w-6xl mx-auto px-6 text-center relative">
                    <motion.h2
                        className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Why Rent With Us
                    </motion.h2>

                    <motion.p
                        className="text-gray-600 mb-16 max-w-xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Experience hassle-free car rentals designed around your needs and comfort.
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/70 backdrop-blur-lg border border-gray-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyOus;