import Image from "next/image";

//flex bg-gray-100 rounded-lg p-2 text-xs font-bold flex-row mx-1
export default function Home() {
  return (
    <main className="m-auto flex min-h-screen max-w-[445px] flex-col bg-white">
      <div className="h-80 bg-gray-300 rounded-b-section-radius">
        <div className="flex flex-row justify-between p-6">
          <div className="bg-white w-10 h-10 rounded-full"></div>
          <div className="bg-white w-10 h-10 rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-row justify-center p-10">
        <h1 className="font-bold text-3xl text-black">지혁</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-center">
          <div className="flex flex-row justify-center h-60 w-[375px] rounded-3xl border-2 pt-2 ">
            <div className="h-40 w-[360px] rounded-3xl bg-gray-500"></div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="h-20 w-[375px] rounded-3xl border-2"></div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="h-20 w-[375px] rounded-3xl border-2"></div>
        </div>
      </div>
    </main>
  );
}
