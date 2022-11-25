import { TypeOf, z } from "zod";

export const addMovieSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: "Name is required" })
      .min(3, "Name must be mare than 3 char")
      .min(2),
    gener: z.enum(["Drama", "Action", "Comedy"], {
      required_error: "Genre is required",
    }),
    rating: z
      .number({
        required_error: "Rating is required",
      })
      .min(1)
      .max(5),
    duration: z
      .number({
        required_error: "Duration is required",
      })
      .min(60),
    createdate: z.string({
      required_error: "Date is required",
    }),
  }),
});

export const updateMovieSchema = z.object({
  params: z.object({
    id: z.string({ required_error: "Please send id in the params" }),
  }),
});

export const deleteMovieSchema = z.object({
  params: z.object({
    id: z.string({ required_error: "Please send id in the params" }),
  }),
});


// export type movieSchemaType = TypeOf<typeof addMovieSchema>["body"];
export type movieSchemaType = TypeOf<typeof updateMovieSchema>["params"];

