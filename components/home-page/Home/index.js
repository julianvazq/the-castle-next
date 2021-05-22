import useViewportWidth from '../../../hooks/useViewportWidth';
import Hero from '../../shared/Hero';

export default function Home() {
    const width = useViewportWidth();
    let title = 'A sophisticated, uniquely styled venue in Syracuse, NY';

    if (width > 850) {
        title = (
            <>
                A sophisticated, uniquely styled venue <br /> in Syracuse, NY
            </>
        );
    }

    return <Hero title={title} />;
}
