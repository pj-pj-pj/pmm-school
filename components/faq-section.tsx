"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link"; // Import Link component

export default function FAQSection() {
  const faqs = [
    {
      question:
        "Do I need a specific background to break into product marketing?",
      answer: (
        <>
          Nope! <strong>PMMs come from diverse backgrounds</strong>, including
          marketing, consulting, engineering, and more.
        </>
      ),
    },
    {
      question: "How is PMM School different from other PMM courses?",
      answer: (
        <>
          It's <strong>real-world focused</strong>—you'll learn from{" "}
          <strong>
            actual case studies, mock interviews, and insider hiring insights
          </strong>
          .
        </>
      ),
    },
    {
      question: "What's covered in the course?",
      answer: (
        <>
          <Link
            href="/syllabus"
            className="text-purple-600 hover:underline font-medium"
          >
            Click here
          </Link>{" "}
          to view the <strong>full syllabus</strong>.
        </>
      ),
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg border border-gray-200 px-6"
            >
              <AccordionTrigger className="cursor-pointer text-left text-lg font-semibold text-gray-900 hover:text-purple-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
