import React, { useEffect } from 'react'
import gsap from 'gsap'

function useCartAnimation(nodes) {
 
    nodes.current = [];
    useEffect(() => {

        gsap.from(nodes.current, {
            duration: 1,
            stagger: 0.1,
            opacity: 0,
            ease: "Power3.easeInOut"
        });



        
        return ()=>{
            nodes.current = [];
        }

    }, [nodes])

    const addToNodes = el => {
        
        if (el && !nodes.current.includes(el)) {

            nodes.current.push(el);
        }
    };

    return addToNodes
}

export default useCartAnimation
