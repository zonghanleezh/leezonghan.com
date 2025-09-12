interface ContactFormData {
  fullName: string
  emailAddress: string
  message: string
}

export const sendEmail = async (data: ContactFormData) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error("Failed to send message.")
  }

  return response.json()
}
