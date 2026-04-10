export function addUrlPrefix(url: string) {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return `${prefix}${url}`;
}
