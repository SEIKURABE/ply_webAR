export function addBasePath(path: string) {
  const basePath = process.env.NODE_ENV === "production" ? "/ply_webAR" : "";
  return `${basePath}${path}`;
}
