import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useGetPostsQuery } from "../Redux/post/postApiSlice";
import { useSelector } from "react-redux";

const Feed = () => {
  const [skip, setSkip] = useState(0);
  const [allPosts, setAllPosts] = useState([]);

  const userDetails = useSelector((store) => store?.user);
  console.log(userDetails);
  const { data, isLoading, isSuccess, isError, error } = useGetPostsQuery(skip);

  useEffect(() => {
    console.log("Fetched data:", data);
  }, [data]);

  
  useEffect(() => {
    if (isSuccess && Array.isArray(data)) {
      setAllPosts((prevPosts: Post[]) => [...prevPosts, ...data]);
    }
  }, [data]);

  const handleScroll = (e) => {
    console.log(e);
    const { offsetHeight, scrollTop, scrollHeight } = e.target;

    console.log(offsetHeight + scrollTop, scrollHeight);
    if (offsetHeight + scrollTop >= scrollHeight - 5) {
      setSkip((prevSkip) => prevSkip + 5);
      console.log(skip);
    }
  };

  return (
    <div className="timeline flex ">
      <div className="w-[30%] bg-black"></div>
      <div
        className="flex flex-col w-[60%] overflow-y-scroll overflow-auto h-[92vh]"
        onScroll={handleScroll}
      >
        <div className="flex flex-col ">
          <form className="form ">
            <div className="upper border-solid border-2 border-sky-500 flex items-center justify-evenly">
              <img
                src="https://mellow-griffin-a62cfd.netlify.app/img.png"
                alt="no image"
                className="w-[50px] h-[50px]"
              />
              {userDetails.name}

              <input
                type="text"
                placeholder="Write Something..."
                className="h-full p-5 w-[80%]"
              />
              <br />
            </div>
            <div className="lower m-2.5 flex items-center justify-center">
              <div className="left">
                <input id="file-upload" className="" type="file" />
                <label htmlFor="file-upload" name="custom-file-upload">
                  Choose Photo
                </label>
                <br />
              </div>
              <div className="right">
                <input type="submit" className="submit" value="Post" />

                <br />
              </div>
            </div>
          </form>
        </div>

        <div className="h-[fit-content] ">
          {console.log(allPosts)}
          {allPosts?.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>

        {isError && <div>Error: {error.message}</div>}
      </div>
      <div className="w-[30%] bg-black"></div>
    </div>
  );
};

interface Post {
  _id: string;
  first_name: string;
  last_name: string;
  postImage: string;
  summary: string;
  profilePhoto: string;
}

export default Feed;
