"use client";
import { contact } from "@/constants";
import Image from "next/image";
const Contact = () => {
  return (
    <section
      id="contact"
      className="  bg-secondary w-full sm:p-16 p-6 mt-20 rounded-lg "
    >
      <div className="sm:max-w-[1280px] mx-auto  overflow-hidden flex flex-col">
        <div className="flex sm:flex-row flex-col justify-center items-start">
          <div className="flex flex-col w-full sm:mr-5 mr-0 sm:mb-0 mb-[60px] sm:mt-0 mt-10">
            <div className="flex flex-row pl-4 mb-5">
              <p className="border-l-[1px] border-l-[#ffffff] rotate-90 mr-5 "></p>
              <p className="text-dimWhite font-medium font-poppins">
                Lets pump
              </p>
            </div>
            <h3 className="text-white font-poppins font-semibold text-[40px] mb-5 ">
              Book your training
            </h3>
            <p className="max-w-[450px] text-[16px] text-dimWhite mb-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              debitis temporibus animi saepe sunt mollitia?
            </p>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
              {contact.map((contact) => {
                const { type, info, id } = contact;
                return (
                  <div key={id} className="">
                    <h4 className="text-white font-normal text-[18px]">
                      {type}
                    </h4>
                    <p className="text-dimWhite text-[16px] sm:max-w-[200px] max-w-[200px]">
                      {info}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full">
            <form action="#" class="space-y-8">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm  border text-black
              text-sm  
              block w-full p-2.5 bg-sea border-dimWhite placeholder-dimWhtext-dimWhite
              outline-none  "
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  class="shadow-sm border text-black
              text-sm  
              block w-full p-2.5 bg-sea border-dimWhite placeholder-dimWhtext-dimWhite
             outline-none "
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-white "
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm  shadow-sm bg-sea border border-dimWhite placeholder-dimWhtext-dimWhite text-black
              outline-none  "
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="py-3 px-5 text-sm font-bold text-center text-white 
          
            border-solid border-[1px] border-[#ffffff] cursor-pointer
            "
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
