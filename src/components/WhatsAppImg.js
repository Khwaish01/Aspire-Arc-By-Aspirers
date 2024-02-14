import { memo } from "react";
import "./WhatsAppImg.css";

const WhatsAppImg = memo(() => {
  return (
    <div className="whats-app-img">
      <div className="google-linkedin-git-hub">
        <div className="rating-component2">
          <img
            className="untitled-design-11-1"
            loading="eager"
            alt=""
            src="/untitled-design-11-1@2x.png"
          />
          <h2 className="introducing-machine-learning">
            Introducing Machine Learning: Innovation Meets Intelligence
          </h2>
          <h3 className="take-your-skills">
            Take your skills to the next level with our Machine Learning course.
            Dive into the world of artificial intelligence and discover the
            magic of machines that learn and adapt.
          </h3>
        </div>
      </div>
      <div className="google-linkedin-git-hub-links">
        <img
          className="untitled-design-11-2"
          loading="eager"
          alt=""
          src="/untitled-design-11-2@2x.png"
        />
        <h2 className="personalized-counselling-sessi">
          Personalized Counselling Sessions
        </h2>
        <h3 className="embark-on-a">
          Embark on a journey of self-discovery and professional fulfillment
          with our personalized Career Counseling Sessions. Unveil your true
          potential, navigate career crossroads, and sculpt a path that aligns
          with your passions.
        </h3>
      </div>
    </div>
  );
});

export default WhatsAppImg;
