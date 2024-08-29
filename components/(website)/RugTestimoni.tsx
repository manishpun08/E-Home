import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { IconLove } from "../svg/IconLove";
import { IconReply } from "../svg/IconReply";
import Link from "next/link";
import { Comment } from "./Commnet";

const RugTestimoni = () => {
  return (
    <>
      <div className="testimoni my-10 container max-w-5xl ">
        {/* first testimonial  */}
        <div className="bg-c19 p-10 mb-2">
          <div className="flex justify-between mb-4">
            {/* testimoni left  */}
            <div className="testimoni-left">
              <div className="avatar1 flex gap-x-4 items-center">
                <Image
                  src="/icons/avatar1.png"
                  width={30}
                  height={30}
                  alt="rug detail"
                  className="max-w-full h-auto rounded-full border-2 border-primary-400"
                />
                <div className="flex flex-col">
                  <p className="text-E8E8E8 font-semibold font-PlusJakartaSans text-[16px]">
                    Sundar Kumar
                  </p>
                  <p className="text-Avat96 font-normal font-PlusJakartaSans text-start text-[10px]">
                    10 days ago
                  </p>
                </div>
              </div>
              <p className="text-Avat96 font-normal font-PlusJakartaSans py-2 text-start max-w-2xl text-[16px]">
                Hey this is how beautiful this rug looks in my office theadnadfa
                dffass dbasdfb asjkdbfajs das dfabd adf b.
              </p>

              <Button className="bg-373737 mr-4" variant="secondary">
                <div className="flex gap-1 items-center text-AEAEAE font-PlusJakartaSans text-sm font-semibold">
                  <IconLove />
                  <span> 22 Like</span>
                </div>
              </Button>
              <Button className="bg-373737 text-AEAEAE " variant="secondary">
                <div className="flex gap-1 items-center  font-PlusJakartaSans text-sm font-semibold">
                  <IconReply />
                  <span> Ask anything about the review</span>
                </div>
              </Button>
            </div>
            {/* testimoni right  */}
            <div className="testimoni-right">
              <Image
                src="/rug/rugzoom.jpg"
                width={162}
                height={128}
                alt="rug detail"
                className="max-w-full h-auto "
                style={{
                  maxHeight: "128px",
                }}
              />
            </div>
          </div>

          {/* reply section  */}
          <div className="reply-sec ms-8">
            <div className="avatar1 flex gap-x-4 items-center">
              <Image
                src="/icons/avatar1.png"
                width={30}
                height={30}
                alt="rug detail"
                className="max-w-full h-auto rounded-full border-0"
              />
              <div className="flex flex-col">
                <p className="text-E8E8E8 font-semibold font-PlusJakartaSans text-[16px]">
                  Amrita Shrestha
                </p>
                <p className="text-Avat96 font-normal font-PlusJakartaSans text-start text-[10px]">
                  4 days ago
                </p>
              </div>
            </div>
            <p className="text-Avat96 font-normal font-PlusJakartaSans py-2 text-start max-w-2xl text-[16px]">
              Did you buy it from the EvoHome Sundar? What is the price range?
            </p>

            <Button className="bg-373737 mr-4" variant="secondary">
              <div className="flex gap-1 items-center text-AEAEAE font-PlusJakartaSans text-sm font-semibold">
                <IconLove className="fill-none" />
                <span> 0 Like</span>
              </div>
            </Button>
            <Button className="bg-373737 text-AEAEAE " variant="secondary">
              <div className="flex gap-1 items-center  font-PlusJakartaSans text-sm font-semibold">
                <IconReply />
                <span> Ask anything about the review</span>
              </div>
            </Button>
          </div>
        </div>
        <div className="border-b-2 border-gray-800 "></div>
        {/* next testimonial  */}
        <div className="bg-c19 p-10 my-2">
          <div className="flex justify-between mb-4">
            {/* testimoni left  */}
            <div className="testimoni-left">
              <div className="avatar1 flex gap-x-4 items-center">
                <Image
                  src="/icons/avatar1.png"
                  width={30}
                  height={30}
                  alt="rug detail"
                  className="max-w-full h-auto rounded-full border-2 border-primary-400"
                />
                <div className="flex flex-col">
                  <p className="text-E8E8E8 font-semibold font-PlusJakartaSans text-[16px]">
                    Bill Gates
                  </p>
                  <p className="text-Avat96 font-normal font-PlusJakartaSans text-start text-[10px]">
                    10 days ago
                  </p>
                </div>
              </div>
              <p className="text-Avat96 font-normal font-PlusJakartaSans py-2 text-start max-w-2xl text-[16px]">
                Hey this is how beautiful this rug looks in my office theadnadfa
                dffass dbasdfb asjkdbfajs das dfabd adf b.
              </p>

              <Button className="bg-373737 mr-4" variant="secondary">
                <div className="flex gap-1 items-center text-AEAEAE font-PlusJakartaSans text-sm font-semibold">
                  <IconLove />
                  <span> 22 Like</span>
                </div>
              </Button>
              <Button className="bg-373737 text-AEAEAE " variant="secondary">
                <div className="flex gap-1 items-center  font-PlusJakartaSans text-sm font-semibold">
                  <IconReply />
                  <span> Ask anything about the review</span>
                </div>
              </Button>
            </div>
            {/* testimoni right  */}
            <div className="testimoni-right">
              <Image
                src="/rug/rugzoom.jpg"
                width={162}
                height={128}
                alt="rug detail"
                className="max-w-full h-auto "
                style={{
                  maxHeight: "128px",
                }}
              />
            </div>
          </div>
        </div>

        <Link
          href="#"
          className="text-DADADAE5 font-PlusJakartaSans text-[16px] font-semibold "
        >
          View all comments
        </Link>

        <Comment />
      </div>
    </>
  );
};

export default RugTestimoni;
