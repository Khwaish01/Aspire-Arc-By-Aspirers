import { memo, useCallback } from "react";
import "./ContactFrame.css";

const ContactFrame = memo(() => {
  const onRatingComponentContainerClick = useCallback(() => {
    window.open("https://g.page/r/Cf01UQefSjmsEBM/review");
  }, []);

  const onStarClick = useCallback(() => {
    window.open("https://g.page/r/Cf01UQefSjmsEBM/review");
  }, []);

  const onStar1Click = useCallback(() => {
    window.open("https://g.page/r/Cf01UQefSjmsEBM/review");
  }, []);

  const onStar2Click = useCallback(() => {
    window.open("https://g.page/r/Cf01UQefSjmsEBM/review");
  }, []);

  const onStar3Click = useCallback(() => {
    window.open("https://g.page/r/Cf01UQefSjmsEBM/review");
  }, []);

  const onStar4Click = useCallback(() => {
    window.open("https://g.page/r/Cf01UQefSjmsEBM/review");
  }, []);

  const onCLICKHERETextClick = useCallback(() => {
    window.open("https://g.page/r/Cf01UQefSjmsEBM/review");
  }, []);

  return (
    <section className="contact-frame">
      <div className="feedback3" data-scroll-to="feedbackContainer">
        <img
          className="whatsapp-image-2023-11-28-at-11"
          alt=""
          src="/whatsapp-image-20231128-at-1304-1@2x.png"
        />
        <h1 className="please-provide-your">PLEASE PROVIDE YOUR FEEDBACK</h1>
        <div className="feedback-form">
          <div className="phone-number">
            <div
              className="rating-component3"
              onClick={onRatingComponentContainerClick}
            >
              <img
                className="rating-component-child"
                loading="eager"
                alt=""
                src="/star-12.svg"
                onClick={onStarClick}
              />
              <img
                className="rating-component-item"
                loading="eager"
                alt=""
                src="/star-13.svg"
                onClick={onStar1Click}
              />
              <img
                className="rating-component-inner"
                loading="eager"
                alt=""
                src="/star-14.svg"
                onClick={onStar2Click}
              />
              <img
                className="star-icon"
                loading="eager"
                alt=""
                src="/star-15.svg"
                onClick={onStar3Click}
              />
              <img
                className="rating-component-child1"
                loading="eager"
                alt=""
                src="/star-16.svg"
                onClick={onStar4Click}
              />
            </div>
            <h1 className="click-here" onClick={onCLICKHERETextClick}>
              CLICK HERE
            </h1>
          </div>
          <h1 className="your-opinion-matters">YOUR OPINION MATTERS TO US</h1>
        </div>
      </div>
    </section>
  );
});

export default ContactFrame;
