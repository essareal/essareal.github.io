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
          <Link href="#features">المزايا</Link>
        </li>
        <li>
          <Link href="#contact">تواصل معنا</Link>
        </li>
        <li>
          <Link href="#invest">استثمر الآن</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'استثمر في العقارات بذكاء مع\n'}
            <span className="text-primary-500">عقارات عصّا</span>
          </>
        }
        description="منصة الاستثمار العقاري المجزّأ في السعودية. ابدأ بـ 100,000 ريال واحصل على عوائد تصل إلى 18% خلال 16 شهر"
        button={
          <Link href="#invest">
            <Button xl>ابدأ الاستثمار</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
