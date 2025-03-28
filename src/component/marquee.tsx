import React, { useState, useRef, useEffect } from "react";
import { Box} from "@mui/material";
import { SxProps } from '@mui/system';


type MarqueeObserverProps = {
    children: React.ReactNode
    wrapper: React.ReactElement
    sx?: SxProps
}


/** обертка отслеживает помешается ли текст, если нет то делает бегушую строку */
export default function ({ children, wrapper, sx }: MarqueeObserverProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const checkOverflow = () => {
            if (containerRef.current && textRef.current) {
                const isTextOverflowing =
                    textRef.current.scrollWidth > containerRef.current.offsetWidth;
                setIsOverflowing(isTextOverflowing);
            }
        };

        // Проверка при загрузке компонента и при изменении размера окна
        checkOverflow();
        window.addEventListener('resize', checkOverflow);

        return () => {
            window.removeEventListener('resize', checkOverflow);
        };
    }, [children]);


    return (
        <Box
            ref={containerRef}
            sx={{
                
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                position: 'relative',
                ...sx
            }}
        >
            {isOverflowing ? (
                // Если текст не помещается, показываем бегущую строку
                <Box
                    ref={textRef}
                    sx={{
                        display: 'inline-block',
                        whiteSpace: 'nowrap',
                        animation: 'scroll 6s linear infinite',
                        '@keyframes scroll': {
                            '0%': { transform: 'translateX(0%)' },
                            '100%': { transform: 'translateX(-100%)' },
                        },
                    }}
                >
                    {React.cloneElement(wrapper, {
                        children: children,
                    })}
                </Box>
            ) : (
                // Если текст помещается, показываем без анимации
                <Box ref={textRef}>
                    {React.cloneElement(wrapper, {
                        children: children,
                    })}
                </Box>
            )}
        </Box>
    );
}