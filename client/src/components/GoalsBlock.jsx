// GoalsBlock.jsx

import React from 'react';
import styled from 'styled-components';

const GoalsBlockWrapper = styled.div`
    padding: 20px;
    margin-bottom: 20px;
    width: 100%; /* Extend to full width */
    position: relative; /* Position relative for pseudo-elements */

    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */

    h2 {
        font-size: 48px;
        color: #5F9EA0;
        margin-bottom: 10px;
    }

    .line {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 1px;
        background-color: #ddd; /* Line color */
    }

    .line-top {
        top: 0;
    }

    .line-bottom {
        bottom: 0;
    }

    .goals-container {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 40px; /* Add padding for space below */
        justify-content: center; /* Center the goals horizontally */
        font-size: 18px;
    }

    .goal {
        background-color: #ADD8E6;
        border-radius: 100px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 18px;
        margin-right: 20px; /* Add margin between goals */
        min-width: 100px; /* Set minimum width for each goal */
        transition: transform 0.5s ease, box-shadow 0.3s ease; /* Apply transition for smooth sliding and bouncing effect */
        cursor: pointer; /* Change cursor on hover */
    }

    .goal:hover {
        transform: translate(0, -5px); /* Move the goal slightly upwards on hover */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Add a slight bouncing effect */
    }

    .goal h3 {
        margin-top: 0;
        font-size: 20px;
        color: #333;
    }

    .goal p {
        margin-bottom: 0;
        color: #666;
    }
`;

const GoalsBlock = () => {
    return (
        <GoalsBlockWrapper>
            <div className="line line-top"></div>
            <h2>Our Goals</h2>
            <div className="goals-container">
                <div className="goal">
                    <h3>Routine Vaccination</h3>
                    <p>When the time comes for your child to get his or her vaccines , here are some useful tips about what to expect and how you can prepare</p>
                </div>
                <div className="goal">
                    <h3>Before, During and after Shots</h3>
                    <p>Read vaccine materials you received from your child's healthcare professional and write down any questions you may have! </p>
                </div>
                <div className="goal">
                    <h3>Vaccines When Your Child is Sick </h3>
                    <p>Children can still get vaccines even with a fever or mild illness</p>
                </div>
            </div>
            <div className="line line-bottom"></div>
        </GoalsBlockWrapper>
    );
};

export default GoalsBlock;
