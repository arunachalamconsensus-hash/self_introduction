// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./SelfIntroduction.css";
function SelfIntroduction() {
  return (
     <div className="profile-container">

      <div className="profile-card">

        {/* Profile Header */}
        <div className="profile-header">

          <div className="profile-image">
            A
          </div>

          <h1>Arunachalam KS</h1>

          <h3>Frontend Developer</h3>

          <p>
            Technology Specialist | Frontend Developer |
            Technical Trainer
          </p>

        </div>

        <div className="profile-content">

          {/* About Me */}
          <section>
            <h2>About Me</h2>

            <p>
              I am an IT professional with nearly 5 years
              of experience in project coordination, PMO,
              resource management, and Identity and Access
              Management (IAM) operations.

              I am passionate about technology and
              currently focusing on building my career
              in Frontend Development. I enjoy developing
              responsive, user-friendly, and interactive
              web applications.
            </p>
          </section>

          {/* Education */}
          <section>
            <h2>Education</h2>

            <p>
              Bachelor's Degree - [Your Degree]
            </p>

            <p>
              [Your College Name]
            </p>
          </section>

          {/* Technical Skills */}
          <section>
            <h2>Technical Skills</h2>

            <div className="skills">

              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React JS</span>
              <span>Java</span>
              <span>Python</span>
              <span>Git & GitHub</span>
              <span>ServiceNow</span>
              <span>CyberArk</span>
              <span>Active Directory</span>
              <span>Microsoft Entra ID</span>
              <span>Microsoft Intune</span>
              <span>MS Excel</span>
              <span>PowerPoint</span>

            </div>
          </section>

          {/* Professional Experience */}
          <section>
            <h2>Professional Experience</h2>

            <h3>Technology Specialist</h3>

            <p>
              Freelancing | January 2026 - Present
            </p>

            <h3>Tech Lead</h3>

            <p>
              Srikara Academy | June 2025 - December 2025
            </p>

            <h3>Previous IT Experience</h3>

            <p>
              Nearly 5 years of experience in project
              coordination, PMO, resource management,
              IAM operations, stakeholder management,
              and project reporting.
            </p>

          </section>

          {/* Training Experience */}
          <section>
            <h2>Training & Mentoring</h2>

            <p>
              Experienced in technical training and
              mentoring students in programming and
              web development concepts. Passionate about
              sharing knowledge and helping students
              strengthen their technical skills.
            </p>

          </section>

          {/* Hobbies */}
          <section>
            <h2>Hobbies & Interests</h2>

            <p>
              Learning new technologies, coding,
              teaching, exploring new tools, developing
              creative projects, and staying updated
              with the latest technology trends.
            </p>

          </section>

          {/* Career Goal */}
          <section>
            <h2>Career Goal</h2>

            <p>
              My goal is to become a skilled Full Stack
              Developer, build innovative and scalable
              web applications, gain expertise in modern
              technologies, and contribute to
              organizational growth.
            </p>

          </section>

        </div>

        {/* Footer */}
        <div className="profile-footer">

          <p>Thank You!</p>

          <p>
            Keep Learning | Keep Growing
          </p>

        </div>

      </div>

    </div>
  )
}

export default SelfIntroduction
