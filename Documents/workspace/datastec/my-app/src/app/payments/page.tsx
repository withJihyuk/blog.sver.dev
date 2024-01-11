"use client";
import Sidebar from "../../../components/sidebar";
import * as PortOne from "@portone/browser-sdk/v2";
export default function Home() {
  function requestIssueBillingKey() {
    try {
      const response: any = PortOne.requestIssueBillingKey({
        storeId: "store-69495fa9-ae7b-4570-b992-afeb15a42f08",
        channelKey: "channel-key-44a409b7-6198-4e9d-b733-84237b21cd53",
        billingKeyMethod: "CARD",
        redirectUrl: "http://localhost:3000/addcard/result/",
      });
      if (response.code != null) {
        return alert(response.message);
      }
      console.log(response.billingKey);
    } catch (error) {
      // 빌링키 발급 실패
    }
  }
  return (
    <main className="items-center h-screen justify-start lg:flex-row lg:items-start p-4">
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="flex justify-between gap-4 items-center w-auto">
          <div className="text-3xl font-bold p-4">Payments LIST</div>
          <button
            onClick={requestIssueBillingKey}
            className="w-[150px] h-9 bg-zinc-800 rounded-[10px] text-white text-center p-1"
          >
            등록하기
          </button>
        </div>
        <table className="w-full text-center table-auto bg-gray-300 h-full">
          <thead>
            <tr>
              <th>이름</th>
              <th>등록일</th>
              <th>청구 가격</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-gray-200">마크서버</td>
              <td className="bg-gray-200">활성</td>
              <td className="bg-gray-200">Intel Pro</td>
              <td className="bg-gray-200">2024/01/01</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
