"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticleBackground = ParticleBackground;
const react_1 = require("react");
const react_particles_1 = __importDefault(require("react-particles"));
const tsparticles_1 = require("tsparticles");
function ParticleBackground() {
    const particlesInit = (0, react_1.useCallback)(async (engine) => {
        await (0, tsparticles_1.loadFull)(engine);
    }, []);
    const particlesLoaded = (0, react_1.useCallback)(async (container) => {
        console.log(container);
    }, []);
    return (<react_particles_1.default className="absolute inset-0 -z-10" id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={{
            background: {
                color: {
                    value: "#0d1117",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
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
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}/>);
}
