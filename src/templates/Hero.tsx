import { motion } from 'framer-motion';
import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background
    color="bg-transparent"
    imageUrl="/assets/images/saudi-family.png"
    blur="blur-2xl"
  >
    <div className="bg-white bg-opacity-50 backdrop-blur-lg">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />} textColor="text-gray-900">
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
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
        </motion.div>
      </Section>
    </div>
  </Background>
);

export { Hero };
