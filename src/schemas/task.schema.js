import { z } from "zod";

export const createTaskSchema = z.object({
    title: z.string({
        required_error: 'Title task required',
    }),

    description: z.string(),

    dateStart: z.string(),

    dateEnd: z.string(),

    color: z.string(),
});