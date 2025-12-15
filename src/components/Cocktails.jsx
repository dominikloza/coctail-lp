import React from 'react'
import { cocktailLists, mockTailLists } from '../../constans'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
gsap

const Cocktails = () => {

    useGSAP(() => {
        const paralaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true
            }
        })
        paralaxTimeline.from('#c-left-leaf', {
            x: -100,
            y: 100
        }).from('#c-right-leaf', { x: 100, y: 100 })

        const cocktailTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 50%'
            }
        })

        cocktailTimeline.from('.cocktail', {
            opacity: 0, y: 50, stagger: 0.1,
            duration: 1
        })
        const mocktailTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 50%'
            }
        })

        mocktailTimeline.from(' .mocktail', {
            opacity: 0, y: 50, stagger: 0.1,
            duration: 1
        })
    })
    return (
        <section id='cocktails' className='noisy'>
            <img src="/images/cocktail-left-leaf.png" alt="leaf" id='c-left-leaf' />
            <img src="/images/cocktail-right-leaf.png" alt="leaf" id='c-right-leaf' />
            <div className='list'>
                <div className='popular'>
                    <h2>Most <span className='text-[#f0ca6a]'>popular</span> Cocktails:</h2>
                    <ul>
                        {cocktailLists.map(({ name, country, detail, price }) => (
                            <li key={name} className='cocktail'>
                                <div className='md:me-28'>
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>))}
                    </ul>
                </div>
                <div className='loved'>
                    <h2>Most <span className='text-[#aaba78]'>loved</span> Mocktails:</h2>
                    <ul>
                        {mockTailLists.map(({ name, country, detail, price }) => (
                            <li key={name} className='mocktail'>
                                <div className='md:me-28'>
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cocktails