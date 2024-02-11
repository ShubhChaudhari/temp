const zod = require("zod");

function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email()
    })

    const response = schema.parse(obj);
    console.log('response', response)
}

validateInput({email:"abc@gmailcom"})