import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    id="features"
    title="لماذا عقارات عصّا؟"
    description="استثمر بذكاء واحصل على عوائد مضمونة مع منصتنا المتخصصة في الاستثمار العقاري المجزّأ"
  >
    <VerticalFeatureRow
      title="عوائد مضمونة تصل إلى 18%"
      description="احصل على عوائد استثمارية ثابتة ومضمونة تصل إلى 18% سنوياً خلال فترة الاستثمار البالغة 16 شهراً"
      image="/assets/images/feature.svg"
      imageAlt="عوائد استثمارية عالية"
    />
    <VerticalFeatureRow
      title="استثمار آمن ومضمون"
      description="جميع استثماراتنا مدروسة بعناية ومضمونة بأصول عقارية حقيقية في أفضل المواقع بالمملكة العربية السعودية"
      image="/assets/images/feature2.svg"
      imageAlt="استثمار آمن ومضمون"
      reverse
    />
    <VerticalFeatureRow
      title="ابدأ بـ 100,000 ريال فقط"
      description="لا تحتاج لملايين الريالات للاستثمار في العقارات. ابدأ رحلتك الاستثمارية بمبلغ 100,000 ريال سعودي فقط"
      image="/assets/images/feature3.svg"
      imageAlt="استثمار بمبلغ صغير"
    />
  </Section>
);

export { VerticalFeatures };
