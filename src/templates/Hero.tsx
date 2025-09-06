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
          <Link href="#about">خدماتنا</Link>
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
            <span className="text-primary-500">عصام الرصيّص</span>
          </>
        }
        description="شركة عصام الرصيّص تأسست عام 2025، نتخصص في بناء وبيع المساكن بجودة عالية وتصميم عصري رائع يتوافق مع الهوية السعودية ويحقق جميع متطلبات ورغبات الأسر السعودية"
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
