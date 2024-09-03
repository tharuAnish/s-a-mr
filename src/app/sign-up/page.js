"use client"

import { Label } from "@/components/ui/label"
import { initialSignUpFormData, userRegistrationFormControls } from "../utils"
import CommonFormElement from "@/components/form-element/page"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { registerUserAction } from "@/actions"
import { useRouter } from "next/navigation"
import Link from "next/link"

function SignUp() {
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData)
  const router = useRouter()

  function handleSignUpBtnValid() {
    return Object.keys(signUpFormData).every(
      (key) => signUpFormData[key].trim() !== ""
    )
  }

  async function handleSignUp() {
    const result = await registerUserAction(signUpFormData)
    console.log(result)

    if (result?.data) router.push("/sign-in")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Registration</h1>
        <form action={handleSignUp}>
          {userRegistrationFormControls.map((controlItem) => (
            <div key={controlItem.name}>
              <Label>{controlItem.label}</Label>
              <CommonFormElement
                value={signUpFormData[controlItem.name]}
                currentItem={controlItem}
                onChange={(event) =>
                  setSignUpFormData({
                    ...signUpFormData,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            </div>
          ))}
          <Button
            disabled={!handleSignUpBtnValid()}
            className="disabled:opacity-65 mt-6"
            type="submit"
          >
            Sign Up
          </Button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-blue-500 hover:underline">
            Try Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
