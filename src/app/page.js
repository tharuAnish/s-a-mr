import { fetchAuthUserAction } from "@/actions"
import Logout from "@/components/log-out"
import { redirect } from "next/navigation"

export default async function Home() {
  const currentUser = await fetchAuthUserAction()
  console.log(currentUser)

  if (!currentUser?.success) redirect("/sign-in")

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          NextJs Authentication
        </h1>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-gray-700">
            {currentUser?.data.userName}
          </h2>
          <p className="text-gray-500">{currentUser?.data.email}</p>
        </div>
        <div className="mt-6">
          <Logout />
        </div>
      </div>
    </div>
  )
}
