import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export function App() {
  const [isMounted, setIsMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const formData = new FormData();
    formData.append('form-name', 'waitlist');
    formData.append('email', email);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };
  const blurFade = (delay: number) => ({
    initial: {
      opacity: 0,
      y: 16,
      filter: 'blur(10px)'
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)'
    },
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      delay
    }
  });
  return (
    <div className="relative w-full bg-[#0a0a0a] selection:bg-white/20 selection:text-white">
      {/* Hidden form for Netlify to detect at build time */}
      <form name="waitlist" data-netlify="true" hidden>
        <input type="email" name="email" />
      </form>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Layered Gradient Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Base dark */}
          <div className="absolute inset-0 bg-[#0a0a0a]" />

          {/* Deep Blue / Purple bottom right */}
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 0.6
            }}
            transition={{
              duration: 3
            }}
            className="absolute -bottom-[20%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-[#1e1b4b] blur-[120px] mix-blend-screen" />
          

          {/* Vibrant Purple top left */}
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 0.5
            }}
            transition={{
              duration: 3,
              delay: 0.5
            }}
            className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-[#6b21a8] blur-[140px] mix-blend-screen" />
          

          {/* Subtle Amber/Orange center top */}
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 0.3
            }}
            transition={{
              duration: 3,
              delay: 1
            }}
            className="absolute top-[10%] left-[40%] w-[50vw] h-[50vw] rounded-full bg-[#9a3412] blur-[160px] mix-blend-screen" />
          

          {/* Noise overlay for texture */}
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'
            }}>
          </div>
        </div>

        {/* Top Navigation */}
        <motion.nav
          {...blurFade(0.2)}
          className="absolute top-0 left-0 right-0 z-20 p-6 md:p-8 flex justify-between items-start w-full">
          
          <div className="border border-white/30 rounded-full px-5 py-1.5 text-xs sm:text-xs tracking-widest uppercase text-white/90">
            Refocal Studio
          </div>
        </motion.nav>

        {/* Massive Hero Text */}
        <main className="z-10 flex flex-col items-center justify-center px-6 text-center w-full max-w-[90vw]">
          <motion.h1
            {...blurFade(0.5)}
            className="font-bebas text-[15vw] sm:text-[12vw] md:text-[10vw] leading-[0.85] tracking-normal text-white/95 uppercase"
            style={{
              textShadow: '0 4px 24px rgba(0,0,0,0.4)'
            }}>
            
            Clarity
            <br />
            Through
            <br />
            Design
          </motion.h1>
        </main>

        {/* Bottom Bar */}
        <motion.div
          {...blurFade(0.8)}
          className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-0 w-full">
          
          <div className="w-full md:w-1/3 text-center md:text-left order-2 md:order-1">
            <p className="text-xs sm:text-xs text-white/60 tracking-[0.2em] uppercase font-medium">
              Coming soon
            </p>
          </div>

          <div className="w-full md:w-1/3 text-center order-1 md:order-2">
            <p className="text-xs sm:text-xs text-white/80 font-light tracking-wide uppercase leading-relaxed max-w-xs mx-auto">
              Helping companies communicate complex ideas through clear,
              intentional visuals.
            </p>
          </div>

          <div className="w-full md:w-1/3 text-center md:text-right order-3 md:order-3">
            <a
              href="mailto:hello@refocal.studio"
              className="text-xs sm:text-xs text-white/60 tracking-[0.2em] uppercase font-medium hover:text-white transition-colors">
              
              hello@refocal.studio
            </a>
          </div>
        </motion.div>
      </section>

      {/* SECOND SECTION - Email Signup */}
      <section className="relative z-10 w-full bg-[#050505] py-32 px-6 flex flex-col items-center justify-center border-t border-white/5">
        <motion.div
          initial={{
            opacity: 0,
            y: 24
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="w-full max-w-md flex flex-col items-center text-center">
          
          <p className="text-sm md:text-base text-white/50 font-light tracking-wide mb-8">
            Be the first to know when Refocal Studio launches →
          </p>

          {!submitted ?
          <form
            name="waitlist"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 sm:gap-0 w-full">
            
              <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-white/[0.03] border border-white/[0.08] sm:rounded-r-none rounded-sm px-5 py-4 text-sm text-white/80 placeholder:text-white/20 font-light tracking-wide outline-none focus:border-white/20 transition-colors duration-300" />
            
              <button
              type="submit"
              className="bg-white/[0.08] border border-white/[0.08] sm:border-l-0 sm:rounded-l-none rounded-sm px-6 py-4 text-xs text-white/70 uppercase tracking-[0.15em] font-medium hover:bg-white/[0.12] hover:text-white transition-all duration-300 whitespace-nowrap">
              
                Notify me
              </button>
            </form> :

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-sm px-5 py-4">
              <p className="text-sm text-white/60 font-light tracking-wide">
                You're on the list. Thank you.
              </p>
            </motion.div>
          }
        </motion.div>
      </section>
    </div>);

}