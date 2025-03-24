import { EnhancedRegistrationForm } from "@/components/enhanced-registration-form"

export default function RegisterPage() {
  return (
    <div className="container px-4 md:px-6 py-16 mx-auto">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Student Registration</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete the form below to register as a student at the African Institute for International Studies.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <EnhancedRegistrationForm />
      </div>
    </div>
  )
}

