import { AddVisitor } from "@/components/AddVisitor";
import { API_URL } from "@/config/apiUrl";
import { prisma } from "@/utils/prisma";

// async function getVisitorData() {
//   const res = await fetch(`http://localhost:3000/api/v1/visitor`, {
//     cache: "no-cache",
//   });
//   return res.json();
// }

async function getVisitorData(){
return prisma.visitor.findMany();
}

export default async function Home() {
  // const [visitors] = await Promise.all([getVisitorData()]);
const visitors = await getVisitorData();
  return (
    <div className="p-4 w-full flex flex-col md:flex-row items-start max-w-7xl mx-auto md:space-x-8">
      <div className="flex flex-col items-center space-y-4 w-full md:w-[70%]">
        <AddVisitor />
        Jumlah Pengunjung {visitors.length}
      </div>
      <div className="hidden w-[30%] md:flex flex-col space-y-8">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-green-500 my-2">
            Pengunjung Terakhir
          </h1>
          <div className="flex flex-col space-y-3">
            {visitors.slice(0, 6).map((visitor, index) => (
              <div key={index} className="bg-green-100 rounded-2xl p-3">
                <h3 className="text-green-600 font-bold text-sm">
                  {visitor.nama} - {visitor.kelas}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
