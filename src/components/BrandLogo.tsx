import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md' }) => {
  const dimensions = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  }[size];

  return (
    <div
      className={`${dimensions} rounded-full bg-brand-pink border-2 border-brand-cocoa flex flex-col items-center justify-center shadow-md select-none shrink-0 relative overflow-hidden`}
      title="Gaby Meira Confeitaria Gourmet"
    >
      <div className="w-[88%] h-[88%] rounded-full border border-brand-cocoa/60 flex flex-col items-center justify-center px-1">
        <span className="text-[7px] tracking-[0.18em] font-semibold text-brand-cocoa uppercase leading-none">
          GABY MEIRA
        </span>
        <span className="font-script text-2xl sm:text-3xl text-brand-cocoa leading-none -my-0.5">
          gm
        </span>
        <span className="text-[5.5px] tracking-[0.12em] font-semibold text-brand-cocoa uppercase leading-none text-center">
          CONFEITARIA GOURMET
        </span>
      </div>
    </div>
  );
};
