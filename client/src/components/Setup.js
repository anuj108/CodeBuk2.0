import React, { useState } from "react";
import axios from "axios";

const Setup = () => {
  const [user, setUser] = useState({
    name: "",
    photo: "",
    info: "",
    bio: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    twitter: "",
    skills: "",
    achievements: "",
    experienceRole: "",
    experienceCompany: "",
    experienceDuration: "",
    experienceDescription: "",
    educationDegree: "",
    educationInstitution: "",
    educationYear: "",
    projectTitle: "",
    projectDescription: "",
    projectLink: "",
    projectTechnologies: "",
    testimonialName: "",
    testimonialRelationship: "",
    testimonialText: "",
    totalQuestionsSolved: "",
    followers: "",
    followings: "",
    codechefDetails: "",
    codechefQuestionsSolved: "",
    codechefRanking: "",
    codechefRating: "",
    codechefProfileLink: "",
    codeforcesDetails: "",
    codeforcesQuestionsSolved: "",
    codeforcesRanking: "",
    codeforcesRating: "",
    codeforcesProfileLink: "",
    leetcodeDetails: "",
    leetcodeQuestionsSolved: "",
    leetcodeRanking: "",
    leetcodeRating: "",
    leetcodeProfileLink: "",
    gfgDetails: "",
    gfgQuestionsSolved: "",
    gfgRanking: "",
    gfgRating: "",
    gfgProfileLink: "",
  });

  const [ImageUrl,setImageUrl]= useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value, // this name means we are not literally naming key as name but it will be stored like name,info,bio etc.
    });
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0]; // Get the uploaded file
    console.log(file);
    setUser({
      ...user,
      photo: file, // Update the user state with the file object, here key will be named as photo literally.
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    if (!user.photo) {
      console.log("PLEASE FIRST UPLOAD ANY PHOTO");
      return;
    }
    const formdata = new FormData();
    console.log(user.photo);
    formdata.append("file", user.photo);
    formdata.append("upload_preset", "Codebook-Preset");
    console.log(formdata);
    try {
      // Make a POST request to Cloudinary's image upload endpoint
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dz2u63jv5/image/upload",
        formdata
      );
      // The URL of the uploaded image
      setImageUrl(response.data.secure_url);
      console.log("Upload successful:", response.data.secure_url);
      console.log(ImageUrl);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          ENTER YOUR DETAILS
        </h2>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-6"
        >
          {/* Personal Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={user.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Photo
              </label>
              <input
                type="file"
                accept="image/*"
                name="photo"
                id="photo"
                onChange={handlePhotoUpload}
                className="mt-1 block w-full py-2 px-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="info"
                className="block text-sm font-medium text-gray-700"
              >
                Info
              </label>
              <input
                type="text"
                name="info"
                id="info"
                value={user.info}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700"
              >
                Bio
              </label>
              <textarea
                name="bio"
                id="bio"
                rows="3"
                value={user.bio}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={user.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="linkedin"
                className="block text-sm font-medium text-gray-700"
              >
                LinkedIn
              </label>
              <input
                type="text"
                name="linkedin"
                id="linkedin"
                value={user.linkedin}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="github"
                className="block text-sm font-medium text-gray-700"
              >
                GitHub
              </label>
              <input
                type="text"
                name="github"
                id="github"
                value={user.github}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="twitter"
                className="block text-sm font-medium text-gray-700"
              >
                Twitter
              </label>
              <input
                type="text"
                name="twitter"
                id="twitter"
                value={user.twitter}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Skills and Achievements */}
          <div>
            <label
              htmlFor="skills"
              className="block text-sm font-medium text-gray-700"
            >
              Skills
            </label>
            <input
              type="text"
              name="skills"
              id="skills"
              value={user.skills}
              onChange={handleChange}
              placeholder="Comma-separated values"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="achievements"
              className="block text-sm font-medium text-gray-700"
            >
              Achievements
            </label>
            <input
              type="text"
              name="achievements"
              id="achievements"
              value={user.achievements}
              onChange={handleChange}
              placeholder="Comma-separated values"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Experience */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="experienceRole"
                className="block text-sm font-medium text-gray-700"
              >
                Experience Role
              </label>
              <input
                type="text"
                name="experienceRole"
                id="experienceRole"
                value={user.experienceRole}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="experienceCompany"
                className="block text-sm font-medium text-gray-700"
              >
                Company
              </label>
              <input
                type="text"
                name="experienceCompany"
                id="experienceCompany"
                value={user.experienceCompany}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="experienceDuration"
                className="block text-sm font-medium text-gray-700"
              >
                Duration
              </label>
              <input
                type="text"
                name="experienceDuration"
                id="experienceDuration"
                value={user.experienceDuration}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="experienceDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="experienceDescription"
              id="experienceDescription"
              rows="3"
              value={user.experienceDescription}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          {/* Education */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="educationDegree"
                className="block text-sm font-medium text-gray-700"
              >
                Degree
              </label>
              <input
                type="text"
                name="educationDegree"
                id="educationDegree"
                value={user.educationDegree}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="educationInstitution"
                className="block text-sm font-medium text-gray-700"
              >
                Institution
              </label>
              <input
                type="text"
                name="educationInstitution"
                id="educationInstitution"
                value={user.educationInstitution}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="educationYear"
                className="block text-sm font-medium text-gray-700"
              >
                Year
              </label>
              <input
                type="text"
                name="educationYear"
                id="educationYear"
                value={user.educationYear}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Projects */}
          <div>
            <label
              htmlFor="projectTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Project Title
            </label>
            <input
              type="text"
              name="projectTitle"
              id="projectTitle"
              value={user.projectTitle}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="projectDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Project Description
            </label>
            <textarea
              name="projectDescription"
              id="projectDescription"
              rows="3"
              value={user.projectDescription}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="projectLink"
              className="block text-sm font-medium text-gray-700"
            >
              Project Link
            </label>
            <input
              type="text"
              name="projectLink"
              id="projectLink"
              value={user.projectLink}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="projectTechnologies"
              className="block text-sm font-medium text-gray-700"
            >
              Technologies
            </label>
            <input
              type="text"
              name="projectTechnologies"
              id="projectTechnologies"
              value={user.projectTechnologies}
              onChange={handleChange}
              placeholder="Comma-separated values"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="testimonialName"
                className="block text-sm font-medium text-gray-700"
              >
                Testimonial Name
              </label>
              <input
                type="text"
                name="testimonialName"
                id="testimonialName"
                value={user.testimonialName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="testimonialRelationship"
                className="block text-sm font-medium text-gray-700"
              >
                Relationship
              </label>
              <input
                type="text"
                name="testimonialRelationship"
                id="testimonialRelationship"
                value={user.testimonialRelationship}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="testimonialText"
                className="block text-sm font-medium text-gray-700"
              >
                Text
              </label>
              <textarea
                name="testimonialText"
                id="testimonialText"
                rows="3"
                value={user.testimonialText}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="totalQuestionsSolved"
                className="block text-sm font-medium text-gray-700"
              >
                Total Questions Solved
              </label>
              <input
                type="text"
                name="totalQuestionsSolved"
                id="totalQuestionsSolved"
                value={user.totalQuestionsSolved}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="followers"
                className="block text-sm font-medium text-gray-700"
              >
                Followers
              </label>
              <input
                type="text"
                name="followers"
                id="followers"
                value={user.followers}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="followings"
                className="block text-sm font-medium text-gray-700"
              >
                Followings
              </label>
              <input
                type="text"
                name="followings"
                id="followings"
                value={user.followings}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Platforms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="codechefDetails"
                className="block text-sm font-medium text-gray-700"
              >
                CodeChef Details
              </label>
              <input
                type="text"
                name="codechefDetails"
                id="codechefDetails"
                value={user.codechefDetails}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="codechefQuestionsSolved"
                className="block text-sm font-medium text-gray-700"
              >
                Questions Solved
              </label>
              <input
                type="text"
                name="codechefQuestionsSolved"
                id="codechefQuestionsSolved"
                value={user.codechefQuestionsSolved}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="codechefRanking"
                className="block text-sm font-medium text-gray-700"
              >
                Ranking
              </label>
              <input
                type="text"
                name="codechefRanking"
                id="codechefRanking"
                value={user.codechefRanking}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="codechefRating"
                className="block text-sm font-medium text-gray-700"
              >
                Rating
              </label>
              <input
                type="text"
                name="codechefRating"
                id="codechefRating"
                value={user.codechefRating}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="codechefProfileLink"
                className="block text-sm font-medium text-gray-700"
              >
                Profile Link
              </label>
              <input
                type="text"
                name="codechefProfileLink"
                id="codechefProfileLink"
                value={user.codechefProfileLink}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Repeat similar blocks for CodeForces, LeetCode, and GeeksForGeeks details */}

          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Setup;
