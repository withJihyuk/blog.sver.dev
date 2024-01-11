import Sidebar from "../../../../../components/sidebar";

export default function Home() {
  return (
    <main className="items-center h-screen justify-start lg:flex-row lg:items-start p-4">
      <Sidebar />
      <div className="p-4 sm:ml-64 ">
        <div className="w-full text-center bg-gray-100 h-full">
          <div className="flex flex-cols justify-between">
            <div className="flex flex-cols p-3 items-center">
              <div className="w-5 h-5 bg-green-600 rounded-full" />
              <h1 className="ml-4 font-bold text-2xl">VM Details</h1>
            </div>
            <div className="flex flex-cols p-4 space-x-2 items-start">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3V12M18.3611 5.64001C19.6195 6.8988 20.4764 8.50246 20.8234 10.2482C21.1704 11.994 20.992 13.8034 20.3107 15.4478C19.6295 17.0921 18.4759 18.4976 16.9959 19.4864C15.5159 20.4752 13.776 21.0029 11.9961 21.0029C10.2162 21.0029 8.47625 20.4752 6.99627 19.4864C5.51629 18.4976 4.36274 17.0921 3.68146 15.4478C3.00019 13.8034 2.82179 11.994 3.16882 10.2482C3.51584 8.50246 4.37272 6.8988 5.6311 5.64001"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-cols ml-3 text-gray-500 text-start pb-3">
            1.1.1.1
            <br />
            2GB | 32GB | 1vCPU
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-2">
          <div className="w-full text-center bg-gray-100 h-full flex flex-cols p-4">
            <h1 className="ml-4 font-bold text-2xl">CPU</h1>
          </div>
          <div className="w-full text-center bg-gray-100 h-full flex flex-cols p-4">
            <h1 className="ml-4 font-bold text-2xl">Memory</h1>
          </div>
          <div className="w-full text-center bg-gray-100 h-full flex flex-cols p-4 md:col-span-2">
            <h1 className="ml-4 font-bold text-2xl">Network</h1>
          </div>
        </div>
      </div>
      +
    </main>
  );
}
