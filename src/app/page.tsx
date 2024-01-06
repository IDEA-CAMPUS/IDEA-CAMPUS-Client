"use client";
import Image from "next/image";
import { Input } from "./_components/components/inputbox";
import { NextButton, TextButton } from "./_components/components/buttons";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  // const [findID, setFindID] = useState(false);
  const [page, setPage] = useState("");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [name, setName] = useState<string>("");

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo();
  }, [page]);

  switch (page) {
    case "":
      const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // if (formRight){
        //     if (router) {
        //       router.push("/banner/IdeaManage");
        //     }
        // }else{
        //   폼리셋
        //   토스트 띄우기
        // }

        //pull 하기
      };
      return (
        <div className="h-screen bg-white flex justify-center items-center">
          <div className="flex flex-col items-center box-border justify-evenly">
            <Image
              src="/Logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="mb-[105px]"
            ></Image>

            <form onSubmit={handleLogin}>
              <Input
                type="email"
                placeholder="이메일 주소를 입력해주세요"
                label="아이디(이메일)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="영문, 숫자 포함 8~16자"
                label="패스워드"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-[24px]"
              />
              <NextButton
                text="로그인"
                className="mt-[42px] bg-blue-500"
                textColor="text-white"
                type="submit"
              ></NextButton>
            </form>

            <div className="flex flex-row items-center justify-center mt-[41px]">
              <Image
                src="/image/lock.png"
                alt=""
                width={21}
                height={21}
                className="mr-[5px]"
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
      );

    case "findID":
      const handleFindID = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //api 받아와서 저장
        //   if(nameWrong){
        //     에러메시지토스트
        //   }else if(numberWrong){
        //     에러메시지토스트
        //   }else{
        //     onClick={() => setPage("returnID")}
        //   }
      };
      return (
        <div className="h-screen  bg-white flex justify-center items-center">
          <div className="items-center flex flex-col justify-evenly box-border">
            <div className="text-center text-[36px]">아이디 찾기</div>
            <form onSubmit={handleFindID}>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="가입하신 이름을 입력해주세요."
                className="mt-[102px]"
              />
              <Input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                label="가입하신 전화번호를 입력해주세요."
                className="mt-[24px]"
              />
              <NextButton
                text="다음"
                className="mt-[64px] bg-gray-200"
                onClick={() => setPage("returnID")}
                //api작업시 온클릭 삭제
                type="submit"
              ></NextButton>
            </form>
            <div className="flex flex-row items-center justify-center mt-[78px]">
              <Image
                src="/image/lock.png"
                alt=""
                width={21}
                height={21}
                className="mr-[10px]"
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
      const handleFindPW = () => {
        //api 받아옴
        //   if(emailWrong){
        //     에러메시지토스트
        //   }else if(numberWrong){
        //     에러메시지토스트
        //   }else{
        //     onClick={() => setPage("returnPW")}
        //     sendEmail
        //   }
      };
      return (
        <div className="h-screen  bg-white flex justify-center items-center">
          <div className="items-center flex flex-col justify-center box-border">
            <div className="text-center text-[36px]">비밀번호 찾기</div>
            <form onSubmit={handleFindPW}>
              <Input
                value={email}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                label="가입하신 이메일을 입력해주세요."
                className="mt-[102px]"
              />
              <Input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                label="가입하신 전화번호를 입력해주세요."
                className="mt-[24px]"
              />
              <NextButton
                text="다음"
                type="submit"
                className="mt-[78px] bg-gray-200"
                onClick={() => setPage("returnPW")}
                //api작업시 onClick삭제
              ></NextButton>
            </form>
          </div>
        </div>
      );

    case "returnID":
      return (
        <div className="h-screen bg-white flex justify-center items-center">
          <div className="items-center flex flex-col justify-center box-border ">
            <div className="text-center text-[36px]">아이디 찾기</div>
            <div className="mt-[102px]">가입하신 아이디를 찾아왔어요!</div>
            <div className="text-[36px] mt-[30px]">{email}</div>
            <div className="flex flex-row items-center justify-center max-h-[21px] mt-[45px] mb-[67px]">
              <Image
                src="/image/lock.png"
                alt=""
                width={21}
                height={21}
                className="mr-[10px]"
              ></Image>

              <TextButton
                text="비밀번호를 잊으셨나요?"
                onClick={() => setPage("findPW")}
              ></TextButton>
            </div>
            <NextButton
              text="로그인하러 가기"
              onClick={() => setPage("")}
              className="bg-gray-200"
            ></NextButton>
          </div>
        </div>
      );

    case "returnPW":
      return (
        <div className="h-screen  bg-white flex justify-center items-center">
          <div className="items-center flex flex-col justify-center box-border">
            <div className="text-center text-[36px] ">
              비밀번호 재설정을 위한 메일을 보냈어요
            </div>
            <div className="mt-[78px] mb-[127px] max-w-[420px] text-center">
              가입하신 이메일로 비밀번호 재설정 링크를 보내드렸어요 링크를 통해
              비밀번호를 재설정하신 후 로그인 해주세요
            </div>
            <NextButton
              text="로그인하러 가기"
              onClick={() => setPage("")}
              className="bg-gray-200"
            ></NextButton>
          </div>
        </div>
      );
  }
}
