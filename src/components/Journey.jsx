import React from "react";

function Journey() {
  return (
    <section className="section__container journey__container">
      <p className="section__subheader">My Qualifications</p>
      <h2 className="section__header">Awesome Journey</h2>
      <div className="journey__grid">
        <div>
          <div className="journey__grid__header">
            <span><i className="ri-graduation-cap-line"></i></span> Education
          </div>
          <div className="journey__card">
            <span><i className="ri-circle-fill"></i></span>
            <div>
              <h4>Bachelor of Science</h4>
              <h5>CGPA-7.0</h5>
              <p><span><i className="ri-calendar-fill"></i></span> 2021-2024</p>
            </div>
          </div>
          <div className="journey__card">
            <span><i className="ri-circle-fill"></i></span>
            <div>
              <h4>Board of Intermediate Education</h4>
              <h5>CGPA-7.2</h5>
              <p><span><i className="ri-calendar-fill"></i></span> 2019-2021</p>
            </div>
          </div>
          <div className="journey__card">
            <span><i className="ri-circle-fill"></i></span>
            <div>
              <h4>Board of Secondary Education</h4>
              <h5>CGPA-9.0</h5>
              <p><span><i className="ri-calendar-fill"></i></span> 2018-2019</p>
            </div>
          </div>
          <div className="journey__card">
            <span><i className="ri-circle-fill"></i></span>
            <div>
              <h4>Masters in Computer Applications</h4>
              <h5>CGPA-8.0</h5>
              <p><span><i className="ri-calendar-fill"></i></span> 2025-2027</p>
            </div>
          </div>
        </div>
        <div>
          <div className="journey__grid__header">
            <span><i className="ri-briefcase-line"></i></span> Certifications
          </div>
          <div className="journey__card">
            <span><i className="ri-circle-fill"></i></span>
            <div>
              <h4>UI UX DESIGNER</h4>
              <h5>Tech mahindra foundation</h5>
              <p><span><i className="ri-calendar-fill"></i></span> 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;