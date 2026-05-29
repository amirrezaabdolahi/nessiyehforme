import z from "zod";

const envSchema = z.object({
  API_TOKEN: z.string().nonempty("API_TOKEN is required"),
});

export const env = envSchema.parse(process.env);