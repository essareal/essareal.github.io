import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    id="about"
    title="لماذا عصام الرصيّص؟"
    description="نحن شركة عصام الرصيّص المتخصصة في بناء وبيع المساكن بجودة عالية وتصميم عصري يتوافق مع الهوية والثقافة السعودية"
  >
    <VerticalFeatureRow
      title="جودة عالية في البناء"
      description="نستخدم أفضل المواد وأحدث التقنيات في البناء لضمان الحصول على مساكن بجودة عالية تدوم طويلاً وتوفر الراحة والأمان"
      image="/assets/images/feature-2.jpg"
      imageAlt="عائلة سعودية سعيدة في منزلها"
    />
    <VerticalFeatureRow
      title="تصميم عصري يتوافق مع هويتنا"
      description="جميع تصاميمنا تراعي الثقافة والهوية السعودية وتلبي احتياجات ومتطلبات الأسر السعودية لتوفير سكن مريح وجميل"
      image="/assets/images/saudi-family.png"
      imageAlt="تصميم عصري متوافق مع الهوية السعودية"
      reverse
    />
    <VerticalFeatureRow
      title="تلبية جميع المتطلبات والاشتراطات"
      description="نحرص على تطبيق جميع المعايير والاشتراطات المطلوبة لضمان حصولكم على منازل تحقق جميع رغباتكم وتطلعاتكم"
      image="/assets/images/feature-3.jpg"
      imageAlt="تلبية المتطلبات والاشتراطات"
    />
  </Section>
);

export { VerticalFeatures };
