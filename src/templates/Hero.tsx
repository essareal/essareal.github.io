import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-white">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#vision"></Link>
        </li>
        <li>
          <Link href="#values"></Link>
        </li>
        <li>
          <Link href="#contact"></Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section
      id="vision"
      title="رؤيتنا"
      description="نطور مساكن تعبر عن ثقافتنا وتعزز حيوتنا، وتمنحك السكون."
      yPadding="pt-8 pb-16"
    >
      <div className="text-center"></div>
    </Section>
  </Background>
);

export { Hero };
