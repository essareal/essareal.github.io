import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    id="about"
    title="لماذا عصام؟"
    description="نحن شركة رائدة في بناء المساكن بجودة عالية وتصميم عصري يتوافق مع الهوية والثقافة السعودية"
  >
    <VerticalFeatureRow
      title="جودة عالية في البناء"
      description="نستخدم أفضل المواد وأحدث التقنيات في البناء لضمان الحصول على مساكن بجودة عالية تدوم طويلاً وتوفر الراحة والأمان"
      image="/assets/images/feature.svg"
      imageAlt="جودة عالية في البناء"
    />
    <VerticalFeatureRow
      title="تصميم عصري يتوافق مع هويتنا"
      description="جميع تصاميمنا تراعي الثقافة والهوية السعودية وتلبي احتياجات ومتطلبات الأسر السعودية لتوفير سكن مريح وجميل"
      image="/assets/images/feature2.svg"
      imageAlt="تصميم عصري متوافق مع الهوية السعودية"
      reverse
    />
    <VerticalFeatureRow
      title="تلبية جميع المتطلبات والاشتراطات"
      description="نحرص على تطبيق جميع المعايير والاشتراطات المطلوبة لضمان حصولكم على منازل تحقق جميع رغباتكم وتطلعاتكم"
      image="/assets/images/feature3.svg"
      imageAlt="تلبية المتطلبات والاشتراطات"
    />
  </Section>
);

export { VerticalFeatures };
