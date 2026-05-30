import z from "zod";

const envSchema = z.object({
  API_TOKEN: z.string().nonempty("API_TOKEN is required"),
  API_BASE_URL: z.string().nonempty("API_BASE_URL is required"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

export const env = envSchema.parse(process.env);