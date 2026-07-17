"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-linear-to-b from-[#f9faf9] via-[#f3f6f5] to-[#eef2f1] text-[#3d4348]">

      {/* Hero */}
      <section className="min-h-[85vh] flex flex-col justify-center px-8 md:px-20 max-w-7xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="uppercase tracking-[0.25em] text-[#6D8A89] font-semibold mb-3"
        >
          ABOUT VIVIENDHA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-6xl md:text-7xl font-bold leading-tight"
        >
          Helping you find
          <br />
          <span className="text-[#6D8A89]">
            more than just a place to live.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .9 }}
          className="mt-6 max-w-3xl text-xl leading-8 text-[#5b6165]"
        >
          At Viviendha, we believe every property tells a story and every
          client deserves a seamless experience. Whether you're searching
          for your first home, a luxury residence or the perfect investment,
          we're committed to helping you make confident decisions with
          transparency and expertise.
        </motion.p>

      </section>

      {/* Story */}

      <section className="py-18 px-8 md:px-20 max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-5xl font-bold mb-4"
        >
          Our Story
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-lg leading-8 text-[#5f6469] max-w-4xl"
        >
          Built on trust, innovation and customer-first values,
          Viviendha was founded to redefine the home buying experience.
          Every project reflects thoughtful planning, quality
          craftsmanship and a commitment to creating communities where
          families truly belong.
        </motion.p>

      </section>

      {/* Vision Mission */}

      <section className="py-16 px-8 md:px-20">

        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">

          {[
            {
              title: "Our Vision",
              text:
                "To become one of India's most trusted real estate developers by building spaces that enrich everyday life."
            },
            {
              title: "Our Mission",
              text:
                "Deliver homes with exceptional quality, thoughtful planning and complete transparency from start to finish."
            }
          ].map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .2,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-white rounded-3xl shadow-lg p-8"
            >

              <h3 className="text-3xl font-bold text-[#6D8A89] mb-3">
                {item.title}
              </h3>

              <p className="leading-7 text-[#666]">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Why Choose */}

      <section className="py-20 px-8 md:px-20">

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center text-5xl font-bold mb-12"
        >
          Why Choose Viviendha?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">

          {[
            "Premium Locations",
            "Modern Design",
            "Transparent Process",
            "Customer-Centric Service",
          ].map((item, index) => (

            <motion.div
              key={item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl shadow-md p-7"
            >

              <h3 className="text-2xl font-semibold text-[#6D8A89] mb-3">
                {item}
              </h3>

              <p className="leading-7 text-[#666]">
                Creating exceptional experiences from your first inquiry
                until the day you receive your keys.
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Statistics */}

      <section className="py-18 bg-[#6D8A89] text-white">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {[
            ["50+", "Happy Families"],
            ["2+", "Years of Experience"],
            ["1", "Project Completed"],
            ["100%", "Transparency"],
          ].map(([number, text]) => (

            <motion.div
              key={text}
              initial={{ opacity: 0, scale: .8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
            >

              <h2 className="text-5xl font-bold mb-1">
                {number}
              </h2>

              <p>{text}</p>

            </motion.div>

          ))}

        </div>

      </section>

    </main>
  );
}