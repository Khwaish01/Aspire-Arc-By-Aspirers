import { memo, useCallback } from "react";
import "./DesignSection.css";

const DesignSection = memo(() => {
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
    <section className="design-section">
      <div className="contact-us-info1">
        <div className="phone-number-frame">
          <img
            className="design-1-icon"
            loading="eager"
            alt=""
            src="/design-1@2x.png"
          />
          <div className="design-location">
            <div className="phone-number1">
              <h3 className="united-india-apartments">
                United India Apartments, Mayur Vihar Extension, New Delhi, Delhi
                - 110091
              </h3>
            </div>
            <div className="phone-number2">
              <div className="phone-no-91">Phone No. +91 8860914596</div>
            </div>
            <h3 className="follow-us1">Follow us :</h3>
          </div>
        </div>
        <div className="book-your-free-illustration-se">
          <div className="social-media-links">
            <img
              className="google-icon1"
              alt=""
              src="/google-1.svg"
              onClick={onGoogleIconClick}
            />
            <img
              className="linkedin-icon1"
              alt=""
              src="/linkedin-1.svg"
              onClick={onLinkedinIconClick}
            />
            <img
              className="group-icon1"
              alt=""
              src="/group-1.svg"
              onClick={onGroupIconClick}
            />
            <img
              className="github-icon1"
              alt=""
              src="/github-1.svg"
              onClick={onGitHubIconClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default DesignSection;
