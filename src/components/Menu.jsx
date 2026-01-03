'use client';
import React, { useState, useRef } from 'react'
import { sliderLists } from '../../constans'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Menu = () => {



    const contentRef = useRef();

    const [currentIndex, setCurrentIndex] = useState(0);
    useGSAP(() => {
        gsap.fromTo('#title', {
            opacity: 0,

        }, {
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
        })
        gsap.fromTo('.cocktail img', {
            xPercent: -100,
            opacity: 0,
        }, {
            xPercent: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power1.inOut",
        })
        gsap.fromTo('.details h2, .details p', {
            yPercent: 100,
            opacity: 0,
        }, {
            yPercent: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power1.inOut",
        })
    }, [currentIndex]);

    const totailCocktails = sliderLists.length;

    const getCoctailAt = (indexOffset) => {
        return sliderLists[(currentIndex + indexOffset + totailCocktails) % totailCocktails];
    }

    const currentCocktail = getCoctailAt(0);
    const previousCocktail = getCoctailAt(-1);
    const nextCocktail = getCoctailAt(1);

    const goToSlide = (index) => {
        const newIndex = (index + totailCocktails) % totailCocktails;
        setCurrentIndex(newIndex);

    }
    return (
        <section id='menu' aria-labelledby='menu-heading'>
            <img src="/images/slider-left-leaf.png" alt="slider-left-leaf" id='m-left-leaf' />
            <img src="/images/slider-right-leaf.png" alt="slider-right-leaf" id='m-right-leaf' />
            <h2 id='menu-heading' className='sr-only'>
                Cocktal Menu
            </h2>
            <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
                {sliderLists.map((cocktail, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button key={cocktail.id} className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`}
                            onClick={() => goToSlide(index)}>
                            {cocktail.name}
                        </button>
                    )
                })}
            </nav>
            <div className='content'>
                <div className='arrows'>
                    <button className='text-left' onClick={() => goToSlide(currentIndex - 1)}>
                        <span>{previousCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                    </button>
                    <button className='text-left' onClick={() => goToSlide(currentIndex + 1)}>
                        <span>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                    </button>
                </div>
                <div className='cocktail'>
                    <img src={currentCocktail.image} alt={currentCocktail.name} className='object-contain' />
                </div>
                <div className='recipe'>
                    <div ref={contentRef} className='info'>
                        <p>Recipe for: </p>
                        <p id='title'>{currentCocktail.name}</p>

                    </div>
                    <div className='details'>
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu