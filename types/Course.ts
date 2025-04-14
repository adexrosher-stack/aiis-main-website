// types/Course.ts
import { ReactNode } from "react";

export interface Course {
    [x: string]: ReactNode
    id: string
    title: string
    level: "undergraduate" | "graduate" | "doctoral"
    format: "residential" | "online" | "hybrid"
    duration: string
    credits: number
    description: string
  }
  