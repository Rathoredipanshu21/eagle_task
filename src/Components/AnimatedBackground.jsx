import React from 'react';

const AnimatedBackground = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[-30%] left-[-15%] w-[500px] h-[500px] bg-brand-purple/10 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-[-20%] right-[-15%] w-[500px] h-[500px] bg-brand-teal/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
            <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-pink-500/5 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
    );
};

export default AnimatedBackground;