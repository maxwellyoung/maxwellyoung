"use client";

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "@css/about.module.css";
import { FiMapPin, FiMinus, FiPlus } from "react-icons/fi";
import Image from "next/image";
import Section from "./Section";
import * as data from "./data";
import { rgbDataURL } from "../MDX";
import ContactForm from "../ContactForm";

const About: FC = () => (
  <div className={styles.box}>
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/photos/singing.jpg"
          alt="Maxwell Young"
          width={290}
          height={500}
          draggable={false}
          placeholder="blur"
          blurDataURL={rgbDataURL(204, 136, 105)}
          priority
        />
      </div>
      <div className={styles.image}>
        <Image
          src="/photos/wellington.jpg"
          alt="Skyshot of Wellington, New Zealand"
          width={400}
          height={500}
          draggable={false}
          placeholder="blur"
          blurDataURL={rgbDataURL(156, 188, 201)}
          priority
        />
      </div>
    </div>
    <Section content={data.about} id="about">
      <h1 className={styles.title}>About</h1>
    </Section>
    <Section content={data.otherventures} id="otherventures">
      <h1 className={styles.title}>Other ventures</h1>
    </Section>

    <Section
      content={data.work}
      extend={{
        title: "All Works",
        href: "https://github.com/maxwellyoung",
        newTab: true,
      }}
      id="works"
    >
      <h2 className={styles.title}>Select Work</h2>
    </Section>
    <Section
      content={data.writing}
      extend={{ title: "All Writing", href: "/writing" }}
      id="writing"
    >
      <h2 className={styles.title}>Select Writing</h2>
    </Section>
    <Section
      content={data.visual}
      extend={{ title: "All Visual Work", href: "/visual" }}
      id="visual"
    >
      <h2 className={styles.title}>Select Visual Work</h2>
    </Section>
  </div>
);

export default About;
