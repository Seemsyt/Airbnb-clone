"use client"
import Categories from "./component/Categories";
import PropertyList from "./component/PropertyList";
import {motion} from "motion/react"

export default function Home() {
  return (
    <motion.main initial={{ opacity:0}}
     animate={{opacity:1}}
     transition={{duration:0.8, ease:"easeIn"}} className="pt-16">
      <Categories />
      <PropertyList />
    </motion.main>
  );
}
