import { fetchAuthUserAction } from "@/actions"

export default async function Home() {
  const currentUser = await fetchAuthUserAction()
  console.log(currentUser)

  return (
    <div>
      <h1>NextJs Authentication</h1>
      <h2>{currentUser?.data.userName}</h2>
      <p>{currentUser?.data.email}</p>
    </div>
  )
}
