import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimationControls } from 'framer-motion';
import Text from "./ui/text";

import ArrowLeft from '../assets/arrow-left.svg?react';
import ArrowRight from '../assets/arrow-right.svg?react';
import Icon from "./ui/icon";

//usei só algumas
const imagens = import.meta.glob(
    '/src/assets/imagensCarousel/imagem*.png',
    {
        eager: true,
        as: 'url',
    }
)

export function Carousel() {
    const arrayDeImagens = useMemo(() => {
        return Object.values(imagens) as string[];
    }, []);

    const controls = useAnimationControls();
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const doubledImages = [...arrayDeImagens, ...arrayDeImagens, ...arrayDeImagens];

    const imageWidth = 260;   //largura fixa da imagem
    const gap = 8; 
    const slideAmount = imageWidth + gap; // quanto mover com seta

    //velocidade auto
    const speed = 30;

    useEffect(() => {
        if (isPaused) {
            controls.stop();
            return;
        }
        
        const currentX = containerRef.current?.getBoundingClientRect().left || 0;

        controls.start({
            x: [currentX, currentX - (arrayDeImagens.length * slideAmount)],
            transition: {
                duration: arrayDeImagens.length * (slideAmount / speed),
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop',
                from: currentX,
            },
        });
        
    }, [isPaused, controls, arrayDeImagens.length, slideAmount, speed]);

    const moveBy = (direction: 'left' | 'right') => {
        if (!containerRef.current) return;

        const amount = direction === 'right' ? -slideAmount : slideAmount;

        controls.start({
            x: containerRef.current.getBoundingClientRect().left + amount,
            transition: { duration: 0.5, ease: 'easeOut' },
        });
    };

    return (
        <div className="flex flex-col items-center mt-4 gap-8 w-full h-fit">
            <Text variant={'title-3-orange'}>Confira os nossos Cursos de Prateleira</Text>
            <div
                className="relative w-full overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <button
                    onClick={() => moveBy('left')}
                    className="absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-all text-2xl cursor-pointer"
                    aria-label="Anterior"
                >
                    <Icon svg={ArrowLeft} />
                </button>

                <button
                    onClick={() => moveBy('right')}
                    className="absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-all text-2xl cursor-pointer"
                    aria-label="Próximo"
                >
                    <Icon svg={ArrowRight} />
                </button>

                <motion.div
                    ref={containerRef}
                    className="flex gap-2"
                    animate={controls}
                    style={{ x: 0 }}
                >
                    {doubledImages.map((image, index) => {
                        return (
                            <motion.img
                                key={index}
                                src={image}
                                alt={`Imagem ${index + 1}`}
                                className="object-cover shrink-0 rounded cursor-pointer"
                                loading="lazy"
                                decoding="async"
                                draggable={false}
                            />
                        )
                    })}
                </motion.div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-white  z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-white  z-10" />
            </div>
        </div>
    )
}