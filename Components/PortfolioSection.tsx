"use client";

import { motion, useInView } from "framer-motion";
import { Download, Eye, Compass } from "lucide-react";
import CountUp from "react-countup";
import { useRef } from "react";

export default function PortfolioSection() {

const countRef=useRef(null);

const inView=useInView(
countRef,
{
once:false,
amount:.3
}
);

return(

<section
id="portfolio"

className="
relative

py-28
px-6
md:px-12
lg:px-20

bg-[#020617]/80

overflow-hidden

bg-blueprint
"
>

{/* Glow */}

<div className="
absolute

top-0
right-0

w-[600px]
h-[600px]

bg-gradient-radial

from-[#00E5FF]/5

to-transparent

blur-[100px]

pointer-events-none
"/>



{/* Rotating icon */}

<motion.div

animate={{
rotate:[45,405]
}}

transition={{
repeat:Infinity,
duration:40,
ease:"linear"
}}

className="
absolute

left-10
top-1/2

-translate-y-1/2

text-[#00E5FF]

opacity-[0.02]
"

>

<Compass
size={600}
strokeWidth={1}
/>

</motion.div>






<div className="
container-width
relative z-10
">

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
once:false
}}

transition={{
duration:.8
}}

className="
text-center

mb-20
"

>

<motion.div

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

viewport={{
once:false
}}

transition={{
delay:.2
}}

className="
flex
items-center
justify-center

gap-4

mb-4
"

>

<span className="
w-8
h-[1px]

bg-[#00E5FF]
"/>

<span className="
text-[#00E5FF]

tracking-[0.2em]

text-sm

uppercase
">

Company Profile

</span>

<span className="
w-8
h-[1px]

bg-[#00E5FF]
"/>

</motion.div>



<motion.h2

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
delay:.3
}}

className="
text-4xl
md:text-5xl
lg:text-6xl

font-serif

font-bold

text-white

mb-4
"

>

Corporate

<span className="
text-blue-gradient

italic

font-light

ml-2
">

Portfolio

</span>

</motion.h2>




<motion.p

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

viewport={{
once:false
}}

transition={{
delay:.5
}}

className="
text-gray-400

max-w-2xl

mx-auto
"

>

Explore our comprehensive company profile detailing capabilities and achievements.

</motion.p>

</motion.div>








{/* MAIN CARD */}

<motion.div

ref={countRef}

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:false
}}

transition={{
duration:1
}}

whileHover={{
boxShadow:"0 0 40px rgba(0,229,255,.08)"
}}

className="
bg-[#0f172a]/80

border

border-[#1e293b]

p-8
md:p-12
lg:p-16

relative

overflow-hidden

backdrop-blur-xl
"

>

<div className="
absolute

top-0
left-0

w-1/3

h-[2px]

bg-gradient-to-r

from-[#00E5FF]

to-transparent
"/>




<div className="
grid

lg:grid-cols-2

gap-16

items-center
">




{/* IMAGE */}

<motion.div

initial={{
opacity:0,
scale:.95
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:false
}}

transition={{
duration:.8
}}

className="
relative

group

overflow-hidden
"

>

<div className="
aspect-[4/3]

w-full
">

<motion.img

src="/images/portfolio-cover.png"

whileHover={{
scale:1.08
}}

transition={{
duration:.7
}}

className="
w-full
h-full

object-cover

brightness-90
"

/>

</div>

</motion.div>







{/* CONTENT */}

<motion.div

initial={{
opacity:0,
x:40
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

<h3 className="
text-3xl
md:text-4xl

font-serif

font-bold

text-white

mb-6
">

Shivaanya Realcon

</h3>



<p className="
text-gray-300

leading-relaxed

mb-10
">

View our complete corporate profile including milestones and achievements.

</p>






{/* STATS */}

<div className="
grid

grid-cols-3

gap-6

mb-12

border-y

border-[#1e293b]

py-8
">

{[
{num:100,label:"Projects"},
{num:300,label:"Workforce"},
{num:10,label:"Clients"}

].map((item,index)=>(

<motion.div

key={item.label}

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
delay:index*.1
}}

className="
text-center

border-r

last:border-0

border-[#1e293b]
"

>

<p className="
text-3xl

font-serif

text-[#00E5FF]
">

{inView && (

<CountUp
start={0}
end={item.num}
duration={3}
/>

)}

+

</p>


<p className="
text-xs

uppercase

text-gray-500
">

{item.label}

</p>

</motion.div>

))}

</div>







{/* BUTTONS */}

<div className="
flex

flex-wrap

gap-4
">

<motion.a

whileHover={{
scale:1.05
}}

whileTap={{
scale:.95
}}

href="/files/company-portfolio.pdf"

target="_blank"

className="
flex
items-center
gap-2

bg-[#00E5FF]

text-[#020617]

px-8
py-4

font-medium
"

>

<Eye size={18}/>

View Portfolio

</motion.a>



<motion.a

whileHover={{
scale:1.05
}}

whileTap={{
scale:.95
}}

href="/files/company-portfolio.pdf"

download

className="
flex
items-center
gap-2

border

border-[#00E5FF]

text-[#00E5FF]

px-8
py-4
"

>

<Download size={18}/>

Download PDF

</motion.a>

</div>

</motion.div>

</div>

</motion.div>

</div>

</section>

);

}