"use client";

import { motion, useInView } from "framer-motion";
import { Hammer } from "lucide-react";
import CountUp from "react-countup";
import { useRef } from "react";

export default function EquipmentsSection() {

const countRef = useRef(null);

const inView = useInView(
countRef,
{
once:false,
amount:.2
}
);

const equipments = [

{ name:"Mixer Lift Machine", qty:3, suffix:" Pcs.", img:"/images/Mixer Lift Machine.png" },

{ name:"Mixer Machine", qty:4, suffix:" Pcs.", img:"/images/Mixer Machine.png" },

{ name:"Lift Machine", qty:5, suffix:" Pcs.", img:"/images/Lift Machine.png" },

{ name:"Prop Jack", qty:2000, suffix:" Pcs.", img:"/images/Prop Jack.png" },

{ name:"Shuttering Ply Board", qty:20000, suffix:" Sq. Ft.", img:"/images/Shuttering Ply Board.png" },

{ name:"Scaffolding", qty:15000, suffix:" Sq. Ft.", img:"/images/Scaffolding.png" },

{ name:"Steel Cutter Machine", qty:10, suffix:" Pcs.", img:"/images/Steel cutter Machine.png" },

{ name:"Cutter Machine", qty:15, suffix:" Pcs.", img:"/images/Cutter Machine.png" },

{ name:"Surface Concrete Vibrator", qty:5, suffix:" Pcs.", img:"/images/surface concrete Vibrator machine.png" },

{ name:"Concrete Vibrator", qty:10, suffix:" Pcs.", img:"/images/concrete vibrator ma chine.png" },

{ name:"Construction Helmet", qty:50, suffix:" Pcs.", img:"/images/construction helmet.png" },

{ name:"Safety Harness", qty:25, suffix:" Pcs.", img:"/images/Safety Harness.png" },

{ name:"Safety Shoes", qty:40, suffix:" Pairs", img:"/images/Safety Shoes.png" },

{ name:"Industrial Radium Jacket", qty:60, suffix:" Pcs.", img:"/images/industrial radium jacket.png" },

{ name:"Boots", qty:30, suffix:" Pairs", img:"/images/Boots.png" }

];


return(

<section
id="equipments"
className="
relative
py-28
px-6
md:px-12
lg:px-20
bg-[#020617]/80
border-t
border-[#1e293b]
overflow-hidden
bg-blueprint
"
>

<motion.div
animate={{ rotate:[-10,10,-10] }}
transition={{ repeat:Infinity,duration:6 }}
className="
absolute
left-10
top-20
text-[#00E5FF]
opacity-[0.02]
"
>

<Hammer size={600}/>

</motion.div>





<div
ref={countRef}
className="
max-w-[1600px]
mx-auto
relative z-10
">

{/* Heading same */}

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:false}}
className="text-center mb-20"
>

<div className="
flex
justify-center
items-center
gap-4
mb-4
">

<span className="
w-8
h-[1px]
bg-[#00E5FF]
"/>

<span className="
text-[#00E5FF]
tracking-[0.2em]
uppercase
text-sm
">

Infrastructure

</span>

<span className="
w-8
h-[1px]
bg-[#00E5FF]
"/>

</div>


<h2 className="
text-4xl
md:text-5xl
lg:text-6xl

font-serif
font-bold

text-white
">

Equipment

<span className="
italic
font-light
ml-2
">

Fleet

</span>

</h2>

</motion.div>







{/* cards */}

<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-5

gap-6
">

{equipments.map((item,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
y:40,
scale:.95
}}

whileInView={{
opacity:1,
y:0,
scale:1
}}

viewport={{
once:false
}}

transition={{
delay:(index%5)*.08
}}

whileHover={{
y:-8
}}

className="
group

bg-[#0f172a]

border
border-[#1e293b]

overflow-hidden
"

>

<div className="
aspect-[4/3]

bg-[#1e293b]/30

p-6

relative
">

<div className="
absolute

inset-0

flex
justify-center
items-center

opacity-[0.03]
">

<Hammer size={80}/>

</div>


<motion.img

src={item.img}

whileHover={{
scale:1.1,
rotate:2
}}

className="
w-full
h-full

object-contain
relative z-10
"

/>

</div>





<div className="
p-6

border-t

border-[#1e293b]
">

<h3 className="
text-lg

font-serif

text-white

mb-3

truncate
">

{item.name}

</h3>



<div className="
flex
justify-between
items-center
">

<span className="
text-gray-500

uppercase

text-xs
">

Quantity

</span>



<span className="
text-[#00E5FF]

font-medium

text-sm
">

{inView && (

<CountUp

start={0}

end={item.qty}

duration={2.5}

/>

)}

{item.suffix}

</span>

</div>

</div>

</motion.div>

))}

</div>

</div>

</section>

);

}