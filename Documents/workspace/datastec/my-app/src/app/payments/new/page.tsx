"use client";
import Sidebar from "../../../../components/sidebar";
import * as PortOne from "@portone/browser-sdk/v2";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState<PortOne.PaymentResponse>();
  function requestIssueBillingKey() {
    PortOne.requestIssueBillingKey({
      storeId: "store-69495fa9-ae7b-4570-b992-afeb15a42f08",
      channelKey: "channel-key-44a409b7-6198-4e9d-b733-84237b21cd53",
      billingKeyMethod: "CARD",
      redirectUrl: "http://localhost:3000/addcard/result/",
    });
  }
  return (
    <main className="items-center h-screen justify-start lg:flex-row lg:items-start p-4">
      <Sidebar />
      <button onClick={requestIssueBillingKey}>결제</button>
    </main>
  );
}
