import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  presets: ["vercel"],
  output: {
    dir: ".vercel/output",
  },
});
