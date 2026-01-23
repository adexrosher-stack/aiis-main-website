export interface AdmissionPayload {
  first_name: string
  last_name: string
  email: string
  phone: string
  date_of_birth: string
  gender: string
  nationality: string

  street_address: string
  city: string
  country: string

  emergency_contact_name: string
  emergency_contact_relationship: string
  emergency_contact_phone: string

  program: string
  program_of_interest: string
  desired_start_date: string
  desired_campus: string
  study_mode: string

  personal_statement: string
  ministry_experience: string

  terms_accepted: boolean
  information_accuracy_confirmed: boolean

  educations: {
    institution: string
    degree: string
    field_of_study: string
    graduation_year: string
    gpa_grade: string
  }[]

  documents: string[]
}

export async function submitAdmission(payload: AdmissionPayload): Promise<void> {
  const response = await fetch("http://127.0.0.1:8000/api/admissions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const data: { message?: string } = await response.json()
    throw new Error(data.message ?? "Failed to submit application")
  }
}
