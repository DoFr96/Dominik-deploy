"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="flex flex-col justify-center items-center sm:py-16 py-6">
      <h1 className="sm:text-[50px] text-[42px] font-medium ">Register</h1>

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
          Register
        </button>
      </form>
    </section>
  );
};

export default Register;

{
  /*
<Timer duration={30 * 24 * 60 * 60 * 1000} />

export const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);
  console.log(duration);
  const formatTime = (milliseconds) => {
    let totalSeconds = parseInt(Math.floor(milliseconds / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHours = parseInt(Math.floor(totalMinutes / 60));
    let days = parseInt(Math.floor(totalHours / 24));

    let seconds = parseInt(Math.floor(totalSeconds % 60));
    let minutes = parseInt(Math.floor(totalMinutes % 60));
    let hours = parseInt(Math.floor(totalHours % 24));

    return `${days}: ${hours}: ${minutes}: ${seconds}`;
  };

  return <div>{formatTime(time)}</div>;
};
*/
}
