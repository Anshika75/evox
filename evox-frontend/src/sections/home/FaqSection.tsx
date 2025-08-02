"use client"

import { StrapiImage } from "@/components/StrapiImage";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FaqSectionProps {
  faqSectionData?: {
    heading: string;
    image: {
      id: number;
      documentId: string;
      name: string;
      alternativeText: string | null;
      url: string;
    };
    faqItems: Array<{
      id: number;
      Question: string | null;
      Answer: string | null;
    }>;
  } | null;
}

interface faqItem {
  id: number;
  question: string;
  answer: string;
}

export default function FaqSection({ faqSectionData }: FaqSectionProps) {
  if (!faqSectionData) {
    return null;
  }

  const faqItems: faqItem[] = faqSectionData.faqItems
    .filter((data) => data.Question && data.Answer)
    .map((data) => ({
      id: data.id,
      question: data.Question!,
      answer: data.Answer!,
    }));

  if (faqItems.length === 0) {
    return null;
  }

  return (
    <div className="bg-white text-gray-900 py-16 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-12">
        <div className="flex items-start">
          {/* Left Section: Image */}
          <div className="hidden sm:block relative w-[40%] h-[100%] rounded-lg overflow-hidden">
            <StrapiImage
              src={faqSectionData.image.url}
              alt={faqSectionData.image.alternativeText || faqSectionData.image.name || "FAQ Image"}
              height={500}
              width={500}
              className="w-full max-w-[450px] h-full object-cover"
            />
          </div>

          {/* Right Section: Heading and Accordion */}
          <div className="space-y-8 w-full sm:w-[60%]">
            <h2 className="text-3xl lg:text-5xl font-semibold plus-jakarta-sans-semibold text-custom-black leading-tight">
              {faqSectionData.heading}
            </h2>

            {/* Accordion Component */}
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id.toString()}
                  className="bg-gray-50 rounded-lg border border-gray-100 shadow-sm data-[state=open]:border-gray-200"
                >
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium plus-jakarta-sans-medium text-custom-black hover:no-underline data-[state=open]:text-custom-black">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-base plus-jakarta-sans-regular text-[#6C6C6C]">
                    {Array.isArray(item.answer) ? (
                      <div className="space-y-2">
                        {item.answer.map((line, idx) =>
                          line.startsWith("1.") || line.startsWith("2.") || line.startsWith("3.") ? (
                            <p key={idx} className="ml-4">
                              {line}
                            </p>
                          ) : (
                            <p key={idx}>{line}</p>
                          ),
                        )}
                      </div>
                    ) : (
                      <p>{item.answer}</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}