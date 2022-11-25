import { TypeOf, z } from "zod";

export const addUserSchema = z.object({
  body: z.object({
    username: z.string({
      required_error: "Username is required",
    }),
    password: z.number({
      required_error: "Password is required",
    }),
    email: z.string({
      required_error: "Email is required",
    }),
    role: z.enum(["ADMIN", "USER"], {
      required_error: "Role is required",
    }),
    joiningYear: z.string({
      required_error: "JoiningYear is required",
    }),
    age: z.number({
      required_error: "Age is required",
    }),
  }),
});

export const updateUserSchema = z.object({
  params: z.object({
    id: z.string({
      required_error: "Please send id in the params",
    }),
  }),
});

export const getOneUserSchema = z.object({
  query: z.object({
    id: z.string({
      required_error: "Please send id in the params",
    }),
  }),
});

export const getEmailUserSchema = z.object({
  query: z.object({
    email: z.string({
      required_error: "Please send email in the params",
    }),
  }),
});

export const getAgeUserSchema = z.object({
  query: z.object({
    age: z.number({
      required_error: "Please send age in the params",
    }),
  }),
});
export type getemailUserSchemaType = TypeOf<typeof getEmailUserSchema>["query"];

export type getAgeUserSchemaType = TypeOf<typeof getAgeUserSchema>["query"];

export type getOneUserSchemaType = TypeOf<typeof getOneUserSchema>["query"];

export type userSchemaType = TypeOf<typeof updateUserSchema>["params"];
