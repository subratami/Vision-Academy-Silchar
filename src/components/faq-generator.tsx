'use client';

import { useState } from 'react';
import { Wand2, LoaderCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  generateFaq,
  type FaqGeneratorOutput,
} from '@/ai/flows/faq-generator';
import { websiteContentForFaq } from '@/lib/constants';

export default function FaqGenerator() {
  const [faqData, setFaqData] = useState<FaqGeneratorOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateFaq = async () => {
    setIsLoading(true);
    setError(null);
    setFaqData(null);

    try {
      const result = await generateFaq({
        websiteContent: websiteContentForFaq,
      });
      setFaqData(result);
    } catch (e) {
      console.error(e);
      setError('Failed to generate FAQ. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center mb-8">
        <Button onClick={handleGenerateFaq} disabled={isLoading} size="lg">
          {isLoading ? (
            <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <Wand2 className="mr-2 h-5 w-5" />
          )}
          {isLoading ? 'Generating...' : 'Generate FAQ'}
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {faqData && faqData.faqList.length > 0 && (
        <Accordion type="single" collapsible className="w-full">
          {faqData.faqList.map((faq, index) => (
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
  );
}
