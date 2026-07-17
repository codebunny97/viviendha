"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Contacts() {
  return (
    <main className="text-[#3D4348]">

      {/* Hero */}

      <section className="bg-[#F9FAF9] min-h-[70vh] flex flex-col justify-center px-8 md:px-20">

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="uppercase tracking-[0.25em] text-[#6D8A89] font-semibold mb-3"
        >
          CONTACT US
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-6xl md:text-7xl font-bold leading-tight"
        >
          We'd love to
          <br />
          <span className="text-[#6D8A89]">
            hear from you.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .9 }}
          className="mt-6 text-xl leading-8 text-[#666F73] max-w-3xl"
        >
          Whether you're looking for your dream home, have questions about our
          projects, or simply want to know more about Viviendha, our team is
          here to help.
        </motion.p>

      </section>

      {/* Contact Cards */}

      <section className="bg-white py-20 px-8 md:px-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {[
            {
              icon: <Phone size={32} />,
              title: "Phone",
              value: "+91 9686696364",
            },
            {
              icon: <Mail size={32} />,
              title: "Email",
              value: "satya@viviendha.com",
            },
            {
              icon: <MapPin size={32} />,
              title: "Office",
              value: "Coming Soon\nHyderabad, Telangana",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
                duration: .6,
              }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-[#E4E8E7] bg-[#F9FAF9] p-8"
            >
              <div className="text-[#6D8A89] mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="whitespace-pre-line text-[#666F73] leading-7">
                {item.value}
              </p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* Contact Form */}

      <section className="bg-[#F3F6F5] py-20 px-8 md:px-20">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >

          <h2 className="text-5xl font-bold mb-4">
            Send us a Message
          </h2>

          <p className="text-[#666F73] mb-10">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-[#D7DDDB] bg-white p-4 outline-none focus:border-[#6D8A89]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-[#D7DDDB] bg-white p-4 outline-none focus:border-[#6D8A89]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-[#D7DDDB] bg-white p-4 outline-none focus:border-[#6D8A89]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-[#D7DDDB] bg-white p-4 outline-none focus:border-[#6D8A89]"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-xl border border-[#D7DDDB] bg-white p-4 outline-none resize-none focus:border-[#6D8A89]"
            />

            <button
              className="rounded-full bg-[#6D8A89] px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-[#5B7675]"
            >
              Send Message
            </button>

          </form>

        </motion.div>

      </section>

    

      {/* CTA */}

      <section className="bg-[#F9FAF9] py-20 text-center px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-bold mb-5">
            Ready to find your dream home?
          </h2>

          <p className="text-xl text-[#666F73] mb-8">
            Discover thoughtfully designed spaces built for every dream.
          </p>

          <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .96 }}
          className="bg-[#6D8A89] text-white rounded-full px-8 py-4 font-medium transition-all"
        >
          <Link href="/projects">Explore Projects</Link>
        </motion.button>

        </motion.div>

      </section>

    </main>
  );
}