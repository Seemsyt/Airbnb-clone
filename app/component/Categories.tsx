"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { categories } from "@/lib/properties";

const Categories = () => {
  return (
    <>
      <div className="m-4 flex flex-col gap-2 border-b bg-grey">
        <h1 className="text-xl font-semibold">Categories </h1>
        <ul className="scroll-m-0 flex w-full gap-2 overflow-x-auto whitespace-nowrap p-1 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          {categories.map((category) => (
            <motion.li
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
              key={category.id}
              className="rounded-2xl p-1 font-medium"
            >
              <Link
                href={`/category/${category.slug}`}
                className="transition hover:text-zinc-950"
              >
                {category.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
