import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from '../MailAdapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '807dca5c04f5e0',
    pass: '2b3b2070654416',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Willian S. Praciano <willian.s.praciano@gmail.com>',
      subject,
      html: body,
    });
  }
}
