import Image from "next/image";
import Layout from "./_components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="h-screen w-screen bg-white">
        <div className="flex flex-col items-center box-border">
          <Image
            src="/icon/logo.png"
            alt="logo"
            width={279}
            height={270}
            className="mt-[120px]"
          ></Image>
          <Input
            placeholder="Enter loginID"
            label="아이디(이메일)"
            className="mt-[105px]"
          />
          <Input
            placeholder="Enter Password"
            label="패스워드"
            className="mt-[24px]"
          />
          <div className="flex flex-row items-center justify-center mt-[132px] mb-[241px]">
            <Image src="/image/lock.png" alt="" width={21} height={21}></Image>
            <TextButton text="아이디 찾기"></TextButton>
            <TextButton text="비밀번호 찾기"></TextButton>
          </div>
        </div>
      </div>
    </Layout>
  );
}
