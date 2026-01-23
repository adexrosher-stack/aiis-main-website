const STORAGE_URL = "http://127.0.0.1:8000/storage"

export function resolveImage(path: string | null) {
  if (!path) return "/placeholder.svg"
  return `${STORAGE_URL}/${path}`
}
