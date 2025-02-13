import React from 'react';
import './code-leveling-logo.css';
import Image from 'next/image';
import LOGO_LIGHT from '../../../public/logo_light.png';
import LOGO_DARK from '../../../public/logo_dark.png';
import { useTheme } from 'next-themes';

const CodeLevelingLogo = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <div className="codeLevelingLogoDiv md:flex z-[99] p-2 bg-[18191c] top-20 relative ">
                <Image src={theme === 'dark' ? LOGO_DARK : LOGO_LIGHT} alt="LOGO" width={120} height={120} className='dark:bg-[#18181b] bg-slate-200 rounded-xl transition-all ' />
            </div>
        </>
    );
}

export default CodeLevelingLogo;


