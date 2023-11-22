export async function readImages() {
  const res = await fetch("/api/images");
  if (!res.ok) {
    throw new Error(`${res.status}`);
  }
  return await res.json();
}
