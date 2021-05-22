import { useEffect, useState } from 'react';

const useViewportWidth = () => {
    const [width, setWidth] = useState(null);

    useEffect(() => {
        if (process.browser) {
            setWidth(window.innerWidth);
        }

        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return width;
};

export default useViewportWidth;
