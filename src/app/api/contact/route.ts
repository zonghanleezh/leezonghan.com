import { NextResponse } from "next/server"
import { Resend } from "resend"

import EmailTemplate from "@/components/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      fullName,
      emailAddress,
      serviceInterest,
      budgetRange,
      timeline,
      message
    } = body

    const { data } = await resend.emails.send({
      from: "send@notifications.leezonghan.com",
      to: "zonghanleezh@gmail.com",
      subject: `New Lead from leezonghan.com - ${serviceInterest}`,
      react: EmailTemplate({
        fullName,
        emailAddress,
        serviceInterest,
        budgetRange,
        timeline,
        message
      })
    })

    if (data)
      console.log("New lead contacted: ", {
        fullName,
        emailAddress,
        serviceInterest
      })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
