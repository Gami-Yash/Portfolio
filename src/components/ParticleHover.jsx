import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useTheme } from '../components/themeContext';

const ParticleHover = () => {
    const { theme } = useTheme();

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {}, []);

    const particleOptions = {
        background: {
            color: {
                value: theme === 'dark' ? '#000000' : '#ffffff',
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: 'repulse',
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 150,
                    duration: 0.8,
                    speed: 1,
                    factor: 20,
                    easing: 'ease-out-quad',
                },
            },
        },
        particles: {
            color: {
                value: theme === 'dark' ? '#eabf04' : '#183753',
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: {
                    default: 'bounce',
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 90,
            },
            opacity: {
                value: 0.8,
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: { min: 0.5, max: 2.5 },
            },
        },
        detectRetina: true,
    };

    return <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particleOptions} />;
};

export default ParticleHover;
