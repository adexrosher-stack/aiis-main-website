import { api } from "./api"

export interface Person {
  id: number
  name: string
  title: string | null
  degrees: string | null
  image_url: string | null
  order: number
  type: "faculty" | "board"
}

export const getFaculty = async (): Promise<Person[]> => {
  const res = await api.get<Person[]>("/people/faculty")
  return res.data
}

export const getBoard = async (): Promise<Person[]> => {
  const res = await api.get<Person[]>("/people/board")
  return res.data
}
