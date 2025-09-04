import { Section } from '../layout/Section';

const Contact = () => (
  <Section
    id="contact"
    title="تواصل معنا"
    description="جاهزون للإجابة على جميع استفساراتكم ومساعدتكم في الحصول على منزل أحلامكم"
  >
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      {/* Contact Information */}
      <div className="space-y-6">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-4 text-xl font-semibold text-gray-900">
            معلومات التواصل
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="size-6 shrink-0 text-primary-500">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span className="text-gray-700">info@essamreal.com</span>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="size-6 shrink-0 text-primary-500">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="text-gray-700">+966 59 000 8626</span>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="size-6 shrink-0 text-primary-500">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-gray-700">
                الرياض، المملكة العربية السعودية
              </span>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 rounded-lg p-6">
          <h3 className="mb-4 text-xl font-semibold text-primary-900">
            الرئيس التنفيذي
          </h3>
          <div className="text-center text-primary-800">
            <div className="arabic-text text-lg font-semibold">
              عصام الرصيّص
            </div>
            <div className="mt-1 text-sm">المؤسس والرئيس التنفيذي</div>
          </div>
        </div>

        <div className="rounded-lg bg-gray-50 p-6">
          <h3 className="mb-4 text-xl font-semibold text-gray-900">
            أوقات العمل
          </h3>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>الأحد - الخميس</span>
              <span>9:00 ص - 6:00 م</span>
            </div>
            <div className="flex justify-between">
              <span>الجمعة - السبت</span>
              <span>مغلق</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h3 className="mb-6 text-xl font-semibold text-gray-900">
          أرسل لنا رسالة
        </h3>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              الاسم الكامل
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="اكتب اسمك الكامل"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              رقم الهاتف
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="+966 5X XXX XXXX"
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              نوع الخدمة المطلوبة
            </label>
            <select
              id="service"
              name="service"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">اختر نوع الخدمة</option>
              <option value="design">التصميم المعماري</option>
              <option value="construction">البناء والتشييد</option>
              <option value="consultation">الاستشارات الهندسية</option>
              <option value="turnkey">مشروع متكامل</option>
              <option value="other">خدمة أخرى</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              الرسالة
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="اكتب رسالتك هنا..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primary-500 px-4 py-2 font-medium text-white transition-colors hover:bg-primary-600"
          >
            إرسال الرسالة
          </button>
        </form>
      </div>
    </div>
  </Section>
);

export { Contact };
