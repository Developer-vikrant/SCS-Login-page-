"use client"

import { VerificationForm } from "@/components/verification-form"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock, CheckCircle2, Headset, MessageSquare, PhoneCall } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleVerify = async (data: { name: string; contact: string; email: string }) => {
    setIsSubmitting(true)
    try {
      // Simulate API call for identity verification
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Identity Verified",
        description: "Welcome to Smart Support. Redirecting to dashboard...",
      })

      // Redirect to landing page after successful verification
      setTimeout(() => {
        router.push("/dashboard")
      }, 1500)
    } catch (error) {
      toast({
        title: "Verification Failed",
        description: "Please check your details and try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f4f8ff] via-white to-[#f4f8ff]">

     {/* LEFT side icons */}
<div className="hidden lg:block absolute left-12 inset-y-0">
  {/* top */}
  <Headset
    size={38}
    className="absolute top-[20%] opacity-60 transition-all duration-200 hover:scale-110"
  />
  {/* center */}
  <MessageSquare
    size={38}
    className="absolute top-1/2 -translate-y-1/2 opacity-60 transition-all duration-200 hover:scale-110"
  />
  {/* bottom */}
  <PhoneCall
    size={38}
    className="absolute bottom-[20%] opacity-60 transition-all duration-200 hover:scale-110"
  />
</div>

{/* RIGHT side icons */}
<div className="hidden lg:block absolute right-12 inset-y-0">
  {/* top */}
  <Headset
    size={38}
    className="absolute top-[20%] opacity-60 transition-all duration-200 hover:scale-110"
  />
  {/* center */}
  <MessageSquare
    size={38}
    className="absolute top-1/2 -translate-y-1/2 opacity-60 transition-all duration-200 hover:scale-110"
  />
  {/* bottom */}
  <PhoneCall
    size={38}
    className="absolute bottom-[20%] opacity-60 transition-all duration-200 hover:scale-110"
  />
</div>




      <div className="w-full h-full max-w-7xl mx-auto px-4">
        {/* Desktop Layout: Two-column split */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-stretch lg:min-h-screen">
          {/* Left Section: Full Image */}
          <div className="flex items-center justify-center h-full overflow-hidden rounded-2xl border-2 border-gray-200">
            <img
              src="/customer-support-verification.jpg"
              alt="Smart Support verification"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section: Header + Form + Footer */}
          <div className="flex flex-col justify-between h-full py-4">
            <div className="space-y-6">
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-full"
                style={{ backgroundColor: "rgb(46, 125, 50)" }}
              >
                <Lock className="w-6 h-6 text-white" />
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl font-bold" style={{ color: "rgb(46, 125, 50)" }}>
                  Verify Your Identity
                </h1>
                <p className="text-base text-gray-600 leading-relaxed max-w-md">
                  We're here to assist you and ensure you get the right solution as quickly as possible.
                </p>
              </div>
            </div>

            {/* Form Card */}
            <VerificationForm onSubmit={handleVerify} isLoading={isSubmitting} />

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "rgb(46, 125, 50)" }} />
                <span className="text-sm text-gray-600">Your information is secure and encrypted</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "rgb(46, 125, 50)" }} />
                <span className="text-sm text-gray-600">Fast and seamless verification process</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "rgb(46, 125, 50)" }} />
                <span className="text-sm text-gray-600">24/7 customer support available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout: Stacked */}
        <div className="lg:hidden flex flex-col gap-8">
          {/* Header */}
          <div className="space-y-4">
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-full"
              style={{ backgroundColor: "rgb(46, 125, 50)" }}
            >
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold" style={{ color: "rgb(46, 125, 50)" }}>
                Verify Your Identity
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed">
                We're here to assist you and ensure you get the right solution as quickly as possible.
              </p>
            </div>
          </div>

          {/* Image Container */}
          <div className="aspect-video bg-gray-100 rounded-2xl border-2 border-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src="/customer-support-verification.jpg"
              alt="Smart Support verification"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form Card */}
          <VerificationForm onSubmit={handleVerify} isLoading={isSubmitting} />

          {/* Footer with trust indicators */}
          <div className="space-y-3 pb-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "rgb(46, 125, 50)" }} />
              <span className="text-sm text-gray-600">Your information is secure and encrypted</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "rgb(46, 125, 50)" }} />
              <span className="text-sm text-gray-600">Fast and seamless verification process</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "rgb(46, 125, 50)" }} />
              <span className="text-sm text-gray-600">24/7 customer support available</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
