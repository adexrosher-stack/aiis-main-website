"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, CircleDashed } from "lucide-react"

export function ApplicationProgress() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      dateOfBirth: "",
    },
    academicInfo: {
      program: "",
      startDate: "",
      previousDegree: "",
      institution: "",
      graduationYear: "",
    },
    documents: {
      transcripts: false,
      recommendations: false,
      statement: false,
      resume: false,
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

  const updateAcademicInfo = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      academicInfo: {
        ...prev.academicInfo,
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

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const isPersonalInfoComplete = () => {
    const { firstName, lastName, email, phone } = formData.personalInfo
    return firstName && lastName && email && phone
  }

  const isAcademicInfoComplete = () => {
    const { program, previousDegree, institution } = formData.academicInfo
    return program && previousDegree && institution
  }

  const isDocumentsComplete = () => {
    return Object.values(formData.documents).some((value) => value)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Application Process</CardTitle>
        <CardDescription>Complete your application in a few simple steps</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-8">
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                }`}
              >
                {currentStep > 1 ? <CheckCircle className="h-5 w-5" /> : 1}
              </div>
              <span className="text-sm mt-2">Personal Info</span>
            </div>
            <div className="flex-1 flex items-center mx-4">
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
              <span className="text-sm mt-2">Academic Info</span>
            </div>
            <div className="flex-1 flex items-center mx-4">
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
              <span className="text-sm mt-2">Documents</span>
            </div>
            <div className="flex-1 flex items-center mx-4">
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
              <span className="text-sm mt-2">Review</span>
            </div>
          </div>
        </div>

        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.personalInfo.firstName}
                  onChange={(e) => updatePersonalInfo("firstName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.personalInfo.lastName}
                  onChange={(e) => updatePersonalInfo("lastName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.personalInfo.email}
                  onChange={(e) => updatePersonalInfo("email", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={formData.personalInfo.phone}
                  onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={formData.personalInfo.address}
                  onChange={(e) => updatePersonalInfo("address", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={formData.personalInfo.city}
                  onChange={(e) => updatePersonalInfo("city", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  value={formData.personalInfo.country}
                  onChange={(e) => updatePersonalInfo("country", e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Academic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="program">Program of Interest</Label>
                <Select
                  value={formData.academicInfo.program}
                  onValueChange={(value) => updateAcademicInfo("program", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bth">Bachelor of Theology (BTh)</SelectItem>
                    <SelectItem value="mdiv">Master of Divinity (MDiv)</SelectItem>
                    <SelectItem value="mth">Master of Theology (MTh)</SelectItem>
                    <SelectItem value="phd">Doctor of Philosophy (PhD)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Desired Start Date</Label>
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
                <Label htmlFor="previousDegree">Previous Degree</Label>
                <Input
                  id="previousDegree"
                  value={formData.academicInfo.previousDegree}
                  onChange={(e) => updateAcademicInfo("previousDegree", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution">Institution</Label>
                <Input
                  id="institution"
                  value={formData.academicInfo.institution}
                  onChange={(e) => updateAcademicInfo("institution", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="graduationYear">Graduation Year</Label>
                <Input
                  id="graduationYear"
                  value={formData.academicInfo.graduationYear}
                  onChange={(e) => updateAcademicInfo("graduationYear", e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Required Documents</h3>
            <p className="text-muted-foreground">Please check the documents you have ready to submit:</p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="transcripts"
                  className="mt-1"
                  checked={formData.documents.transcripts}
                  onChange={(e) => updateDocuments("transcripts", e.target.checked)}
                />
                <div>
                  <Label htmlFor="transcripts" className="font-medium">
                    Official Transcripts
                  </Label>
                  <p className="text-sm text-muted-foreground">Sealed transcripts from all previous institutions</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="recommendations"
                  className="mt-1"
                  checked={formData.documents.recommendations}
                  onChange={(e) => updateDocuments("recommendations", e.target.checked)}
                />
                <div>
                  <Label htmlFor="recommendations" className="font-medium">
                    Letters of Recommendation
                  </Label>
                  <p className="text-sm text-muted-foreground">2-3 letters from academic or professional references</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="statement"
                  className="mt-1"
                  checked={formData.documents.statement}
                  onChange={(e) => updateDocuments("statement", e.target.checked)}
                />
                <div>
                  <Label htmlFor="statement" className="font-medium">
                    Personal Statement
                  </Label>
                  <p className="text-sm text-muted-foreground">Essay describing your academic goals and background</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="resume"
                  className="mt-1"
                  checked={formData.documents.resume}
                  onChange={(e) => updateDocuments("resume", e.target.checked)}
                />
                <div>
                  <Label htmlFor="resume" className="font-medium">
                    Resume/CV
                  </Label>
                  <p className="text-sm text-muted-foreground">Current resume or curriculum vitae</p>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-md">
              <p className="text-sm">
                Note: You can proceed with your application now and upload these documents later, but your application
                will not be reviewed until all required documents are received.
              </p>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Review Your Application</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-primary">Personal Information</h4>
                <div className="grid grid-cols-2 gap-4 mt-2">
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
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p>
                      {formData.personalInfo.city}, {formData.personalInfo.country}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-primary">Academic Information</h4>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Program</p>
                    <p>
                      {formData.academicInfo.program === "bth"
                        ? "Bachelor of Theology"
                        : formData.academicInfo.program === "mdiv"
                          ? "Master of Divinity"
                          : formData.academicInfo.program === "mth"
                            ? "Master of Theology"
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
                    <p className="text-sm text-muted-foreground">Previous Degree</p>
                    <p>{formData.academicInfo.previousDegree}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Institution</p>
                    <p>{formData.academicInfo.institution}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-primary">Documents</h4>
                <div className="grid grid-cols-2 gap-4 mt-2">
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
                    {formData.documents.resume ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <CircleDashed className="h-4 w-4 text-muted-foreground" />
                    )}
                    <p>Resume/CV</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-md">
              <p className="text-sm">
                Please review your application information carefully. Once submitted, you will receive a confirmation
                email with further instructions.
              </p>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
          Previous
        </Button>

        {currentStep < 4 ? (
          <Button
            onClick={nextStep}
            disabled={
              (currentStep === 1 && !isPersonalInfoComplete()) ||
              (currentStep === 2 && !isAcademicInfoComplete()) ||
              (currentStep === 3 && !isDocumentsComplete())
            }
          >
            Next
          </Button>
        ) : (
          <Button>Submit Application</Button>
        )}
      </CardFooter>
    </Card>
  )
}

