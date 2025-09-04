// This file is machine-generated - edit with caution!
'use server';
/**
 * @fileOverview FAQ generator flow.
 *
 * - generateFaq - A function that generates FAQs based on the provided content.
 * - FaqGeneratorInput - The input type for the generateFaq function.
 * - FaqGeneratorOutput - The return type for the generateFaq function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FaqGeneratorInputSchema = z.object({
  websiteContent: z.string().describe('The content of the Vision Academy website.'),
});
export type FaqGeneratorInput = z.infer<typeof FaqGeneratorInputSchema>;

const FaqGeneratorOutputSchema = z.object({
  faqList: z
    .array(
      z.object({
        question: z.string().describe('The FAQ question.'),
        answer: z.string().describe('The answer to the FAQ question.'),
      })
    )
    .describe('A list of frequently asked questions and their answers.'),
});
export type FaqGeneratorOutput = z.infer<typeof FaqGeneratorOutputSchema>;

export async function generateFaq(input: FaqGeneratorInput): Promise<FaqGeneratorOutput> {
  return faqGeneratorFlow(input);
}

const faqGeneratorPrompt = ai.definePrompt({
  name: 'faqGeneratorPrompt',
  input: {schema: FaqGeneratorInputSchema},
  output: {schema: FaqGeneratorOutputSchema},
  prompt: `You are an expert at creating FAQs based on website content.

  Analyze the following website content and generate a list of frequently asked questions and their answers.

  Website Content: {{{websiteContent}}}

  Ensure the questions are relevant and the answers are concise and informative.
  The output should be a JSON object, with a "faqList" array containing objects with "question" and "answer" keys.
  `,
});

const faqGeneratorFlow = ai.defineFlow(
  {
    name: 'faqGeneratorFlow',
    inputSchema: FaqGeneratorInputSchema,
    outputSchema: FaqGeneratorOutputSchema,
  },
  async input => {
    const {output} = await faqGeneratorPrompt(input);
    return output!;
  }
);
