import React from 'react';

const Web3Form = () => {
  return (
    <section className="contact-section">
      <div className="contact-intro mb-4">
        <h2 className="contact-title text-primary-900">تواصل معنا</h2>
      </div>

      <p className="contact-description">
        املأ النموذج أدناه وسنعاود الاتصال بك في أقرب وقت ممكن.
      </p>
      <form
        className="contact-form"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="e265db7f-6227-4fe8-acd2-52aae1650f86"
        />
        <input
          type="hidden"
          name="subject"
          value="New Contact Form Submission from Web3Forms"
        />
        <input type="hidden" name="from_name" value="My Website" />
        {/* More custom ization options available in the docs: https://docs.web3forms.com */}

        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              الاسم
            </label>
            <input
              id="name"
              name="name"
              className="form-input"
              placeholder="اسمك"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              البريد الإلكتروني
            </label>
            <input
              id="email"
              name="email"
              className="form-input"
              placeholder="بريدك الإلكتروني"
              type="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              الهاتف
            </label>
            <input
              id="phone"
              name="phone"
              className="form-input"
              placeholder="+966"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              الرسالة
            </label>
            <textarea
              className="form-textarea"
              id="message"
              name="message"
              placeholder="رسالتك"
            ></textarea>
          </div>
        </div>
        <button className="form-submit" type="submit">
          إرسال الرسالة
        </button>
      </form>
    </section>
  );
};

export { Web3Form };
