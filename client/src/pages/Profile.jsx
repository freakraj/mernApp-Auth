import React from "react";
import { useSelector } from "react-redux";

export const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  // console.log("hello gautam",currentUser);
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.profilePicture}
          alt="profile"
          className="h-24 w-24 self-center rounded-full cursor-pointer object-cover mt-2"
        />
        <input
          defaultValue={currentUser.username}
          type="text"
          className="bg-slate-100 rounded-lg p-3 "
          id="username"
          placeholder="Username"
        />
        <input
          defaultValue={currentUser.email}
          type="email"
          className="bg-slate-100 rounded-lg p-3 "
          id="email"
          placeholder="Email"
        />
        <input
          type="password"
          className="bg-slate-100 rounded-lg p-3 "
          id="password"
          placeholder="Password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer ">Delete Account</span>
        <span className="text-red-700 cursor-pointer ">Sign out</span>
      </div>
    </div>
  );
};
