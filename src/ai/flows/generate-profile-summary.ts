// Use server directive is required for Genkit flows.
'use server';

/**
 * @fileOverview Generates a short, engaging profile summary from a detailed description of skills and experiences.
 *
 * - generateProfileSummary - A function that generates the profile summary.
 * - GenerateProfileSummaryInput - The input type for the generateProfileSummary function.
 * - GenerateProfileSummaryOutput - The return type for the generateProfileSummary function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateProfileSummaryInputSchema = z.object({
  skillsAndExperiences: z.string().describe('A detailed description of the user\'s skills and experiences.'),
});
export type GenerateProfileSummaryInput = z.infer<typeof GenerateProfileSummaryInputSchema>;

const GenerateProfileSummaryOutputSchema = z.object({
  profileSummary: z.string().describe('A short, engaging profile summary.'),
});
export type GenerateProfileSummaryOutput = z.infer<typeof GenerateProfileSummaryOutputSchema>;

export async function generateProfileSummary(input: GenerateProfileSummaryInput): Promise<GenerateProfileSummaryOutput> {
  return generateProfileSummaryFlow(input);
}

const profileSummaryPrompt = ai.definePrompt({
  name: 'profileSummaryPrompt',
  input: {
    schema: z.object({
      skillsAndExperiences: z.string().describe('A detailed description of the user\'s skills and experiences.'),
    }),
  },
  output: {
    schema: z.object({
      profileSummary: z.string().describe('A short, engaging profile summary.'),
    }),
  },
  prompt: `You are a professional resume writer.  Please write a short, engaging profile summary based on the following description of skills and experiences:\n\n{{{skillsAndExperiences}}}`,
});

const generateProfileSummaryFlow = ai.defineFlow<
  typeof GenerateProfileSummaryInputSchema,
  typeof GenerateProfileSummaryOutputSchema
>({
  name: 'generateProfileSummaryFlow',
  inputSchema: GenerateProfileSummaryInputSchema,
  outputSchema: GenerateProfileSummaryOutputSchema,
},
async input => {
  const {output} = await profileSummaryPrompt(input);
  return output!;
});
