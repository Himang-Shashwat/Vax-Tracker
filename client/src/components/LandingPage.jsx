import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import styled from 'styled-components';
import './styles.css';
import GoalsBlock from './GoalsBlock.jsx';

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Card = styled.div`
    margin: 10px;
    text-align: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

const Image = styled.img`
    max-width: 400px;
    height: 300px;
`;

const SpaceBelowPhoto = styled.div`
    height: 20px;
`;

const Slogan = styled.div`
    margin-top: 20px;
    text-align: center;
    font-style: italic;
    color: #666;
`;

const Button = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const SpaceBelowButton = styled.div`
    margin-top: 20px;
`;

export default function LandingPage() {
    const canvasRef = useRef();
    const [images, setImages] = useState([
        'https://www.livemint.com/lm-img/img/2023/11/20/600x338/im-889104_1700470117935_1700470233555.jpg',
        'https://images.unsplash.com/photo-1632053001332-2268cc09f738?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1606619788401-85dd53e9c8be?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1610621349380-3e55db314fa1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        
        // Add more image URLs as needed
    ]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imagesPerPage = 5;

    useEffect(() => {
        let phi = 0;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 }
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.0009;
            }
        });

        return () => {
            globe.destroy();
        };
    }, []);

    const handleNextImages = () => {
        const newIndex = currentImageIndex + imagesPerPage;
        setCurrentImageIndex(newIndex >= images.length ? 0 : newIndex);
    };

    return (
        <div className="container">
            <div className="content">
                <h1 className="heading">Vaccine Tracker</h1>
                <Slogan>Protecting tiny hearts, one vaccine at a time.</Slogan><br></br>
                <CardContainer>
                    {images.slice(currentImageIndex, currentImageIndex + imagesPerPage).map((image, index) => (
                        <Card key={index}>
                            <Image src={image} alt={`Image ${index + 1}`} />
                            <SpaceBelowPhoto />
                        </Card>
                    ))}
                </CardContainer>
                <GoalsBlock />
                <canvas
                    ref={canvasRef}
                    style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
                />
                <div className="contact-us">
                    <h2>Contact Us</h2>
                    <p>Contact information goes here...</p>
                </div>
            </div>
            <footer className="footer">
                <p>Footer content goes here</p>
            </footer>
        </div>
    );
}
