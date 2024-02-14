import { memo } from "react";
import "./FrameComponent.css";

const FrameComponent = memo(() => {
  return (
    <div className="frame-parent3">
      <div className="untitled-design-9-1-parent">
        <img
          className="untitled-design-9-1"
          loading="eager"
          alt=""
          src="/untitled-design-9-1@2x.png"
        />
        <div className="c-l-i-c-k-h-e-r-e-wrapper">
          <div className="c-l-i-c-k-h-e-r-e">
            <div className="y-o-u-r-o-p-i-n-i-o-n-m-a-t-t">
              <h2 className="th-10th">{`9th & 10th Grade: Maths, Science & S.ST`}</h2>
            </div>
            <h3 className="immerse-yourself-in-container">
              <p className="immerse-yourself-in">{`Immerse yourself in the world of numbers and equations, and unravel the secrets of science. Our engaging courses make learning math, science & S.St an exciting adventure!`}</p>
            </h3>
          </div>
        </div>
      </div>
      <div className="computer-science-room">
        <div className="contact-us-info">
          <div className="feedback-component">
            <img
              className="untitled-design-10-1"
              loading="eager"
              alt=""
              src="/untitled-design-10-1@2x.png"
            />
          </div>
          <h2 className="th-12th">{`11th & 12th Grade:  Computer Science (Python, IT)`}</h2>
          <h3 className="step-into-the">
            Step into the digital realm and explore the limitless possibilities
            of computer science. From coding to cutting-edge technologies, we
            prepare you for the tech-driven world ahead.
          </h3>
        </div>
      </div>
    </div>
  );
});

export default FrameComponent;
