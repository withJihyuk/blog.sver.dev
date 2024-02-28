import Image from "next/image";
import userImg from "@/public/user.svg";
import groupCircles from "@/public/groupCircles.svg";
import mic from "@/public/mic.svg";
import riot from "@/public/riot.svg";
import infomation from "@/public/infomation.svg";
import Sentinel from "@/public/Sentinel.svg";
import tier from "@/public/tier.svg";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center pt-40">
        <Image className="pb-3" src={userImg} alt="user" />
        <h1 className="text-white text-2xl font-bold">
          우리집에 고양이 보러갈래
        </h1>
        <h1 className="text-zinc-400 text-2xl font-bold">#그릉그릉</h1>
        <div className="flex flex-row pt-2">
          <div className="flex bg-gray-100 rounded-lg p-2 text-xs font-bold flex-row mx-1">
            <Image src={groupCircles} alt="group" className="mx-1" />
            친구를 찾고 있어요
          </div>
          <div className="flex bg-gray-100 rounded-lg p-2 text-xs font-bold flex-row mx-1 ">
            마이크를 사용해요
            <Image src={mic} alt="mic" className="mx-1" />
          </div>
        </div>
        <Image src={riot} alt="riot" className="pt-20" />

        <div className="w-96 h-72 bg-box rounded-lg mt-10">
          <div className="flex flex-row text-white text-xl font-bold p-4">
            <Image src={infomation} alt="riot" className="mx-3" />
            정보
          </div>
          <div className="overflow-hidden rounded-section-radius pl-10 pt-3">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-start justify-between">
                <h1 className="font-bold uppercase text-text">나이</h1>
                <h1 className="font-bold text-white">18살</h1>
              </div>
              <div className="flex flex-col items-start justify-between">
                <h1 className="font-bold uppercase text-text">접속시간</h1>
                <h1 className="font-bold text-white">새벽</h1>
              </div>
              <div className="flex flex-col items-start justify-between">
                <h1 className="font-bold uppercase text-text">티어</h1>
                <h1 className="font-bold text-white">레디언트</h1>
              </div>
              <div className="flex flex-col items-start justify-between">
                <h1 className="font-bold uppercase text-text">게임모드</h1>
                <h1 className="font-bold text-white">경쟁/일반</h1>
              </div>
              <div className="flex flex-col items-start justify-between">
                <h1 className="font-bold uppercase text-text">성별</h1>
                <h1 className="font-bold text-white">남자</h1>
              </div>
              <div className="flex flex-col items-start justify-between">
                <h1 className="font-bold uppercase text-text">마이크</h1>
                <h1 className="font-bold text-white">사용</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 h-64 bg-box rounded-lg mt-5">
          <div className="flex flex-row text-white text-xl font-bold p-4">
            <Image src={infomation} alt="riot" className="mx-3" />
            캐릭터
          </div>
          <div className="overflow-hidden rounded-section-radius pl-10 pt-3">
            <div className="grid grid-cols-2 gap-y-10">
              <div className="flex flex-row">
                <Image src={Sentinel} alt="Sentinel" className="mr-3" />
                <div>
                  <h1 className="font-bold text-xl uppercase text-white">
                    감시자
                  </h1>
                  <h1 className="font-bold text-sm text-text">사이퍼</h1>
                </div>
              </div>
              <div className="flex flex-row">
                <Image src={Sentinel} alt="Sentinel" className="mr-3" />
                <div>
                  <h1 className="font-bold text-xl uppercase text-white">
                    감시자
                  </h1>
                  <h1 className="font-bold text-sm text-text">사이퍼</h1>
                </div>
              </div>
              <div className="flex flex-row">
                <Image src={Sentinel} alt="Sentinel" className="mr-3" />
                <div>
                  <h1 className="font-bold text-xl uppercase text-white">
                    감시자
                  </h1>
                  <h1 className="font-bold text-sm text-text">사이퍼</h1>
                </div>
              </div>
              <div className="flex flex-row">
                <Image src={Sentinel} alt="Sentinel" className="mr-3" />
                <div>
                  <h1 className="font-bold text-xl uppercase text-white">
                    감시자
                  </h1>
                  <h1 className="font-bold text-sm text-text">사이퍼</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 h-60 bg-box rounded-lg mt-5">
          <div className="flex flex-row text-white text-xl font-bold p-4">
            <Image src={infomation} alt="riot" className="mx-3" />
            티어
          </div>
          <div className="overflow-hidden rounded-section-radius pl-20 pt-3">
            <div className="flex flex-row items-center">
              <Image src={tier} alt="Sentinel" className="mr-3" />
              <div>
                <h1 className="font-bold text-xl uppercase text-white">
                  레디언트
                </h1>
                <h1 className="font-bold text-sm text-text">K/D 비율3</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 h-60 bg-box rounded-lg mt-5">
          <div className="flex flex-row text-white text-xl font-bold p-4">
            <Image src={infomation} alt="riot" className="mx-3" />
            연락처
          </div>
          <div className="overflow-hidden rounded-section-radius pl-10 pt-3">
            <div className="grid grid-cols-1 w-44 gap-y-2 items-center">
              <div className="flex bg-social rounded-lg p-2 text-xs flex-row gap-5 items-center">
                <Image src={riot} alt="riot" />
                <h1 className="text-white">|</h1>
                <h1 className="font-bold text-xl text-white">jihy._.k</h1>
              </div>
              <div className="flex bg-social rounded-lg p-2 text-xs flex-row gap-5 items-center">
                <Image src={riot} alt="riot" />
                <h1 className="text-white">|</h1>
                <h1 className="font-bold text-xl text-white">jihy._.k</h1>
              </div>
              <div className="flex bg-social rounded-lg p-2 text-xs flex-row gap-5 items-center">
                <Image src={riot} alt="riot" />
                <h1 className="text-white">|</h1>
                <h1 className="font-bold text-xl text-white">jihy._.k</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
