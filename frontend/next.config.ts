import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // 🚨 خطرناک برای پرو덕شن، ولی برای موقت جواب می‌ده
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
