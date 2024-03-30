/* eslint-disable react/prop-types */
import { Projects } from "../Assets/data";

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {Projects.map((item, index) => (
          <TimelineItem
            heading={item.title}
            skills={item.skills}
            index={index}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, skills, index }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div>
      <h2>{heading}</h2>
      <p>{skills}</p>
    </div>
  </div>
);

export default Timeline;
