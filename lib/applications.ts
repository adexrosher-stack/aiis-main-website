import { api } from "@/lib/api"

/* =====================================================
   TYPES (SINGLE SOURCE OF TRUTH)
===================================================== */

export type ApplicationStatus =
  | "pending"
  | "approved"
  | "rejected"
  | "waitlisted"

export interface ApplicationPayload {
  personalInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth: string
    gender: string
    nationality: string
    address: string
    city: string
    country: string
    emergencyContact: {
      name: string
      relationship: string
      phone: string
    }
  }

  academicInfo: {
    program: string
    campus: string
    startDate: string
    studyMode: string
    previousEducation: {
      institution: string
      degree: string
      fieldOfStudy: string
      graduationYear: string
      gpa: string
    }[]
  }

  background: {
    statement: string
    ministry: string
    referenceChurch: string
    referenceAcademic?: string
    referencePersonal?: string
  }

  documents: {
    transcripts: boolean
    recommendations: boolean
    statement: boolean
    identification: boolean
    photo: boolean
  }

  agreement: {
    termsAgreed: boolean
    infoCorrect: boolean
  }
}

export interface Application {
  id: number
  first_name: string
  last_name: string
  email: string
  phone: string | null
  program: string
  campus: string | null
  status: ApplicationStatus
  payload: ApplicationPayload
  created_at: string
}

/* =====================================================
   PUBLIC (Applicant)
===================================================== */

export async function submitApplication(
  payload: ApplicationPayload
) {
  const res = await api.post<{ apply_id: number }>("/applies", {
    first_name: payload.personalInfo.firstName,
    last_name: payload.personalInfo.lastName,
    email: payload.personalInfo.email,
    phone: payload.personalInfo.phone,
    program: payload.academicInfo.program,
    campus: payload.academicInfo.campus,
    payload,
  })

  return res.data
}

export async function uploadApplicationDocument(
  applyId: number,
  type: string,
  file: File
) {
  const formData = new FormData()
  formData.append("type", type)
  formData.append("file", file)

  const res = await api.post(
    `/applies/${applyId}/documents`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  )

  return res.data
}

/* =====================================================
   ADMIN
===================================================== */

export async function getApplications(page = 1) {
  const res = await api.get<{
    data: Application[]
    meta: {
      current_page: number
      last_page: number
      total: number
    }
  }>(`/admin/applies?page=${page}`)

  return res.data
}

export async function getApplication(id: number) {
  const res = await api.get<{
    application: Application
    documents: any[]
  }>(`/admin/applies/${id}`)

  return res.data
}

export const approveApplication = (id: number) =>
  api.patch(`/admin/applies/${id}/approve`)

export const rejectApplication = (id: number, message: string) =>
  api.patch(`/admin/applies/${id}/reject`, { message })

export const waitlistApplication = (id: number) =>
  api.patch(`/admin/applies/${id}/waitlist`)
