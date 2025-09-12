"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { sendEmail } from "@/lib/sendEmail"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const LandingContactFormSchema = z.object({
  fullName: z.string().min(1, "Please enter your name."),
  emailAddress: z
    .email("Please provide a valid email address.")
    .min(1, "An email address is required to get in touch."),
  message: z
    .string()
    .min(20, "Please tell me a little more about your project or opportunity.")
})

type LandingContactFormSchemaType = z.infer<typeof LandingContactFormSchema>

const FIELD_CLASSES = "text-sm font-medium"

const LandingContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<LandingContactFormSchemaType>({
    resolver: zodResolver(LandingContactFormSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      message: ""
    }
  })

  const onSubmit = async (data: LandingContactFormSchemaType) => {
    setIsSubmitting(true)

    try {
      await sendEmail(data)
      toast.success("Thanks for reaching out! I'll get back to you soon.")
      form.reset()
    } catch (error) {
      toast.error("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 font-medium">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="How may I address you?"
                  className={FIELD_CLASSES}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Where can I reach you?"
                  className={FIELD_CLASSES}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about your project, idea, or opportunity!"
                  className={FIELD_CLASSES}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="bg-zinc-800">
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  )
}

export default LandingContactForm
