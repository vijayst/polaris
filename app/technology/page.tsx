import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  Bell,
  Code,
  CodeXml,
  Cpu,
  Database,
  HardDrive,
  Lightbulb,
  Minimize2,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import FactCarousel from "@/components/fact-carousel";

export const metadata: Metadata = {
  title: "Technology Advisory",
  description:
    "Technology advisory for CXOs — build and scale consumer and enterprise systems with a focus on non-functional requirements: scalability, availability, observability, reliability, performance, latency, security, consistency and quality.",
};

const infoBlocks: { Icon: LucideIcon; title: string; description: string }[] = [
  {
    Icon: Bell,
    title: "Scalability",
    description:
      "Product scaling is all about taking a successful product and making it even better, by increasing its reach, capabilities, and efficiency. We enable businesses to take their operations to the next level by providing the necessary tools and resources for seamless scaling. We understand that as a business grows, its systems must be able to keep pace. Our innovative approach provides a comprehensive and efficient solution that helps companies scale their systems with ease and confidence. With our support, businesses can enjoy increased efficiency, productivity, and success.",
  },
  {
    Icon: HardDrive,
    title: "Availability",
    description:
      "Availability is the state of being accessible and functioning as intended, and it is a critical aspect of any system. We help companies make their systems always available by providing a robust and reliable solution. Our solution is designed to detect and resolve issues in real-time, ensuring that systems remain up and running even in the face of unexpected challenges. This means that your business can continue to operate smoothly, without downtime or interruptions. Our solution features advanced technologies and features that help ensure availability, including automatic failover, real-time monitoring, and proactive maintenance.",
  },
  {
    Icon: Lightbulb,
    title: "Observability",
    description:
      "Observability is the ability to monitor and understand the behavior of complex systems in real-time. It's a crucial component for ensuring the stability, reliability, and performance of any system. We help businesses add observability to their systems by providing a comprehensive and user-friendly solution. Our solution integrates seamlessly into your existing infrastructure and provides real-time insights into your systems' behavior. This allows you to quickly identify and resolve issues, and make informed decisions to optimize performance.",
  },
  {
    Icon: Code,
    title: "Reliability",
    description:
      "Reliability ensures that systems and products perform their intended functions seamlessly and consistently, building customer trust and satisfaction. We understand the significance of reliability and have made it our top priority. Our team of experts utilizes cutting-edge technologies and industry best practices to design and implement systems that are robust, resilient, and always available. We work closely with our clients to understand their unique needs and tailor our solutions to meet their specific requirements. Our goal is to help our clients focus on what they do best, while we take care of ensuring the reliability of their systems.",
  },
  {
    Icon: Minimize2,
    title: "Performance",
    description:
      "Performance measures the efficiency and effectiveness of systems and products, allowing organizations to achieve their goals and drive growth. Our team of experts leverages the latest technologies and industry best practices to optimize the performance of our clients' systems. Our goal is to empower our clients to achieve their performance objectives, by providing them with the tools and support they need to succeed. Experience the confidence that comes with knowing your systems are performing at their best, freeing you to focus on what you do best.",
  },
  {
    Icon: CodeXml,
    title: "Latency",
    description:
      "Latency refers to the time it takes for data to be transmitted from one point to another and is a key determinant of system responsiveness and overall performance. Our team of experts leverages the latest technologies and industry best practices to minimize latency and optimize the performance of our clients' systems. We work closely with our clients to understand their specific needs and develop tailored solutions that meet their unique requirements. Our goal is to empower our clients to achieve their performance objectives with low latency, providing them with the tools and support they need to succeed.",
  },
  {
    Icon: ShieldCheck,
    title: "Security",
    description:
      "System security protects systems against threats such as hacking, data theft, and unauthorized access to sensitive information. We understand the importance of system security and we help our clients stay protected. We work closely with our clients to understand their specific security needs and develop tailored solutions that meet their unique security requirements. Our goal is to empower our clients to focus on their core business, while leaving the security of their systems in our capable hands. Experience the peace of mind that comes with knowing your systems are secure, leaving you free to grow your business.",
  },
  {
    Icon: Database,
    title: "Consistency",
    description:
      "Consistency ensures that data and processes are executed in a uniform and predictable manner, building trust and reliability with customers and stakeholders. We understand the importance of consistency and have made it our mission to help our clients achieve the best results possible. We work closely with our clients to understand their specific needs and tailor our solutions to meet their unique consistency requirements. Our goal is to help our clients implement different levels of consistency into their systems, ensuring that their data and processes are executed in a uniform and predictable manner.",
  },
  {
    Icon: Award,
    title: "Quality",
    description:
      "Quality is a critical factor in the success of any system. It refers to the degree to which a product or service meets customer expectations and requirements. We understand the importance of quality and we help our clients achieve the best results possible. Our team of experts leverages the latest technologies and industry best practices to design and implement systems that meet or exceed customer expectations. We work closely with our clients to understand their specific quality needs. Our goal is to empower our clients to achieve their quality objectives, providing them with the tools and support they need to succeed.",
  },
];

const facts = [
  "Microsoft is the real inventor of Smartphone, Smart TV and Tablet",
  "Google index covers only 0.01% of the World Wide Web",
  "Half-life of a web link on the internet is 7 years",
  "A powered-off computer can be hacked in less than three minutes",
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        icon={Cpu}
        title="Technology"
        subtitle="Build and Scale Consumer and Enterprise Systems"
        description="Technology Advisory for CXOs — engineering products that win on non-functional requirements."
      />

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Technology Advisory"
                title="Build and Scale Consumer and Enterprise Systems"
              />
              <div className="space-y-6 text-justify text-sm leading-relaxed text-slate-600 sm:text-base">
                <p>
                  Before Facebook, there were social networking platforms like
                  Myspace, Friendster, and Orkut. Before Amazon, there were
                  e-commerce companies like Ebay, Walmart, Best Buy, Sears, and
                  OverStock. However, Facebook and Amazon were successful. Why?
                </p>
                <p>
                  Because they heavily focused on Non-functional requirements.
                  Non-functional requirements play a crucial role in the success
                  of a product. These requirements, which focus on aspects such
                  as performance, security, scalability, and usability,
                  determine how well a product operates and meets the needs of
                  its users. A product that is user-friendly, secure, and
                  efficient will generally be more successful than one that is
                  not. By prioritizing non-functional requirements, companies
                  can ensure that their products meet the high standards of
                  quality and functionality that customers have come to expect,
                  leading to greater customer satisfaction and loyalty.
                </p>
                <p>
                  Alongside the functional requirements, we put equal emphasis
                  on the non-functional requirements that make all the
                  difference. With a focus on performance, security,
                  scalability, availability, observability, and usability,
                  we&apos;re able to craft products that not only meet your
                  needs, but exceed your expectations in every way. Discover a
                  new level of quality and see how our unwavering commitment to
                  non-functional requirements sets us apart from the
                  competition.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/images/TechGrow.jpg"
                alt="Build and scale consumer and enterprise systems"
                width={640}
                height={480}
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Non-Functional Requirements"
            title="What Sets Great Systems Apart"
            description="We put equal emphasis on the non-functional requirements that make all the difference."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {infoBlocks.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/60"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-brand-blue text-white transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FactCarousel facts={facts} />
    </>
  );
}
