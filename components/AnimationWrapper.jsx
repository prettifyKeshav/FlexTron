"use client"

import { useEffect } from 'react';
import { usePathname } from "next/navigation";

import enterView from 'enter-view';
import '../public/assets/css/animate.css'

const AnimationWrapper = ({ children }) => {
    const pathname = usePathname();
    useEffect(() => {
        if (typeof window !== 'undefined' && window.innerWidth > 1007) {
            enterView({
                selector: '[data-animate]',
                offset: 0,
                enter: (el) => {
                    el.classList.add('kmr-animate')
                },
                exit: (el) => {
                    el.classList.remove('kmr-animate');
                }
            })
        }
    }, [pathname])
    return (
        <>
            {children}
        </>
    )
}
export default AnimationWrapper