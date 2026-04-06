/**
 * Replaces privacyBody in legalStaticHtml.json with full Arabic parity vs PrivacyPolicy/page.js
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const legalPath = path.join(__dirname, "../src/messages/locale/ar/legalStaticHtml.json");

const th = 'style="padding:0.75rem;border:1px solid #dee2e6;text-align:left"';
const td = 'style="padding:0.75rem;border:1px solid #dee2e6"';
const theadBg = 'style="background:#f8f9fa"';

const privacyBody = `<div class="cardsGrid">
<div class="card3d">
<p class="privacy-text" style="font-style:italic;color:#666;margin-bottom:2rem">آخر تحديث: 2 أبريل 2026</p>
<p class="privacy-text">مرحبًا بك في fastvidl.com («نحن» أو «لنا» أو «خاصتنا»). خصوصيتك تهمنا. تشرح سياسة الخصوصية هذه بلغة واضحة ومباشرة كيف نتعامل مع المعلومات عند استخدام خدمة تنزيل المحتوى لإنستغرام وفيسبوك وبنترست على fastvidl.com («الموقع» أو «الخدمة»).</p>
</div>
<div class="card3d">
<h2>التزامنا تجاهك</h2>
<p class="privacy-text">نؤمن بالشفافية. تخبرك هذه السياسة بالضبط ما المعلومات التي نجمعها ولماذا نجمعها وما خياراتك المتاحة. كتبناها بلغة بسيطة لأن سياسات الخصوصية لا ينبغي أن تتطلب شهادة في القانون لفهمها.</p>
</div>
<div class="card3d">
<h2>ما المعلومات التي نجمعها</h2>
<h3>المعلومات التي تقدمها لنا</h3>
<p class="privacy-text"><strong>روابط المحتوى:</strong> عند لصق رابط من إنستغرام (ريلز، فيديوهات، صور، قصص، IGTV) أو فيسبوك (ريلز، فيديوهات) أو بنترست (صور، فيديوهات) لتنزيل المحتوى، نعالج هذا الرابط مؤقتًا لتقديم خدمتنا. <strong>مهم:</strong> لا نخزّن هذه الروابط بشكل دائم ولا المحتوى المنزّل.</p>
<p class="privacy-text"><strong>معلومات الاتصال:</strong> إذا تواصلت معنا عبر نموذج الاتصال، نجمع اسمك وعنوان بريدك الإلكتروني فقط للرد على استفسارك.</p>
<h3>المعلومات التي تُجمع تلقائيًا</h3>
<p class="privacy-text">عند زيارة موقعنا، تُجمع تلقائيًا معلومات تقنية معينة:</p>
<ul class="privacy-list">
<li><strong>معلومات المتصفح:</strong> النوع والإصدار وإعدادات اللغة</li>
<li><strong>معلومات الجهاز:</strong> نوع الجهاز ونظام التشغيل ودقة الشاشة</li>
<li><strong>بيانات الاستخدام:</strong> الصفحات التي تزورها والوقت الذي تقضيه على موقعنا ومصدرك (عناوين الإحالة) وما تنقر عليه</li>
<li><strong>بيانات الموقع:</strong> موقعك الجغرافي التقريبي (مستوى الدولة أو المنطقة فقط، استنادًا إلى عنوان IP)</li>
<li><strong>ملفات تعريف الارتباط (كوكيز):</strong> ملفات نصية صغيرة تُخزَّن على جهازك لتحسين الوظائف وتجربة المستخدم</li>
</ul>
</div>
<div class="card3d">
<h2>ما لا نجمعه</h2>
<p class="privacy-text">نريد أن نكون واضحين تمامًا بشأن ما لا نفعله:</p>
<ul class="privacy-list">
<li>لا نطلب منك إنشاء حساب أو تسجيل الدخول</li>
<li>لا نخزّن فيديوهاتك أو صورك أو أي محتوى منزّل</li>
<li>لا نتتبع حساباتك على إنستغرام أو فيسبوك أو بنترست</li>
<li>لا نصل إلى بيانات اعتماد وسائل التواصل أو كلمات المرور</li>
<li>لا نجمع وثائق تعريف شخصية رسمية</li>
<li>لا نخزّن عناوين URL التي ترسلها بشكل دائم</li>
<li>لا نجمع معلومات دفع (خدمتنا مجانية)</li>
<li>لا نراقب أي محتوى تنزّله</li>
</ul>
</div>
<div class="card3d">
<h2>كيف نستخدم معلوماتك</h2>
<p class="privacy-text">نستخدم المعلومات المجمّعة لأغراض مشروعة فقط:</p>
<ul class="privacy-list">
<li><strong>تقديم الخدمة:</strong> معالجة عناوين URL من إنستغرام وفيسبوك وبنترست لتوفير وظيفة التنزيل</li>
<li><strong>تحسين الموقع:</strong> تحليل كيفية استخدام الزوار لموقعنا لجعله أفضل وأسرع</li>
<li><strong>العمليات التقنية:</strong> الحفاظ على الأمن ومنع الإساءة وتحسين الأداء</li>
<li><strong>دعم العملاء:</strong> الرد على أسئلتك ومساعدتك في حل المشكلات</li>
<li><strong>التحليلات:</strong> فهم سلوك الزوار لتحسين تجربة المستخدم</li>
<li><strong>الإعلان:</strong> عرض إعلانات ذات صلة عبر شبكات إعلانات الطرف الثالث (مفصّل أدناه)</li>
</ul>
</div>
<div class="card3d">
<h2>ملفات تعريف الارتباط وتقنيات التتبع</h2>
<p class="privacy-text">نستخدم ملفات تعريف الارتباط ليعمل موقعنا بشكل صحيح ولنوفر لك تجربة أفضل.</p>
<h3>ملفات أساسية (مطلوبة)</h3>
<p class="privacy-text">هذه الملفات ضرورية لعمل الموقع ولا يمكن تعطيلها:</p>
<ul class="privacy-list">
<li>إدارة الجلسة والأمان</li>
<li>الوظائف الأساسية للموقع</li>
<li>معالجة إرسال النماذج</li>
</ul>
<h3>ملفات تحليلات (اختيارية)</h3>
<p class="privacy-text"><strong>Google Analytics:</strong> نستخدم Google Analytics لفهم كيفية تفاعل الزوار مع موقعنا:</p>
<ul class="privacy-list">
<li>أي الصفحات الأكثر شعبية</li>
<li>مدة بقاء الأشخاص على موقعنا</li>
<li>الأجهزة والمتصفحات المستخدمة</li>
<li>الموقع الجغرافي العام (الدولة/المنطقة)</li>
</ul>
<p class="privacy-text"><strong>خيارك:</strong> يمكنك إلغاء الاشتراك في Google Analytics بتثبيت <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" class="terms-link">إضافة المتصفح لإلغاء Google Analytics</a>.</p>
<h3>ملفات إعلانات (اختيارية)</h3>
<p class="privacy-text">نعرض إعلانات لإبقاء خدمتنا مجانية. تفاصيل إضافية في قسم الإعلانات أدناه.</p>
</div>
<div class="card3d">
<h2>إعلانات الطرف الثالث — Google AdSense وEzoic وAdX</h2>
<h3>كيف يعمل الإعلان على موقعنا</h3>
<p class="privacy-text">يستخدم FastVidl <strong>Google AdSense</strong> (خدمة إعلانات طرف ثالث من Google LLC) و<strong>Ezoic</strong> (منصة منفصلة قد تدير إعلانات طرف ثالث وتحليلات وتحسين الموقع) لعرض الإعلانات على موقعنا. قد يُستخدم Google Ad Manager / <strong>AdX</strong> حيث ينطبق ذلك عبر هؤلاء الشركاء. إليك ما تحتاج معرفته:</p>
<p class="privacy-text"><strong>إعلان قائم على ملفات الارتباط:</strong> قد يستخدم هذا الموقع خدمات Ezoic لإدارة إعلانات الطرف الثالث وتوفير التحليلات. تستخدم Ezoic ملفات تعريف الارتباط لتتبع معلومات الجلسة وتوفير تجربة مخصصة عبر أجهزة متعددة. نستخدم Ezoic لتوفير التخصيص وخدمات التحليل على هذا الموقع؛ تنطبق سياسة خصوصية Ezoic ويمكن مراجعتها هنا: <a href="https://www.ezoic.com/privacy-policy/" target="_blank" rel="noopener noreferrer" class="terms-link">https://www.ezoic.com/privacy-policy/</a>. قد تستخدم Ezoic مجموعة من التقنيات لتحسين تجربة المستخدم وإدارة الإعلان بفعالية.</p>
<p class="privacy-text"><strong>Google AdSense:</strong> يستخدم Google AdSense ملفات تعريف الارتباط وإشارات الويب لعرض إعلانات بناءً على نشاط تصفحك عبر الإنترنت، وليس فقط على موقعنا.</p>
<h3>إعلانات مخصصة مقابل غير مخصصة</h3>
<ul class="privacy-list">
<li><strong>إعلانات مخصصة:</strong> بناءً على اهتماماتك وسجل التصفح وزياراتك السابقة لـ fastvidl.com ومواقع أخرى</li>
<li><strong>إعلانات غير مخصصة:</strong> بناءً فقط على محتوى الصفحة التي تشاهدها حاليًا</li>
</ul>
<h3>ما يؤثر على الإعلانات التي تراها</h3>
<p class="privacy-text">قد تستند الإعلانات المعروضة عبر Google AdSense وشبكات الشركاء إلى:</p>
<ul class="privacy-list">
<li>زياراتك السابقة لـ fastvidl.com</li>
<li>سجل تصفحك على مواقع أخرى</li>
<li>اهتماماتك وأنماط سلوكك على الإنترنت</li>
<li>موقعك الجغرافي التقريبي</li>
<li>محتوى الصفحة التي تشاهدها</li>
</ul>
<h3>ملف تعريف الارتباط DoubleClick</h3>
<p class="privacy-text">يستخدم Google ملف DoubleClick لمساعدة عرض إعلانات ذات صلة. لا يحتوي هذا الملف على معلومات تعريف شخصية مثل اسمك أو بريدك الإلكتروني.</p>
<h3>خياراتك الإعلانية — تحكم بنفسك</h3>
<p class="privacy-text">لديك عدة خيارات للتحكم في الإعلانات التي تراها:</p>
<ol style="padding-left:2rem;margin-bottom:1.5rem">
<li style="margin-bottom:1rem"><strong>إلغاء الإعلانات المخصصة:</strong><ul style="margin-top:0.5rem;padding-left:1.5rem"><li>زر <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" class="terms-link">إعدادات إعلانات Google</a> لإيقاف الإعلانات المخصصة</li></ul></li>
<li style="margin-bottom:1rem"><strong>أدوات إلغاء الاشتراك في القطاع:</strong><ul style="margin-top:0.5rem;padding-left:1.5rem"><li>مستخدمو أمريكا الشمالية: <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer" class="terms-link">aboutads.info/choices</a></li><li>مستخدمو أوروبا: <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" class="terms-link">youronlinechoices.com</a></li></ul></li>
<li style="margin-bottom:1rem"><strong>إعدادات المتصفح:</strong><ul style="margin-top:0.5rem;padding-left:1.5rem"><li>احظر أو احذف ملفات الارتباط عبر إعدادات الخصوصية في المتصفح</li><li><em>ملاحظة: قد يؤثر ذلك على وظائف الموقع</em></li></ul></li>
</ol>
<h3>اعرف المزيد عن ممارسات Google</h3>
<ul class="privacy-list">
<li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="terms-link">سياسة خصوصية Google</a></li>
<li><a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" class="terms-link">كيف تستخدم Google المعلومات</a></li>
<li><a href="https://support.google.com/adsense/answer/48182" target="_blank" rel="noopener noreferrer" class="terms-link">نظرة عامة على إعلانات Google</a></li>
</ul>
</div>
<div class="card3d">
<h2>ترجمة الموقع (Google Translate)</h2>
<p class="privacy-text">يقدّم FastVidl ترجمة اختيارية للصفحات عبر <strong>Google Website Translator</strong> (Google LLC). عند اختيار لغة من قائمة الرأس، تحمّل Google سكربتات من <strong>translate.google.com</strong> لترجمة النص الظاهر في متصفحك. قد تستخدم Google ملفات تعريف ارتباط (مثل <code>googtrans</code>) لتذكر اختيار اللغة. تتم الترجمة على جهازك عبر خدمة Google؛ لا نرسل محتواك إلى خوادمنا للترجمة.</p>
<p class="privacy-text">راجع <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="terms-link">سياسة خصوصية Google</a> لمعرفة كيف تتعامل Google مع البيانات. يمكنك مسح ملفات ترجمة المتصفح أو اختيار اللغة الأصلية في القائمة لإيقاف الميزة.</p>
</div>
<div class="card3d">
<h2>الاحتفاظ بالبيانات — كم نحتفظ بالمعلومات</h2>
<p class="privacy-text">نؤمن بالاحتفاظ بالبيانات فقط بالقدر اللازم:</p>
<div style="overflow-x:auto;margin-bottom:1.5rem">
<table style="width:100%;border-collapse:collapse;margin-top:1rem">
<thead><tr ${theadBg}><th ${th}>نوع البيانات</th><th ${th}>مدة الاحتفاظ</th><th ${th}>السبب</th></tr></thead>
<tbody>
<tr><td ${td}>عناوين URL للمحتوى (إنستغرام، فيسبوك، بنترست)</td><td ${td}>معالجة فورية فقط — تُستبعد فورًا</td><td ${td}>لا تُخزَّن بعد التنزيل</td></tr>
<tr><td ${td}>بيانات التحليلات (Google Analytics)</td><td ${td}>26 شهرًا</td><td ${td}>معيار الصناعة للتحليل</td></tr>
<tr><td ${td}>استفسارات نموذج الاتصال</td><td ${td}>سنة واحدة أو حتى الحل</td><td ${td}>دعم العملاء</td></tr>
<tr><td ${td}>ملفات جلسة المتصفح</td><td ${td}>حتى إغلاق المتصفح</td><td ${td}>وظائف أساسية</td></tr>
<tr><td ${td}>ملفات دائمة</td><td ${td}>حسب ما يحدده المزوّد</td><td ${td}>التحليلات والإعلان</td></tr>
</tbody>
</table>
</div>
</div>
<div class="card3d">
<h2>مشاركة البيانات والإفصاح</h2>
<p class="privacy-text">نسعى لاتباع مبادئ الخصوصية الكبرى (مثل GDPR وCCPA) حيث ينطبق ذلك، وسنحدّث هذه السياسة مع تطور القوانين. نشارك معلومات تقنية محدودة مع Ezoic لأغراض إدارة الإعلان وتحسين الموقع وتحليلات الزيارات.</p>
<p class="privacy-text">نشارك معلومات محدودة فقط مع:</p>
<h3>مزوّدي الخدمة الذين نثق بهم</h3>
<ul class="privacy-list">
<li><strong>Google Analytics وAdSense:</strong> كما وُصف في الأقسام أعلاه</li>
<li><strong>Ezoic:</strong> إعلان وتخصيص وتحليلات كما وُصف أعلاه وفي سياسة خصوصية Ezoic</li>
<li><strong>مزوّدو الاستضافة:</strong> لإبقاء موقعنا متصلًا وسريعًا</li>
<li><strong>خدمات CDN:</strong> لتوصيل المحتوى بسرعة حول العالم</li>
</ul>
<p class="privacy-text">جميع مزوّدي الخدمة ملزمون تعاقديًا بحماية معلوماتك واستخدامها للأغراض المحددة فقط.</p>
<h3>المتطلبات القانونية</h3>
<p class="privacy-text">قد نفصح عن المعلومات عندما يقتضي القانون:</p>
<ul class="privacy-list">
<li>القانون أو اللوائح أو الإجراءات القانونية</li>
<li>أوامر المحكمة أو طلبات الحكومة</li>
<li>حماية حقوقنا أو ممتلكاتنا أو سلامتنا</li>
<li>حماية حقوق وسلامة مستخدمينا</li>
</ul>
</div>
<div class="card3d">
<h2>نقل البيانات دوليًا</h2>
<p class="privacy-text">يعمل FastVidl عالميًا ويخدم المستخدمين في أنحاء العالم. قد تُنقل معلوماتك وتُعالَج في دول غير بلد إقامتك، بما في ذلك:</p>
<ul class="privacy-list">
<li>الولايات المتحدة (حيث يقع كثير من مزوّدي خدمتنا)</li>
<li>دول الاتحاد الأوروبي</li>
<li>دول أخرى يعمل فيها شركاء البنية التحتية لدينا</li>
</ul>
<p class="privacy-text"><strong>حمايتك:</strong> نضمن وجود ضمانات مناسبة لحماية معلوماتك وفقًا لسياسة الخصوصية هذه وقوانين حماية البيانات المعمول بها، بما في ذلك:</p>
<ul class="privacy-list">
<li>البنود التعاقدية القياسية (SCCs) لنقل بيانات الاتحاد الأوروبي</li>
<li>تدابير حماية كافية كما يتطلب القانون</li>
<li>الامتثال لـ GDPR وCCPA ولوائح الخصوصية الأخرى</li>
</ul>
</div>
<div class="card3d">
<h2>حقوق الخصوصية لديك</h2>
<p class="privacy-text">تعتمد حقوقك على مكان إقامتك، لكننا نحترم حقوق الخصوصية لجميع المستخدمين.</p>
<h3>حقوق جميع المستخدمين</h3>
<ul class="privacy-list">
<li><strong>الوصول:</strong> طلب معلومات عن البيانات التي نحتفظ بها عنك</li>
<li><strong>التصحيح:</strong> طلب تصحيح معلومات غير دقيقة</li>
<li><strong>الحذف:</strong> طلب حذف معلوماتك</li>
<li><strong>إلغاء الاشتراك:</strong> إلغاء الاشتراك في اتصالات تسويقية</li>
<li><strong>التحكم في ملفات الارتباط:</strong> إدارة ملفات الارتباط عبر إعدادات المتصفح</li>
</ul>
<h3>حقوق إضافية لمستخدمي الاتحاد الأوروبي/المنطقة الاقتصاد الأوروبي/المملكة المتحدة (GDPR)</h3>
<ul class="privacy-list">
<li><strong>قابلية نقل البيانات:</strong> استلام بياناتك بصيغة قابلة للنقل</li>
<li><strong>تقييد المعالجة:</strong> الحد من كيفية معالجة بياناتك</li>
<li><strong>الاعتراض على المعالجة:</strong> الاعتراض على أنواع معينة من المعالجة</li>
<li><strong>سحب الموافقة:</strong> سحب الموافقة في أي وقت</li>
<li><strong>تقديم شكاوى:</strong> تقديم شكاوى لدى السلطات الإشرافية</li>
</ul>
<h3>حقوق إضافية لسكان كاليفورنيا (CCPA/CPRA)</h3>
<ul class="privacy-list">
<li><strong>حق المعرفة:</strong> ما المعلومات الشخصية التي نجمعها عنك</li>
<li><strong>حق المعرفة:</strong> هل نبيع معلوماتك أو نفصح بها (نحن لا نفعل)</li>
<li><strong>حق إلغاء الاشتراك:</strong> رفض بيع المعلومات الشخصية</li>
<li><strong>حق عدم التمييز:</strong> خدمة متساوية بغض النظر عن خيارات الخصوصية</li>
<li><strong>حق الحذف:</strong> طلب حذف معلوماتك</li>
<li><strong>حق التصحيح:</strong> طلب تصحيح معلومات غير دقيقة</li>
</ul>
</div>
<div class="card3d">
<h2>خصوصية الأطفال</h2>
<p class="privacy-text">FastVidl غير مخصص للأطفال.</p>
<ul class="privacy-list">
<li><strong>متطلب العمر:</strong> يجب أن يكون عمر المستخدمين 13 عامًا على الأقل (16 في المنطقة الاقتصادية الأوروبية)</li>
<li><strong>عدم الجمع عن قصد:</strong> لا نجمع عن علم معلومات من الأطفال</li>
<li><strong>إجراء الوالدين:</strong> إذا كنت تعتقد أن طفلًا قد زوّدنا بمعلومات، تواصل معنا فورًا وسنحذفها</li>
</ul>
</div>
<div class="card3d">
<h2>تدابير أمان البيانات</h2>
<p class="privacy-text">نستخدم <strong>Cloudflare</strong> لتوصيل المحتوى والأمان وإدارة DNS. قد تجمع Cloudflare معلومات تقنية معينة (مثل عناوين IP) لحماية موقعنا من التهديدات الإلكترونية وضمان أداء سريع.</p>
<p class="privacy-text">نأخذ الأمان على محمل الجد ونطبق طبقات متعددة من الحماية:</p>
<h3>ضمانات تقنية</h3>
<ul class="privacy-list">
<li>تشفير HTTPS لجميع نقل البيانات</li>
<li>بنية خوادم آمنة مع جدران حماية</li>
<li>ضوابط الوصول وأنظمة المصادقة</li>
<li>مراجعات أمنية دورية وتقييمات الثغرات</li>
<li>ممارسات تخزين بيانات آمنة</li>
</ul>
<p class="privacy-text"><strong>إخلاء مسؤولية مهم:</strong> لا توجد طريقة نقل على الإنترنت آمنة بنسبة 100٪. بينما نسعى لحماية معلوماتك بإجراءات معيارية للصناعة، لا يمكننا ضمان أمانًا مطلقًا.</p>
</div>
<div class="card3d">
<h2>إشارات عدم التتبع (DNT)</h2>
<p class="privacy-text">تتضمن بعض المتصفحات ميزة «عدم التتبع» تشير إلى المواقع أنك لا ترغب في التتبع.</p>
<p class="privacy-text"><strong>الوضع الحالي:</strong> لا يستجيب موقعنا حاليًا لإشارات DNT أو آليات مشابهة لأنه لا يوجد معيار موحّد لصناعة الإنترنت لتفسير إشارات DNT.</p>
<p class="privacy-text"><strong>بدائلك:</strong> استخدم أدوات إلغاء الاشتراك المذكورة في قسم الإعلانات أعلاه للتحكم في التتبع.</p>
</div>
<div class="card3d">
<h2>روابط وخدمات الطرف الثالث</h2>
<p class="privacy-text"><strong>روابط خارجية:</strong> قد يحتوي موقعنا على روابط إلى إنستغرام وفيسبوك وبنترست ومواقع طرف ثالث أخرى.</p>
<p class="privacy-text"><strong>ليست مسؤوليتنا:</strong> لسنا مسؤولين عن ممارسات الخصوصية أو محتوى المواقع الخارجية.</p>
<p class="privacy-text"><strong>إجراءك:</strong> راجع سياسات الخصوصية الخاصة بهم قبل تقديم أي معلومات لمواقع الطرف الثالث.</p>
<p class="privacy-text"><strong>ملاحظة مهمة:</strong> FastVidl خدمة مستقلة وليست تابعة أو معتمدة أو مرتبطة رسميًا بإنستغرام أو فيسبوك أو بنترست أو Meta Platforms, Inc.</p>
</div>
<div class="card3d">
<h2>تغييرات سياسة الخصوصية هذه</h2>
<p class="privacy-text">قد نحدّث سياسة الخصوصية هذه لتعكس:</p>
<ul class="privacy-list">
<li>تغييرات في ممارساتنا</li>
<li>ميزات أو خدمات جديدة</li>
<li>متطلبات قانونية أو تنظيمية</li>
<li>تطورات تقنية</li>
</ul>
<h3>كيف سنُعلِمك</h3>
<ul class="privacy-list">
<li>نشر السياسة المحدّثة على هذه الصفحة مع تاريخ «آخر تحديث» جديد</li>
<li>قد تُعلَن التغييرات الجوهرية عبر البريد الإلكتروني أو إشعار على الموقع</li>
</ul>
<p class="privacy-text"><strong>استمرار استخدامك:</strong> استخدام FastVidl بعد نشر التغييرات يعني قبول سياسة الخصوصية المحدّثة.</p>
<p class="privacy-text"><strong>توصية:</strong> راجع سياسة الخصوصية هذه دوريًا للبقاء على اطلاع.</p>
</div>
<div class="card3d">
<h2>دليل إدارة ملفات تعريف الارتباط</h2>
<h3>جدول مرجعي سريع</h3>
<div style="overflow-x:auto;margin-bottom:1.5rem">
<table style="width:100%;border-collapse:collapse;margin-top:1rem">
<thead><tr ${theadBg}><th ${th}>نوع ملف الارتباط</th><th ${th}>الغرض</th><th ${th}>المدة</th><th ${th}>هل يمكن تعطيله؟</th></tr></thead>
<tbody>
<tr><td ${td}>أساسي</td><td ${td}>وظائف الموقع والأمان</td><td ${td}>الجلسة</td><td ${td}>لا (مطلوب لعمل الموقع)</td></tr>
<tr><td ${td}>تحليلات (Google Analytics)</td><td ${td}>إحصاءات الاستخدام والتحسين</td><td ${td}>26 شهرًا</td><td ${td}>نعم (إلغاء اشتراك متاح)</td></tr>
<tr><td ${td}>إعلان (Google AdSense وEzoic)</td><td ${td}>عرض الإعلانات والتخصيص</td><td ${td}>يختلف</td><td ${td}>نعم (إلغاء اشتراك متاح)</td></tr>
<tr><td ${td}>ترجمة (Google Translate)</td><td ${td}>لغة الصفحة الاختيارية</td><td ${td}>جلسة / يختلف</td><td ${td}>نعم (لا تستخدم المحدد؛ امسح ملفات الارتباط)</td></tr>
</tbody>
</table>
</div>
<h3>كيفية إدارة ملفات الارتباط في متصفحك</h3>
<ul class="privacy-list">
<li><strong>Google Chrome:</strong> الإعدادات ← الخصوصية والأمان ← ملفات تعريف الارتباط وبيانات المواقع الأخرى</li>
<li><strong>Mozilla Firefox:</strong> الإعدادات ← الخصوصية والأمان ← ملفات الارتباط وبيانات المواقع</li>
<li><strong>Safari:</strong> التفضيلات ← الخصوصية ← ملفات الارتباط وبيانات المواقع</li>
<li><strong>Microsoft Edge:</strong> الإعدادات ← ملفات الارتباط وأذونات المواقع ← ملفات الارتباط وبيانات المواقع</li>
</ul>
<p class="privacy-text"><strong>ملاحظة:</strong> حظر جميع ملفات الارتباط قد يؤثر على وظائف الموقع وتجربتك.</p>
</div>
<div class="card3d">
<h2>الامتثال والإطار القانوني</h2>
<p class="privacy-text">يسعى FastVidl لاتباع قوانين الخصوصية الرئيسية مثل GDPR وCCPA/CPRA وCOPPA وتوجيه ePrivacy، وسنحدّث هذه السياسة وممارساتنا مع تطور المتطلبات.</p>
</div>
<div class="card3d">
<h2>اتصل بنا</h2>
<p class="privacy-text">نحن هنا لمساعدتك في أي أسئلة أو مخاوف تتعلق بالخصوصية.</p>
<ul class="privacy-list">
<li><strong>البريد الإلكتروني:</strong> <a href="mailto:fastvidlofficial@gmail.com" class="terms-link privacy-clickable-link" style="position:relative;z-index:10;pointer-events:auto;cursor:pointer">fastvidlofficial@gmail.com</a></li>
<li><strong>نموذج الاتصال:</strong> <a href="/ContactUs" class="terms-link privacy-clickable-link" style="position:relative;z-index:10;pointer-events:auto;cursor:pointer">https://fastvidl.com/ContactUs</a></li>
<li><strong>زمن الاستجابة:</strong> عادةً خلال 24–48 ساعة</li>
</ul>
<p class="privacy-text"><strong>لطلبات الخصوصية:</strong> يرجى تضمين «طلب خصوصية» في سطر الموضوع وتحديد:</p>
<ul class="privacy-list">
<li>الحق الذي تمارسه</li>
<li>المعلومات التي تطلبها</li>
<li>أي تفاصيل ذات صلة لمساعدتنا في معالجة طلبك</li>
</ul>
</div>
<div class="card3d">
<h2>موارد إضافية</h2>
<p class="privacy-text"><strong>سياساتنا الأخرى:</strong></p>
<ul class="privacy-list">
<li><a href="/TermsAndConditions" class="terms-link privacy-clickable-link" style="position:relative;z-index:10;pointer-events:auto;cursor:pointer">الشروط والأحكام</a></li>
</ul>
<p class="privacy-text"><strong>موارد خارجية:</strong></p>
<ul class="privacy-list">
<li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="terms-link privacy-clickable-link" style="position:relative;z-index:10;pointer-events:auto;cursor:pointer">سياسة خصوصية Google</a></li>
<li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" class="terms-link privacy-clickable-link" style="position:relative;z-index:10;pointer-events:auto;cursor:pointer">Your Online Choices (EU)</a></li>
<li><a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer" class="terms-link privacy-clickable-link" style="position:relative;z-index:10;pointer-events:auto;cursor:pointer">About Ads Info (US)</a></li>
</ul>
<p class="privacy-text" style="margin-top:2rem;font-size:1.1rem;font-weight:600">شكرًا لثقتك بـ FastVidl فيما يخص خصوصيتك. نلتزم بحماية معلوماتك وتوفير تجربة شفافة وآمنة.</p>
<p style="color:#333;font-size:15px;margin-top:2rem">اقرأ <a href="/TermsAndConditions" class="terms-link privacy-clickable-link" style="color:#1877f2;text-decoration:underline;font-weight:600;cursor:pointer;position:relative;z-index:10;pointer-events:auto">الشروط والأحكام</a>.</p>
</div>
</div>`.replace(/\n+/g, "").replace(/>\s+</g, "><");

const legal = JSON.parse(fs.readFileSync(legalPath, "utf8"));
legal.privacyBody = privacyBody;
fs.writeFileSync(legalPath, JSON.stringify(legal, null, 2) + "\n", "utf8");
console.log("Updated privacyBody in", legalPath);
