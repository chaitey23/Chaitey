import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.sendForm(
                'service_ekj5zpn',
                'template_kyv832i',
                e.target,
                '_S7vcrlCMbCcChbAw'
            )



            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                e.target.reset();
            }, 2000);
        }
        catch (error) {
            console.error('EmailJS Error:', error);
            alert('Oops! Something went wrong, please try again.');
        }
        finally {

            setIsSubmitting(false);
        }
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section id="contact" className="py-20 px-4 relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #0a1f38 0%, #07233b 25%, #061d32 50%, #05182a 75%, #041421 100%)'
            }}>

            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500 rounded-full blur-2xl opacity-20"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Let's Discuss Your Project
                    </motion.h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Ready to bring your ideas to life? Let's create something amazing together.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                I'm always interested in new opportunities and creative projects.
                                Whether you have a question or just want to say hi, I'll get back to you!
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            <motion.div
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Email</p>
                                    <a
                                        href="mailto:chaiteychaitey30@gmail.com"
                                        className="text-white font-medium hover:text-indigo-300 transition-colors duration-300"
                                    >
                                        chaiteychaitey30@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Phone</p>
                                    <a
                                        href="tel:+880 1*********"
                                        className="text-white font-medium hover:text-indigo-300 transition-colors duration-300"
                                    >
                                        +880 1234567890
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-2xl"
                    >
                        <motion.form
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Name Field */}
                                <motion.div variants={itemVariants}>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold text-gray-200 mb-2"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 outline-none"
                                        placeholder="Enter your name"
                                    />
                                </motion.div>

                                {/* Email Field */}
                                <motion.div variants={itemVariants}>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-gray-200 mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 outline-none"
                                        placeholder="your@email.com"
                                    />
                                </motion.div>
                            </div>


                            <motion.div variants={itemVariants}>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-semibold text-gray-200 mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 outline-none"
                                    placeholder="What's this about?"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-gray-200 mb-2"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 outline-none resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </motion.div>


                            <motion.div variants={itemVariants} className="pt-4">
                                <motion.button
                                    disabled={isSubmitting || isSubmitted}
                                    whileHover={!isSubmitting && !isSubmitted ? {
                                        scale: 1.02,
                                        boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)"
                                    } : {}}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 focus:ring-4 focus:ring-indigo-300 focus:outline-none ${isSubmitted
                                        ? 'bg-green-500 text-white cursor-not-allowed'
                                        : isSubmitting
                                            ? 'bg-indigo-400 text-white cursor-not-allowed'
                                            : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                                            />
                                            Sending...
                                        </div>
                                    ) : isSubmitted ? (
                                        '✓ Message Sent!'
                                    ) : (
                                        'Send Message'
                                    )}
                                </motion.button>
                            </motion.div>
                        </motion.form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;