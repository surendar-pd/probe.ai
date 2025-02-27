import { z } from "zod";

export const settingsSchema = z.object({
	frequencyPenalty: z.number().min(0).max(1),
	maxTokens: z.number().min(100).max(4096),
	presencePenalty: z.number().min(0).max(1),
	stopWords: z.string().optional(),
	stream: z.boolean(),
	temperature: z.number().min(0).max(2),
	topP: z.number().min(0).max(1),
});

export type SettingsFormValues = z.infer<typeof settingsSchema>;
