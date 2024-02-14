import { memo, useCallback } from "react";
import "./MainFrame.css";

const MainFrame = memo(() => {
  const onListItemContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='whyAspireArc']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onListItemContainer1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='courses']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onListItemContainer2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='location']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onListItemContainer3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contactUs']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onListItemContainer4Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='feedbackContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header className="main-frame">
      <div className="logo-frame">
        <img className="logo-icon" loading="eager" alt="" src="/logo.svg" />
        <div className="aspire-arc">Aspire Arc</div>
      </div>
      <div className="search-box-wrapper">
        <div className="search-box">
          <div className="home">Home</div>
          <div className="dropdown-menu">
            <div className="list-item" onClick={onListItemContainerClick}>
              <div className="about">About</div>
            </div>
            <div className="list-item1" onClick={onListItemContainer1Click}>
              <div className="courses2">Courses</div>
            </div>
            <div className="list-item2" onClick={onListItemContainer2Click}>
              <div className="location1">Location</div>
            </div>
            <div className="list-item3" onClick={onListItemContainer3Click}>
              <div className="contacts">Contacts</div>
            </div>
            <div className="list-item4" onClick={onListItemContainer4Click}>
              <div className="feedback">Feedback</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

export default MainFrame;
