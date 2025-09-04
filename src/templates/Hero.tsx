import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#about">عن الشركة</Link>
        </li>
        <li>
          <Link href="#vision">رؤيتنا</Link>
        </li>
        <li>
          <Link href="#projects">مشاريعنا</Link>
        </li>
        <li>
          <Link href="#contact">تواصل معنا</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'نبني أحلامكم بجودة عالية مع\n'}
            <span className="text-primary-500">عصام</span>
          </>
        }
        description="شركة رائدة في بناء وتصميم المساكن العصرية التي تتوافق مع الهوية السعودية وتلبي جميع احتياجات ومتطلبات الأسر السعودية"
        button={
          <Link href="#about">
            <Button xl>تعرف على خدماتنا</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
