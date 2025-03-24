import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  variant?: "full" | "icon"
}

export function Logo({ size = "md", variant = "full" }: LogoProps) {
  const dimensions = {
    sm: { width: 40, height: 40 },
    md: { width: 50, height: 50 },
    lg: { width: 80, height: 80 },
  }

  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative overflow-hidden rounded-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIIS-Re%20final%20madag%281%29.jpg-oaLwzSopMsgCIaMaDIcFPYcJDSWD7d.jpeg"
          alt="AIIS Logo"
          width={dimensions[size].width}
          height={dimensions[size].height}
          className="object-contain"
          priority
        />
      </div>
      {variant === "full" && (
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-tight">AIIS</span>
          <span className="text-xs text-muted-foreground leading-tight">
            African Institute for International Studies
          </span>
        </div>
      )}
    </Link>
  )
}

