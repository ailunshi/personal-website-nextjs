"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST( req: Request ) {
    const { name, email, subject, message } = await req.json();

    try {
        const { data, error } = await resend.emails.send({
            from: `${name} <${email}>`,
            to: ["ailunshi@berkeley.edu"],
            subject: subject,
            html: `<p>${message}</p>`,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
};