import { memo } from "react";
import "./ExploreMoreAndAboutUs.css";

const ExploreMoreAndAboutUs = memo(() => {
  return (
    <section className="explore-more-and-about-us">
      <div className="text1">
        <img
          className="coffees-01-icon"
          loading="eager"
          alt=""
          src="/coffees01@2x.png"
        />
        <div className="contact-details">
          <div className="rating-component1">
            <div className="introducing-machine-learning-f">
              <h1 className="supportive-faculty">Supportive Faculty</h1>
            </div>
            <div className="aspire-arc-values-container">
              <p className="aspire-arc-values">
                Aspire Arc values a holistic approach to education,
                understanding that students may not always excel in academics
                but should possess a clear understanding of both academic
                concepts and life skills.
              </p>
              <p className="the-faculty-at">
                The faculty at Aspire Arc is committed to providing support and
                guidance to students, fostering an environment where learning is
                not solely focused on grades but on overall comprehension and
                personal growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="location2">
        <div className="third-grade-label-wrapper">
          <div className="third-grade-label">
            <div className="frame-container1">
              <h1 className="interactive-learning">Interactive Learning</h1>
            </div>
            <div className="classes-at-aspire-container">
              <p className="classes-at-aspire">
                Classes at Aspire Arc are designed to be lively and interactive,
                encouraging student engagement and participation.
              </p>
              <p className="the-emphasis-on">
                The emphasis on discussions promotes a deeper understanding of
                the subjects, allowing students to actively contribute to the
                learning process.
              </p>
            </div>
          </div>
        </div>
        <img className="coffees-01-icon1" alt="" src="/coffees01-1@2x.png" />
      </div>
      <div className="social-media-follow-frame">
        <img className="coffees-01-icon2" alt="" src="/coffees01-2@2x.png" />
        <div className="text-input-parent">
          <div className="text-input">
            <h1 className="flexible-schedules">Flexible Schedules</h1>
          </div>
          <div className="recognizing-the-challenges-container">
            <p className="recognizing-the-challenges">
              Recognizing the challenges some students face in attending classes
              on weekdays, Aspire Arc provides flexibility with weekend batches.
            </p>
            <p className="this-allows-students">
              This allows students with other commitments or scheduling
              constraints to still access quality education and engage in the
              learning process.
            </p>
          </div>
        </div>
      </div>
      <div className="rating-stars">
        <div className="rating-stars-inner">
          <div className="frame-parent1">
            <div className="real-world-applications-wrapper">
              <h1 className="real-world-applications">
                Real-world Applications
              </h1>
            </div>
            <div className="aspire-arc-believes-container">
              <p className="aspire-arc-believes">
                Aspire Arc believes in the practical application of theoretical
                knowledge. Students are not only exposed to academic concepts
                but also learn how these concepts are applied in real-world
                scenarios.
              </p>
              <p className="this-approach-ensures">
                This approach ensures that students not only grasp the
                theoretical foundations of their subjects but also understand
                their relevance in practical situations.
              </p>
            </div>
          </div>
        </div>
        <img className="coffees-01-icon3" alt="" src="/coffees01-3@2x.png" />
      </div>
      <div className="location3">
        <img className="coffees-01-icon4" alt="" src="/coffees01-4@2x.png" />
        <div className="location-inner">
          <div className="frame-parent2">
            <div className="guidance-for-the-future-wrapper">
              <h1 className="guidance-for-the">Guidance for the Future</h1>
            </div>
            <div className="aspire-arc-goes-container">
              <span>
                <p className="aspire-arc-goes">
                  Aspire Arc goes beyond traditional education by providing
                  guidance on future career paths and university choices.
                </p>
                <p className="students-benefit-from">
                  Students benefit from insights that help them make informed
                  decisions about their educational and professional journeys,
                  ensuring they are well-prepared for the challenges that lie
                  ahead.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ExploreMoreAndAboutUs;
