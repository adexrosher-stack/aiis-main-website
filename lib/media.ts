const STORAGE_URL = "https://api.guadaye.com/storage"

export function resolveImage(path: string | null) {
  if (!path) return "/placeholder.svg"
  return `${STORAGE_URL}/${path}`
}
