import { FC, useEffect, useState, useCallback } from "react";

// TODO: convert to styled component

interface CarsusellProps {
  images: string[];
}

const Carusell: FC<CarsusellProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const  infiniteScroll = useCallback(() => {
    if (currentImage === images.length - 1) {
      return setCurrentImage(0);
    }

    return setCurrentImage(currentImage + 1);
  }, [currentImage, images.length]);

  useEffect(() => {
    const randomTime = Math.floor(Math.random() * 5000) + 1000;
    const interval = setInterval(() => {
      infiniteScroll();
    }, randomTime);
    return () => clearInterval(interval);
  }, [currentImage, infiniteScroll]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        overflow: "hidden",
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            minWidth: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.5s ease",
            transform: `translateX(${currentImage * -100}%)`,
            opacity: index === currentImage ? 1 : 0,
          }}
        >
          <img
            key={index}
            src={image}
            alt="pokemon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Carusell;
