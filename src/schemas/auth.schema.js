import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "El usuario es requerido",
  }),
  email: z
    .string({
      required_error: "Email requerido",
    })
    .email({
      message: "Email invalido",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe tener minimo 6 caracteres",
    }),
});

export const loginSchema = z.object({
  email: z.string({
    required_error: "Email requerido",
  }).email({
    message: "Email invalido ",
  }),
  password: z.string({
    required_error: "La contraseña es requerida",
  })
});

/* import {z} from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username is required',
    }),
    email: z.string({
        required_error: 'Email Required',
    }).email({
        message: 'Invalid Email',
    }),
    password: z.string({
        required_error: 'Password is required',
    }).min(8, {
        messsage: 'Password must be at least 6 characters',
    })
});

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email Required',
    }).email({
        message: 'Invalid Email',
    }),
    password: z.string({
        required_error: 'Password is required',
    }).min(6, {
        messsage: 'Password must be at least 6 characters',
    })
}); */
