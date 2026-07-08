'use client';
import { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

export const Counter = ({ value }: { value: string | number }) => {
    const nodeRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    const numericValue = parseInt(value.toString().replace(/[^0-9]/g, ''));
    const suffix = value.toString().replace(/[0-9]/g, '');

    useEffect(() => {
        if (!isInView) return;
        const controls = animate(0, numericValue, {
            duration: 2.5,
            ease: "easeOut",
            onUpdate: (latest) => {
                if (nodeRef.current) nodeRef.current.textContent = Math.floor(latest) + suffix;
            },
        });
        return () => controls.stop();
    }, [isInView, numericValue, suffix]);

    return <span ref={nodeRef} />;
};