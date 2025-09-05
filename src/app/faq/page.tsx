import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqData } from '@/lib/constants';

export default function FaqPage() {
  return (
    <main className="flex-1 py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight font-headline">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Find answers to common questions about Vision Academy Silchar.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {faqData.length > 0 && (
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </main>
  );
}
