import React from "react";

const Post = (props) => {
  const { post } = props;
  console.log(post);
  return (
    <>
      <div className="w-[80%] m-auto border-2 border-black mb-5">
        <div className="flex items-center">
          <img src={post?.profilePhoto} className=" w-[7%] m-2.5" alt="" />
          <h3>
            {post?.first_name} {post?.last_name}
          </h3>
        </div>
        <p className="p-2.5">{post.summary}</p>
        <img src={post?.postImage} className=" w-[57%] m-auto" alt="" />
      </div>
    </>
  );
};

export default Post;
