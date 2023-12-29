import React, { useState } from "react";
import SidebarItemComponent from "./SidebarItemComponent";


// 사이드바 항목 타입 정의
type SidebarItem = {
  id: string;
  label: string;
  children?: SidebarItem[];
  link?:string;
};

// 전체 사이드바 컴포넌트
const Sidebar: React.FC = () => {
  // 예시 데이터
  const sidebarData: SidebarItem[] = [
    {
      id: "1",
      label: "배너관리",
      children: [
        {
          id: "1.1",
          label: "홈화면 배너",
          
        },
        {
          id: "1.2",
          label: "프로젝트 관리 배너"

        },
        {
          id: "1.3",
          label: "아이디어 존 관리 배너",
          link: ""
        },
        {
          id: "1.4",
          label: " 배너 등록",
          link: "/banner/BannerRegistration",
        },
      ],
    },
    {
      id: "2",
      label: "회원 관리",
    },
  ];

  return (
    <div className="p-4 bg-white shadow-md w-64">
      {sidebarData.map((item) => (
        <SidebarItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
