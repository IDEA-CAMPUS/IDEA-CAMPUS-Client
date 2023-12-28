"use client";

import React, { useState, ChangeEvent } from "react";

import Layout from "@/app/_components/layout/Layout";
import Image from "next/image";

const Banner_Detail: React.FC = () => {
  const [isModified, setIsModified] = useState(false);

  // 배너 제목이 변경될 때 호출되는 함수
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsModified(true);
    // 추가로 필요한 로직 수행
  };

  // 이미지가 업로드될 때 호출되는 함수
  const handleImageUpload = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsModified(true);
    // 추가로 필요한 로직
    // Event 1 : 새로운 이미지를 업로드한 경우
    // => 이미지 업로드 박스 밑에 새롭게 업로드한 이미지에 대한 정보가 보여진다.

    // Event 1-2 : 새로운 이미지를 업로드 한 상태에서 또 새로운 이미지를 업로드 한 경우
    // => 새롭게 업로드한 이미지에 대한 정보만 바뀐다.
  };

  return (
    <Layout>
      <main className="w-full h-full bg-gray-300 text-black">
        <div className="flex items-center justify-between px-4 py-3">
          <p className="items-center text-lg">배너 상세 보기</p>
          <div>
            {isModified && (
              <button className="items-center mr-5 bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded">
                수정하기
              </button>
            )}
            <button className="items-center bg-red-500 hover:bg-red-600 px-3 py-1 rounded">
              삭제하기
            </button>
          </div>
        </div>
        <div className="flex-col mx-6 p-5 h-screen bg-white">
          <div className="flex items-center justify-between w-full">
            <p className="flex items-center">배너 제목</p>
            <div className="flex items-center mr-3">
              <p className="overflow-hidden whitespace-nowrap">배너 등록자</p>
              <p className="ml-1">nickname</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center w-full">
              <input
                type="text"
                className="mt-2 bg-gray-400 flex-grow px-3 mr-3 overflow-hidden whitespace-nowrap"
                onChange={handleTitleChange}
              />
              <div className="flex items-center">
                <p>배너 등록일</p>
                <p className="ml-1">day</p>
              </div>
            </div>
          </div>
          <div className="flex mt-5">
            <div className="flex">
              <div>
                <p className="mb-5">배너 이미지</p>
                <Image src="/Logo.svg" width={108} height={40} alt="Logo" />
              </div>
              <div className="ml-5" style={{ marginLeft: "150px" }}>
                <p className="mb-5">새로운 배너 이미지</p>
                <button
                  className="bg-gray-300 hover:bg-gray-400 py-10 px-12"
                  onClick={handleImageUpload}
                >
                  이미지를 드래그하거나 <br /> 클릭하여 업로드하세요
                </button>
                <p className="my-5">새롭게 업로드한 이미지</p>
                <div className="bg-gray-300 py-10 px-12">
                  이미지를 드래그하거나 <br /> 클릭하여 업로드하세요
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Banner_Detail;
