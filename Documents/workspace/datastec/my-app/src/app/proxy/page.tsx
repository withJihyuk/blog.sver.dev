import Sidebar from "../../../components/sidebar";

export default function Home() {
  return (
    <main className="items-center h-screen justify-start lg:flex-row lg:items-start p-4">
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="flex justify-between gap-4 items-center w-auto">
          <div className="text-3xl font-bold p-4">Proxy LIST</div>
          <a
            href="https://google.com"
            className="w-[150px] h-9 bg-zinc-800 rounded-[10px] text-white text-center p-1"
          >
            만들기
          </a>
        </div>
        <table className="w-full text-center table-auto bg-gray-300 h-full">
          <thead>
            <tr>
              <th>이름</th>
              <th>상태</th>
              <th>플랜</th>
              <th>사용량</th>
              <th>설명</th>
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
