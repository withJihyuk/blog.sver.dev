"use client";
import { useState } from "react";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav>
      <div className="flex justify-between items-end p-4">
        <button
          onClick={toggleSidebar}
          className="inline-flex items-center text-sm text-gray-500 rounded-lg sm:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <div />
        <div className="w-[30px] h-[30px] bg-zinc-300 rounded-full" />
      </div>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 bg-zinc-800 dark:bg-gray-800 flex flex-col justify-between w-full">
          <ul className="space-y-2 font-medium">
            <button
              onClick={closeSidebar}
              className=" items-center mt-2 ms-3 text-sm text-white rounded-lg sm:hidden "
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a href="/">
              <h1 className="text-white text-3xl text-center font-bold p-5">
                DATASTEC
              </h1>
            </a>
            <hr className="border-gray-600" />

            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  width="19"
                  height="24"
                  viewBox="0 0 19 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M4.75 18C4.51513 18 4.28554 18.0704 4.09026 18.2022C3.89498 18.3341 3.74277 18.5215 3.65289 18.7408C3.56301 18.9601 3.5395 19.2013 3.58532 19.4341C3.63114 19.6669 3.74424 19.8807 3.91031 20.0485C4.07639 20.2164 4.28798 20.3306 4.51833 20.3769C4.74868 20.4232 4.98745 20.3995 5.20444 20.3087C5.42142 20.2178 5.60689 20.064 5.73737 19.8667C5.86785 19.6693 5.9375 19.4373 5.9375 19.2C5.9375 18.8817 5.81239 18.5765 5.58969 18.3515C5.36699 18.1264 5.06494 18 4.75 18ZM4.75 10.8C4.51513 10.8 4.28554 10.8704 4.09026 11.0022C3.89498 11.1341 3.74277 11.3215 3.65289 11.5408C3.56301 11.7601 3.5395 12.0013 3.58532 12.2341C3.63114 12.4669 3.74424 12.6807 3.91031 12.8485C4.07639 13.0164 4.28798 13.1306 4.51833 13.1769C4.74868 13.2232 4.98745 13.1995 5.20444 13.1087C5.42142 13.0178 5.60689 12.864 5.73737 12.6667C5.86785 12.4693 5.9375 12.2373 5.9375 12C5.9375 11.6817 5.81239 11.3765 5.58969 11.1515C5.36699 10.9264 5.06494 10.8 4.75 10.8ZM4.75 3.6C4.51513 3.6 4.28554 3.67038 4.09026 3.80224C3.89498 3.93409 3.74277 4.12151 3.65289 4.34078C3.56301 4.56005 3.5395 4.80133 3.58532 5.03411C3.63114 5.26689 3.74424 5.48071 3.91031 5.64853C4.07639 5.81635 4.28798 5.93064 4.51833 5.97694C4.74868 6.02324 4.98745 5.99948 5.20444 5.90866C5.42142 5.81783 5.60689 5.66402 5.73737 5.46668C5.86785 5.26935 5.9375 5.03734 5.9375 4.8C5.9375 4.48174 5.81239 4.17652 5.58969 3.95147C5.36699 3.72643 5.06494 3.6 4.75 3.6ZM19 3.6C19 2.64522 18.6247 1.72955 17.9566 1.05442C17.2885 0.379285 16.3823 0 15.4375 0H3.5625C2.61767 0 1.71153 0.379285 1.04343 1.05442C0.375334 1.72955 0 2.64522 0 3.6V6C0.0052376 6.88807 0.335126 7.74284 0.92625 8.4C0.335126 9.05717 0.0052376 9.91193 0 10.8V13.2C0.0052376 14.0881 0.335126 14.9428 0.92625 15.6C0.335126 16.2572 0.0052376 17.1119 0 18V20.4C0 21.3548 0.375334 22.2705 1.04343 22.9456C1.71153 23.6207 2.61767 24 3.5625 24H15.4375C16.3823 24 17.2885 23.6207 17.9566 22.9456C18.6247 22.2705 19 21.3548 19 20.4V18C18.9948 17.1119 18.6649 16.2572 18.0737 15.6C18.6649 14.9428 18.9948 14.0881 19 13.2V10.8C18.9948 9.91193 18.6649 9.05717 18.0737 8.4C18.6649 7.74284 18.9948 6.88807 19 6V3.6ZM16.625 20.4C16.625 20.7183 16.4999 21.0235 16.2772 21.2485C16.0545 21.4736 15.7524 21.6 15.4375 21.6H3.5625C3.24756 21.6 2.94551 21.4736 2.72281 21.2485C2.50011 21.0235 2.375 20.7183 2.375 20.4V18C2.375 17.6817 2.50011 17.3765 2.72281 17.1515C2.94551 16.9264 3.24756 16.8 3.5625 16.8H15.4375C15.7524 16.8 16.0545 16.9264 16.2772 17.1515C16.4999 17.3765 16.625 17.6817 16.625 18V20.4ZM16.625 13.2C16.625 13.5183 16.4999 13.8235 16.2772 14.0485C16.0545 14.2736 15.7524 14.4 15.4375 14.4H3.5625C3.24756 14.4 2.94551 14.2736 2.72281 14.0485C2.50011 13.8235 2.375 13.5183 2.375 13.2V10.8C2.375 10.4817 2.50011 10.1765 2.72281 9.95147C2.94551 9.72643 3.24756 9.6 3.5625 9.6H15.4375C15.7524 9.6 16.0545 9.72643 16.2772 9.95147C16.4999 10.1765 16.625 10.4817 16.625 10.8V13.2ZM16.625 6C16.625 6.31826 16.4999 6.62348 16.2772 6.84853C16.0545 7.07357 15.7524 7.2 15.4375 7.2H3.5625C3.24756 7.2 2.94551 7.07357 2.72281 6.84853C2.50011 6.62348 2.375 6.31826 2.375 6V3.6C2.375 3.28174 2.50011 2.97652 2.72281 2.75147C2.94551 2.52643 3.24756 2.4 3.5625 2.4H15.4375C15.7524 2.4 16.0545 2.52643 16.2772 2.75147C16.4999 2.97652 16.625 3.28174 16.625 3.6V6Z"
                    fill="white"
                  />
                </svg>
                <span className="flex-1 ms-3 text-white hover:text-black">
                  VM 관리하기
                </span>
              </a>
            </li>
            <li>
              <a
                href="/storage"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M21.3627 5.70827C20.5673 3.80182 19.1949 2.22038 17.4561 1.2064C15.7172 0.192431 13.7079 -0.198101 11.736 0.0946876C9.76422 0.387476 7.93879 1.34742 6.53964 2.82734C5.14049 4.30727 4.24485 6.22548 3.99003 8.28787C2.75026 8.59786 1.6627 9.37243 0.933874 10.4645C0.20505 11.5566 -0.114275 12.89 0.0365383 14.2117C0.187352 15.5334 0.797801 16.7513 1.75196 17.634C2.70612 18.5167 3.93753 19.0028 5.21236 19H19.5162C21.0757 18.9955 22.5818 18.4058 23.7597 17.3386C24.9376 16.2713 25.7088 14.7975 25.9327 13.186C26.1565 11.5745 25.8181 9.93273 24.9792 8.56003C24.1403 7.18733 22.8567 6.17521 21.3627 5.70827ZM19.5162 16.2846H5.21236C4.52261 16.2846 3.86111 15.9985 3.37339 15.4893C2.88566 14.9801 2.61166 14.2894 2.61166 13.5693C2.61166 12.8491 2.88566 12.1584 3.37339 11.6492C3.86111 11.14 4.52261 10.8539 5.21236 10.8539C5.55723 10.8539 5.88798 10.7108 6.13184 10.4562C6.3757 10.2016 6.5127 9.85629 6.5127 9.4962C6.51602 7.89044 7.06442 6.3379 8.06046 5.11439C9.05651 3.89089 10.4357 3.07565 11.953 2.81352C13.4703 2.55138 15.0275 2.85931 16.348 3.68262C17.6684 4.50592 18.6665 5.79128 19.1651 7.31034C19.2414 7.54111 19.3758 7.74614 19.5543 7.90383C19.7328 8.06153 19.9487 8.16605 20.1793 8.20641C21.1325 8.39004 21.986 8.93756 22.5737 9.74231C23.1614 10.5471 23.441 11.5514 23.3583 12.5597C23.2755 13.568 22.8362 14.508 22.1259 15.1966C21.4157 15.8852 20.4853 16.273 19.5162 16.2846Z"
                    fill="white"
                  />
                </svg>

                <span className="flex-1 ms-2.5 text-white hover:text-black">
                  스토리지 서버
                </span>
              </a>
            </li>
            <li>
              <a
                href="/proxy"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M1.07143 13.0625C0.787268 13.0625 0.514746 13.1876 0.313814 13.4103C0.112883 13.633 0 13.9351 0 14.25V17.8125C0 18.1274 0.112883 18.4295 0.313814 18.6522C0.514746 18.8749 0.787268 19 1.07143 19C1.35559 19 1.62811 18.8749 1.82904 18.6522C2.02997 18.4295 2.14286 18.1274 2.14286 17.8125V14.25C2.14286 13.9351 2.02997 13.633 1.82904 13.4103C1.62811 13.1876 1.35559 13.0625 1.07143 13.0625ZM5.35714 9.5C5.07298 9.5 4.80046 9.62511 4.59953 9.84781C4.3986 10.0705 4.28571 10.3726 4.28571 10.6875V17.8125C4.28571 18.1274 4.3986 18.4295 4.59953 18.6522C4.80046 18.8749 5.07298 19 5.35714 19C5.6413 19 5.91383 18.8749 6.11476 18.6522C6.31569 18.4295 6.42857 18.1274 6.42857 17.8125V10.6875C6.42857 10.3726 6.31569 10.0705 6.11476 9.84781C5.91383 9.62511 5.6413 9.5 5.35714 9.5ZM13.9286 0C13.6444 0 13.3719 0.125111 13.171 0.347811C12.97 0.57051 12.8571 0.872555 12.8571 1.1875V17.8125C12.8571 18.1274 12.97 18.4295 13.171 18.6522C13.3719 18.8749 13.6444 19 13.9286 19C14.2127 19 14.4853 18.8749 14.6862 18.6522C14.8871 18.4295 15 18.1274 15 17.8125V1.1875C15 0.872555 14.8871 0.57051 14.6862 0.347811C14.4853 0.125111 14.2127 0 13.9286 0ZM9.64286 4.75C9.3587 4.75 9.08617 4.87511 8.88524 5.09781C8.68431 5.32051 8.57143 5.62256 8.57143 5.9375V17.8125C8.57143 18.1274 8.68431 18.4295 8.88524 18.6522C9.08617 18.8749 9.3587 19 9.64286 19C9.92702 19 10.1995 18.8749 10.4005 18.6522C10.6014 18.4295 10.7143 18.1274 10.7143 17.8125V5.9375C10.7143 5.62256 10.6014 5.32051 10.4005 5.09781C10.1995 4.87511 9.92702 4.75 9.64286 4.75Z"
                    fill="white"
                  />
                </svg>
                <span className="flex-1 ms-4 text-white hover:text-black">
                  프록시 서버
                </span>
              </a>
            </li>
            <li>
              <a
                href="/image"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.1645 19.9977 17.3284 19.981 17.49 19.95L17.79 19.88H17.86H17.91L18.28 19.74L18.41 19.67C18.51 19.61 18.62 19.56 18.72 19.49C18.8535 19.3918 18.9805 19.2849 19.1 19.17L19.17 19.08C19.2682 18.9805 19.3585 18.8735 19.44 18.76L19.53 18.63C19.5998 18.5187 19.6601 18.4016 19.71 18.28C19.7374 18.232 19.7609 18.1818 19.78 18.13C19.83 18.01 19.86 17.88 19.9 17.75V17.6C19.9567 17.4046 19.9903 17.2032 20 17V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM3 18C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V12.69L5.29 9.39C5.38296 9.29627 5.49356 9.22188 5.61542 9.17111C5.73728 9.12034 5.86799 9.0942 6 9.0942C6.13201 9.0942 6.26272 9.12034 6.38458 9.17111C6.50644 9.22188 6.61704 9.29627 6.71 9.39L15.31 18H3ZM18 17C17.9991 17.1233 17.9753 17.2453 17.93 17.36C17.9071 17.4087 17.8804 17.4556 17.85 17.5C17.8232 17.5423 17.7931 17.5825 17.76 17.62L12.41 12.27L13.29 11.39C13.383 11.2963 13.4936 11.2219 13.6154 11.1711C13.7373 11.1203 13.868 11.0942 14 11.0942C14.132 11.0942 14.2627 11.1203 14.3846 11.1711C14.5064 11.2219 14.617 11.2963 14.71 11.39L18 14.69V17ZM18 11.86L16.12 10C15.5477 9.45699 14.7889 9.15428 14 9.15428C13.2111 9.15428 12.4523 9.45699 11.88 10L11 10.88L8.12 8C7.54772 7.45699 6.7889 7.15428 6 7.15428C5.2111 7.15428 4.45228 7.45699 3.88 8L2 9.86V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V11.86Z"
                    fill="white"
                  />
                </svg>
                <span className="flex-1 ms-3 text-white hover:text-black">
                  이미지 호스팅
                </span>
              </a>
            </li>
            <hr className="border-gray-600" />

            <li>
              <a
                href="/payments"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M3 8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V16C21 17.6569 19.6569 19 18 19H6C4.34315 19 3 17.6569 3 16V8Z"
                      stroke="#ffffff"
                      stroke-width="2"
                    />
                    <path d="M3 10H21" stroke="#ffffff" stroke-width="2" />
                    <path
                      d="M14 15L17 15"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
                <span className="flex-1 ms-3 text-white hover:text-black">
                  결제내역
                </span>
              </a>
            </li>
            <li>
              <a
                href="/account"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.7 14C10.623 14 9.74999 13.1046 9.74999 12C9.74999 10.8954 10.623 10 11.7 10C12.7769 10 13.65 10.8954 13.65 12C13.65 12.5304 13.4445 13.0391 13.0789 13.4142C12.7132 13.7893 12.2172 14 11.7 14Z"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.8841 16.063V14.721C16.8841 14.3887 17.0128 14.07 17.2419 13.835L18.1672 12.886C18.6443 12.3967 18.6443 11.6033 18.1672 11.114L17.2419 10.165C17.0128 9.93001 16.8841 9.61131 16.8841 9.27899V7.93599C16.8841 7.24398 16.3371 6.68299 15.6624 6.68299H14.353C14.029 6.68299 13.7182 6.55097 13.4891 6.31599L12.5638 5.36699C12.0867 4.87767 11.3132 4.87767 10.8361 5.36699L9.91087 6.31599C9.68176 6.55097 9.37102 6.68299 9.04702 6.68299H7.73759C7.41341 6.68299 7.10253 6.81514 6.87339 7.05034C6.64425 7.28554 6.51566 7.6045 6.51592 7.93699V9.27899C6.51591 9.61131 6.3872 9.93001 6.15809 10.165L5.23282 11.114C4.75573 11.6033 4.75573 12.3967 5.23282 12.886L6.15809 13.835C6.3872 14.07 6.51591 14.3887 6.51592 14.721V16.063C6.51592 16.755 7.06288 17.316 7.73759 17.316H9.04702C9.37102 17.316 9.68176 17.448 9.91087 17.683L10.8361 18.632C11.3132 19.1213 12.0867 19.1213 12.5638 18.632L13.4891 17.683C13.7182 17.448 14.029 17.316 14.353 17.316H15.6614C15.9856 17.3163 16.2966 17.1844 16.5259 16.9493C16.7552 16.7143 16.8841 16.3955 16.8841 16.063Z"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
                <span className="flex-1 ms-3 text-white hover:text-black">
                  계정 설정
                </span>
              </a>
            </li>
          </ul>
          <div className="px-2">
            <p className="text-xs text-white">© 2023 DATASTEC Inc.</p>
            <p className="text-xs text-white">
              Made by
              <a className="text-blue-400" href="https://github.com/sverdev">
                &nbsp;sverdev
              </a>
            </p>
          </div>
        </div>
      </aside>
    </nav>
  );
}