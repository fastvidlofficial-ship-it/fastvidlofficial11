/**
 * Replaces cookieBody in legalStaticHtml.json — parity with CookiePolicy/page.js (English).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const legalPath = path.join(__dirname, "../src/messages/locale/ar/legalStaticHtml.json");

const cookieBody = `<div class="cardsGrid">
<div class="card3d">
<p class="cookie-text" style="font-style:italic;color:#666;margin-bottom:1.5rem">آخر تحديث: 19 فبراير 2026</p>
<p class="cookie-text">مرحبًا بك في fastvidl.com. نستخدم ملفات تعريف الارتباط والتقنيات المشابهة ليعمل تنزيل إنستغرام/فيسبوك/بنترست لدينا بسلاسة، ولنحلّل الاستخدام بشكل مجهول، ولنعرض إعلانات ذات صلة (لإبقاء الخدمة مجانية). تغطي هذه السياسة كل ذلك بشفافية.</p>
</div>
<div class="card3d">
<h2>ما هي ملفات تعريف الارتباط؟</h2>
<p class="cookie-text">ملفات نصية صغيرة تُخزَّن على جهازك لتذكر التفضيلات وتتبع الاستخدام (بشكل مجهول) وتحسين التجربة. نستخدم أيضًا بكسلات/إشارات من منصات التواصل الاجتماعي.</p>
</div>
<div class="card3d">
<h2>أنواع ملفات تعريف الارتباط التي نستخدمها</h2>
<div style="overflow-x:auto">
<table>
<thead>
<tr>
<th>نوع ملف الارتباط</th>
<th>الغرض</th>
<th>أمثلة</th>
<th>المدة</th>
<th>مطلوب؟</th>
</tr>
</thead>
<tbody>
<tr>
<td>أساسي</td>
<td>الوظائف الأساسية والأمان والجلسات</td>
<td>session_id، csrf_token، cookie_consent</td>
<td>جلسة / سنة واحدة</td>
<td>نعم</td>
</tr>
<tr>
<td>تحليلات</td>
<td>إحصاءات استخدام مجهولة</td>
<td>_ga، _gid (Google Analytics)</td>
<td>26 شهرًا</td>
<td>إلغاء اشتراك</td>
</tr>
<tr>
<td>إعلان</td>
<td>إعلانات ذات صلة</td>
<td>معرّفات Google AdSense، DSID</td>
<td>يختلف</td>
<td>إلغاء اشتراك</td>
</tr>
<tr>
<td>وظيفي</td>
<td>ترجمة اختيارية للصفحة</td>
<td>googtrans (Google Translate)</td>
<td>جلسة / دائم</td>
<td>مسح ملفات الارتباط / اختيار اللغة الأصلية</td>
</tr>
<tr>
<td>وسائل تواصل</td>
<td>مشاركة / تضمين</td>
<td>fbp (Facebook)، ig (Instagram)، بنترست pins</td>
<td>90 يومًا</td>
<td>إلغاء اشتراك</td>
</tr>
</tbody>
</table>
</div>
</div>
<div class="card3d">
<h2>خيارات التحكم الكاملة لديك</h2>
<h3>1. لافتة ملفات الارتباط على الموقع</h3>
<p class="cookie-text">موافقة تفصيلية مع أزرار «قبول الكل» و«رفض الكل» بنفس الحجم — دون أنماط مظلمة أو مربعات محددة مسبقًا أو إغراء للقبول.</p>
<h3>2. التحكم العالمي في الخصوصية (GPC)</h3>
<p class="cookie-text">نلتزم تلقائيًا بإشارات GPC في المتصفح لإلغاء الاشتراك الفوري في جميع ملفات الارتباط غير الأساسية (متوافق مع CCPA/CPRA).</p>
<h3>3. إعدادات المتصفح</h3>
<ul>
<li>Chrome: الإعدادات ← الخصوصية ← ملفات الارتباط</li>
<li>Firefox: الإعدادات ← الخصوصية ← ملفات الارتباط</li>
<li>Safari: التفضيلات ← الخصوصية ← ملفات الارتباط</li>
<li>Edge: الإعدادات ← ملفات الارتباط</li>
</ul>
<h3>4. إلغاء اشتراك الأطراف الثالثة</h3>
<ul>
<li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">إلغاء اشتراك Google Analytics</a></li>
<li><a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">إعدادات إعلانات Google</a></li>
<li><a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">AboutAds.info (الولايات المتحدة)</a></li>
<li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">YourOnlineChoices (الاتحاد الأوروبي)</a></li>
</ul>
</div>
<div class="card3d">
<h2>الإعلان (Google AdSense)</h2>
<p class="cookie-text">لإبقاء FastVidl مجانيًا للجميع، نعرض إعلانات. نستخدم بائعين من أطراف ثالثة، بما في ذلك Google، الذين يستخدمون ملفات تعريف الارتباط لعرض إعلانات بناءً على زياراتك السابقة لموقعنا أو لمواقع أخرى.</p>
<ul>
<li>تمكّن استخدام Google لملفات تعريف الارتباط الإعلانية لـ Google وشركائه من عرض إعلانات لك بناءً على زيارتك لـ FastVidl و/أو مواقع أخرى على الإنترنت.</li>
<li>يمكنك إلغاء الاشتراك في الإعلانات المخصصة بزيارة <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">إعدادات إعلانات Google</a>.</li>
<li>بدلاً من ذلك، يمكنك إلغاء اشتراك أحد البائعين من الطرف الثالث في استخدام ملفات الارتباط للإعلان المخصص بزيارة <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.</li>
</ul>
</div>
<div class="card3d">
<h2>ترجمة الصفحة (Google Translate)</h2>
<p class="cookie-text">يستخدم محدد اللغة في الرأس مترجم مواقع Google. قد تضبط Google ملفات تعريف ارتباط لتذكر لغتك المختارة. تتحكم Google بها؛ راجع <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">سياسة ملفات تعريف الارتباط لدى Google</a>.</p>
</div>
<div class="card3d">
<h2>حقوقك (GDPR / CCPA / ePrivacy / قانون حماية البيانات الشخصي في باكستان PDPB)</h2>
<h3>سحب الموافقة في أي وقت</h3>
<ul>
<li>انقر «إعدادات ملفات الارتباط» (التذييل)</li>
<li>تسري التغييرات فورًا وتستمر عبر الزيارات</li>
<li>لا عقوبة لرفض ملفات الارتباط</li>
</ul>
<h3>تسجيل الإثبات</h3>
<p class="cookie-text">يُسجَّل طابع زمني لتفضيلات الموافقة لمدة 12 شهرًا (جاهز لمراجعة GDPR).</p>
<h3>مستخدمو باكستان</h3>
<p class="cookie-text">نلتزم بإرشادات PDPB ولوائح PTA للاستضافة المحلية.</p>
<h3>مستخدمو الاتحاد الأوروبي</h3>
<p class="cookie-text">امتثال كامل لتوجيه ePrivacy مع موافقة تفصيلية.</p>
</div>
<div class="card3d">
<h2>الاحتفاظ بملفات تعريف الارتباط والحذف</h2>
<div style="overflow-x:auto">
<table>
<thead>
<tr>
<th>نوع البيانات</th>
<th>مدة الاحتفاظ</th>
<th>محفز الحذف</th>
</tr>
</thead>
<tbody>
<tr>
<td>سجلات الموافقة</td>
<td>12 شهرًا</td>
<td>سحب يدوي</td>
</tr>
<tr>
<td>تحليلات</td>
<td>26 شهرًا</td>
<td>إلغاء اشتراك / GPC</td>
</tr>
<tr>
<td>إعلان</td>
<td>حسب المزوّد</td>
<td>روابط إلغاء الاشتراك أعلاه</td>
</tr>
<tr>
<td>أساسي</td>
<td>جلسة / سنة واحدة</td>
<td>مسح المتصفح</td>
</tr>
</tbody>
</table>
</div>
</div>
<div class="card3d">
<h2>تفاصيل الطرف الثالث ووسائل التواصل</h2>
<p class="cookie-text"><strong>خدمات Google:</strong> Analytics وAdSense وTranslate الاختياري — الإفصاح الكامل في سياسة الخصوصية.</p>
<p class="cookie-text"><strong>منصات التواصل:</strong> Facebook Pixel (fbp)، تتبع إنستغرام، ملفات بنترست للمشاركة/التضمين فقط.</p>
<p class="cookie-text"><strong>ماسح ملفات الارتباط:</strong> امسح ملفات الارتباط لديك فورًا (أداة طرف ثالث).</p>
</div>
<div class="card3d">
<h2>الأسئلة الشائعة</h2>
<p class="cookie-text"><strong>س: هل رفض ملفات الارتباط يعطل التنزيلات؟</strong></p>
<p class="cookie-text">ج: لا، ملفات الارتباط الأساسية تتولى التنزيلات؛ تتأثر التحليلات/الإعلانات فقط.</p>
<p class="cookie-text"><strong>س: هل تتتبعون عبر إنستغرام/فيسبوك؟</strong></p>
<p class="cookie-text">ج: لا، نعالج عناوين URL مؤقتًا ولا نتتبع حسابات التواصل أبدًا.</p>
<p class="cookie-text"><strong>س: ما امتثال باكستان PDPB؟</strong></p>
<p class="cookie-text">ج: حماية بيانات محلية وفق إرشادات PTA/PEMRA.</p>
</div>
<div class="card3d">
<h2>الامتثال الدولي</h2>
<ul>
<li><strong>GDPR:</strong> موافقة تفصيلية، وسحب، وسجلات</li>
<li><strong>CCPA/CPRA:</strong> إلغاء اشتراك تلقائي عبر GPC، لا بيع للبيانات</li>
<li><strong>توجيه ePrivacy:</strong> أزرار موافقة متساوية</li>
<li><strong>باكستان PDPB/PTA:</strong> امتثال الاستضافة المحلية</li>
</ul>
</div>
<div class="card3d">
<h2>تغييرات السياسة</h2>
<p class="cookie-text">تُنشر هنا مع تاريخ جديد. التحديثات الجوهرية تُطلق لافتات موافقة جديدة.</p>
<p class="cookie-text"><strong>للتواصل:</strong> <a href="mailto:fastvidlofficial@gmail.com">fastvidlofficial@gmail.com</a></p>
<p class="cookie-text"><strong>ذات صلة:</strong> <a href="/PrivacyPolicy">سياسة الخصوصية</a>، <a href="/TermsAndConditions">الشروط والأحكام</a></p>
</div>
</div>`
  .replace(/\n+/g, "")
  .replace(/>\s+</g, "><");

const legal = JSON.parse(fs.readFileSync(legalPath, "utf8"));
legal.cookieBody = cookieBody;
fs.writeFileSync(legalPath, JSON.stringify(legal, null, 2) + "\n", "utf8");
console.log("Updated cookieBody in", legalPath);
