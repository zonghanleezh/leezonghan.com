"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { PRICING_DATA } from "@/lib/data/pricing.data"
import { TIMELINE_DATA } from "@/lib/data/timeline.data"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const LandingContactFormSchema = z.object({
  fullName: z.string().min(1, "Please enter your name."),
  emailAddress: z
    .email("Please provide a valid email address.")
    .min(1, "An email address is required to get in touch."),
  serviceInterest: z.string().min(1, "Please select a service."),
  budgetRange: z.string().min(1, "Please select a budget range."),
  timeline: z.string().min(1, "Please select a timeline."),
  message: z
    .string()
    .min(20, "Please tell me a little more about your project or opportunity.")
})

type LandingContactFormSchemaType = z.infer<typeof LandingContactFormSchema>

const FIELD_CLASSES = "text-sm font-medium w-full"

const LandingContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<LandingContactFormSchemaType>({
    resolver: zodResolver(LandingContactFormSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      serviceInterest: "",
      budgetRange: "",
      timeline: "",
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
        className="flex flex-col gap-4 font-medium">
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
          name="serviceInterest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What service are you interested in?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className={FIELD_CLASSES}>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="landing-page">
                    Landing Page / Website
                  </SelectItem>
                  <SelectItem value="blog-cms">Blog with CMS</SelectItem>
                  <SelectItem value="ecommerce">
                    E-commerce / Online Store
                  </SelectItem>
                  <SelectItem value="seo">SEO Optimisation</SelectItem>
                  <SelectItem value="multiple">Multiple Services</SelectItem>
                  <SelectItem value="not-sure">
                    Not sure - let&apos;s discuss
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="budgetRange"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budget Range</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className={FIELD_CLASSES}>
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {PRICING_DATA.map((item) => (
                    <SelectItem key={item.slug} value={item.slug}>
                      {item.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="timeline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>When do you need this?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className={FIELD_CLASSES}>
                    <SelectValue placeholder="Select your timeline" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {TIMELINE_DATA.map((item) => (
                    <SelectItem key={item.slug} value={item.slug}>
                      {item.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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

        <Button
          className="w-full bg-primary md:ml-auto md:w-fit"
          disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  )
}

export default LandingContactForm
