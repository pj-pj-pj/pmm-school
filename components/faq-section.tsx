"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          <a
            href="https://docs.google.com/document/d/1FBtZxDsY58Tp2BXL1sTDyuVgX_EFKQTRIgHdU6ADbAs/edit?tab=t.0"
            target="_blank"
            className="text-purple-500 hover:underline font-medium"
            rel="noreferrer"
          >
            Click here
          </a>{" "}
          to view the <strong>full syllabus</strong>.
        </>
      ),
    },
  ];

  return (
    <section
      id="faq"
      className="py-16 md:py-28 bg-gray-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-purple-500">Questions</span>
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
              className="bg-white rounded-sm px-8 max-w-3xl mx-auto shadow-lg"
            >
              <AccordionTrigger className="cursor-pointer text-left text-base font-medium text-gray-900 hover:text-purple-500">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
