import styled from "styled-components";
import { Link } from "react-router-dom";
import Carusell from "../Carsusell";

interface CardProps {
  bgColor: string;
  width?: string;
  height?: string;
}

export const CardContainer = styled(Link)<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  padding: 20px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: ${(props) => 
    `linear-gradient(
      180deg, rgba(0,0,0,.7) 10%,
      rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%), 
      ${props.bgColor}`};
  
  color:white;

  @media (max-width: 320px) {
    max-width: 100%;
    border-radius: 0;
    box-shadow: none;
  }

  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
`;


export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardHeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardHeaderTitle = styled.h3`
  font-size: 1.2rem;
`;

export const CardHeaderId = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  &:before {
    content: "#";
  }

`;

export const CardHP = styled.h2`
  font-size: 1.2rem;
  color: #f00;
  &:after {
    content: "HP";
    margin-left: 5px;
  }
`

export const CardImages = styled(Carusell)`
  border-radius: 5px;
  object-fit: cover;
  width: 100%;
  transition: all 0.3s ease-in-out;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }

  }

  &:hover {
    animation: pulse 1s infinite;
    background: red;
  }

`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
  padding: 10px;
  gap: 5px;
`;

