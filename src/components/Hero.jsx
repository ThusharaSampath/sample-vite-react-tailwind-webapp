import React from 'react';

const Hero = () => {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
                    <span className="inline-block py-1 px-3 rounded-full bg-gray-800 border border-gray-700 text-primary text-sm font-medium mb-6">
                        v2.0 is now available
                    </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
                    Build faster with <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
                        Modern Tools
                    </span>
                </h1>

                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
                    Experience the next generation of web development. Fast, reliable, and secure.
                    Start building your dream project today.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
                    <button className="btn-primary flex items-center justify-center gap-2 group">
                        Start Building
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                    <button className="btn-secondary">
                        View Documentation
                    </button>
                </div>

                {/* Dashboard Preview */}
                <div className="mt-20 relative animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-30"></div>
                    <div className="relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
                        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="p-8 aspect-video flex items-center justify-center bg-gray-900/50">
                            <p className="text-gray-500 font-mono">System initialized...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
