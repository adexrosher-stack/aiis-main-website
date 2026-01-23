"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    // ---- OTHER STEPS DATA (UNCHANGED) ----

    documents: {
      transcripts: {
        checked: false,
        file: null as File | null,
      },
      recommendations: {
        checked: false,
        file: null as File | null,
      },
      statement: {
        checked: false,
        file: null as File | null,
      },
      identification: {
        checked: true, // ✅ default checked
        file: null as File | null,
      },
      photo: {
        checked: true, // ✅ default checked
        file: null as File | null,
      },
    },

    agreement: {
      terms: false,
      honesty: false,
    },
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionSuccess, setSubmissionSuccess] = useState(false)

  // ---------------- DOCUMENT HANDLERS ----------------

  const updateDocumentCheck = (field: string, value: boolean) => {
    setFormData((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [field]: {
          ...prev.documents[field],
          checked: value,
        },
      },
    }))
  }

  const updateDocumentFile = (field: string, file: File | null) => {
    setFormData((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [field]: {
          ...prev.documents[field],
          file,
        },
      },
    }))
  }

  // ---------------- VALIDATION ----------------

  const isDocumentsComplete = () => {
    const { documents } = formData

    // Mandatory documents
    if (!documents.identification.file) return false
    if (!documents.photo.file) return false

    // At least one optional document
    const optionalUploaded = [
      documents.transcripts.file,
      documents.recommendations.file,
      documents.statement.file,
    ].some(Boolean)

    return optionalUploaded
  }

  const isAgreementComplete = () => {
    return formData.agreement.terms && formData.agreement.honesty
  }

  // ---------------- SUBMIT ----------------

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isDocumentsComplete() || !isAgreementComplete()) return

    setIsSubmitting(true)

    try {
      // submit logic unchanged
      setSubmissionSuccess(true)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // ---------------- UI ----------------

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* ================= DOCUMENTS STEP ================= */}

      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Supporting Documents</h3>

        {/* TRANSCRIPTS */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={formData.documents.transcripts.checked}
              onCheckedChange={(checked) =>
                updateDocumentCheck("transcripts", checked as boolean)
              }
            />
            <Label>Official Transcripts</Label>
          </div>

          {formData.documents.transcripts.checked && (
            <Input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) =>
                updateDocumentFile(
                  "transcripts",
                  e.target.files?.[0] || null
                )
              }
            />
          )}
        </div>

        {/* RECOMMENDATIONS */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={formData.documents.recommendations.checked}
              onCheckedChange={(checked) =>
                updateDocumentCheck("recommendations", checked as boolean)
              }
            />
            <Label>Letters of Recommendation</Label>
          </div>

          {formData.documents.recommendations.checked && (
            <Input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) =>
                updateDocumentFile(
                  "recommendations",
                  e.target.files?.[0] || null
                )
              }
            />
          )}
        </div>

        {/* PERSONAL STATEMENT */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={formData.documents.statement.checked}
              onCheckedChange={(checked) =>
                updateDocumentCheck("statement", checked as boolean)
              }
            />
            <Label>Personal Statement</Label>
          </div>

          {formData.documents.statement.checked && (
            <Input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) =>
                updateDocumentFile("statement", e.target.files?.[0] || null)
              }
            />
          )}
        </div>

        {/* GOVERNMENT ID (MANDATORY) */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox checked disabled />
            <Label>
              Government-Issued ID <span className="text-red-500">*</span>
            </Label>
          </div>

          <Input
            type="file"
            accept="image/*,.pdf"
            required
            onChange={(e) =>
              updateDocumentFile(
                "identification",
                e.target.files?.[0] || null
              )
            }
          />
        </div>

        {/* PASSPORT PHOTO (MANDATORY) */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox checked disabled />
            <Label>
              Passport-Sized Photo <span className="text-red-500">*</span>
            </Label>
          </div>

          <Input
            type="file"
            accept="image/*"
            required
            onChange={(e) =>
              updateDocumentFile("photo", e.target.files?.[0] || null)
            }
          />
        </div>
      </div>

      {/* ================= SUBMIT ================= */}

      <Button
        type="submit"
        disabled={
          !isDocumentsComplete() ||
          !isAgreementComplete() ||
          isSubmitting ||
          submissionSuccess
        }
        className={`w-full ${
          !isDocumentsComplete() ? "cursor-not-allowed" : ""
        }`}
      >
        Submit Application
      </Button>
    </form>
  )
}
