// 재귀적으로 사이드바 항목을 렌더링하는 컴포넌트
import React, { useState } from "react";

type SidebarItem = {
  id: string;
  label: string;
  children?: SidebarItem[];
};

const SidebarItemComponent: React.FC<{ item: SidebarItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleItemClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-2">
      <div
        className="cursor-pointer p-2 rounded-md transition-colors duration-300 hover:bg-yellow-300 text-black"
        onClick={handleItemClick}
      >
        {item.label}
      </div>
      {isOpen && item.children && (
        <ul className="ml-4">
          {item.children.map((child) => (
            <li key={child.id}>
              <SidebarItemComponent item={child} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarItemComponent;
