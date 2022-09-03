import styled from "styled-components";

const PokeBall = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 6px solid #0f2634;
  overflow: hidden;
  background: #fff;

  animation-name: ball;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  background: white;

  @keyframes ball {
    0%,
    75%,
    100% {
      transform: rotateZ(0deg);
    }
    15%,
    45% {
      transform: rotateZ(15deg);
    }
    30%,
    60% {
      transform: rotateZ(-15deg);
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    height: 70px;
    background: #fff;
    border: 15px solid #0f2634;
    border-radius: 50%;
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    z-index: 9;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    animation-name: flash;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
  @keyframes flash {
    0%,
    20%,
    40%,
    60%,
    80%,
    100% {
      background: #fff;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }
    10%,
    30%,
    50%,
    70% {
      background: #f11a3a;
      box-shadow: 0 0 20px 0 rgba(235, 1, 18, 1);
    }
  }
`;

const RedLine = styled.div`
  position: ;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  height: 8%;
  background: #0f2634;
  border-left: 5px solid #0f2634;
  border-right: 5px solid #0f2634;
`;

const RedBall = styled.span`
  top: 0;
  left: 0;
  display: block;
  position: absolute;
  width: 100%;
  height: 46%;
  background: #f11a3a;
`;

const Bola = () => {
  return (
    <PokeBall>
      <RedBall />
      <RedLine />
    </PokeBall>
  );
};

export default Bola;
