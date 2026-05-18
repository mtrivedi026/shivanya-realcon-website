"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {

return(

<section

id="contact"

className="
bg-white

py-28
px-6
md:px-12
lg:px-20
"

>

<div className="
container-width

grid

lg:grid-cols-2

gap-20
">



{/* LEFT */}

<motion.div

initial={{
opacity:0,
x:-40
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

GET IN TOUCH

</p>

</div>




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
delay:.1
}}

className="
text-5xl
md:text-6xl

font-bold

text-black

mb-8
"

>

Contact

<span className="
text-cyan-500

italic

ml-3
">

Us

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
delay:.2
}}

className="
text-gray-600

text-lg

leading-8

mb-14
"

>

Whether you have a question about services,
projects or anything else.

</motion.p>







<div className="
space-y-10
">

{[
{
icon:<MapPin className="text-cyan-500"/>,
title:"Registered Office",
text:"136, I-Thum Tower-B, Sector-62, Noida"
},

{
icon:<Mail className="text-cyan-500"/>,
title:"Email Us",
text:"srpl.noida@gmail.com"
},

{
icon:<Phone className="text-cyan-500"/>,
title:"Call Us",
text:"+91 99997 70910"
}

].map((item,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
x:-20
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:false
}}

transition={{
delay:index*.15
}}

whileHover={{
x:8
}}

className="
flex

gap-5
"

>

<div className="
bg-cyan-50

p-4

rounded-full
">

{item.icon}

</div>



<div>

<h4 className="
text-2xl

font-bold

text-black
">

{item.title}

</h4>


<p className="
text-gray-600

mt-2
">

{item.text}

</p>

</div>

</motion.div>

))}

</div>

</motion.div>









{/* FORM */}

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

className="
bg-white

border

rounded-3xl

p-10

shadow-xl
"

>

<motion.h3

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

className="
text-4xl

font-bold

text-black

mb-10
"

>

Send a Message

</motion.h3>




<form className="
space-y-6
">

<motion.input

whileFocus={{
scale:1.01
}}

type="text"

placeholder="Your Name"

className="
w-full

border

border-gray-300

rounded-xl

p-5

text-black

placeholder:text-gray-400

outline-none

focus:border-cyan-500
"
/>



<motion.input

whileFocus={{
scale:1.01
}}

type="email"

placeholder="Your Email"

className="
w-full

border

border-gray-300

rounded-xl

p-5

text-black

placeholder:text-gray-400

outline-none

focus:border-cyan-500
"
/>



<motion.textarea

whileFocus={{
scale:1.01
}}

rows={6}

placeholder="Your Message"

className="
w-full

border

border-gray-300

rounded-xl

p-5

text-black

placeholder:text-gray-400

outline-none

focus:border-cyan-500
"
/>




<motion.button

whileHover={{
scale:1.03
}}

whileTap={{
scale:.95
}}

className="
w-full

bg-cyan-500

text-white

py-5

rounded-xl

font-semibold

hover:bg-cyan-600
"

>

Submit Request

</motion.button>

</form>

</motion.div>

</div>

</section>

);

}