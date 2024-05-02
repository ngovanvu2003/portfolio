import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SlideShow = () => {
  const images = [
    "https://res.cloudinary.com/ddu7xygjs/image/upload/v1678455341/portfolio/exgbyplwimg0y1jof0sl.jpg",
    "https://res.cloudinary.com/ddu7xygjs/image/upload/v1677118267/portfolio/yjvhxpxpail8z7dxi4pq.png",
    "https://res.cloudinary.com/ddu7xygjs/image/upload/v1676958155/portfolio/nptnpaqbzpauixd8s1lj.png",
  ];

  return (
    <Zoom scale={1.4} indicators={true}>
      {images.map((each, index) => (
        <div
          className="each-slide-effect"
          key={index}
          style={{ width: "100%", textAlign: "center" }}
        >
          <img
            style={{ objectFit: "cover", width: "100%" }}
            alt="Product photo has been deleted or damaged"
            src={each}
          />
        </div>
      ))}
    </Zoom>
  );
};

export default SlideShow;
