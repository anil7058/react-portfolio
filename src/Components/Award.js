import React from "react";
import "../Styles/Award.css";

const Award = () => {
  return (
    <div className="award_container d-flex align-item-center flex-wrap
        justify-content-between">
      <div className="award_item">
        <AwardItem
          year="Experience"
          title="I have experience of 2 year Frontend with Backend"
          text=""
        />
      </div>
      <div className="award_item">
        <AwardItem
          year="Worked"
          title="I worked on php with data base"
          // text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, consectetur?"
        />
      </div>
      <div className="award_item">
        <AwardItem
          year="Websites Developer"
          title="Frontend and Backend Developer"
          // text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, consectetur?"
        />
      </div>
      <div className="award_item">
        <AwardItem
          year="App Developer"
          title="Frontend and Backend Developer"
          // text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, consectetur?"
        />
      </div>
    </div>
  );
};

const AwardItem = ({ year, title, text }) => {
  return (
    <div className="single_award">
      <div className="award_year">{year}</div>
      <h6 className="award_title">{title}
      {/* - <span>{text}</span> */}
      </h6>
    </div>
  );
};

export default Award;
