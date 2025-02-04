import React from 'react';
import './code-leveling-logo.css';
import Image from 'next/image';
import  LOGO_LIGHT from '../../../public/logo_light.png';
import  LOGO_DARK from '../../../public/logo_dark.png';
import { useTheme } from 'next-themes';

type Props = {}

const CodeLevelingLogo = (props: Props) => {
  const {theme, setTheme} = useTheme()
  return (
    <>
        <div className="codeLevelingLogoDiv p-2 bg-[18191c] justify-center items-center relative left-60 bottom-48 ">
            <Image src={theme === 'dark' ? LOGO_DARK : LOGO_LIGHT} alt="LOGO" width={120} height={120} className='dark:bg-[#18181b] bg-white rounded-xl transition-all '/>
        </div>
    </>
  );
}

export default CodeLevelingLogo;
