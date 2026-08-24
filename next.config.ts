import type { NextConfig } from "next";

const htmlRedirects: [string, string][] = [
  ["/index.html", "/"],
  ["/about.html", "/about"],
  ["/aiml.html", "/aiml"],
  ["/conversationalaidemos.html", "/demos/conversational-ai"],
  ["/legalprodigyai.html", "/legalprodigyai"],
  ["/marisai.html", "/marisai"],
  ["/mentorship.html", "/mentorship"],
  ["/pap.html", "/platform"],
  ["/pricing.html", "/pricing"],
  ["/productmanagement.html", "/product-management"],
  ["/promptengineeringdemo.html", "/demos/prompt-engineering"],
  ["/recommendationsdemos.html", "/demos/recommendations"],
  ["/spicaai.html", "/spicaai"],
  ["/technology.html", "/technology"],
  ["/textclassificationdemos.html", "/demos/text-classification"],
  ["/vegaai.html", "/vegaai"],
  ["/wip.html", "/wip"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return htmlRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
