import { MetadataRoute } from "next";
const manifest: () => MetadataRoute.Manifest = () => {
  return {
    name: "Next.js with Jikan | NeoNime",
    short_name: "NeoNime",
  };
};
export default manifest;
