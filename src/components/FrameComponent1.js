import { memo, useCallback } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = memo(() => {
  const onTheDesignThinkingClick = useCallback(() => {
    window.open("https://forms.gle/BvgQzoLuxSscvvLr5");
  }, []);

  const onButton1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='feedbackContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGoogleIconClick = useCallback(() => {
    window.open("https://g.co/kgs/XmPScA");
  }, []);

  const onLinkedinIconClick = useCallback(() => {
    window.open(
      "https://www.linkedin.com/in/khushi-mishra-323986202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    );
  }, []);

  const onGroupIconClick = useCallback(() => {
    window.open("https://www.instagram.com/aspire_arc/");
  }, []);

  const onGitHubIconClick = useCallback(() => {
    window.open("https://github.com/KHUSHIM02");
  }, []);

  return (
    <section className="desktop-view-inner">
      <div className="frame-group">
        <div className="frame-container">
          <div className="frame-wrapper">
            <div className="frame-div">
              <div className="the-design-thinking-parent">
                <h1 className="the-design-thinking-container">
                  <p className="explore-the-new">Explore The New</p>
                  <p className="normal-of-learning">Normal of Learning</p>
                </h1>
                <div className="link-component-wrapper">
                  <div className="link-component">
                    <h1
                      className="the-design-thinking"
                      onClick={onTheDesignThinkingClick}
                    >
                      “BOOK YOUR FREE TRIAL SESSION FOR GRADE IX-XII”
                    </h1>
                  </div>
                </div>
              </div>
              <div className="text-content-frame">
                <div className="counselling-sessions-tag">
                  <div className="rating-component">
                    <button className="button">
                      <div className="feedback1">Explore More</div>
                    </button>
                    <button className="button1" onClick={onButton1Click}>
                      <div className="feedback2">{`Feedback Us `}</div>
                    </button>
                  </div>
                  <div className="phone-no-label">
                    <div className="follow-us-text">
                      <div className="whats-app-image-at-tag">
                        <b className="follow-us">Follow us :</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="footer-section-icon"
            loading="eager"
            alt=""
            src="/frame-122@2x.png"
          />
        </div>
        <div className="navigation-bar">
          <div className="bookyourfreeillustrationsessio">
            <img
              className="google-icon"
              loading="eager"
              alt=""
              src="/google.svg"
              onClick={onGoogleIconClick}
            />
            <img
              className="linkedin-icon"
              loading="eager"
              alt=""
              src="/linkedin.svg"
              onClick={onLinkedinIconClick}
            />
            <img
              className="group-icon"
              loading="eager"
              alt=""
              src="/group.svg"
              onClick={onGroupIconClick}
            />
            <img
              className="github-icon"
              loading="eager"
              alt=""
              src="/github.svg"
              onClick={onGitHubIconClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default FrameComponent1;
