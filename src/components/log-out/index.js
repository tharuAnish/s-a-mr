"use client"

import { logoutAction } from "@/actions"
import { Button } from "../ui/button"

export default function Logout() {
  async function handleLogout() {
    await logoutAction()
  }

  return <Button onClick={handleLogout}>Logout</Button>
}
