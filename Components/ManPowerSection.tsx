"use client";

import { motion, useInView } from "framer-motion";
import { HardHat } from "lucide-react";
import CountUp from "react-countup";
import { useRef } from "react";

export default function ManPowerSection() {

const countRef=useRef(null);

const inView=useInView(
countRef,
{
once:false,
amount:.3
}
);

const workforce = [
{ role:"Civil Engineers", qty:12 },

{ role:"Site Supervisors", qty:20 },

{ role:"Skilled Labour", qty:150 },

{ role:"Unskilled Labour", qty:200 },

{ role:"Electricians", qty:25 },

{ role:"Bar Benders", qty:40 },

{ role:"Masons", qty:80 },

{ role:"Carpenters", qty:60 },
];

return(

<section

id="manpower"

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
y:[0,-20,0]
}}

transition={{
repeat:Infinity,
duration:8
}}

className="
absolute

right-10
bottom-0

text-cyan-100

opacity-[0.06]
"

>

<HardHat size={450}/>

</motion.div>






<div className="
container-width
relative z-10
">



{/* Heading */}

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
once:false
}}

transition={{
duration:.8
}}

className="
mb-20
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

OUR TEAM

</p>

</div>



<h2 className="
text-5xl
md:text-6xl

font-bold

text-black

leading-tight
">

Workforce

<span className="
text-cyan-500

italic

ml-3
">

Strength

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
delay:.2
}}

className="
text-gray-600

max-w-2xl

mt-8

text-lg

leading-8
"

>

A highly skilled and dedicated workforce powering every successful project with expertise, precision and commitment to excellence.

</motion.p>

</motion.div>







{/* Cards */}

<div

ref={countRef}

className="
grid

grid-cols-2
md:grid-cols-4

gap-8
"

>

{workforce.map((item,index)=>(

<motion.div

key={index}

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
delay:index*.02,
duration:.2
}}

whileHover={{
y:-12,
scale:1.05,
boxShadow:"0 25px 60px rgba(6,182,212,.28)"
}}

className="
group

bg-gray-50

rounded-3xl

p-8

border
border-gray-200

shadow-sm

hover:border-cyan-400/50

transition-all
duration-500
"

>

<h3 className="
text-5xl
font-bold
text-black

group-hover:text-cyan-500

transition-all
duration-100

mb-4
">

{inView && (

<CountUp
start={0}
end={item.qty}
duration={2.5}
/>

)}

+

</h3>


<p className="
uppercase
tracking-wide
text-gray-600
text-sm

group-hover:text-gray-800

duration-300
">

{item.role}

</p>

</motion.div>

))}

</div>

</div>

</section>

);

}