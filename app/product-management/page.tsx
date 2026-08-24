import type { Metadata } from "next";
import Image from "next/image";
import {
  Bell,
  Briefcase,
  CodeXml,
  HardDrive,
  LayoutTemplate,
  Lightbulb,
  Shrink,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import FactCarousel from "@/components/fact-carousel";

export const metadata: Metadata = {
  title: "Product Management",
  description:
    "Product management advisory for CXOs and product teams — vision, mission, roadmap, backlog, market research, segmentation, GTM, value proposition, personas and competitive analysis for 0-1 and 1-N products.",
};

const services = [
  {
    src: "/images/vision.jpg",
    title: "Product Vision",
    description:
      "A clear vision brings the future into everyday work and helps the organizations to understand the larger purpose of the product. We understand the importance of having a well-defined product vision that aligns with the overall goals of your organization. We help the product teams to define and clearly articulate the future state of a product. We'll work closely with you to understand the unique challenges and opportunities faced by your business, and use this information to develop a product vision that drives success. With our help, you'll be able to clearly articulate your product vision to your team, stakeholders, and customers, allowing you to build a culture of innovation that supports the growth of your business.",
  },
  {
    src: "/images/mission.jpg",
    title: "Product Mission",
    description:
      "We know that a well-defined product vision is only the first step towards success. To bring your vision to life, you need a concrete plan that sets clear, actionable steps towards your goals. That's why we're here to help you execute your product vision through a series of concrete, actionable steps. Our team of product management experts will work closely with you to develop a comprehensive plan that takes your vision and turns it into a reality. With our expert guidance, you'll be able to prioritize your initiatives, allocate resources effectively, and measure progress towards your goals. And, most importantly, you'll be able to stay on track, even when faced with unexpected challenges. And, most importantly, you can turn your product vision into reality.",
  },
  {
    src: "/images/strategy.jpg",
    title: "Product Roadmap",
    description:
      "We understand the importance of having a clear and well-defined roadmap to guide your journey towards success. Whether you're looking to achieve short-term wins or long-term growth, a roadmap can help you stay focused, measure progress, and make informed decisions along the way. We ensure that short-term and long-term product roadmap is defined for every product in the organizations product portfolio. We'll work closely with you to understand your vision, identify key milestones, and develop a comprehensive plan that sets clear, actionable steps towards your objectives. With our help, you'll be able to stay on track and make progress towards your goals, no matter what challenges you may face along the way.",
  },
];

type InfoBlock = {
  Icon: LucideIcon;
  color: string;
  title: string;
  description: string;
};

const infoBlocksRowOne: InfoBlock[] = [
  {
    Icon: Bell,
    color: "bg-brand-500",
    title: "Product Backlog",
    description:
      "A product backlog is essentially a prioritized list of features, enhancements, and bug fixes that need to be addressed in order to ensure that your product meets the needs of your customers and supports your business goals. We know that a well-defined product backlog is a crucial component of a successful product development strategy. Our team of product management experts can help you define and execute a product backlog that aligns with your objectives and supports the growth of your business. We'll work closely with you to develop a comprehensive backlog that sets clear, actionable steps towards your goals. With our help, you'll be able to allocate resources effectively, and measure progress towards your objectives.",
  },
  {
    Icon: HardDrive,
    color: "bg-brand-blue",
    title: "Backlog Prioritization",
    description:
      "A product backlog prioritization and grooming process helps you to identify the most important initiatives, allocate resources effectively, and ensure that your product backlog is always up-to-date and aligned with your goals. We understand the importance of having a well-prioritized and well-groomed product backlog to support the success of your product development efforts. Our team of product management experts can help you prioritize and groom your product backlog, ensuring that it supports the growth of your business and meets the needs of your customers. With our help, you'll be able to stay on track and make progress towards your goals, no matter what challenges you may face along the way.",
  },
  {
    Icon: Lightbulb,
    color: "bg-brand-purple",
    title: "Effective Collaboration",
    description:
      "We understand the importance of effective collaboration for the success of any organization. When teams work together seamlessly, they can achieve great things and drive results that far exceed what they could accomplish alone. We are here to help your teams collaborate effectively and unleash the full potential of teamwork. Our team of product management experts will work closely with you to identify key pain points, understand your goals, and develop a comprehensive plan that sets clear, actionable steps towards more effective collaboration. With our expert guidance, you'll be able to improve communication, streamline processes, and foster a culture of collaboration that drives results and supports the growth of your business.",
  },
];

const infoBlocksRowTwo: InfoBlock[] = [
  {
    Icon: CodeXml,
    color: "bg-brand-500",
    title: "Market Research",
    description:
      "Market research is the process of gathering, analyzing and interpreting data about a specific market or industry, it's goal is to gain a better understanding of the market, customers, and competition in order to inform business decisions and strategies, it can be divided into primary and secondary research, primary research involves collecting original data and secondary research involves analyzing existing data, it can be used to inform product development, marketing, and sales strategies, identify market trends and measure the size and growth potential of a specific market. We work closely with our clients and empower our clients with the tools and support they need to perform market research and make informed decisions.",
  },
  {
    Icon: Shrink,
    color: "bg-brand-blue",
    title: "Segmentation",
    description:
      "Market and user segmentation is the process of dividing your market into smaller group's characteristics. We understand the importance of understanding your target market and users in order to drive growth and success for your business. Our team of product management experts can help you define and execute a market and user segmentation strategy that supports the growth of your business. We'll work closely with you to understand your goals, gather data, and develop a comprehensive plan that sets clear steps towards defining market and user segments. With our help, you'll be able to target the right audience, create tailored messaging and offerings, and drive growth for your business.",
  },
  {
    Icon: LayoutTemplate,
    color: "bg-brand-purple",
    title: "GTM",
    description:
      "A GTM strategy defines the plan for introducing a new product or service to market, including target audience, marketing channels, and sales tactics. An effective GTM strategy is essential for the success of your product launch and overall business growth. We understand the importance of having an effective Go-To-Market (GTM) strategy to support the success of your product launch. Our team of product management experts can help you define and execute an effective GTM strategy that aligns with your goals and supports the growth of your business. With our help, you'll be able to launch your product with confidence, reach your target audience, and drive growth for your business.",
  },
];

const infoBlocksRowThree: InfoBlock[] = [
  {
    Icon: CodeXml,
    color: "bg-brand-500",
    title: "Value Proposition",
    description:
      "A value proposition is a statement that communicates the unique benefits and value that a product or service offers to customers, it's a key component of a company's core strategy and is used to differentiate the company's offerings from those of its competitors, it's tailored to the specific needs and pain points of a target audience, it's important to review and update regularly as the target audience and market may change over time. Our team of experts works closely with clients to identify and articulate their unique value proposition. Whether you're launching a new product or rebranding an existing one, we'll work with you every step of the way to help you create a value proposition that sets you apart and drives results.",
  },
  {
    Icon: Shrink,
    color: "bg-brand-blue",
    title: "Persona Mapping",
    description:
      "Persona mapping is a process used to create detailed profiles of your target audience, personas, it's used to inform product development, marketing, and customer service strategies, it's based on research and data, and it can help you to understand the needs, goals, and behaviors of your customers. We understand the importance of understanding your target audience and speaking directly to their needs and pain points. Our team of marketing experts uses a combination of market research, data analysis, and industry insights to create detailed profiles of your ideal customers. These personas provide a clear picture of who your target audience is, what their goals and motivations are, and how they make purchasing decisions.",
  },
  {
    Icon: LayoutTemplate,
    color: "bg-brand-purple",
    title: "Competitive Analysis",
    description:
      "Competitive analysis is the process of researching and understanding the strengths and weaknesses of your competitors in order to inform your own business strategy, it helps you to identify opportunities and threats, it's important to identify your main competitors, research their products, services, pricing, marketing and overall business strategy, evaluate their strengths and weaknesses, keep an eye on industry trends and competitors' moves. We help our clients identify industry trends, understand their target audience, and gain valuable insights into their own strengths and weaknesses in comparison to the competition. By staying ahead of the curve, our clients can make informed decisions and achieve their business goals.",
  },
];

const facts = [
  "72% of launched products fail - HBR",
  "70% of YouTube views, 80% of Netflix views and 35% of Amazon views come through the recommendation engine",
  "92% of users click on an item in the first page of Google search results",
];

function InfoBlockCard({ Icon, color, title, description }: InfoBlock) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/60">
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-full text-white transition-transform group-hover:scale-110 ${color}`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}

export default function ProductManagementPage() {
  return (
    <>
      <PageHero
        icon={Briefcase}
        title="Product Management"
        subtitle="Drive and Launch 0-1 and 1-N Products"
        badges={["Advisory", "For CXOs & Product Teams"]}
        description="Leverage our product management expertise to transform your ideas into revenue generating products."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Drive and Launch 0-1 and 1-N Products
              </h2>
              <Image
                src="/images/PMGrow.jpg"
                alt="Growing products from idea to launch"
                width={3000}
                height={1967}
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="mt-6 h-auto w-full max-w-md rounded-2xl border border-slate-200 object-cover shadow-sm"
              />
            </div>
            <div className="space-y-4 text-justify text-sm leading-relaxed text-slate-600">
              <p>
                The success rate of new products, can be challenging to
                determine, as success is often subjective and can be measured in
                various ways. However, industry studies have suggested that a
                relatively low percentage of new products achieve significant
                success, with HBR report estimating that only 28% of new
                products in general are successful. The success rate for
                freemium products, is often estimated to be even lower, at 2-5%.
                The success rate for mobile apps is also reported to be low,
                with some estimates suggesting that only 1% of mobile apps are
                successful. These statistics highlight the challenges of
                launching and successfully marketing new products in a
                competitive and rapidly evolving marketplace. Designing,
                driving, launching, and marketing both 0-1 and 1-N products can
                be complex and challenging processes that require a combination
                of skills and expertise.
              </p>
              <p>
                For 0-1 products, the focus is often on creating a new and
                innovative product that solves a unique problem or addresses a
                new opportunity in the market. This requires a deep
                understanding of user needs, market trends, and technological
                capabilities, as well as a focus on design and user experience.
                The launch and marketing of 0-1 products is often focused on
                creating awareness and establishing the product as a new
                category leader.
              </p>
              <p>
                For 1-N products, the focus is often on scaling and expanding an
                existing product or concept, leveraging the strengths and
                existing assets of the original product. This often requires a
                different set of skills, including market analysis, product
                optimization, and a focus on growth and sustainability. The
                launch and marketing of 1-N products is often focused on
                reaching new audiences, establishing partnerships, and expanding
                distribution.
              </p>
              <p>
                Regardless of whether a product is 0-1 or 1-N, successful
                product design, launch, and marketing require a deep
                understanding of the market, the customer, and the competition,
                as well as a strong focus on delivering value to the end-user.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Advisory"
            title="Vision, Mission and Roadmap"
            description="From articulating the future state of your product to executing it with a concrete, actionable plan."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/60"
              >
                <div className="overflow-hidden rounded-xl bg-slate-50">
                  <Image
                    src={service.src}
                    alt={service.title}
                    width={300}
                    height={178}
                    loading="lazy"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="h-40 w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Execution"
            title="Backlog, Research and Go-To-Market"
            description="The hands-on disciplines that turn a product strategy into shipped, revenue-generating products."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {infoBlocksRowOne.map((block) => (
              <InfoBlockCard key={block.title} {...block} />
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {infoBlocksRowTwo.map((block) => (
              <InfoBlockCard key={block.title} {...block} />
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {infoBlocksRowThree.map((block) => (
              <InfoBlockCard key={block.title} {...block} />
            ))}
          </div>
        </div>
      </section>

      <FactCarousel facts={facts} />
    </>
  );
}
