"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

interface FormData {
  name: string
  email: string
  business: string
}

interface FormErrors {
  name?: string
  email?: string
  business?: string
}

export default function StrategySessionForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    business: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.business.trim()) {
      newErrors.business = "Business description is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      business: "",
    })
    setErrors({})
    setSubmitStatus("idle")
    setSubmitMessage("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("business", formData.business)

      const response = await fetch("https://formspree.io/f/mnnvwykz", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitStatus("success")
        setSubmitMessage("Thank you! Your strategy session request has been submitted successfully. We'll be in touch within 24 hours.")
        setTimeout(() => {
          resetForm()
        }, 5000)
      } else {
        throw new Error("Submission failed")
      }
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("Sorry, there was an error submitting your request. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white/80 backdrop-blur-md border border-stone-900 rounded-3xl p-8 shadow-2xl shadow-pink-500/10">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Strategy Session</h3>

      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="mb-6 p-6 bg-green-50 border border-green-200 rounded-xl animate-pulse">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
              <Check className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-green-800 font-semibold text-lg">Successfully Submitted!</div>
              <div className="text-green-700 text-sm">{submitMessage}</div>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-red-800 font-medium">{submitMessage}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-white/60 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 ${
              errors.name ? "border-red-300" : "border-white/40"
            }`}
            placeholder="Enter your full name"
            required
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-white/60 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 ${
              errors.email ? "border-red-300" : "border-white/40"
            }`}
            placeholder="Enter your email address"
            required
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
            Business Description *
          </label>
          <textarea
            id="business"
            name="business"
            value={formData.business}
            onChange={handleInputChange}
            rows={4}
            className={`w-full px-4 py-3 bg-white/60 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none ${
              errors.business ? "border-red-300" : "border-white/40"
            }`}
            placeholder="Tell us about your business, challenges, and growth goals"
            required
          />
          {errors.business && (
            <p className="mt-1 text-sm text-red-600">{errors.business}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full font-semibold py-4 px-6 rounded-none border transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 ${
            submitStatus === "success"
              ? "bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600 shadow-emerald-500/25"
              : "bg-[#b31334] hover:bg-[#a0122f] text-white border-[#b31334] hover:border-[#a0122f] shadow-[#b31334]/25 hover:shadow-xl"
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Submitting...</span>
            </>
          ) : submitStatus === "success" ? (
            <>
              <Check className="w-5 h-5" />
              <span>Submitted Successfully!</span>
            </>
          ) : (
            <>
              <span>Get My Free Strategy Session</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  )
} 