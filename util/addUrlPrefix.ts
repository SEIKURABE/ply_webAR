import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export function addUrlPrefix(url: string) {
  const prefix = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";

  return `${prefix}${url}`;
}
