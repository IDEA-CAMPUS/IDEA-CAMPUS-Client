"use client"

import Layout from "../../_components/layout/Layout";
import { useState, ChangeEvent } from "react";

const BannerRegistration: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="px-22 pb-21">
          <div className="flex justify-between">
            <p className="text-lg text-black">배너 등록</p>
            <button
              type="button"
              onClick={toggleModal}
              className="bg-[#FFDA67] text-white mb-4 py-2 px-4 rounded-md hover:bg-yellow-400"
            >
              배너 등록
            </button>
          </div>
          <div className="mx-auto mb-4 p-8 bg-white">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">배너 제목</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="배너 제목을 입력하세요"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">배너 타입</label>
              <select className="mt-1 p-2 w-full border border-gray-300 rounded-md">
                <option value="home">홈화면</option>
                <option value="project">프로젝트</option>
                <option value="ideaZone">아이디어 존</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">배너 이미지</label>
              <input
                type="file"
                accept="image/*"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                onChange={handleFileChange}
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="이미지 미리보기"
                  className="mt-2 w-300 h-auto rounded-md"
                />
              )}
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-md flex flex-col items-center">
              <p>배너를 등록하시겠습니까?</p>
              <div className="mt-4 flex gap-4">
                <button
                  onClick={toggleModal}
                  className="mt-4 bg-[#FFDA67] text-white py-2 px-4 rounded-md hover:bg-yellow-400"
                >
                  예
                </button>
                <button
                  onClick={toggleModal}
                  className="mt-4 bg-[#D9D9D9] text-white py-2 px-4 rounded-md hover:bg-gray-400 mx-auto"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default BannerRegistration;
