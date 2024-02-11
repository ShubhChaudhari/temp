const { z } = require("zod");

const userSchemaSignUpValidation = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(['employee', 'manager']),
  });
const userSchemaLoginValidation = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    // role: z.enum(['employee', 'manager']),    
  });

module.exports = { userSchemaSignUpValidation };