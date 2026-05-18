"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function ProjectsGallery() {
  const projectImages = Array.from(
    { length: 16 },
    (_, i) => i + 15
  );

  return (
    <section
      id="projects"
      className="
      relative

      py-28
      px-6
      md:px-12
      lg:px-20

      bg-white

      overflow-hidden
      "
    >

      {/* background icon */}

      <motion.div

        animate={{
          scale:[1,1.05,1]
        }}

        transition={{
          repeat:Infinity,
          duration:8
        }}

        className="
        absolute

        right-0
        top-1/4

        text-cyan-200

        opacity-[0.05]
        "

      >

        <Building2 size={700}/>

      </motion.div>





      {/* HEADING */}

      <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:false,
          amount:.2
        }}

        transition={{
          duration:.8
        }}

        className="
        relative z-10

        max-w-7xl

        mx-auto

        mb-16
        "

      >

        <div className="
        flex
        items-center

        gap-4

        mb-5
        ">

          <div className="
          w-10
          h-[2px]

          bg-cyan-500
          "/>

          <p className="
          uppercase

          tracking-[5px]

          text-cyan-500

          text-sm
          ">

            OUR WORK

          </p>

        </div>



        <h2 className="
        text-5xl
        md:text-6xl

        font-bold

        text-black
        ">

          Featured

          <span className="
          text-cyan-500

          italic

          ml-3
          ">

            Projects

          </span>

        </h2>



        <motion.p

          initial={{
            opacity:0,
            y:20
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:false
          }}

          transition={{
            delay:.2,
            duration:.8
          }}

          className="
          text-gray-600

          max-w-2xl

          mt-8

          text-lg

          leading-8
          "

        >

          A curated selection of our finest construction
          and infrastructure developments showcasing
          commitment to excellence.

        </motion.p>

      </motion.div>






      {/* GALLERY */}

      <div className="
      relative z-10

      max-w-[1600px]

      mx-auto
      ">

        <div className="
        grid

        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4

        gap-5
        ">

          {projectImages.map((num,idx)=>(

            <motion.div

              key={num}

              initial={{
                opacity:0,
                y:50
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:false,
                amount:.15
              }}

              transition={{
                delay:idx*.05,
                duration:.6
              }}

              whileHover={{
                y:-8
              }}

              className="
              bg-white

              border

              rounded-2xl

              shadow-sm

              overflow-hidden
              "

            >

              <motion.img

                src={`/images/project_page_${num}.jpg`}

                whileHover={{
                  scale:1.06
                }}

                transition={{
                  duration:.5
                }}

                className="
                w-full

                h-[250px]

                object-cover
                "

              />



              <div className="p-5">

                <p className="
                text-cyan-500

                uppercase

                text-xs
                ">

                  Construction

                </p>


                <h3 className="
                text-black

                font-semibold

                mt-2
                ">

                  Project {idx+1}

                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}