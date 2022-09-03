import styled from "styled-components";
import { LayoutColumnCenter, LayoutRow, LayoutRowCenter } from "../../components/Layout";

export const DetailContainer = styled(LayoutColumnCenter)`
  width: 100%;
  overflow: hidden;
  gap: 10px;
`;

interface DetailHeaderProps {
  bgColor: string;
}

export const DetailHeader = styled.header<DetailHeaderProps>`
  display: flex;
  background: ${(props) =>
    `linear-gradient(180deg, rgba(0,0,0,.7) 10%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,1) 100%), ${props.bgColor}`};
  padding: 80px 20px 0px 20px;
  width: 100%;
  align-items: center;
  height: 30vh;
  align-content: center;	
  justify-content: center;	
  height: 35vh;	
  overflow: hidden;	


  @media (max-width: 768px) {
    height: 20vh;
    padding: 40px 20px 0px 20px;
  }
`;

export const DetailImage = styled.img`
  overflow: hidden;
  width: 90%;
  height: 100%;
  max-height: 30vh;


  transition: all 0.5s ease;

  @keyframes flutuar {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }

  animation: flutuar 3s linear infinite;
  ${Array.from(Array(12).keys()).map((i) => {
    return `
    &:nth-child(${i}) {
      animation-delay: ${i * 0.25}s;  
    }`;
  })}

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const DetailHeaderInfo = styled(LayoutColumnCenter)`
  padding: 20px;
`;

export const DetailTitle = styled.h1<DetailHeaderProps>`
  color: ${(props) => props.bgColor};
  text-transform: capitalize;
  font-size: 3rem;
  font-weight: bold;
`;

export const DetailPropertyContainer = styled(LayoutRow)`
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const DetailPropertyText = styled.h3`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 20;
`;

export const DetailProperty = styled(LayoutColumnCenter)<DetailHeaderProps>`
  border-bottom: 2px solid ${(props) => props.bgColor};
  margin-bottom: 20px;
  transition: all 0.2s ease;
  padding: 15px;

  @media (max-width: 768px) {
    width: 100px;
  }

  @keyframes agitar {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(3deg);
    }

    50% {
      transform: rotate(0deg);
    }>

    75% {
      transform: rotate(-3deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  &:hover {
    animation: agitar 0.8s linear infinite;
  }
`;

export const DetailEvolutionsContainer = styled(LayoutRowCenter)`
  align-items: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 20px;
`;
