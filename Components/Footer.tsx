"use client";

import { FaWhatsapp } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
return (
<>

<footer className="
bg-[#020617]
border-t
border-cyan-900/30

pt-20
pb-8">

<div className="
container-width

grid
md:grid-cols-3

gap-14">

{/* LEFT */}

<div>

<img
src="/images/logo.png"
className="h-14 mb-6"
/>

<p className="
text-gray-400
leading-8
max-w-sm">

Shivaanya Realcon delivers premium
construction, manpower and infrastructure
solutions with quality and reliability.

</p>

</div>



{/* CENTER */}

<div>

<h3 className="
text-white
font-semibold
mb-6">

Quick Links

</h3>

<div className="
grid
grid-cols-2
gap-4

text-gray-400">

<a href="#about" className="hover:text-cyan-400">About</a>
<a href="#services" className="hover:text-cyan-400">Services</a>
<a href="#projects" className="hover:text-cyan-400">Projects</a>
<a href="#portfolio" className="hover:text-cyan-400">Portfolio</a>
<a href="#manpower" className="hover:text-cyan-400">Manpower</a>
<a href="#contact" className="hover:text-cyan-400">Contact</a>

</div>

</div>



{/* RIGHT */}

<div>

<h3 className="
text-white
font-semibold
mb-6">

Contact Info

</h3>

<div className="
space-y-5
text-gray-400">

<div className="flex gap-3">
<MapPin size={18}/>
<p>136, I-Thum Tower-B, Sector-62, Noida</p>
</div>

<div className="flex gap-3">
<Phone size={18}/>
<p>+91 99997 70910</p>
</div>

<div className="flex gap-3">
<Mail size={18}/>
<p>srpl.noida@gmail.com</p>
</div>

</div>

</div>

</div>



{/* Bottom */}

<div className="
container-width

border-t
border-slate-800

mt-14
pt-6

flex
justify-between

flex-col
md:flex-row

gap-4">

<p className="
text-gray-500
text-sm">

© {new Date().getFullYear()}
Shivaanya Realcon Pvt Ltd.
All Rights Reserved.

</p>

<p className="
text-gray-600
text-sm">

Designed & Developed by MTRIVEDI

</p>

</div>

</footer>



{/* WhatsApp */}

<a
href="https://wa.me/919999770910"
target="_blank"

className="
fixed
bottom-8
right-8

w-14
h-14

rounded-full

bg-[#25D366]

flex
justify-center
items-center

text-white
text-3xl

shadow-lg

hover:scale-110

transition

z-50">

<FaWhatsapp/>

</a>

</>

);
}