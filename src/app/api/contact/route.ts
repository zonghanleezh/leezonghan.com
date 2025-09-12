import { NextResponse } from "next/server"
import { Resend } from "resend"

import EmailTemplate from "@/components/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, emailAddress, message } = body

    const { data } = await resend.emails.send({
      from: "send@notifications.leezonghan.com",
      to: "zonghanleezh@gmail.com",
      subject: `New Lead from leezonghan.com`,
      react: EmailTemplate({
        fullName,
        emailAddress,
        message
      })
    })

    if (data) console.log("New lead contacted: ", { fullName, emailAddress })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
