/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default withPlaiceholder(nextConfig);
