import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Define interfaces for form data
interface AdmissionFormData {
  type: "admission";
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: string;
    nationality: string;
    address: string;
    city: string;
    country: string;
    emergencyContact: {
      name: string;
      relationship: string;
      phone: string;
    };
  };
  academicInfo: {
    program: string;
    Campus: string;
    startDate: string;
    studyMode: string;
    previousEducation: Array<{
      institution: string;
      degree: string;
      fieldOfStudy: string;
      graduationYear: string;
      gpa: string;
    }>;
  };
  background: {
    statement: string;
    ministry: string;
    referenceChurch: string;
    referenceAcademic: string;
    referencePersonal: string;
  };
  documents: {
    transcripts: boolean;
    recommendations: boolean;
    statement: boolean;
    identification: boolean;
    photo: boolean;
  };
  agreement: {
    termsAgreed: boolean;
    infoCorrect: boolean;
  };
}

interface InquiryFormData {
  type: "inquiry";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface NewsletterFormData {
  type: "newsletter";
  email: string;
}

interface CommentFormData {
  type: "comment";
  name: string;
  email: string;
  message: string;
  postTitle: string;
  postId: string;
}

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Format program name for readability
const formatProgram = (program: string): string => {
  const programMap: { [key: string]: string } = {
    bth: "Bachelor of Theology",
    dipth: "Diploma in Theology",
    mdiv: "Master of Divinity",
    mth: "Master of Theology",
    mthps: "MTh in Practical Studies",
    macp: "MA in Counseling Psychology",
    maol: "MA in Organizational Leadership",
    phd: "Doctor of Philosophy",
  };
  return programMap[program] || program;
};

// Format start date for readability
const formatStartDate = (startDate: string): string => {
  const dateMap: { [key: string]: string } = {
    Anytime: "Ready to start anytime",
    FutureConsideration: "Pre-placement Registration for future consideration",
  };
  return dateMap[startDate] || startDate;
};

const formatCampus = (Campus: string): string => {
  const dateMap: { [key: string]: string } = {
    AddisAbaba: "Addis Ababa Campus",
    Adama: "Adama Campus",
    Mekelle: "Mekelle Campus",
  };
  return dateMap[Campus] || Campus;
};

export async function POST(req: NextRequest) {
  try {
    const body: AdmissionFormData | InquiryFormData | NewsletterFormData | CommentFormData = await req.json();

    // Common email options
    const emailOptions = {
      from: process.env.EMAIL_USER,
      to: ["info.aiis.edu@gmail.com", "touch.esck@yahoo.com"],
    };

    if (body.type === "admission") {
      const data = body as AdmissionFormData;

      // Construct admission email content
      const mailOptions = {
        ...emailOptions,
        subject: `New Admission Application: ${data.personalInfo.firstName} ${data.personalInfo.lastName}`,
        text: `
New Admission Application

Personal Information:
Name: ${data.personalInfo.firstName} ${data.personalInfo.lastName}
Email: ${data.personalInfo.email}
Phone: ${data.personalInfo.phone}
Date of Birth: ${data.personalInfo.dateOfBirth}
Gender: ${data.personalInfo.gender}
Nationality: ${data.personalInfo.nationality}
Address: ${data.personalInfo.address}, ${data.personalInfo.city}, ${data.personalInfo.country}

Emergency Contact:
Name: ${data.personalInfo.emergencyContact.name}
Relationship: ${data.personalInfo.emergencyContact.relationship}
Phone: ${data.personalInfo.emergencyContact.phone}

Academic Information:
Program: ${formatProgram(data.academicInfo.program)}
Campus: ${formatCampus(data.academicInfo.Campus)}
Start Date: ${formatStartDate(data.academicInfo.startDate)}
Study Mode: ${data.academicInfo.studyMode}

Previous Education:
${data.academicInfo.previousEducation
  .map(
    (edu, index) => `
Education #${index + 1}:
Institution: ${edu.institution}
Degree: ${edu.degree}
Field of Study: ${edu.fieldOfStudy}
Graduation Year: ${edu.graduationYear}
GPA: ${edu.gpa}
`
  )
  .join("\n")}

Background:
Personal Statement: ${data.background.statement}
Ministry Experience: ${data.background.ministry}
Church Reference: ${data.background.referenceChurch}
Academic Reference: ${data.background.referenceAcademic}
Personal Reference: ${data.background.referencePersonal}

Documents Status:
Transcripts: ${data.documents.transcripts ? "Yes" : "No"}
Recommendations: ${data.documents.recommendations ? "Yes" : "No"}
Statement: ${data.documents.statement ? "Yes" : "No"}
Identification: ${data.documents.identification ? "Yes" : "No"}
Photo: ${data.documents.photo ? "Yes" : "No"}

Agreement:
Terms Agreed: ${data.agreement.termsAgreed ? "Yes" : "No"}
Information Correct: ${data.agreement.infoCorrect ? "Yes" : "No"}
`,
      };

      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: "Admission application sent successfully" }, { status: 200 });
    } else if (body.type === "inquiry") {
      const data = body as InquiryFormData;

      // Construct inquiry email content
      const mailOptions = {
        ...emailOptions,
        subject: `New Inquiry: ${data.subject}`,
        text: `
New Inquiry

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Subject: ${data.subject}
Message: ${data.message}
`,
      };

      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: "Inquiry sent successfully" }, { status: 200 });
    } else if (body.type === "newsletter") {
      const data = body as NewsletterFormData;

      // Construct newsletter subscription email content
      const mailOptions = {
        ...emailOptions,
        subject: `New Newsletter Subscription: ${data.email}`,
        text: `
New Newsletter Subscription

Email: ${data.email}
`,
      };

      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: "Newsletter subscription successful" }, { status: 200 });
    } else if (body.type === "comment") {
      const data = body as CommentFormData;

      // Construct comment email content
      const mailOptions = {
        ...emailOptions,
        subject: `New Comment on "${data.postTitle}"`,
        text: `
New Comment on Post

Post Title: ${data.postTitle}
Post ID: ${data.postId}
Name: ${data.name}
Email: ${data.email}
Comment: ${data.message}
`,
      };

      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: "Comment sent successfully" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Invalid request type" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}