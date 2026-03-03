import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BackgroundParticles = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    className="fixed inset-0 z-0 pointer-events-none"
                    options={{
                        fullScreen: { enable: true, zIndex: 0 },
                        background: { color: "transparent" },
                        fpsLimit: 60,
                        particles: {
                            number: {
                                value: 120,
                                density: {
                                    enable: true,
                                },
                            },
                            color: { value: ["#00ffff", "#8b5cf6", "#3b82f6"] },
                            links: {
                                enable: true,
                                color: "#00ffff",
                                distance: 130,
                                opacity: 0.4,
                                width: 1,
                                triangles: {
                                    enable: true,
                                    opacity: 0.05,
                                },
                            },
                            move: {
                                enable: true,
                                speed: 1.2,
                                direction: "none",
                                random: false,
                                straight: false,
                                outModes: {
                                    default: "out",
                                },
                            },
                            opacity: {
                                value: { min: 0.3, max: 0.6 },
                            },
                            size: {
                                value: { min: 1, max: 3 },
                            },
                        },
                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                            },
                            modes: {
                                repulse: {
                                    distance: 120,
                                    duration: 0.4,
                                },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </>
    );
};

export default BackgroundParticles;
