"use client";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import {
  HardHat,
  Building2,
  Clock3,
  Handshake,
} from "lucide-react";
import { useRef } from "react";

export default function AboutSection() {
  const countRef = useRef(null);

  const inView = useInView(countRef, {
    once: false,
    amount: 0.4,
  });

  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-10 lg:px-16 overflow-hidden bg-white"
    >

      {/* Glow */}
      <div className="
      absolute
      top-[-20%]
      left-[-10%]

      w-[35vw]
      h-[35vw]

      rounded-full

      bg-cyan-100

      blur-[160px]
      opacity-40
      " />


      {/* Floating Icon */}

      <motion.div
        animate={{ y:[0,-20,0] }}
        transition={{ repeat:Infinity,duration:8 }}
        className="
        absolute
        -right-16
        top-20

        opacity-[0.05]

        text-cyan-300
        "
      >

        <HardHat size={420}/>

      </motion.div>





      <div className="
      relative z-10

      max-w-7xl
      mx-auto

      grid
      lg:grid-cols-2

      gap-10
      lg:gap-14

      items-center
      ">


        {/* LEFT IMAGE */}

        <motion.div

          initial={{
            opacity:0,
            x:-60
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:false,
            amount:.2
          }}

          transition={{
            duration:.8
          }}

        >

          <div className="relative">

            <motion.img

              src="/images/about-site.jpg"

              whileHover={{
                scale:1.02
              }}

              className="
              rounded-[32px]

              shadow-2xl

              w-full
              "

            />


            {/* EXPERIENCE */}

            <motion.div

              ref={countRef}

              animate={{
                y:[0,-8,0]
              }}

              transition={{
                repeat:Infinity,
                duration:3
              }}

              className="
              absolute

              -bottom-6
              -left-5

              bg-white

              px-6 py-5

              rounded-3xl

              shadow-2xl
              "

            >

              <h2 className="
              text-4xl

              font-bold

              text-cyan-500
              ">

                {inView && (

                  <CountUp
                    start={0}
                    end={9}
                    duration={3}
                  />

                )}

                +

              </h2>


              <p className="
              text-gray-500

              tracking-[3px]

              text-[10px]

              mt-1
              ">

                YEARS EXPERIENCE

              </p>

            </motion.div>

          </div>

        </motion.div>






        {/* RIGHT */}

        <motion.div

          initial={{
            opacity:0,
            x:50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:false
          }}

          transition={{
            duration:.8
          }}

        >


          {/* Heading */}

          <div className="
          flex
          items-center

          gap-4

          mb-4
          ">

            <div className="
            w-12
            h-[2px]

            bg-cyan-400
            "/>

            <p className="
            uppercase

            tracking-[5px]

            text-cyan-500

            text-sm
            ">

              THE COMPANY

            </p>

          </div>



          <h2 className="
          text-5xl
          md:text-7xl

          font-bold

          leading-[1.1]

          mb-5
          ">

            Building the Future

            <br/>

            <span className="
            text-cyan-500
            ">

              With Precision

            </span>

          </h2>



          <p className="
          text-gray-700

          leading-loose

          mb-4
          ">

            SHIVAANYA REALCON delivers premium
            construction and infrastructure
            projects with precision,
            innovation and trust.

          </p>



          <p className="
          text-gray-500

          leading-loose

          mb-8
          ">

            We combine engineering excellence
            with modern construction practices
            to build durable infrastructure.

          </p>





          {/* CARDS */}

          <div className="
          grid
          grid-cols-2

          gap-5
          ">

            {[
              {
                title:"Quality Construction",
                icon:<Building2 size={18}/>
              },

              {
                title:"Expert Engineering",
                icon:<HardHat size={18}/>
              },

              {
                title:"On-Time Delivery",
                icon:<Clock3 size={18}/>
              },

              {
                title:"Trusted Partner",
                icon:<Handshake size={18}/>
              }

            ].map((item,index)=>(

              <motion.div

                key={item.title}

                initial={{
                  opacity:0,
                  y:30
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                viewport={{
                  once:false
                }}

                transition={{
                  delay:index*.08
                }}

                whileHover={{
                  y:-8,
                  scale:1.02
                }}

                className="
                bg-white

                p-5

                rounded-3xl

                border
                border-gray-100

                shadow-md

                hover:shadow-2xl

                duration-300
                "

              >

                <div className="
                w-10
                h-10

                rounded-xl

                bg-cyan-100

                shadow-sm

                flex
                items-center
                justify-center

                text-cyan-500

                mb-4
                ">

                  {item.icon}

                </div>



                <h4 className="
                font-semibold

                text-black

                text-sm
                md:text-base
                ">

                  {item.title}

                </h4>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}