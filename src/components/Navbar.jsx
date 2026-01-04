import React from 'react'
import { navLinks } from '../../constans'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Navbar = () => {

    const handleScroll = (e, id) => {
        e.preventDefault();
        
        gsap.to(window, {
            duration: 1.5,
            scrollTo: {
                y: `#${id}`,
                offsetY: 100 
            },
            ease: "power3.inOut"
        });
    };

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: '#nav',
                start: 'bottom top',

            }
        })

        navTween.fromTo('#nav', {
            backgroundColor: 'transparent'
        }, {
            backgroundColor: '#00000050',
            backdropFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        });
    }, [])
    return (
        <nav id='nav'>
            <div>
                <a href="#hero" className='flex items-center gap-2'>
                    <img src="/images/logo.png" alt="" className=' size-14 md:size-20' />
                    <div className='flex flex-col justify-center gap-1'> <p>The Fifth Sense</p>
                        <p className='text-sm font-sans '>Cocktail Experience</p></div>

                </a>

                <ul>
                    {navLinks.map((el) => (<li className='' key={el.id}><a href={`#${el.id}`} 
                            onClick={(e) => handleScroll(e, el.id)}>{el.title}</a></li>))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar