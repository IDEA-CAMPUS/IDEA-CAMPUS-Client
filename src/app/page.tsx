"use client";
import Image from "next/image";
import Layout from "./_components/layout/Layout";
import { Input } from "./_components/components/inputbox";
import { NextButton, TextButton } from "./_components/components/buttons";
import { useEffect, useState } from "react";

export default function Home() {
  // const [findID, setFindID] = useState(false);
  const [page, setPage] = useState("returnPW");

  useEffect(() => {
    window.scrollTo();
  }, [page]);

  switch (page) {
    case "":
      return (
        // <Layout>
        <div className="max- h-fit-content bg-white ">
          <div className="flex flex-col items-center box-border justify-evenly">
            <Image
              src="/icon/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="mt-[30px]"
            ></Image>
            <Input
              placeholder="이메일 주소를 입력해주세요"
              label="아이디(이메일)"
            />
            <Input
              placeholder="영문, 숫자 포함 8~16자"
              label="패스워드"
              className="mt-[24px]"
            />
            <NextButton
              text="로그인"
              className="mt-[64px] bg-blue-400"
              onClick={() => setPage("returnID")}
            ></NextButton>
            <div className="flex flex-row items-center justify-center mt-[102px] mb-[168px]">
              <Image
                src="/image/lock.png"
                alt=""
                width={21}
                height={21}
              ></Image>
              <TextButton
                text="아이디 찾기"
                onClick={() => setPage("findID")}
              ></TextButton>
              <TextButton
                text="비밀번호 찾기"
                onClick={() => setPage("findPW")}
              ></TextButton>
            </div>
          </div>
        </div>
        // </Layout>
      );

    case "findID":
      return (
        <div className="h-screen  bg-white">
          <div className="h-fit-content items-center flex flex-col justify-evenly box-border">
            <div className="text-center text-[36px] mt-[100px]">
              아이디 찾기
            </div>
            <Input
              placeholder=""
              label="가입하신 이름을 입력해주세요."
              className="mt-[24px]"
            />
            <Input
              placeholder=""
              label="가입하신 전화번호를 입력해주세요."
              className="mt-[24px]"
            />
            <NextButton
              text="다음"
              className="mt-[64px]"
              onClick={() => setPage("returnID")}
            ></NextButton>
            <div className="flex flex-row items-center justify-center mt-[50px]">
              <Image
                src="/image/lock.png"
                alt=""
                width={21}
                height={21}
                className="mr-[5px]"
              ></Image>

              <TextButton
                text="비밀번호를 잊으셨나요?"
                onClick={() => setPage("findPW")}
              ></TextButton>
            </div>
          </div>
        </div>
      );

    case "findPW":
      return (
        <div className="h-screen  bg-white">
          <div className="h-fit-content items-center flex flex-col justify-center box-border">
            <div className="text-center text-[36px] mt-[100px]">
              비밀번호 찾기
            </div>
            <Input
              placeholder=""
              label="가입하신 이름을 입력해주세요."
              className="mt-[105px]"
            />
            <Input
              placeholder=""
              label="가입하신 전화번호를 입력해주세요."
              className="mt-[24px]"
            />
            <NextButton
              text="다음"
              className="mt-[64px]"
              onClick={() => setPage("returnPW")}
            ></NextButton>
          </div>
        </div>
      );

    case "returnID":
      return (
        <div className="h-screen  bg-white">
          <div className="h-fit-content items-center flex flex-col justify-center box-border">
            <div className="text-center text-[36px] mt-[100px]">
              아이디 찾기
            </div>
            <div className="mt-[102px]">가입하신 아이디를 찾아왔어요!</div>
            <div className="text-[36px] mt-[30px]">abc8@naver.com</div>
            <div className="flex flex-row items-center justify-center max-h-[21px] mt-[45px] mb-[67px]">
              <Image
                src="/image/lock.png"
                alt=""
                width={21}
                height={21}
                className="mr-[5px]"
              ></Image>

              <TextButton
                text="비밀번호를 잊으셨나요?"
                onClick={() => setPage("findPW")}
              ></TextButton>
            </div>
            <NextButton
              text="로그인하러 가기"
              onClick={() => setPage("")}
            ></NextButton>
          </div>
        </div>
      );

    case "returnPW":
      return (
        <div className="h-screen  bg-white">
          <div className="h-fit-content items-center flex flex-col justify-center box-border">
            <div className="text-center text-[36px] mt-[100px]">
              비밀번호 재설정을 위한 메일을 보냈어요
            </div>
            <div className="mt-[102px] mb-[100px] max-w-[420px] text-center">
              가입하신 이메일로 비밀번호 재설정 링크를 보내드렸어요 링크를 통해
              비밀번호를 재설정하신 후 로그인 해주세요
            </div>

            <NextButton
              text="로그인하러 가기"
              onClick={() => setPage("")}
            ></NextButton>
          </div>
        </div>
      );
  }
}
