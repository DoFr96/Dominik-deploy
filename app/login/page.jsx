"use client";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="flex flex-col justify-center items-center sm:py-16 py-6">
      <h1 className="sm:text-[50px] text-[42px] font-medium ">Login</h1>

      <p className="font-[16px] text-secondary my-2">Cooming soon</p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center my-10"
      >
        <input
          type="email"
          placeholder="email"
          className="w-full my-2 rounded-xl border p-2 border-gray-300 bg-gray-100"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="w-full my-2 rounded-xl border p-2 border-gray-300 bg-gray-100 "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="main_btn my-2" type="submit">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
