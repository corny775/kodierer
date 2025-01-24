import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Canvas = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const loadModules = async () => {
            const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
            const { RGBELoader } = await import('three/examples/jsm/loaders/RGBELoader.js');

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 1, 5);

            const renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0xffffff); // Set background color to white
            mountRef.current.appendChild(renderer.domElement);

            // Load the GLB model
            const loader = new GLTFLoader();
            loader.load('/papercup.glb', (gltf) => {
                // Traverse through all the objects in the model
                gltf.scene.traverse((object) => {
                    if (object.isMesh) {
                        object.material.color.set(0xd3d3d3); // Set light grey color
                        object.material.emissive.set(0x8b4513); // Set light brown color
                    }
                });

                scene.add(gltf.scene);
            }, undefined, (error) => {
                console.error('Error loading GLB model:', error);
            });

            // Load HDRI
            const hdriLoader = new RGBELoader();
            const pmremGenerator = new THREE.PMREMGenerator(renderer);
            pmremGenerator.compileEquirectangularShader();

            hdriLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_08_1k.hdr', function (texture) {
                const envMap = pmremGenerator.fromEquirectangular(texture).texture;
                scene.environment = envMap;

                texture.dispose();
                pmremGenerator.dispose();
            });

            // Add lights
            const light = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(light);

            const animate = () => {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
            };
            animate();
        };

        loadModules();
    }, []);

    return <div ref={mountRef} style={{ position: 'fixed', zIndex: -1 }} />;
};
