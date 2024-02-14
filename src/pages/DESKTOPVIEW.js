import { useCallback } from "react";
import MainFrame from "../components/MainFrame";
import FrameComponent1 from "../components/FrameComponent1";
import ExploreMoreAndAboutUs from "../components/ExploreMoreAndAboutUs";
import FrameComponent from "../components/FrameComponent";
import WhatsAppImg from "../components/WhatsAppImg";
import ContactFrame from "../components/ContactFrame";
import DesignSection from "../components/DesignSection";
import "./DESKTOPVIEW.css";

const DESKTOPVIEW = () => {
  const onORFILLTHEClick = useCallback(() => {
    window.open("https://forms.gle/BvgQzoLuxSscvvLr5");
  }, []);

  const onWhatsAppImage20231128At1Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/dir//aspire+arc+mayur+vihar+extension/@28.471966,77.1361956,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce5f9b08159a7:0xac394a9f075135fd!2m2!1d77.2963625!2d28.5955646?entry=ttu"
    );
  }, []);

  return (
    <div className="desktop-view">
      <MainFrame />
      <FrameComponent1 />
      <section className="follow-us-link">
        <div className="parent-of-social-media-links">
          <h1 className="why-aspire-arc" data-scroll-to="whyAspireArc">
            Why Aspire Arc?
          </h1>
        </div>
      </section>
      <ExploreMoreAndAboutUs />
      <section className="courses" data-scroll-to="courses">
        <div className="text">
          <div className="courses-wrapper">
            <h1 className="courses1">Courses</h1>
          </div>
        </div>
        <div className="frame-parent">
          <FrameComponent />
          <WhatsAppImg />
        </div>
      </section>
      <section className="contact-us" data-scroll-to="contactUs">
        <img
          className="whatsapp-image-2023-11-26-at-1"
          loading="eager"
          alt=""
          src="/whatsapp-image-20231126-at-1114-1@2x.png"
        />
        <h1 className="contact-us1">Contact us</h1>
        <div className="free-illustration-session">
          <div className="book-your-free-container">
            <p className="book-your-free">
              Book your free illustration session now !!!
            </p>
            <p className="fill-the-form">
              {" "}
              Fill the form or call us on +91 8860914595
            </p>
          </div>
          <div className="call-to-action-frame">
            <h1 className="or-fill-the-container" onClick={onORFILLTHEClick}>
              <p className="or">OR</p>
              <p className="fill-the-form1">FILL THE FORM</p>
            </h1>
          </div>
        </div>
      </section>
      <section className="location" data-scroll-to="location">
        <div className="contact-us2">
          <h1 className="we-are-currently-container">
            <p className="we-are-currently-located-at">
              <b>We are currently located at</b>
            </p>
            <p className="united-india-apartments-mayur">
              <b>{` `}</b>
              <span>
                United India Apartments, Mayur Vihar Extension, New Delhi, Delhi
                - 110091
              </span>
            </p>
          </h1>
        </div>
        <img
          className="whatsapp-image-2023-11-28-at-1"
          loading="eager"
          alt=""
          src="/whatsapp-image-20231128-at-1304-2@2x.png"
          onClick={onWhatsAppImage20231128At1Click}
        />
      </section>
      <ContactFrame />
      <DesignSection />
    </div>
  );
};

export default DESKTOPVIEW;
