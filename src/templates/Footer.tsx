import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<Logo xl />}
        iconList={
          <div className="flex items-center justify-center space-x-4">
            {/* <Link href="https://linkedin.com/company/essamreal">LinkedIn</Link> */}

            {/* <Link href="https://twitter.com/essamreal">Twitter</Link> */}

            <Link
              href="mailto:info@essamreal.com"
              className="flex items-center"
            >
              Email
              <img
                src="/assets/icons/email.svg"
                alt="Email"
                className="mr-2 size-4"
              />
            </Link>

            <Link
              href="https://wa.me/966590008626"
              className="flex items-center"
            >
              WhatsApp
              <img
                src="/whatsapp-256.png"
                alt="WhatsApp"
                className="mr-2 size-4"
              />
            </Link>

            <Link href="tel:+966590008626" className="flex items-center">
              966590008626+
              <img
                src="/assets/icons/phone.svg"
                alt="phone"
                className="mr-2 size-4"
              />
            </Link>
          </div>
        }
      ></CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
