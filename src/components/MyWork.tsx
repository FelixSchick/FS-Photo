import "./MyWork.css";

import { Gallery } from "react-grid-gallery";

import img1 from "../assets/images/img-1.jpg";
import img2 from "../assets/images/img-2.jpg";
import img3 from "../assets/images/img-3.jpg";
import img4 from "../assets/images/img-4.jpg";
import img5 from "../assets/images/img-5.jpg";
import img6 from "../assets/images/img-6.jpg";

function MyWork() {
  const images = [
    {
      src: img1,
      width: 6240,
      height: 4160,
    },
    {
      src: img2,
      width: 6240,
      height: 4160,
    },
    {
      src: img3,
      width: 6240,
      height: 4160,
    },
    {
      src: img4,
      width: 6240,
      height: 4160,
    },
    {
      src: img5,
      width: 6240,
      height: 4160,
    },
    {
      src: img6,
      width: 6048,
      height: 8064,
    },
  ];

  return (
    <div className="my-work-container" id="mywork">
      <h1>My Work</h1>
      <div className="gallery-container">
        <Gallery images={images} margin={10} />
      </div>
    </div>
  );
}
export default MyWork;
