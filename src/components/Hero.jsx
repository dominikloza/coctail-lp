import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {

    const videoRef = useRef();

    const isMobile = useMediaQuery({ maxWidth: 767 })

    useGSAP(() => {

        gsap.registerPlugin(SplitText);
        const paragraphSplit = new SplitText(".subtitle", {
            type: "lines",
        });

        gsap.from('.manual-char', {
            y: 500,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            y: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
            delay: 1,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
            .to('.right-leaf', {
                y: 200
            }, 0)
            .to('.left-leaf', { y: -300 }, 0)
    }, []);

    return (
        <>
            <section id='hero' className='noisy' >
                <h1 className='title overflow-hidden'>
                    {'ESSENCE'.split('').map((char, index) => (
                        <span
                            key={index}
                            className={'text-gradient manual-char'}
                            style={{ display: 'inline-block', position: 'relative' }}
                        >
                            {char}
                        </span>
                    ))}
                </h1>

                <img src="/images/hero-left-leaf.png" alt="leaf" className='left-leaf' />
                <img src="/images/hero-right-leaf.png" alt="leaf" className='right-leaf' />
                <div className='body'>
                    <div className='content'>
                        <div className='space-y-5 hidden md:block'>
                            <p>Golden Hour. Green Notes.</p>
                            <p className='subtitle'>Crafted Classics<br /> Timeless Moments</p>
                        </div>
                        <div className='view-cocktails'>
                            <p className='subtitle'>Timeless refinement meets premium craft. Every glass is a precise blend of excellence, designed to transcend the ordinary.</p>
                            <a href="#cocktails"></a>
                        </div>
                    </div>
                </div>
            </section>
            <div className='video absolute inset-0'>
                <video
                    ref={videoRef}
                    src='/videos/hero.mp4'
                    muted
                    playsInline
                    preload='auto'
                />
            </div>
        </>
    )
}

export default Hero