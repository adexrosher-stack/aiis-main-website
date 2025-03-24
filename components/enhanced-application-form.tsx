"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, CircleDashed, ArrowRight, ArrowLeft } from "lucide-react"

export function EnhancedApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      address: "",
      city: "",
      country: "",
      emergencyContact: {
        name: "",
        relationship: "",
        phone: "",
      },
    },
    academicInfo: {
      program: "",
      startDate: "",
      studyMode: "",
      previousEducation: [
        {
          institution: "",
          degree: "",
          fieldOfStudy: "",
          graduationYear: "",
          gpa: "",
        },
      ],
    },
    background: {
      statement: "",
      ministry: "",
      referenceChurch: "",
      referenceAcademic: "",
      referencePersonal: "",
    },
    documents: {
      transcripts: false,
      recommendations: false,
      statement: false,
      identification: false,
      photo: false,
    },
    agreement: {
      termsAgreed: false,
      infoCorrect: false,
    },
  })

  const updatePersonalInfo = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }))
  }

  const updateEmergencyContact = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        emergencyContact: {
          ...prev.personalInfo.emergencyContact,
          [field]: value,
        },
      },
    }))
  }

  const updateAcademicInfo = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      academicInfo: {
        ...prev.academicInfo,
        [field]: value,
      },
    }))
  }

  const updatePreviousEducation = (index: number, field: string, value: string) => {
    setFormData((prev) => {
      const newEducation = [...prev.academicInfo.previousEducation]
      newEducation[index] = {
        ...newEducation[index],
        [field]: value,
      }
      return {
        ...prev,
        academicInfo: {
          ...prev.academicInfo,
          previousEducation: newEducation,
        },
      }
    })
  }

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      academicInfo: {
        ...prev.academicInfo,
        previousEducation: [
          ...prev.academicInfo.previousEducation,
          {
            institution: "",
            degree: "",
            fieldOfStudy: "",
            graduationYear: "",
            gpa: "",
          },
        ],
      },
    }))
  }

  const removeEducation = (index: number) => {
    if (formData.academicInfo.previousEducation.length > 1) {
      setFormData((prev) => {
        const newEducation = [...prev.academicInfo.previousEducation]
        newEducation.splice(index, 1)
        return {
          ...prev,
          academicInfo: {
            ...prev.academicInfo,
            previousEducation: newEducation,
          },
        }
      })
    }
  }

  const updateBackground = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      background: {
        ...prev.background,
        [field]: value,
      },
    }))
  }

  const updateDocuments = (field: string, value: boolean) => {
    setFormData((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [field]: value,
      },
    }))
  }

  const updateAgreement = (field: string, value: boolean) => {
    setFormData((prev) => ({
      ...prev,
      agreement: {
        ...prev.agreement,
        [field]: value,
      },
    }))
  }

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const isPersonalInfoComplete = () => {
    const { firstName, lastName, email, phone, dateOfBirth, gender, nationality } = formData.personalInfo
    return firstName && lastName && email && phone && dateOfBirth && gender && nationality
  }

  const isAcademicInfoComplete = () => {
    const { program, startDate, studyMode } = formData.academicInfo
    const firstEducation = formData.academicInfo.previousEducation[0]
    return program && startDate && studyMode && firstEducation.institution && firstEducation.degree
  }

  const isBackgroundComplete = () => {
    const { statement, ministry, referenceChurch } = formData.background
    return statement && ministry && referenceChurch
  }

  const isDocumentsComplete = () => {
    return Object.values(formData.documents).some((value) => value)
  }

  const isAgreementComplete = () => {
    return formData.agreement.termsAgreed && formData.agreement.infoCorrect
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would submit the form data to your backend
    alert("Application submitted successfully! We will contact you soon.")
  }

  return (
    <Card className="border-none shadow-xl">
      <CardContent className="p-0">
        <div className="bg-slate-50 dark:bg-slate-900 p-6">
          <div className="flex justify-between mb-8">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                }`}
              >
                {currentStep > 1 ? <CheckCircle className="h-5 w-5" /> : 1}
              </div>
              <span className="text-xs mt-2">Personal</span>
            </div>
            <div className="flex-1 flex items-center mx-2">
              <div className={`h-1 w-full ${currentStep > 1 ? "bg-primary" : "bg-muted"}`}></div>
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 2 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                }`}
              >
                {currentStep > 2 ? <CheckCircle className="h-5 w-5" /> : 2}
              </div>
              <span className="text-xs mt-2">Academic</span>
            </div>
            <div className="flex-1 flex items-center mx-2">
              <div className={`h-1 w-full ${currentStep > 2 ? "bg-primary" : "bg-muted"}`}></div>
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 3 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                }`}
              >
                {currentStep > 3 ? <CheckCircle className="h-5 w-5" /> : 3}
              </div>
              <span className="text-xs mt-2">Background</span>
            </div>
            <div className="flex-1 flex items-center mx-2">
              <div className={`h-1 w-full ${currentStep > 3 ? "bg-primary" : "bg-muted"}`}></div>
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 4 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                }`}
              >
                {currentStep > 4 ? <CheckCircle className="h-5 w-5" /> : 4}
              </div>
              <span className="text-xs mt-2">Documents</span>
            </div>
            <div className="flex-1 flex items-center mx-2">
              <div className={`h-1 w-full ${currentStep > 4 ? "bg-primary" : "bg-muted"}`}></div>
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 5 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                }`}
              >
                5
              </div>
              <span className="text-xs mt-2">Review</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          {currentStep === 1 && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-medium">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.personalInfo.firstName}
                      onChange={(e) => updatePersonalInfo("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-medium">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.personalInfo.lastName}
                      onChange={(e) => updatePersonalInfo("lastName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-medium">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.personalInfo.email}
                      onChange={(e) => updatePersonalInfo("email", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-medium">
                      Phone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      value={formData.personalInfo.phone}
                      onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth" className="font-medium">
                      Date of Birth <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.personalInfo.dateOfBirth}
                      onChange={(e) => updatePersonalInfo("dateOfBirth", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-medium">
                      Gender <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup
                      value={formData.personalInfo.gender}
                      onValueChange={(value) => updatePersonalInfo("gender", value)}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nationality" className="font-medium">
                      Nationality <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="nationality"
                      value={formData.personalInfo.nationality}
                      onChange={(e) => updatePersonalInfo("nationality", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Address Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address" className="font-medium">
                      Street Address
                    </Label>
                    <Input
                      id="address"
                      value={formData.personalInfo.address}
                      onChange={(e) => updatePersonalInfo("address", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="font-medium">
                      City
                    </Label>
                    <Input
                      id="city"
                      value={formData.personalInfo.city}
                      onChange={(e) => updatePersonalInfo("city", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country" className="font-medium">
                      Country
                    </Label>
                    <Input
                      id="country"
                      value={formData.personalInfo.country}
                      onChange={(e) => updatePersonalInfo("country", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Emergency Contact</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyName" className="font-medium">
                      Contact Name
                    </Label>
                    <Input
                      id="emergencyName"
                      value={formData.personalInfo.emergencyContact.name}
                      onChange={(e) => updateEmergencyContact("name", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyRelationship" className="font-medium">
                      Relationship
                    </Label>
                    <Input
                      id="emergencyRelationship"
                      value={formData.personalInfo.emergencyContact.relationship}
                      onChange={(e) => updateEmergencyContact("relationship", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone" className="font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="emergencyPhone"
                      value={formData.personalInfo.emergencyContact.phone}
                      onChange={(e) => updateEmergencyContact("phone", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Academic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="program" className="font-medium">
                      Program of Interest <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.academicInfo.program}
                      onValueChange={(value) => updateAcademicInfo("program", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bth">Bachelor of Theology (BTh)</SelectItem>
                        <SelectItem value="dipth">Diploma in Theology (DipTh)</SelectItem>
                        <SelectItem value="mdiv">Master of Divinity (MDiv)</SelectItem>
                        <SelectItem value="mth">Master of Theology (MTh)</SelectItem>
                        <SelectItem value="mthps">MTh in Practical Studies</SelectItem>
                        <SelectItem value="macp">MA in Counseling Psychology</SelectItem>
                        <SelectItem value="maol">MA in Organizational Leadership</SelectItem>
                        <SelectItem value="phd">Doctor of Philosophy (PhD)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="startDate" className="font-medium">
                      Desired Start Date <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.academicInfo.startDate}
                      onValueChange={(value) => updateAcademicInfo("startDate", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a start date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fall2023">Fall 2023</SelectItem>
                        <SelectItem value="spring2024">Spring 2024</SelectItem>
                        <SelectItem value="fall2024">Fall 2024</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-medium">
                      Study Mode <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup
                      value={formData.academicInfo.studyMode}
                      onValueChange={(value) => updateAcademicInfo("studyMode", value)}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fulltime" id="fulltime" />
                        <Label htmlFor="fulltime">Full-time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="parttime" id="parttime" />
                        <Label htmlFor="parttime">Part-time</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Previous Education</h4>
                {formData.academicInfo.previousEducation.map((education, index) => (
                  <div key={index} className="mb-8 p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h5 className="font-medium">Education #{index + 1}</h5>
                      {index > 0 && (
                        <Button type="button" variant="outline" size="sm" onClick={() => removeEducation(index)}>
                          Remove
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor={`institution-${index}`} className="font-medium">
                          Institution Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id={`institution-${index}`}
                          value={education.institution}
                          onChange={(e) => updatePreviousEducation(index, "institution", e.target.value)}
                          required={index === 0}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`degree-${index}`} className="font-medium">
                          Degree/Certificate <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id={`degree-${index}`}
                          value={education.degree}
                          onChange={(e) => updatePreviousEducation(index, "degree", e.target.value)}
                          required={index === 0}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`field-${index}`} className="font-medium">
                          Field of Study
                        </Label>
                        <Input
                          id={`field-${index}`}
                          value={education.fieldOfStudy}
                          onChange={(e) => updatePreviousEducation(index, "fieldOfStudy", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`year-${index}`} className="font-medium">
                          Graduation Year
                        </Label>
                        <Input
                          id={`year-${index}`}
                          value={education.graduationYear}
                          onChange={(e) => updatePreviousEducation(index, "graduationYear", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`gpa-${index}`} className="font-medium">
                          GPA/Grade
                        </Label>
                        <Input
                          id={`gpa-${index}`}
                          value={education.gpa}
                          onChange={(e) => updatePreviousEducation(index, "gpa", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addEducation} className="mt-2">
                  + Add Another Education
                </Button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Background Information</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="statement" className="font-medium">
                      Personal Statement <span className="text-red-500">*</span>
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Please describe your spiritual journey, academic goals, and why you are interested in studying at
                      AIIS. (300-500 words)
                    </p>
                    <Textarea
                      id="statement"
                      value={formData.background.statement}
                      onChange={(e) => updateBackground("statement", e.target.value)}
                      className="min-h-[200px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ministry" className="font-medium">
                      Ministry Experience <span className="text-red-500">*</span>
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Please describe your ministry experience, if any. Include roles, responsibilities, and duration.
                    </p>
                    <Textarea
                      id="ministry"
                      value={formData.background.ministry}
                      onChange={(e) => updateBackground("ministry", e.target.value)}
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">References</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Please provide contact information for your references. We will contact them directly.
                </p>

                <div className="space-y-6">
                  <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h5 className="font-medium mb-4">
                      Church/Ministry Reference <span className="text-red-500">*</span>
                    </h5>
                    <Input
                      placeholder="Full name, position, email, and phone number"
                      value={formData.background.referenceChurch}
                      onChange={(e) => updateBackground("referenceChurch", e.target.value)}
                      required
                    />
                  </div>

                  <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h5 className="font-medium mb-4">Academic Reference</h5>
                    <Input
                      placeholder="Full name, position, email, and phone number"
                      value={formData.background.referenceAcademic}
                      onChange={(e) => updateBackground("referenceAcademic", e.target.value)}
                    />
                  </div>

                  <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h5 className="font-medium mb-4">Personal Reference</h5>
                    <Input
                      placeholder="Full name, relationship, email, and phone number"
                      value={formData.background.referencePersonal}
                      onChange={(e) => updateBackground("referencePersonal", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Required Documents</h3>
                <p className="text-muted-foreground mb-6">
                  Please check the documents you have ready to submit. You can proceed with your application now and
                  upload these documents later, but your application will not be reviewed until all required documents
                  are received.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="transcripts"
                      checked={formData.documents.transcripts}
                      onCheckedChange={(checked) => updateDocuments("transcripts", checked as boolean)}
                    />
                    <div>
                      <Label htmlFor="transcripts" className="font-medium">
                        Official Transcripts
                      </Label>
                      <p className="text-sm text-muted-foreground">Sealed transcripts from all previous institutions</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="recommendations"
                      checked={formData.documents.recommendations}
                      onCheckedChange={(checked) => updateDocuments("recommendations", checked as boolean)}
                    />
                    <div>
                      <Label htmlFor="recommendations" className="font-medium">
                        Letters of Recommendation
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        2-3 letters from academic or professional references
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="statement"
                      checked={formData.documents.statement}
                      onCheckedChange={(checked) => updateDocuments("statement", checked as boolean)}
                    />
                    <div>
                      <Label htmlFor="statement" className="font-medium">
                        Personal Statement
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Essay describing your academic goals and background
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="identification"
                      checked={formData.documents.identification}
                      onCheckedChange={(checked) => updateDocuments("identification", checked as boolean)}
                    />
                    <div>
                      <Label htmlFor="identification" className="font-medium">
                        Government-Issued ID
                      </Label>
                      <p className="text-sm text-muted-foreground">Copy of passport or national ID card</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="photo"
                      checked={formData.documents.photo}
                      onCheckedChange={(checked) => updateDocuments("photo", checked as boolean)}
                    />
                    <div>
                      <Label htmlFor="photo" className="font-medium">
                        Passport-Sized Photo
                      </Label>
                      <p className="text-sm text-muted-foreground">Recent passport-sized photograph</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg mt-8">
                  <h4 className="font-semibold mb-4">Document Submission Instructions</h4>
                  <p className="text-sm mb-4">
                    After submitting your application, you will receive an email with instructions on how to upload your
                    documents through our secure portal. Alternatively, you can mail physical copies to our admissions
                    office.
                  </p>
                  <p className="text-sm font-medium">Mailing Address:</p>
                  <p className="text-sm">
                    Admissions Office
                    <br />
                    African Institute for International Studies
                    <br />
                    P.O. Box 24211
                    <br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Review Your Application</h3>
                <p className="text-muted-foreground mb-6">
                  Please review your application information carefully before submitting. You can go back to previous
                  sections to make changes if needed.
                </p>

                <div className="space-y-8">
                  <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary mb-4">Personal Information</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p>
                          {formData.personalInfo.firstName} {formData.personalInfo.lastName}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p>{formData.personalInfo.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p>{formData.personalInfo.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Date of Birth</p>
                        <p>{formData.personalInfo.dateOfBirth}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Gender</p>
                        <p className="capitalize">{formData.personalInfo.gender}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Nationality</p>
                        <p>{formData.personalInfo.nationality}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary mb-4">Academic Information</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Program</p>
                        <p>
                          {formData.academicInfo.program === "bth"
                            ? "Bachelor of Theology"
                            : formData.academicInfo.program === "dipth"
                              ? "Diploma in Theology"
                              : formData.academicInfo.program === "mdiv"
                                ? "Master of Divinity"
                                : formData.academicInfo.program === "mth"
                                  ? "Master of Theology"
                                  : formData.academicInfo.program === "mthps"
                                    ? "MTh in Practical Studies"
                                    : formData.academicInfo.program === "macp"
                                      ? "MA in Counseling Psychology"
                                      : formData.academicInfo.program === "maol"
                                        ? "MA in Organizational Leadership"
                                        : formData.academicInfo.program === "phd"
                                          ? "Doctor of Philosophy"
                                          : ""}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Start Date</p>
                        <p>
                          {formData.academicInfo.startDate === "fall2023"
                            ? "Fall 2023"
                            : formData.academicInfo.startDate === "spring2024"
                              ? "Spring 2024"
                              : formData.academicInfo.startDate === "fall2024"
                                ? "Fall 2024"
                                : ""}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Study Mode</p>
                        <p className="capitalize">{formData.academicInfo.studyMode}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary mb-4">Documents</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        {formData.documents.transcripts ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <CircleDashed className="h-4 w-4 text-muted-foreground" />
                        )}
                        <p>Official Transcripts</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {formData.documents.recommendations ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <CircleDashed className="h-4 w-4 text-muted-foreground" />
                        )}
                        <p>Letters of Recommendation</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {formData.documents.statement ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <CircleDashed className="h-4 w-4 text-muted-foreground" />
                        )}
                        <p>Personal Statement</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {formData.documents.identification ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <CircleDashed className="h-4 w-4 text-muted-foreground" />
                        )}
                        <p>Government-Issued ID</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {formData.documents.photo ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <CircleDashed className="h-4 w-4 text-muted-foreground" />
                        )}
                        <p>Passport-Sized Photo</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="termsAgreed"
                      checked={formData.agreement.termsAgreed}
                      onCheckedChange={(checked) => updateAgreement("termsAgreed", checked as boolean)}
                      required
                    />
                    <div>
                      <Label htmlFor="termsAgreed" className="font-medium">
                        Terms and Conditions <span className="text-red-500">*</span>
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        I agree to the terms and conditions of AIIS and consent to the processing of my personal data
                        for admission purposes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="infoCorrect"
                      checked={formData.agreement.infoCorrect}
                      onCheckedChange={(checked) => updateAgreement("infoCorrect", checked as boolean)}
                      required
                    />
                    <div>
                      <Label htmlFor="infoCorrect" className="font-medium">
                        Information Accuracy <span className="text-red-500">*</span>
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        I certify that all information provided in this application is complete and accurate to the best
                        of my knowledge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-10 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" /> Previous
            </Button>

            {currentStep < 5 ? (
              <Button
                type="button"
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !isPersonalInfoComplete()) ||
                  (currentStep === 2 && !isAcademicInfoComplete()) ||
                  (currentStep === 3 && !isBackgroundComplete()) ||
                  (currentStep === 4 && !isDocumentsComplete())
                }
                className="flex items-center gap-2"
              >
                Next <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" disabled={!isAgreementComplete()} className="bg-primary hover:bg-primary/90">
                Submit Application
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

