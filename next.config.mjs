/** @type {import('next').NextConfig} */
const nextConfig = (phase) => ({
  distDir: phase === "phase-development-server" ? ".next-dev" : ".next",
});

export default nextConfig;
