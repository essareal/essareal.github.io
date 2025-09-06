import { Section } from '../layout/Section';

const Vision = () => (
  <Section
    id="vision"
    title="رؤيتنا ورسالتنا"
    description="نسعى لتكون رؤيتنا ورسالتنا دليلاً لنا في بناء مساكن تتوافق مع هويتنا وثقافتنا السعودية"
  >
    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* الرؤية */}
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary-100">
          <svg
            className="size-8 text-primary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </div>
        <h3 className="mb-4 text-xl font-semibold text-gray-900">رؤيتنا</h3>
        <p className="leading-relaxed text-gray-600">
          أن نكون الشركة الرائدة في بناء وتصميم المساكن العصرية الجيدة للأسر
          السعودية، التي تتوافق مع ثقافتنا وهويتنا الوطنية، وتلبي جميع التطلعات
          والاحتياجات.
        </p>
      </div>

      {/* الرسالة */}
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary-100">
          <svg
            className="size-8 text-primary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="mb-4 text-xl font-semibold text-gray-900">رسالتنا</h3>
        <p className="leading-relaxed text-gray-600">
          نلتزم ببناء وبيع المساكن بجودة عالية وتصميم عصري رائع، تحقق جميع
          المتطلبات والاشتراطات للأهالي، وتوفر لهم سكناً مريحاً وجميلاً يتوافق
          مع هويتنا السعودية ويحقق جميع رغباتهم وتطلعاتهم.
        </p>
      </div>

      {/* الأهداف */}
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary-100">
          <svg
            className="size-8 text-primary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        </div>
        <h3 className="mb-4 text-xl font-semibold text-gray-900">أهدافنا</h3>
        <p className="leading-relaxed text-gray-600">
          نهدف إلى أن نكون قريبين جداً من الشباب السعودي الذين يرغبون في السكن
          في هذه المساكن، ونبني ونبيع لهم مساكن تناسب تطلعاتهم وتتوافق مع هويتهم
          وثقافتهم، دون الخروج عن ثقافتنا وهويتنا السعودية الأصيلة.
        </p>
      </div>
    </div>
  </Section>
);

export { Vision };
