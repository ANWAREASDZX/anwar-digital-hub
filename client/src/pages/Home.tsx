// Night Signal design philosophy: asymmetric editorial sections convert ANWAR's work into a clear visitor journey.
import {
  ArrowUpLeft,
  BookOpen,
  Braces,
  Code2,
  Github,
  Instagram,
  Layers3,
  MessageCircle,
  Palette,
  Send,
  Sparkles,
} from "lucide-react";

const telegramBot = "https://t.me/ANWARStudioBot?start=site_home";
const telegramServices = "https://t.me/ANWARStudioBot?start=site_services";
const telegramProducts = "https://t.me/ANWARStudioBot?start=site_products";
const telegramContact = "https://t.me/ANWARStudioBot?start=site_contact";
const instagram = "https://www.instagram.com/tiger.3325838/";
const github = "https://github.com/ANWAREASDZX";

const services = [
  { no: "01", title: "هوية وتصميم بصري", copy: "هويات وشاشات ومحتوى بصري يجعل الفكرة واضحة وقابلة للتذكر.", icon: <Palette size={21} /> },
  { no: "02", title: "واجهات وتجارب رقمية", copy: "واجهات منظمة تحترم المستخدم وتحوّل المسار المعقد إلى تجربة عملية.", icon: <Layers3 size={21} /> },
  { no: "03", title: "تطوير وبرمجة", copy: "صفحات ومشاريع رقمية مبنية بخطوات واضحة وقابلة للتوسع لاحقًا.", icon: <Code2 size={21} /> },
  { no: "04", title: "موارد ومنتجات رقمية", copy: "كتب وقوالب وملفات تساعد المستقلين وأصحاب المشاريع على العمل بسرعة ووضوح.", icon: <BookOpen size={21} /> },
];

const paths = [
  { no: "01", title: "صمّم", text: "نحوّل الفكرة إلى نظام بصري له معنى واتجاه.", icon: <Palette size={20} /> },
  { no: "02", title: "ابنِ", text: "نحوّل النظام إلى واجهة أو مشروع يعمل بسلاسة.", icon: <Braces size={20} /> },
  { no: "03", title: "وسّع", text: "نترك لك أصولًا وموارد قابلة لإعادة الاستخدام والنمو.", icon: <Sparkles size={20} /> },
];

const process = [
  ["01", "استكشف", "نحدد النتيجة المطلوبة، الجمهور، وأفضل نقطة بداية."],
  ["02", "رتّب", "نحوّل المتطلبات إلى قرار بصري أو تقني واضح."],
  ["03", "ابنِ", "نصمم ونطوّر مع مراجعات منظمة ومسار قابل للقياس."],
  ["04", "أطلق", "نسلم أصلًا جاهزًا للاستخدام وخطوة تالية عملية."],
];

const entryPaths = [
  { no: "01", title: "أحتاج هوية أو تصميمًا بصريًا", text: "نرتّب الفكرة ونحوّلها إلى نظام بصري واضح وقابل للاستخدام.", href: telegramServices, icon: <Palette size={20} /> },
  { no: "02", title: "أحتاج صفحة أو تجربة رقمية", text: "نبني واجهة أو مشروعًا رقميًا يشرح نفسه ويخدم هدفه.", href: telegramServices, icon: <Code2 size={20} /> },
  { no: "03", title: "أبحث عن قالب أو مورد جاهز", text: "تابع إطلاق الكتب والقوالب والموارد العملية القادمة.", href: telegramProducts, icon: <BookOpen size={20} /> },
];

