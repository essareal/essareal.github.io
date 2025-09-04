import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section id="projects">
    <CTABanner
      title="اكتشف مشاريعنا المميزة"
      subtitle="مساكن عصرية بتصميم رائع وجودة عالية تتوافق مع الهوية السعودية"
      button={
        <Link href="#contact">
          <Button>تواصل معنا</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
