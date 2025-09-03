import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section id="invest">
    <CTABanner
      title="ابدأ رحلتك الاستثمارية اليوم"
      subtitle="انضم لأكثر من 500 مستثمر راضٍ واحصل على عوائد تصل إلى 18%"
      button={
        <Link href="#contact">
          <Button>ابدأ الاستثمار الآن</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
