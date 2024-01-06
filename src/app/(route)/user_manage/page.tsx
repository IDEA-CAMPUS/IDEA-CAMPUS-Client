import Layout from "@/app/_components/layout/Layout";
import Image from "next/image";

export default function user_manage() {
  return (
    <Layout>
      <div className="w-full h-full bg-gray-100 flex flex-col px-[15px] py-[15px] box-border">
        <div className="w-full h-fit-content text-[24px] mb-[15px]">
          회원 관리
        </div>
        <div className="w-full h-fit-content min-h-[200px] bg-white px-[15px] py-[15px] box-border">
          <input
            placeholder="이름으로 검색하세요"
            className="px-[5px] py-[5px] box-border"
          ></input>
          <div className="flex w-full mt-[20px]">
            <div className="min-w-[120px] text-[18px] flex items-center">
              유저 이름{" "}
              <Image src="/polygon.svg" alt="" width={18} height={18} />
            </div>

            <div className="min-w-[200px] text-[18px] flex items-center">
              유저 닉네임
              <Image src="/polygon.svg" alt="" width={18} height={18} />
            </div>
            <div className="min-w-[370px] text-[18px] flex items-center">
              유저 이메일
              <Image src="/polygon.svg" alt="" width={18} height={18} />
            </div>
            <div className="min-w-[200px] text-[18px] flex items-center">
              유저 연락처
              <Image src="/polygon.svg" alt="" width={18} height={18} />
            </div>
            <div className="min-w-[80px] text-[18px] flex items-center">
              가입 일자
              <Image src="/polygon.svg" alt="" width={18} height={18} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
