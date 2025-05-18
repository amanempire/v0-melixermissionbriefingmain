"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

const SignupForm = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    skills: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Your application has been submitted. We'll be in touch soon.",
      })
      setIsSubmitting(false)
      setFormData({
        name: "",
        email: "",
        role: "",
        skills: "",
      })
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="card-glass p-6 rounded-lg space-y-4 md:p-8">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-white/10 bg-white/5 focus:border-melixer-purple"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-white/10 bg-white/5 focus:border-melixer-purple"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Select
            value={formData.role}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, role: value }))}
            required
          >
            <SelectTrigger className="border-white/10 bg-white/5 focus:border-melixer-purple">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="founder">Founder with an idea</SelectItem>
              <SelectItem value="contributor">Contributor with skills</SelectItem>
              <SelectItem value="investor">Investor</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="skills">Skills or Idea (brief)</Label>
          <Input
            id="skills"
            name="skills"
            placeholder="Describe your skills or idea briefly"
            value={formData.skills}
            onChange={handleChange}
            required
            className="border-white/10 bg-white/5 focus:border-melixer-purple"
          />
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient hover:opacity-90 mt-4">
          {isSubmitting ? "Submitting..." : "Apply for Beta Access"}
        </Button>
      </div>
    </form>
  )
}

export default SignupForm
