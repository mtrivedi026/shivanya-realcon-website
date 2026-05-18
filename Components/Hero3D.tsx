"use client";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import Typed from "typed.js";

export default function Hero3D() {

const statsRef = useRef(null);
const textRef = useRef(null);

useEffect(() => {

const typed = new Typed(textRef.current, {
strings: [
"Delivering premium construction, infrastructure and manpower solutions."
],
typeSpeed: 40,
showCursor: false,
loop: false
});

return () => typed.destroy();

}, []);

const isInView = useInView(statsRef,{
once:false,
amount:0.4
});

return (

<section
id="home"
className="
relative
min-h-screen
overflow-hidden
flex
items-center
justify-center"
>

<div className="absolute inset-0 -z-10">

<video
autoPlay
muted
loop
playsInline
className="w-full h-full object-cover"
>

<source src="/videos/construction.mp4"/>

</video>

<div className="absolute inset-0 bg-black/45"/>

<div className="
absolute
top-0
left-1/2
-translate-x-1/2
w-[500px]
h-[250px]
bg-cyan-500/10
blur-[120px]"
/>

</div>

<div className="
container-width
relative z-20
text-center">

<motion.div
initial={{opacity:0,y:-20}}
whileInView={{opacity:1,y:0}}
viewport={{once:false}}

className="
inline-flex
px-5 py-2
rounded-full
bg-white/5
border border-cyan-400/20
text-cyan-300
tracking-[3px]
uppercase
text-xs
mb-6"
>

PREMIUM CONSTRUCTION COMPANY

</motion.div>



<motion.h1
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:false}}
className="font-black leading-none"
>

<span className="
block
text-cyan-300
text-5xl
md:text-7xl
lg:text-[85px]">

SHIVAANYA

</span>

<span className="
block
text-white
text-4xl
md:text-6xl
lg:text-[80px]">

REALCON

</span>

</motion.h1>


{/* Typing paragraph */}
<p
ref={textRef}
className="
text-gray-200
max-w-2xl
mx-auto
mt-8
text-lg
leading-8"
/>



<div className="
flex
justify-center
gap-4
mt-8
flex-wrap">

<a
href="#contact"
className="
px-7 py-3
rounded-full
bg-cyan-400
text-black
font-semibold">

Get Quote

</a>


<a
href="#projects"
className="
px-7 py-3
rounded-full
border border-cyan-400/30
text-cyan-200">

Projects

</a>

</div>



<div
ref={statsRef}
className="
mt-16
flex
justify-center
gap-16
md:gap-32
flex-wrap">

<div>

<h2 className="
text-cyan-300
text-4xl
font-bold">

{isInView && (
<CountUp start={0} end={100} duration={3}/>
)}

+

</h2>

<p className="text-gray-400">
Projects
</p>

</div>



<div>

<h2 className="
text-cyan-300
text-4xl
font-bold">

{isInView && (
<CountUp start={0} end={9} duration={3}/>
)}

+

</h2>

<p className="text-gray-400">
Experience
</p>

</div>



<div>

<h2 className="
text-cyan-300
text-4xl
font-bold">

{isInView && (
<CountUp start={0} end={300} duration={4}/>
)}

+

</h2>

<p className="text-gray-400">
Workforce
</p>

</div>

</div>

</div>

</section>

);

}