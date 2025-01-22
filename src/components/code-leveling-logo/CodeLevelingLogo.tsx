import React from 'react';
import './code-leveling-logo.css';
import Image from 'next/image';
import  LOGO_LIGHT from '../../../public/logo_light.png';
import  LOGO_DARK from '../../../public/logo_dark.png';

type Props = {}

const CodeLevelingLogo = (props: Props) => {
  return (
    <>
        <div className="p-2 bg-[18191c] justify-center items-center  ">
            <Image src={LOGO_DARK} alt="LOGO" width={72} height={72} className='hover:cursor-pointer transition-all hover:shadow-md  hover:shadow-gray-700'/>
        </div>
    </>
  );
}

export default CodeLevelingLogo
