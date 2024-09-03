"use client"

import { Label } from "@/components/ui/label"
import { initialLoginFormData, userLoginFormControls } from "../utils"
import CommonFormElement from "@/components/form-element/page"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { loginUserAction } from "@/actions"
import { useRouter } from "next/navigation"
import Link from "next/link"

function SignIn() {
  const [signInFormData, setSignInFormData] = useState(initialLoginFormData)
  const router = useRouter()

  async function handleSignIn() {
    const result = await loginUserAction(signInFormData)
    console.log(result)
    if (result?.success) router.push("/")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Login</h1>
        <form action={handleSignIn}>
          {userLoginFormControls.map((controlItem) => (
            <div key={controlItem.name}>
              <Label>{controlItem.label}</Label>
              <CommonFormElement
                currentItem={controlItem}
                value={setSignInFormData[controlItem.name]}
                onChange={(event) =>
                  setSignInFormData({
                    ...signInFormData,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            </div>
          ))}
          <Button className="mt-6" type="submit">
            Sign In
          </Button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-blue-500 hover:underline">
            Try Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