export default function Home() {
  return (
    <div className="site-shell">
      <div className="page-wrap">
        <header className="site-nav">
          <a className="brand" href="#top" aria-label="ANWAR الصفحة الرئيسية">
            <img src="/anwar-digital-hub/assets/logo.png" alt="رمز ANWAR" />
            <span className="brand-word">ANWAR<span className="brand-dot">.</span></span><span className="brand-sub">DESIGN / CODE</span>
          </a>
          <nav className="nav-links" aria-label="التنقل الرئيسي">
            <a href="#services">الخدمات</a>
            <a href="#start-here">ابدأ هنا</a>
            <a href="#products">المنتجات</a>
            <a href="#contact">تواصل</a>
          </nav>
          <a className="nav-cta" href={telegramBot} target="_blank" rel="noreferrer">ابدأ محادثة</a>
        </header>
      </div>

      <main id="top">
        <section className="hero">
          <div className="hero-media" aria-hidden="true" />
          <div className="page-wrap hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Design · Code · Digital Products</span>
              <h1>أصمّم الوضوح.<em>وأبني ما يعمل.</em></h1>
              <p>ANWAR مساحة عمل تجمع التصميم الجرافيكي والبرمجة والموارد الرقمية في مسار واحد: فكرة مفهومة، تجربة منظمة، وأصل قابل للاستخدام.</p>
              <div className="hero-actions">
                <a className="button-primary" href={telegramBot} target="_blank" rel="noreferrer"><Send size={18} /> ابدأ من البوت</a>
                <a className="button-quiet" href="#services">استكشف الخدمات <ArrowUpLeft size={17} /></a>
              </div>
            </div>
            <aside className="hero-note">
              <b>01 / SIGNAL</b>
              <span>تصميم متعمد، بناء عملي، وموارد رقمية تساعدك على التحرك بثقة.</span>
            </aside>
          </div>
        </section>

        <section className="signal-bar" aria-label="مجالات ANWAR">
          <div className="page-wrap signal-inner">
            <span>GRAPHIC DESIGN</span><span>WEB DEVELOPMENT</span><span>DIGITAL BOOKS</span><span>CODE TEMPLATES</span>
          </div>
        </section>

        <section className="section" id="services">
          <div className="page-wrap">
            <div className="section-intro">
              <div><span className="eyebrow">01 / Services</span><h2>عمل منظم من الفكرة إلى الأصل.</h2></div>
              <p>لا أتعامل مع التصميم والبرمجة كخدمتين منفصلتين؛ بل كأدوات لبناء حضور أو منتج رقمي أكثر وضوحًا. اختر المسار الذي يخدم المرحلة الحالية من مشروعك.</p>
            </div>
            <div className="service-layout">
              <div className="service-visual"><div className="visual-caption">نظام بصري + منطق تقني + تسليم قابل للاستخدام</div></div>
              <div className="service-list">
                {services.map((service) => <article className="service-item" key={service.no}>
                  <span className="service-index">{service.no}</span><span className="service-icon">{service.icon}</span>
                  <div><h3>{service.title}</h3><p>{service.copy}</p></div>
                </article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section start-here-section" id="start-here">
          <div className="page-wrap">
            <div className="section-intro">
              <div><span className="eyebrow">00 / Start Here</span><h2>اختر نقطة البداية المناسبة.</h2></div>
              <p>لا تحتاج إلى شرح طويل. اختر ما تريد ترتيبه الآن، وأرسل رسالة قصيرة؛ سنحوّلها إلى خطوة عملية واضحة.</p>
            </div>
            <div className="entry-grid">
              {entryPaths.map((path) => <a className="entry-card" href={path.href} target="_blank" rel="noreferrer" key={path.no}>
                <div className="entry-card-top"><span className="service-index">{path.no}</span><span className="path-icon">{path.icon}</span></div>
                <h3>{path.title}</h3><p>{path.text}</p><span className="entry-link">أرسل التفاصيل <ArrowUpLeft size={16} /></span>
              </a>)}
            </div>
          </div>
        </section>

        <section className="section" id="focus">
          <div className="page-wrap">
            <div className="section-intro">
              <div><span className="eyebrow">02 / Focus</span><h2>ثلاثة مسارات. نظام واحد.</h2></div>
              <p>تتلاقى الخدمات في نقطة واحدة: أن يكون ما تقدمه واضحًا، مفيدًا، ومرتبًا بما يكفي ليستمر بعد الإطلاق.</p>
            </div>
            <div className="path-grid">
              {paths.map((path) => <article className="path-card" data-no={path.no} key={path.no}>
                <div className="path-icon">{path.icon}</div><h3>{path.title}</h3><p>{path.text}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section className="product-band" id="products">
          <div className="page-wrap product-band-inner">
            <div className="product-copy">
              <span className="eyebrow">03 / Digital Library</span>
              <h2>موارد تجعل التنفيذ أسرع.</h2>
              <p>كتب وأدلة عملية وقوالب برمجية وموارد تصميمية تُبنى لتختصر وقتك وتساعدك على إنجاز عمل أفضل. ابدأ برسالة «مورد» لتصلك الإصدارات الأولى عند إطلاقها.</p>
              <a className="button-primary product-cta" href={telegramProducts} target="_blank" rel="noreferrer"><BookOpen size={18} /> أرسل «مورد»</a>
              <span className="availability">المكتبة تُبنى على احتياجات حقيقية</span>
            </div>
            <div className="product-visual" role="img" aria-label="تمثيل بصري لمكتبة ANWAR للمنتجات الرقمية" />
          </div>
        </section>

        <section className="section">
          <div className="page-wrap">
            <div className="section-intro">
              <div><span className="eyebrow">04 / Process</span><h2>طريقة عمل يمكن فهمها.</h2></div>
              <p>المسار القصير والواضح أهم من كثرة الخطوات. يبدأ كل تعاون بهدف مفهوم وينتهي بأصل يمكن استخدامه ومراجعته وتطويره.</p>
            </div>
            <div className="process-line">
              {process.map(([no, title, text]) => <article className="process-step" key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="page-wrap">
            <div className="contact-panel">
              <aside className="contact-label"><img src="/anwar-digital-hub/assets/logo.png" alt="رمز ANWAR" /><p>ابدأ برسالة قصيرة تصف فكرتك أو ما تريد ترتيبه. سنحدد أفضل خطوة تالية بوضوح.</p></aside>
              <div className="contact-main">
                <span className="eyebrow">05 / Contact</span>
                <h2>لنحوّل الفكرة<br />إلى <span>مسار واضح.</span></h2>
                <p>البوت الرسمي هو المسار الأسرع لطلبات الخدمات والمنتجات والدعم. أرسل نوع احتياجك ومرحلتك الحالية، وسأقترح لك نقطة البداية المناسبة. ويمكنك أيضًا متابعة العمل والموارد عبر Instagram وGitHub.</p>
                <div className="hero-actions">
                  <a className="button-primary" href={telegramContact} target="_blank" rel="noreferrer"><MessageCircle size={18} /> ابدأ طلبك عبر البوت</a>
                </div>
                <div className="social-row" style={{ marginTop: "1.2rem" }}>
                  <a className="social-link" href={instagram} target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a>
                  <a className="social-link" href={github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="page-wrap footer">
        <span>© 2026 ANWAR — Design & Code.</span>
        <span>صُممت هذه المساحة لتكون نقطة الانطلاق الرسمية عبر الإنترنت.</span>
      </footer>
    </div>
  );
}
