import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section id="projects">
    <CTABanner
      title="هل أنتم مستعدون لبناء منزل أحلامكم؟"
      subtitle="تواصلوا معنا للبدء في تصميم وبناء المسكن الذي يلبي جميع تطلعاتكم."
      button={
        <Link href="#contact">
          <Button>تواصل معنا</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
