"use server"

import connectToDB from "@/database"
import User from "@/models"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

// Register User Action

export async function registerUserAction(formData) {
  await connectToDB()
  try {
    const { userName, email, password } = formData

    const checkUser = await User.findOne({ email })
    console.log(checkUser)
    if (checkUser) {
      return {
        success: false,
        message: "User already exists ! Please try with different email",
      }
    }

    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)

    const newlyCreatedUser = new User({
      userName,
      email,
      password: hashedPassword,
    })

    const savedUser = await newlyCreatedUser.save()

    if (savedUser) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(savedUser)),
      }
    } else {
      return {
        success: false,
        message: "Something went wrong! Please try again",
      }
    }
  } catch (error) {
    console.log(error)
    return {
      message: "Something error occured",
      success: false,
    }
  }
}
