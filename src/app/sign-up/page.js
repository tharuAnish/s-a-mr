"use client"

import { useState } from "react"

import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { initialSignupFormData, userRegestrationFormControls } from "../utils"
import CommonFormElement from "@/components/form-element/page"

export default function SignUp() {
  const [signupFormData, setSignupFormdata] = useState(initialSignupFormData)
  console.log(signupFormData)
  return (
    <div>
      <h1>Regestration</h1>
      <Form>
        {userRegestrationFormControls.map((controlItem) => (
          <div key={controlItem.name}>
            <Label>{controlItem.label}</Label>
            <CommonFormElement
              value={signupFormData[controlItem.name]}
              currentItem={controlItem}
              onChange={(event) =>
                setSignupFormdata({
                  ...signupFormData,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </div>
        ))}
      </Form>
    </div>
  )
}
