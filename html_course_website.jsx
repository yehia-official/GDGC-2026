import React, { useState } from 'react';
import { ChevronDown, Code2, Eye, FileText, List, Grid, Copy, Check, Shield } from 'lucide-react';

export default function HTMLCourseWebsite() {
  const [activeModule, setActiveModule] = useState('basics');
  const [expandedExample, setExpandedExample] = useState(0);
  const [copied, setCopied] = useState(-1);

  const modules = {
    basics: {
      title: 'HTML Basics',
      icon: FileText,
      color: '#10b981',
      intro: 'أساسيات HTML - البناء الصحيح لأي صفحة ويب',
      examples: [
        {
          title: 'HTML Boilerplate - الهيكل الأساسي',
          description: 'كل صفحة HTML تبدأ بـ DOCTYPE و boilerplate صحيح',
          htmlCode: `<!DOCTYPE html>
<html lang="ar">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>عنوان الموقع</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>مرحبا بك!</h1>
    <script src="script.js"></script>
  </body>
</html>`,
          preview: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>عنوان الموقع</title>
</head>
<body>
<h1>مرحبا بك في HTML!</h1>
<p>هذا boilerplate أساسي يجب أن يبدأ به كل صفحة</p>
</body>
</html>`,
          note: 'DOCTYPE يجب أن يكون في أول السطر، UTF-8 للدعم الكامل للعربية'
        },
        {
          title: 'Headings & Semantic Structure',
          description: 'الرؤوس والتسلسل الهرمي الصحيح',
          htmlCode: `<h1>عنوان رئيسي (مرة واحدة فقط)</h1>

<h2>عنوان فرعي</h2>
<p>محتوى تحت العنوان الفرعي</p>

<h3>عنوان أصغر</h3>
<p>محتوى أكثر تفصيلاً</p>

<!-- ❌ خطأ شائع -->
<h3>لا تقفز من h1 إلى h3</h3>
<h6>استخدم h2 و h4 و h5 بالترتيب</h6>`,
          preview: `<div>
<h1 style="fontSize: '2.5em', marginBottom: '20px'}>عنوان رئيسي</h1>
<h2 style="fontSize: '2em', marginBottom: '15px', marginTop: '20px'}>عنوان فرعي</h2>
<p style="marginBottom: '20px'}>محتوى تحت العنوان الفرعي</p>
<h3 style="fontSize: '1.5em', marginBottom: '10px', marginTop: '20px'}>عنوان أصغر</h3>
<p>محتوى أكثر تفصيلاً</p>
</div>`,
          note: 'h1 يجب يكون واحد فقط في الصفحة، استخدم الترتيب الصحيح'
        },
        {
          title: 'Elements & Attributes',
          description: 'العناصر والخصائص الأساسية',
          htmlCode: `<!-- عنصر بسيط -->
<p>هذا نص عادي</p>

<!-- عنصر مع attributes -->
<a href="https://example.com" target="_blank">
  رابط يفتح في تاب جديد
</a>

<!-- عنصر مع id و class -->
<div id="main-content" class="container">
  محتوى مهم
</div>

<!-- HTML entities -->
<p>هذا رمز: &amp; و هذا: &lt;</p>`,
          preview: `<div style="lineHeight: '1.8'}>
<p style="marginBottom: '15px'}>هذا نص عادي</p>
<a href="#" style="color: '#10b981', textDecoration: 'underline', marginBottom: '15px', display: 'block'}>رابط يفتح في تاب جديد</a>
<div style="background: '#f3f4f6', padding: '15px', borderRadius: '6px', marginBottom: '15px'}>محتوى مهم</div>
<p>هذا رمز: & و هذا: &lt;</p>
</div>`,
          note: 'ID فريد (عنصر واحد فقط)، Class يمكن تكراره على عناصر كتير'
        }
      ]
    },
    semantic: {
      title: 'Semantic HTML',
      icon: Grid,
      color: '#3b82f6',
      intro: 'استخدام العناصر الصحيحة التي لها معنى',
      examples: [
        {
          title: 'Page Structure - هيكل الصفحة',
          description: 'استخدام semantic elements للتنظيم الصحيح',
          htmlCode: `<header>
  <h1>اسم الموقع</h1>
  <nav>
    <a href="#home">الرئيسية</a>
    <a href="#about">عن</a>
    <a href="#contact">تواصل</a>
  </nav>
</header>

<main>
  <article>
    <h2>عنوان المقال</h2>
    <p>محتوى المقال...</p>
  </article>
  
  <aside>
    <h3>معلومات إضافية</h3>
    <p>محتوى الـ sidebar</p>
  </aside>
</main>

<footer>
  <p>© 2024 جميع الحقوق محفوظة</p>
</footer>`,
          preview: `<div style="fontFamily: 'Arial', sans-serif'}>
<header style="background: '#1f2937', color: 'white', padding: '20px', marginBottom: '20px'}>
<h3 style="margin: '0 0 15px 0'">اسم الموقع</h3>
<nav style="display: 'flex', gap: '15px'}>
<a href="#" style="color: '#10b981', textDecoration: 'none'">الرئيسية</a>
<a href="#" style="color: '#10b981', textDecoration: 'none'">عن</a>
<a href="#" style="color: '#10b981', textDecoration: 'none'">تواصل</a>
</nav>
</header>
<main style="display: 'grid', gridTemplateColumns: '1fr 300px', gap: '20px', marginBottom: '20px'}>
<article style="background: '#f3f4f6', padding: '20px', borderRadius: '8px'">
<h4 style="margin: '0 0 10px 0'">عنوان المقال</h4>
<p style="margin: 0">محتوى المقال...</p>
</article>
<aside style="background: '#f3f4f6', padding: '20px', borderRadius: '8px'">
<h5 style="margin: '0 0 10px 0'">معلومات</h5>
<p style="margin: 0">محتوى الـ sidebar</p>
</aside>
</main>
<footer style="background: '#1f2937', color: 'white', padding: '20px', textAlign: 'center'">
<p style="margin: 0">© 2024 جميع الحقوق</p>
</footer>
</div>`,
          note: 'Semantic elements تساعد screen readers و search engines'
        },
        {
          title: 'Text Emphasis Elements',
          description: 'عناصر التأكيد والنصوص الخاصة',
          htmlCode: `<!-- التأكيد العادي -->
<p>هذا نص <em>مؤكد</em> عادي</p>

<!-- التأكيد القوي -->
<p>هذا نص <strong>مهم جداً</strong></p>

<!-- الإشارة والاختصار -->
<p><abbr title="HyperText Markup Language">HTML</abbr> هو أساس الويب</p>

<!-- الاقتباس -->
<blockquote cite="https://example.com">
  "هذا اقتباس من موقع آخر"
</blockquote>

<!-- الكود -->
<p>استخدم <code>console.log()</code> في JavaScript</p>`,
          preview: `<div style="lineHeight: '1.8'}>
<p style="marginBottom: '10px'}>هذا نص <em style="fontStyle: 'italic'">مؤكد</em> عادي</p>
<p style="marginBottom: '10px'}>هذا نص <strong style="fontWeight: 'bold'">مهم جداً</strong></p>
<p style="marginBottom: '10px'"><abbr title="HyperText Markup Language" style="borderBottom: '1px dotted #ccc', cursor: 'help'}>HTML</abbr> هو أساس الويب</p>
<blockquote style="borderLeft: '4px solid #10b981', paddingLeft: '15px', marginLeft: 0, color: '#666', marginBottom: '10px'}>
"هذا اقتباس من موقع آخر"
</blockquote>
<p>استخدم <code style="background: '#f3f4f6', padding: '2px 6px', borderRadius: '3px', fontFamily: 'monospace'">console.log()</code> في JavaScript</p>
</div>`,
          note: '<em> و <strong> أفضل من <i> و <b> للدلالة على المعنى'
        }
      ]
    },
    media: {
      title: 'Media & Links',
      icon: Eye,
      color: '#f59e0b',
      intro: 'الصور والروابط والوسائط المتعددة',
      examples: [
        {
          title: 'Images - الصور',
          description: 'استخدام الصور بشكل صحيح',
          htmlCode: `<!-- صورة بسيطة -->
<img 
  src="image.jpg" 
  alt="وصف الصورة"
  width="300"
  height="200"
/>

<!-- صورة مع رابط -->
<a href="page.html">
  <img src="thumbnail.jpg" alt="صورة مصغرة" />
</a>

<!-- SVG -->
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="#10b981" />
</svg>`,
          preview: `<div style="display: 'flex', flexDirection: 'column', gap: '15px'}>
<div style="background: '#e5e7eb', width: '300px', height: '200px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666'}>
📷 صورة (300x200)
</div>
<a href="#" style="display: 'inline-block', width: '150px'}>
<div style="background: '#e5e7eb', width: '150px', height: '100px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666'}>
🖼️ صورة مصغرة
</div>
</a>
<svg width="100" height="100" style="marginTop: '10px'}>
<circle cx="50" cy="50" r="40" fill="#10b981" />
</svg>
</div>`,
          note: 'alt text مهم جداً للـ Accessibility و SEO'
        },
        {
          title: 'Links - الروابط',
          description: 'أنواع الروابط والتنقل',
          htmlCode: `<!-- رابط خارجي -->
<a href="https://example.com">
  موقع خارجي
</a>

<!-- رابط داخلي -->
<a href="about.html">
  صفحة عن
</a>

<!-- رابط داخل الصفحة -->
<a href="#section-2">
  اذهب للقسم 2
</a>

<!-- البريد الإلكتروني -->
<a href="mailto:info@example.com">
  أرسل بريد
</a>

<!-- الهاتف -->
<a href="tel:+201234567890">
  اتصل بنا
</a>`,
          preview: `<div style="lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '10px'}>
<a href="#" style="color: '#3b82f6', textDecoration: 'underline'}>موقع خارجي</a>
<a href="#" style="color: '#3b82f6', textDecoration: 'underline'">صفحة عن</a>
<a href="#" style="color: '#3b82f6', textDecoration: 'underline'">اذهب للقسم 2</a>
<a href="mailto:info@example.com" style="color: '#3b82f6', textDecoration: 'underline'">أرسل بريد</a>
<a href="tel:+201234567890" style="color: '#3b82f6', textDecoration: 'underline'">اتصل بنا</a>
</div>`,
          note: 'استخدم target="_blank" فقط إذا لزم الأمر، relative paths أفضل من absolute'
        }
      ]
    },
    forms: {
      title: 'Forms & Tables',
      icon: List,
      color: '#ec4899',
      intro: 'النماذج والجداول',
      examples: [
        {
          title: 'Form Basics - أساسيات الفورم',
          description: 'عناصر الفورم والـ input types',
          htmlCode: `<form action="/submit" method="POST">
  <!-- نص عادي -->
  <label for="name">الاسم:</label>
  <input 
    type="text" 
    id="name" 
    name="name"
    placeholder="أدخل اسمك"
    required
  />

  <!-- بريد إلكتروني -->
  <label for="email">البريد:</label>
  <input 
    type="email" 
    id="email" 
    name="email"
    required
  />

  <!-- أزرار راديو -->
  <fieldset>
    <legend>هل أنت موافق؟</legend>
    <input type="radio" id="yes" name="agree" value="yes" />
    <label for="yes">نعم</label>
    
    <input type="radio" id="no" name="agree" value="no" />
    <label for="no">لا</label>
  </fieldset>

  <!-- زر الإرسال -->
  <button type="submit">إرسال</button>
</form>`,
          preview: `<form style="maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '15px'}>
<div>
<label style="display: 'block', marginBottom: '5px', fontWeight: 'bold'}>الاسم:</label>
<input 
  type="text" 
  placeholder="أدخل اسمك"
  style="width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box'}"
/>
</div>
<div>
<label style="display: 'block', marginBottom: '5px', fontWeight: 'bold'}>البريد:</label>
<input 
  type="email" 
  style="width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box'}"
/>
</div>
<fieldset style="border: '1px solid #ccc', padding: '10px', borderRadius: '4px'}>
<legend style="fontWeight: 'bold'">هل أنت موافق؟</legend>
<div style="display: 'flex', gap: '20px', marginTop: '10px'}>
<div>
<input type="radio" id="yes" name="agree" />
<label for="yes" style="marginLeft: '5px'}>نعم</label>
</div>
<div>
<input type="radio" id="no" name="agree" />
<label for="no" style="marginLeft: '5px'}>لا</label>
</div>
</div>
</fieldset>
<button style="background: '#10b981', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold'}>إرسال</button>
</form>`,
          note: 'label يجب يكون مرتبط بـ input، fieldset لتجميع العناصر ذات الصلة'
        },
        {
          title: 'Tables - الجداول',
          description: 'بناء الجداول بشكل صحيح',
          htmlCode: `<table>
  <caption>الطلاب والدرجات</caption>
  
  <thead>
    <tr>
      <th>الاسم</th>
      <th>الدرجة</th>
      <th>الحالة</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>أحمد</td>
      <td>90</td>
      <td>ناجح</td>
    </tr>
    <tr>
      <td>سارة</td>
      <td>85</td>
      <td>ناجحة</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="2">المتوسط</td>
      <td>87.5</td>
    </tr>
  </tfoot>
</table>`,
          preview: `<table style="width: '100%', borderCollapse: 'collapse', marginTop: '10px'}>
<caption style="marginBottom: '10px', fontWeight: 'bold', fontSize: '1.1em'}>الطلاب والدرجات</caption>
<thead>
<tr style="background: '#1f2937', color: 'white'}>
<th style="padding: '10px', textAlign: 'right', borderBottom: '2px solid #ccc'">الاسم</th>
<th style="padding: '10px', textAlign: 'center', borderBottom: '2px solid #ccc'">الدرجة</th>
<th style="padding: '10px', textAlign: 'center', borderBottom: '2px solid #ccc'">الحالة</th>
</tr>
</thead>
<tbody>
<tr style="borderBottom: '1px solid #ccc'">
<td style="padding: '10px', textAlign: 'right'">أحمد</td>
<td style="padding: '10px', textAlign: 'center'">90</td>
<td style="padding: '10px', textAlign: 'center'">ناجح</td>
</tr>
<tr style="borderBottom: '1px solid #ccc', background: '#f9fafb'">
<td style="padding: '10px', textAlign: 'right'">سارة</td>
<td style="padding: '10px', textAlign: 'center'">85</td>
<td style="padding: '10px', textAlign: 'center'">ناجحة</td>
</tr>
</tbody>
<tfoot style="background: '#1f2937', color: 'white'">
<tr>
<td colspan="2" style="padding: '10px', textAlign: 'right'>المتوسط</td>
<td style="padding: '10px', textAlign: 'center'">87.5</td>
</tr>
</tfoot>
</table>`,
          note: 'th للهيدرز، colspan للدمج، structure مهمة للـ Accessibility'
        }
      ]
    },
    accessibility: {
      title: 'Accessibility',
      icon: Shield,
      color: '#8b5cf6',
      intro: 'جعل الموقع قابل للوصول للجميع',
      examples: [
        {
          title: 'Alt Text & Labels',
          description: 'نصوص بديلة وعلامات صحيحة',
          htmlCode: `<!-- ✅ صور مع alt text جيد -->
<img 
  src="profile.jpg" 
  alt="صورة شخصية للمستخدم أحمد"
/>

<!-- ✅ inputs مع labels -->
<label for="username">اسم المستخدم:</label>
<input type="text" id="username" name="username" />

<!-- ❌ خطأ: لا يوجد label -->
<input type="text" placeholder="البريد" />

<!-- ✅ صور ديكورية فقط -->
<img src="decoration.png" alt="" />`,
          preview: `<div style="display: 'flex', flexDirection: 'column', gap: '20px'}>
<div style="background: '#f3f4f6', padding: '15px', borderRadius: '8px'}>
<strong style="color: '#10b981'}>✅ صحيح:</strong>
<div style="marginTop: '10px', display: 'flex', alignItems: 'center', gap: '15px'}>
<div style="width: '80px', height: '80px', background: '#ccc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}>👤</div>
<div>صورة شخصية للمستخدم أحمد</div>
</div>
</div>
<div style="background: '#f3f4f6', padding: '15px', borderRadius: '8px'}>
<label style="display: 'block', marginBottom: '8px', fontWeight: 'bold'}>اسم المستخدم:</label>
<input type="text" style="width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box'" />
</div>
</div>`,
          note: 'alt text يجب يصف الصورة بشكل دقيق، كل input يجب يكون له label'
        },
        {
          title: 'Semantic & Heading Structure',
          description: 'الترتيب الصحيح للعناوين',
          htmlCode: `<!-- ✅ ترتيب صحيح -->
<h1>عنوان الصفحة الرئيسي</h1>

<h2>القسم الأول</h2>
<p>محتوى...</p>

<h3>القسم الفرعي</h3>
<p>محتوى...</p>

<h2>القسم الثاني</h2>
<p>محتوى...</p>

<!-- ❌ خطأ: قفز من h1 إلى h3 -->
<h1>عنوان</h1>
<h3>محتوى (يجب h2)</h3>`,
          preview: `<div style="lineHeight: '2'}>
<h1 style="fontSize: '2em', margin: '0 0 15px 0', color: '#1f2937'}>✅ عنوان الصفحة الرئيسي</h1>
<h2 style="fontSize: '1.5em', margin: '20px 0 10px 0', color: '#1f2937'}>القسم الأول</h2>
<p style="margin: 0, marginBottom: '15px', color: '#666'">محتوى...</p>
<h3 style="fontSize: '1.2em', margin: '20px 0 10px 0', color: '#1f2937'">القسم الفرعي</h3>
<p style="margin: 0, marginBottom: '15px', color: '#666'">محتوى...</p>
<h2 style="fontSize: '1.5em', margin: '20px 0 10px 0', color: '#1f2937'">القسم الثاني</h2>
<p style="margin: 0, color: '#666'">محتوى...</p>
</div>`,
          note: 'استخدم h1-h6 بالترتيب، لا تقفز من h1 إلى h3'
        }
      ]
    }
  };

  const currentModule = modules[activeModule];
  const IconComponent = currentModule.icon;

  const copyCode = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopied(index);
    setTimeout(() => setCopied(-1), 2000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: '#e2e8f0',
      fontFamily: "'Segoe UI', 'Arial', sans-serif",
      direction: 'rtl'
    }}>
      {/* الهيدر */}
      <header style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        borderBottom: `3px solid ${currentModule.color}`,
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '4em',
          margin: '0 0 15px 0',
          fontWeight: '900',
          background: `linear-gradient(135deg, ${currentModule.color} 0%, #64748b 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          📚 كورس HTML
        </h1>
        <p style={{
          fontSize: '1.3em',
          opacity: 0.8,
          margin: 0,
          fontWeight: '500'
        }}>
          تعلم HTML من الصفر للاحتراف
        </p>
      </header>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '50px 20px'
      }}>
        {/* Navigation */}
        <nav style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '15px',
          marginBottom: '60px'
        }}>
          {Object.entries(modules).map(([key, module]) => {
            const NavIcon = module.icon;
            const isActive = activeModule === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setActiveModule(key);
                  setExpandedExample(0);
                }}
                style={{
                  padding: '20px',
                  background: isActive
                    ? `linear-gradient(135deg, ${module.color}22, ${module.color}11)`
                    : '#1e293b',
                  border: `2px solid ${isActive ? module.color : '#334155'}`,
                  color: isActive ? module.color : '#94a3b8',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '1em',
                  fontWeight: '700',
                  boxShadow: isActive ? `0 0 30px ${module.color}33` : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = module.color;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#334155';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                <NavIcon size={28} />
                <span>{module.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </nav>

        {/* Module Header */}
        <div style={{
          marginBottom: '60px',
          borderLeft: `5px solid ${currentModule.color}`,
          paddingLeft: '30px'
        }}>
          <h2 style={{
            fontSize: '3em',
            margin: '0 0 15px 0',
            color: currentModule.color,
            fontWeight: '900'
          }}>
            {currentModule.title}
          </h2>
          <p style={{
            fontSize: '1.2em',
            opacity: 0.8,
            margin: 0,
            lineHeight: '1.6'
          }}>
            {currentModule.intro}
          </p>
        </div>

        {/* Examples */}
        <div style={{
          display: 'grid',
          gap: '40px'
        }}>
          {currentModule.examples.map((example, index) => (
            <div
              key={index}
              style={{
                background: '#1e293b',
                borderRadius: '15px',
                overflow: 'hidden',
                border: `2px solid #334155`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = currentModule.color;
                e.currentTarget.style.boxShadow = `0 0 30px ${currentModule.color}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#334155';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Header */}
              <div
                onClick={() => setExpandedExample(expandedExample === index ? -1 : index)}
                style={{
                  background: `linear-gradient(135deg, ${currentModule.color}22, ${currentModule.color}11)`,
                  padding: '30px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: expandedExample === index ? `3px solid ${currentModule.color}` : 'none'
                }}
              >
                <div>
                  <h3 style={{
                    margin: '0 0 10px 0',
                    fontSize: '1.5em',
                    color: currentModule.color,
                    fontWeight: '900'
                  }}>
                    {example.title}
                  </h3>
                  <p style={{
                    margin: 0,
                    opacity: 0.8,
                    fontSize: '1.05em'
                  }}>
                    {example.description}
                  </p>
                </div>
                <ChevronDown
                  size={32}
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: expandedExample === index ? 'rotate(180deg)' : 'rotate(0)',
                    color: currentModule.color,
                    flexShrink: 0
                  }}
                />
              </div>

              {/* Content */}
              {expandedExample === index && (
                <div style={{
                  padding: '40px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '40px'
                }}>
                  {/* كود */}
                  <div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '15px'
                    }}>
                      <h4 style={{
                        margin: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: '#64748b',
                        fontSize: '1.2em',
                        fontWeight: '800'
                      }}>
                        <Code2 size={24} />
                        HTML Code
                      </h4>
                      <button
                        onClick={() => copyCode(example.htmlCode, index * 2)}
                        style={{
                          background: '#10b981',
                          color: 'white',
                          border: 'none',
                          padding: '10px 15px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '1em',
                          fontWeight: '700'
                        }}
                        onMouseEnter={(e) => e.target.style.background = '#059669'}
                        onMouseLeave={(e) => e.target.style.background = '#10b981'}
                      >
                        {copied === index * 2 ? (
                          <>
                            <Check size={18} />
                            تم!
                          </>
                        ) : (
                          <>
                            <Copy size={18} />
                            نسخ
                          </>
                        )}
                      </button>
                    </div>
                    <pre style={{
                      background: '#0f172a',
                      padding: '20px',
                      borderRadius: '8px',
                      overflow: 'auto',
                      fontSize: '0.9em',
                      lineHeight: '1.7',
                      color: '#86efac',
                      margin: 0,
                      border: `1px solid #334155`,
                      maxHeight: '400px'
                    }}>
                      {example.htmlCode}
                    </pre>
                  </div>

                  {/* معاينة */}
                  <div>
                    <h4 style={{
                      margin: '0 0 15px 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: '#64748b',
                      fontSize: '1.2em',
                      fontWeight: '800'
                    }}>
                      <Eye size={24} />
                      المعاينة الحية
                    </h4>
                    <div style={{
                      background: '#0f172a',
                      padding: '25px',
                      borderRadius: '8px',
                      border: `2px solid ${currentModule.color}33`,
                      minHeight: '250px',
                      overflow: 'auto',
                      maxHeight: '400px'
                    }} dangerouslySetInnerHTML={{ __html: example.preview }} />
                  </div>
                </div>
              )}

              {/* Note */}
              {expandedExample === index && example.note && (
                <div style={{
                  background: `${currentModule.color}22`,
                  borderTop: `2px solid ${currentModule.color}`,
                  padding: '20px 40px',
                  color: '#e2e8f0'
                }}>
                  <strong style={{
                    color: currentModule.color,
                    fontSize: '1.1em'
                  }}>
                    💡 ملاحظة مهمة:
                  </strong>
                  <p style={{
                    margin: '10px 0 0 0',
                    fontSize: '1.05em',
                    lineHeight: '1.6'
                  }}>
                    {example.note}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '80px',
          padding: '40px',
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          borderRadius: '15px',
          borderTop: `4px solid ${currentModule.color}`,
          textAlign: 'center'
        }}>
          <h3 style={{
            margin: '0 0 15px 0',
            color: currentModule.color,
            fontSize: '1.5em',
            fontWeight: '900'
          }}>
            🚀 استمر في التعلم!
          </h3>
          <p style={{
            margin: 0,
            opacity: 0.8,
            fontSize: '1.15em',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            كل قسم يعلمك مفهوم جديد ومهم. جرّب تعديل الأكواد وغيّر الألوان والمحتوى لفهم أعمق!
          </p>
        </div>
      </div>
    </div>
  );
}
