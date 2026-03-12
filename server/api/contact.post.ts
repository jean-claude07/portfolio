import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { name, email, subject, message } = body;

    const config = useRuntimeConfig();

    const transporter = nodemailer.createTransport({
        host: config.smtpHost,
        port: Number(config.smtpPort),
        secure: Number(config.smtpPort) === 465, // true for 465, false for other ports
        auth: {
            user: config.smtpUser,
            pass: config.smtpPass,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${config.smtpUser}>`, // Sender address must often be the authenticated user
            to: config.contactEmail,
            replyTo: email,
            subject: `Nouveau message de portfolio ${name}: ${subject}`,
            text: message,
            html: `
        <h3>Nouveau message du formulaire de contact</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        });

        return { success: true, message: 'Email envoyé avec succès' };
    } catch (error) {
        console.error('Error sending email:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Erreur lors de l\'envoi de l\'email',
        });
    }
});
