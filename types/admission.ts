export interface AdmissionCreatePayload {
  // Personal Information
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender?: string;
  date_of_birth?: string;
  nationality?: string;

  // Program Info
  program: string;
  study_mode: string;

  // Academic Info
  highest_qualification?: string;
  institution?: string;
  graduation_year?: string;

  // Documents (file URLs or base64 for now)
  passport_photo?: string;
  transcript?: string;
  id_document?: string;
}
