import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const BackToTop = () => {
    const buttonRef = useRef();

    useGSAP(() => {
        gsap.set(buttonRef.current, { opacity: 0, scale: 0, y: 50 });

        gsap.to(buttonRef.current, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            scrollTrigger: {
                trigger: "body",
                start: "top -400px",
                end: "top -400px",
                toggleActions: "play none none reverse",
            }
        });
    }, { scope: buttonRef });

    const scrollToTop = () => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: 0,
            ease: "power4.inOut"
        });
    };

    return (
        <div
            ref={buttonRef}
            className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3 pointer-events-none group"
        >
            {/* Okrągły przycisk z ikoną */}
            <button
                onClick={scrollToTop}
                className="
            pointer-events-auto
            w-14 h-14
            flex items-center justify-center
            bg-[#f0ca6a] hover:bg-white 
            rounded-full 
            shadow-[0_10px_25px_rgba(0,0,0,0.4)]
            transition-all duration-500 ease-in-out
            border border-white/10
        "
                aria-label="Scroll to top"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-500 group-hover:-translate-y-1.5"
                >
                    <path d="m18 15-6-6-6 6" />
                </svg>
            </button>

            {/* Tekst pod buttonem */}
            <span className="
        pointer-events-none
        text-[10px] font-bold uppercase tracking-[0.25em] 
        text-[#f0ca6a] group-hover:text-white
        transition-colors duration-500
        drop-shadow-md
    ">
                Back To Top
            </span>
        </div>
    );
};

export default BackToTop;