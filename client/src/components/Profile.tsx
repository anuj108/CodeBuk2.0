import React from "react";

const Profile = () => {
  const platformLogos = {
    CodeChef: "https://via.placeholder.com/50x50?text=CodeChef",
    CodeForces: "https://via.placeholder.com/50x50?text=CodeForces",
    LeetCode: "https://via.placeholder.com/50x50?text=LeetCode",
    GeeksForGeeks: "https://via.placeholder.com/50x50?text=GFG",
  };

  const user = {
    name: "John Doe",
    photo: "https://via.placeholder.com/150",
    info: "Software Developer at XYZ Company",
    bio: "Passionate software developer with a knack for solving complex problems and a love for learning new technologies.",
    email: "johndoe@example.com",
    phone: "+1234567890",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
    skills: ["JavaScript", "React", "Node.js"],
    achievements: ["100+ Projects", "50+ Certifications"],
    experience: [
      {
        role: "Senior Developer",
        company: "XYZ Company",
        duration: "Jan 2020 - Present",
        description:
          "Leading a team of developers to build scalable web applications.",
      },
      {
        role: "Junior Developer",
        company: "ABC Inc.",
        duration: "Jun 2018 - Dec 2019",
        description:
          "Worked on frontend and backend development for various projects.",
      },
    ],
    education: [
      {
        degree: "B.Sc. in Computer Science",
        institution: "University of Technology",
        year: "2018",
      },
    ],
    projects: [
      {
        title: "Project Management Tool",
        description: "A web application to manage projects and tasks.",
        link: "https://github.com/johndoe/project-management-tool",
        technologies: ["React", "Node.js", "MongoDB"],
      },
    ],
    testimonials: [
      {
        name: "Jane Smith",
        relationship: "Colleague",
        text: "John is a fantastic developer and a great team player. Highly recommend!",
      },
    ],
    stats: {
      totalQuestionsSolved: 500,
      followers: 300,
      followings: 150,
    },
    platforms: [
      {
        name: "CodeChef",
        details: "5 Star Coder",
        questionsSolved: 200,
        ranking: "Top 1%",
        rating: 2200,
        profileLink: "https://www.codechef.com/users/johndoe",
      },
      {
        name: "CodeForces",
        details: "Expert",
        questionsSolved: 150,
        ranking: "Top 5%",
        rating: 1900,
        profileLink: "https://codeforces.com/profile/johndoe",
      },
      {
        name: "LeetCode",
        details: "Gold Badge",
        questionsSolved: 100,
        ranking: "Top 10%",
        rating: 1800,
        profileLink: "https://leetcode.com/johndoe",
      },
      {
        name: "GeeksForGeeks",
        details: "Top Contributor",
        questionsSolved: 50,
        ranking: "Top 2%",
        rating: 1700,
        profileLink: "https://auth.geeksforgeeks.org/user/johndoe",
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {console.log("HELLO FROM PROFILE")}
      {/* User Card */}
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
        <img className="w-24 h-24 rounded-full" src={user.photo} alt="User" />
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.info}</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
            Edit Information
          </button>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold">Bio</h3>
        <p className="mt-2 text-gray-600">{user.bio}</p>
      </div>

      {/* Contact Information */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <p className="mt-2 text-gray-600">Email: {user.email}</p>
        <p className="mt-2 text-gray-600">Phone: {user.phone}</p>
        <div className="mt-2">
          <a
            className="text-blue-500"
            href={user.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            className="text-blue-500"
            href={user.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            className="text-blue-500"
            href={user.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>

      {/* Skills and Achievements */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold">Skills & Achievements</h3>
        <div className="mt-4">
          <h4 className="text-md font-semibold">Skills:</h4>
          <ul className="list-disc list-inside">
            {user.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-semibold">Achievements:</h4>
          <ul className="list-disc list-inside">
            {user.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Experience */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold">Experience</h3>
        {user.experience.map((exp, index) => (
          <div key={index} className="mt-4">
            <h4 className="text-md font-semibold">
              {exp.role} at {exp.company}
            </h4>
            <p className="text-gray-600">{exp.duration}</p>
            <p className="text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold">Education</h3>
        {user.education.map((edu, index) => (
          <div key={index} className="mt-4">
            <h4 className="text-md font-semibold">{edu.degree}</h4>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-gray-600">{edu.year}</p>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold">Projects</h3>
        {user.projects.map((project, index) => (
          <div key={index} className="mt-4">
            <h4 className="text-md font-semibold">{project.title}</h4>
            <p className="text-gray-600">{project.description}</p>
            <p className="text-gray-600">
              Technologies: {project.technologies.join(", ")}
            </p>
            <a
              className="text-blue-500"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold">Testimonials</h3>
        {user.testimonials.map((testimonial, index) => (
          <div key={index} className="mt-4">
            <p className="text-gray-600">"{testimonial.text}"</p>
            <p className="text-gray-600">
              - {testimonial.name}, {testimonial.relationship}
            </p>
          </div>
        ))}
      </div>

      {/* User Stats */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold">User Stats</h3>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">
              {user.stats.totalQuestionsSolved}
            </span>
            <span className="text-gray-600">Total Questions Solved</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{user.stats.followers}</span>
            <span className="text-gray-600">Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{user.stats.followings}</span>
            <span className="text-gray-600">Followings</span>
          </div>
        </div>
      </div>

      {/* Coding Platforms */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {user.platforms.map((platform, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4"
          >
            <img
              className="w-12 h-12"
              src={platformLogos[platform.name]}
              alt={platform.name}
            />
            <div>
              <h3 className="text-lg font-semibold">{platform.name}</h3>
              <p className="text-gray-600">{platform.details}</p>
              <p className="text-gray-600">Ranking: {platform.ranking}</p>
              <p className="text-gray-600">Rating: {platform.rating}</p>
              <p className="text-gray-600">
                Questions Solved: {platform.questionsSolved}
              </p>
              <a
                className="text-blue-500"
                href={platform.profileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
