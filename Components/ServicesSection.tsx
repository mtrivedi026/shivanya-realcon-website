"use client";

import { motion } from "framer-motion";

import {
Building2,
Home,
Package,
PenTool,
Trees,
Wrench,
Ruler
} from "lucide-react";


const services = [

{ name:"Residential Construction", icon:Home },

{ name:"Commercial Projects", icon:Building2 },

{ name:"Warehousing", icon:Package },

{ name:"Interior Designing", icon:PenTool },

{ name:"Architecture", icon:Trees },

{ name:"Infrastructure Development", icon:Wrench },

];


export default function ServicesSection(){

return(

<section

id="services"

className="
relative

py-28
px-6
md:px-12
lg:px-20

overflow-hidden

bg-[#020617]
"

>


{/* Background */}

<div className="
absolute inset-0

bg-[url('/images/services-bg.png')]
bg-cover

opacity-5
"/>



{/* Moving glow */}

<motion.div

animate={{
x:["-100%","100%"]
}}

transition={{
repeat:Infinity,
duration:10,
ease:"linear"
}}

className="
absolute

top-0

w-[30%]
h-full

bg-gradient-to-r

from-transparent
via-cyan-400/10
to-transparent

blur-3xl
"
/>




{/* Floating ruler */}

<motion.div

animate={{
rotate:[-10,-5,-10],
y:[0,-30,0]
}}

transition={{
repeat:Infinity,
duration:8
}}

className="
absolute

left-0
bottom-0

opacity-[0.03]

text-cyan-300
"

>

<Ruler size={500}/>

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
once:false,
amount:.2
}}

transition={{
duration:.8
}}

className="
text-center

mb-20
"

>

<div className="
flex

justify-center
items-center

gap-4

mb-4
">

<div className="w-10 h-[1px] bg-cyan-400"/>

<span className="
text-cyan-300

tracking-[4px]

uppercase

text-sm
">

WHAT WE DO

</span>

<div className="w-10 h-[1px] bg-cyan-400"/>

</div>



<h2 className="
text-5xl
md:text-7xl

font-serif
font-bold

text-white
">

Our

<span className="
text-cyan-300
italic

ml-4
">

Services

</span>

</h2>

</motion.div>






{/* Cards */}

<div className="
grid

md:grid-cols-2
lg:grid-cols-3

gap-8
">

{services.map((service,index)=>{

const Icon=service.icon;

return(

<motion.div

key={service.name}

initial={{
opacity:0,
y:60,
scale:.95
}}

whileInView={{
opacity:1,
y:0,
scale:1
}}

viewport={{
once:false,
amount:.2
}}

transition={{
delay:index*.08,
duration:.8,
ease:"easeOut"
}}

whileHover={{
y:-15,
scale:1.03,
rotateX:6
}}

className="
group

relative

bg-[#071120]

border
border-slate-800

rounded-2xl

p-10

overflow-hidden

hover:border-cyan-400/40

transition-all
duration-500
"

>


{/* glow */}

<div className="
absolute
inset-0

opacity-0

group-hover:opacity-100

transition

bg-gradient-to-r

from-transparent

via-cyan-400/10

to-transparent
"/>




{/* icon */}

<motion.div

whileHover={{
rotate:360,
scale:1.2
}}

transition={{
duration:.8
}}

className="
w-16
h-16

rounded-full

bg-slate-900

flex
justify-center
items-center

text-cyan-300

mb-8

group-hover:bg-cyan-300
group-hover:text-black

duration-300
"

>

<Icon size={28}/>

</motion.div>




<h3 className="
text-2xl

font-serif

text-white

mb-5

group-hover:text-cyan-300

duration-300
">

{service.name}

</h3>



<p className="
text-gray-400

leading-loose

mb-8
">

High-quality premium construction
services tailored for modern
structural excellence.

</p>



<div className="
w-10
h-[2px]

bg-cyan-400

group-hover:w-20

duration-500
"/>

</motion.div>

)

})}

</div>

</div>

</section>

)

}