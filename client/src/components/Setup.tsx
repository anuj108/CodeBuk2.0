import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

// Validation schema
const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  name: yup.string(),
  bio: yup.string().max(200, "Bio must be less than 200 characters"),
  profilePicture: yup.mixed(),
  codechef: yup.object().shape({
    username: yup.string(),
    rating: yup.number(),
    problemsSolved: yup.number(),
  }),
  codeforces: yup.object().shape({
    username: yup.string(),
    rating: yup.number(),
    problemsSolved: yup.number(),
  }),
  leetcode: yup.object().shape({
    username: yup.string(),
    problemsSolved: yup.number(),
  }),
  gfg: yup.object().shape({
    username: yup.string(),
    problemsSolved: yup.number(),
  }),
});

const Setup = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [imageUrl, setImageUrl] = React.useState("");

  const onSubmit = async (data) => {
    console.log(data);

    // Upload profile picture to Cloudinary
    if (data.profilePicture) {
      const formData = new FormData();
      formData.append("file", data.profilePicture[0]);
      formData.append("upload_preset", "Codebook-Preset");

      // try {
      //   const response = await axios.post(
      //     "https://api.cloudinary.com/v1_1/dz2u63jv5/image/upload",
      //     formData
      //   );
      //   setImageUrl(response.data.secure_url);
      //   console.log("Image uploaded:", response.data.secure_url);
      // } catch (error) {
      //   console.error("Error uploading image:", error);
      // }
    }

    // Submit the form data to your backend
    const userData = {
      ...data,
      profilePicture: imageUrl,
    };
    console.log("User data to be submitted:", userData);
    // Example: axios.post("/api/user", userData);

    axios.post("http://localhost:5001/auth/signup", userData)
      .then((response) => {
        console.log("User data submitted:", response?.data);
      })
      .catch((error) => {
        console.error("Error submitting user data:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          ENTER YOUR DETAILS
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register("username")}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Bio */}
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Bio
            </label>
            <textarea
              id="bio"
              {...register("bio")}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
            {errors.bio && (
              <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>
            )}
          </div>

          {/* Profile Picture */}
          <div>
            <label
              htmlFor="profilePicture"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Photo
            </label>
            <input
              type="file"
              id="profilePicture"
              {...register("profilePicture")}
              className="mt-1 block w-full py-2 px-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.profilePicture && (
              <p className="text-red-500 text-sm mt-1">
                {errors.profilePicture.message}
              </p>
            )}
          </div>

          {/* CodeChef Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="codechef.username"
                className="block text-sm font-medium text-gray-700"
              >
                CodeChef Username
              </label>
              <input
                type="text"
                id="codechef.username"
                {...register("codechef.username")}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="codechef.rating"
                className="block text-sm font-medium text-gray-700"
              >
                CodeChef Rating
              </label>
              <input
                type="number"
                id="codechef.rating"
                {...register("codechef.rating")}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="codechef.problemsSolved"
                className="block text-sm font-medium text-gray-700"
              >
                Problems Solved
              </label>
              <input
                type="number"
                id="codechef.problemsSolved"
                {...register("codechef.problemsSolved")}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* CodeChef Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="gfg.username"
                className="block text-sm font-medium text-gray-700"
              >
                GFG Username
              </label>
              <input
                type="text"
                id="gfg.username"
                {...register("gfg.username")}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="gfg.rating"
                className="block text-sm font-medium text-gray-700"
              >
                GFG Rating
              </label>
              <input
                type="number"
                id="gfg.rating"
                {...register("gfg.rating")}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="gfg.problemsSolved"
                className="block text-sm font-medium text-gray-700"
              >
                Problems Solved
              </label>
              <input
                type="number"
                id="gfg.problemsSolved"
                {...register("gfg.problemsSolved")}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Codeforces Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="codeforces.username"
                className="block text-sm font-medium text-gray-700"
              >
                Codeforces Username
              </label>
              <input
                type="text"
                id="codeforces.username"
                {...register("codeforces.username")}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="codeforces.rating"
                className="block text-sm font-medium text-gray-700"
              >
                Codeforces Rating
              </label>
              <input
                type="number"
                id="codeforces.rating"
                {...register("codeforces.rating")}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="codeforces.problemsSolved"
                className="block text-sm font-medium text-gray-700"
              >
                Problems Solved
              </label>
              <input
                type="number"
                id="codeforces.problemsSolved"
                {...register("codeforces.problemsSolved")}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Leetcode Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="leetcode.username"
                className="block text-sm font-medium text-gray-700"
              >
                Leetcode Username
              </label>
              <input
                type="text"
                id="leetcode.username"
                {...register("leetcode.username")}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="leetcode.rating"
                className="block text-sm font-medium text-gray-700"
              >
                Leetcode Rating
              </label>
              <input
                type="number"
                id="leetcode.rating"
                {...register("leetcode.rating")}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="leetcode.problemsSolved"
                className="block text-sm font-medium text-gray-700"
              >
                Problems Solved
              </label>
              <input
                type="number"
                id="leetcode.problemsSolved"
                {...register("leetcode.problemsSolved")}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Repeat similar blocks for Codeforces, LeetCode, and GFG */}

          {/* Submit Button */}
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