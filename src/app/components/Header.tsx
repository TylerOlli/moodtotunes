import React from 'react';

const Header = () => {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        style={{
          backgroundImage: `url(/moodtotunes-logo.png)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: '378px',
          height: '80px',
        }}
      />
    </div>
  );
};

export default Header;