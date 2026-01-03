import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const About = () => {
    useGSAP(() => { 
        const titleSplit = SplitText.create("#about h2", {
            type: "words"
        });

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center',
            }
        });

        scrollTimeline.from(titleSplit.words, {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
            stagger: 0.03,
        })
        .from(".top-grid div, .bottom-grid div", {
             opacity: 0,
             duration: 1,
             ease: "power1.inOut",
             stagger: 0.04,
        }, '-=0.5')
    })

    return (
        <div id='about'>
            <div className='mt-16 md:px-0 px-5'>
                <div className='content'>
                    <div className='md:col-span-8 '>
                        <p className='badge'> Best Cocktails</p>
                        <h2>Crafted with attention to detail <span className='text-white'>-</span> from muddle to garnish</h2>
                    </div>
                    <div className='sub-content'>
                        <p>At Classy Cocktails, we believe that a great cocktail is more than just a drink - it's an experience. That's why we use only the freshest ingredients and the finest spirits to create our signature cocktails. Whether you're in the mood for a classic margarita or a modern twist on an old favorite, our expert mixologists have got you covered.</p>
                        <div>
                            <p className='md:text-3xl text-xl font-bold'>
                                <span>4.7</span>/5
                            </p>
                            <p className='text-sm text-white-100'>
                                More than 10,000 customer reviews
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='top-grid'>
                <div className='md:col-span-3'>
                    <div className='noisy' />
                    <img src="images/abt1.png" alt="grid-img-1" />
                </div>
                <div className='md:col-span-6'>
                    <div className='noisy' />
                    <img src="images/abt2.png" alt="grid-img-2" />
                </div>
                <div className='md:col-span-3'>
                    <div className='noisy' />
                    <img src="images/abt5.png" alt="grid-img-5" />
                </div>
            </div>
            <div className='bottom-grid'>
                <div className='md:col-span-8'>
                    <div className='noisy' />
                    <img src="images/abt3.png" alt="grid-img-3" />
                </div>
                <div className='md:col-span-4'>
                    <div className='noisy' />
                    <img src="images/abt4.png" alt="grid-img-4" />
                </div>
            </div>
        </div>
    )
}

export default About