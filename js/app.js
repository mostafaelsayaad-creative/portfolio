(function () {
  'use strict';
  var P = window.PROJECTS || [], STILLS = window.AI_STILLS || [];
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var el = function (tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  var SVG = '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1l10 6-10 6z"/></svg>';

  var T = {
    en: {
      navServices: "Services",
      navPress: "Press",
      prE: "In the press",
      prH: "Featured in Campaign Middle East and Ads of the World",
      prP: "Three of the campaigns I produced, as the trade press and the Clio Network's archive covered them.",
      pr1D: "28 Nov 2025",
      pr1H: "Doux Chicken's AI-powered campaign in Saudi Arabia",
      pr2D: "Aug 2024",
      pr2H: "Skechers Back to school, shown on screens across the UAE and Saudi Arabia",
      pr3D: "Nov 2024",
      pr3H: "Treva's She Knows Best, a song in the Najdi dialect",
      prGo: "Read the feature",
      svH: "I also build what sits behind the films",
      svP: "The teams and systems that get work delivered on time, and the proposals that win it in the first place.",
      f1E: "For agencies and production houses",
      f1H: "Production teams and traffic systems",
      f1P: "I set up video production departments for advertising agencies and production houses: who does what, how a brief travels from the first call to the final master, and how each job is priced, tracked and checked. At the centre is a traffic system the whole team works from.",
      f1L1: "Seven stages from brief to archive, with three quality gates",
      f1L2: "One live tracker for every job, owner, deadline and piece of kit",
      f1L3: "Budgets built before the idea is sold, in lean, hybrid and full versions",
      f1L4: "A scored vendor bench, coded equipment and a skills matrix for training",
      f1N: "Production Desk is the app I built to run it. Managers assign the work, the team accepts and delivers stage by stage, and every closed job feeds a performance score.",
      f1B1: "Try the Production Desk demo",
      f1B2: "Read the department proposal",
      f2E: "For brands and agencies",
      f2H: "Creative proposals that sell the idea",
      f2P: "A good idea still has to be bought. I write and design the proposal that sells it, so a brand can see the film before a single shoot day is booked.",
      f2L1: "The insight, the idea and the script, chapter by chapter",
      f2L2: "AI key visuals made with the real product, cast and locations",
      f2L3: "Looks, wardrobe, camera and light, set out for the client",
      f2L4: "Deliverables, shoot days and a post plan the client can sign off",
      f2N: "Example: Just the Two of Us, a 60-second hero film in five chapters for the LYNK & CO 900, planned as a two-day shoot in Ras Al Khaimah.",
      f2B1: "Open the LYNK & CO 900 proposal",
      svH2: "Crew, talent and production services",
      pressLink: "Read the press feature",
      skip: 'Skip to the work', navSel: 'Selected work', navAi: 'AI Studio', navFilms: 'Films by type', navCases: 'Case studies', navCta: 'Start a project',
      roles: 'Creative film producer & AI creative director',
      heroSub: 'Fourteen years of commercials, music videos and social content across the Gulf and Egypt, and films directed with AI.',
      heroBtn1: 'See the work', heroBtn2: 'Visit the AI Studio',
      f1: 'years in production', f2: 'projects', f3: 'films to watch', f4b: '4 markets', f4: 'UAE, KSA, Egypt, Lebanon',
      selE: 'Selected work', selH: 'Seven projects to start with', selP: 'Hover a film to see it move. Click to watch it with sound.',
      aiE: 'AI Studio', aiH1: 'Ideas that', aiH2: 'render.',
      aiP: 'Where a one-line idea becomes a finished film. I direct brand commercials and my own micro-dramas with AI, and fourteen years on real sets decide what goes in the frame.',
      aiBtn: 'Enter the AI Studio', aiBtn2: 'See the micro-dramas',
      aiFilmsH: 'Brand films made with AI', aiFilmsP: 'Commercials directed with AI from the first mood board to the final frame, for LYNK & CO, ADCB, Rawaa Rice and Doux.',
      nProj: function (n) { return n + (n === 1 ? ' project' : ' projects'); },
      films: function (n) { return n + (n === 1 ? ' film' : ' films'); }, photos: function (n) { return n + (n === 1 ? ' photo' : ' photos'); },
      episodes: function (n) { return n + (n === 1 ? ' episode' : ' episodes'); },
      showAll: function (n) { return 'Show all ' + n; },
      casesE: 'Case studies', casesH: 'Two campaigns with numbers', playCase: 'Play the case film',
      c1H: 'Treva: a rap song for the home economist',
      c1P: "The brief was to reach homemakers in Saudi Arabia. We wrote a rap song that calls them the household's economists and shot it as a music video.",
      c2H: 'Vatika Fruitamin: #WhatsYourFlavour', c2P: 'A jingle built for TikTok and a set of films for the hair-mask range.',
      stSales: 'Increase in sales', stReach: 'Reach', stCtr: 'Click-through rate', stTraffic: 'Increase in traffic',
      caseNote: "Figures as reported in the campaign's case film.",
      btsE: 'On set', btsH: 'Behind the scenes', btsP: 'Some of the shoot days, before the edit.',
      svE: 'Beyond the film',
      sv1H: 'Talent and casting', sv1P: 'Actors, models, presenters and voice artists from the Gulf, Egypt and Lebanon.',
      sv2H: 'Production services', sv2P: 'Crew, equipment, locations and permits, with one contact from the recce to delivery.',
      sv3H: 'Where', sv3P: 'United Arab Emirates, Saudi Arabia, Egypt and Lebanon.',
      povE: 'Off duty', povH: 'I also act. Once.', povP: "A sketch from the office: what happens when you help a stranger strictly according to your job title. I'm in it. Casting directors, go easy.",
      ctE: 'Contact', ctH1: 'Got a script, a deck, or just', ctH2: 'a shoot date?', ctP: "Send whatever you have. I'll reply with how I'd make it and what it would take.", ctEmail: 'Email',
      foot: 'Client names and campaigns belong to their owners.',
      close: 'Close', behance: 'See this project on Behance', film: 'Film', photo: 'Photo', lang: 'العربية'
    },
    ar: {
      navServices: "الخدمات",
      navPress: "الصحافة",
      prE: "في الصحافة",
      prH: "أعمالي في صحافة الإعلان",
      prP: "ثلاث حملات من إنتاجي نشرتها مجلة Campaign Middle East وموقع Ads of the World التابع لشبكة كليو.",
      pr1D: "28 نوفمبر 2025",
      pr1H: "حملة دو للدجاج المصنوعة بالذكاء الاصطناعي في السعودية",
      pr2D: "أغسطس 2024",
      pr2H: "حملة سكيتشرز للعودة إلى المدارس، على شاشات الإمارات والسعودية",
      pr3D: "نوفمبر 2024",
      pr3H: "«هي أدرى» لتريفا، أغنية باللهجة النجدية",
      prGo: "اقرأ المقال",
      svH: "وأبني أيضًا ما يقف خلف الأفلام",
      svP: "الفرق والأنظمة التي تسلّم العمل في موعده، والعروض التي تكسب المشروع من البداية.",
      f1E: "لوكالات الإعلان وشركات الإنتاج",
      f1H: "فرق الإنتاج وأنظمة الترافيك",
      f1P: "أؤسس أقسام إنتاج الفيديو لوكالات الإعلان وشركات الإنتاج: من يفعل ماذا، وكيف ينتقل البريف من أول اتصال حتى النسخة النهائية، وكيف تُسعَّر كل مهمة وتُتابَع وتُراجَع. وفي القلب نظام ترافيك يعمل عليه الفريق كله.",
      f1L1: "سبع مراحل من البريف حتى الأرشفة، مع ثلاث بوابات للجودة",
      f1L2: "جدول متابعة حي لكل مهمة ومسؤول وموعد وقطعة معدات",
      f1L3: "ميزانيات تُبنى قبل بيع الفكرة، بثلاثة مستويات: مختصر ومختلط وكامل",
      f1L4: "قائمة موردين مُقيَّمة، ومعدات مُرمَّزة، ومصفوفة مهارات للتدريب",
      f1N: "Production Desk هو التطبيق الذي بنيته لإدارة ذلك: المدير يوزّع المهام، والفريق يقبلها ويسلّمها مرحلة بمرحلة، وكل مهمة تُغلق تُحدّث تقييم الأداء.",
      f1B1: "جرّب نسخة Production Desk التجريبية",
      f1B2: "اقرأ عرض تأسيس القسم",
      f2E: "للعلامات التجارية والوكالات",
      f2H: "عروض إبداعية تبيع الفكرة",
      f2P: "الفكرة الجيدة تحتاج من يشتريها. أكتب وأصمّم العرض الذي يبيعها، ليرى العميل الفيلم قبل أن يُحجز يوم تصوير واحد.",
      f2L1: "الرؤية والفكرة والسيناريو، فصلًا بفصل",
      f2L2: "صور رئيسية بالذكاء الاصطناعي بالمنتج الحقيقي والممثلين ومواقع التصوير",
      f2L3: "الأزياء والإضاءة وحركة الكاميرا، واضحة للعميل",
      f2L4: "المخرجات وأيام التصوير وخطة ما بعد الإنتاج، جاهزة للاعتماد",
      f2N: "مثال: Just the Two of Us، فيلم رئيسي مدته 60 ثانية في خمسة فصول لسيارة لينك آند كو 900، مخطط له يوما تصوير في رأس الخيمة.",
      f2B1: "افتح عرض لينك آند كو 900",
      svH2: "الطواقم والمواهب وخدمات الإنتاج",
      pressLink: "اقرأ المقال الصحفي",
      skip: 'انتقل إلى الأعمال', navSel: 'أعمال مختارة', navAi: 'استوديو الذكاء الاصطناعي', navFilms: 'الأفلام حسب النوع', navCases: 'دراسات حالة', navCta: 'ابدأ مشروعًا',
      roles: 'منتج أفلام إبداعي ومخرج إبداعي بالذكاء الاصطناعي',
      heroSub: 'أربعة عشر عامًا من الإعلانات والأغاني المصوّرة ومحتوى السوشيال ميديا في الخليج ومصر، وأفلام أخرجتها بالذكاء الاصطناعي.',
      heroBtn1: 'شاهد الأعمال', heroBtn2: 'زر استوديو الذكاء الاصطناعي',
      f1: 'عامًا في الإنتاج', f2: 'مشروعًا', f3: 'فيلمًا للمشاهدة', f4b: '4 أسواق', f4: 'الإمارات، السعودية، مصر، لبنان',
      selE: 'أعمال مختارة', selH: 'سبعة مشاريع للبداية', selP: 'مرّر على الفيلم ليتحرك، واضغط لتشاهده بالصوت.',
      aiE: 'استوديو الذكاء الاصطناعي', aiH1: 'أفكار تتحول', aiH2: 'إلى صورة.',
      aiP: 'هنا تتحول فكرة من سطر واحد إلى فيلم كامل. أُخرج إعلانات العلامات ومسلسلاتي القصيرة بالذكاء الاصطناعي، وأربعة عشر عامًا في مواقع التصوير الحقيقية تحدد ما يدخل الكادر.',
      aiBtn: 'ادخل استوديو الذكاء الاصطناعي', aiBtn2: 'شاهد الدراما القصيرة',
      aiFilmsH: 'أفلام علامات صُنعت بالذكاء الاصطناعي', aiFilmsP: 'إعلانات أخرجتها بالذكاء الاصطناعي من أول لوحة إلهام حتى آخر لقطة، للينك آند كو وبنك أبوظبي التجاري وأرز رواء ودو.',
      nProj: function (n) { return n + ' مشروع'; },
      films: function (n) { return n + ' فيلم'; }, photos: function (n) { return n + ' صورة'; },
      episodes: function (n) { return n + ' حلقات'; },
      showAll: function (n) { return 'اعرض الكل (' + n + ')'; },
      casesE: 'دراسات حالة', casesH: 'حملتان بالأرقام', playCase: 'شاهد فيلم الحملة',
      c1H: 'تريفا: أغنية راب لاقتصادية المنزل',
      c1P: 'كان المطلوب الوصول إلى ربّات البيوت في السعودية. كتبنا أغنية راب تسمّيهنّ «اقتصاديات المنزل»، وصوّرناها فيديو كليب.',
      c2H: 'فاتيكا فروتامين: ‎#WhatsYourFlavour', c2P: 'جِنغل صُمّم لتيك توك مع مجموعة أفلام لسلسلة أقنعة الشعر.',
      stSales: 'زيادة في المبيعات', stReach: 'وصول', stCtr: 'نسبة النقر', stTraffic: 'زيادة في الزيارات',
      caseNote: 'الأرقام كما وردت في فيلم الحملة.',
      btsE: 'في موقع التصوير', btsH: 'كواليس التصوير', btsP: 'أيام من مواقع التصوير، قبل المونتاج.',
      svE: 'أبعد من الفيلم',
      sv1H: 'المواهب والكاستينغ', sv1P: 'ممثلون وعارضون ومقدّمون ومعلّقون صوتيون من الخليج ومصر ولبنان.',
      sv2H: 'خدمات الإنتاج', sv2P: 'طواقم ومعدات ومواقع تصوير وتصاريح، مع جهة اتصال واحدة من المعاينة حتى التسليم.',
      sv3H: 'أين', sv3P: 'الإمارات والسعودية ومصر ولبنان.',
      povE: 'خارج الدوام', povH: 'وأمثّل أيضًا. مرة واحدة.', povP: 'اسكتش من المكتب: ماذا يحدث حين تساعد غريبًا بحسب مسمّاك الوظيفي فقط. أنا أحد الممثلين. رفقًا بي يا مديري الكاستينغ.',
      ctE: 'تواصل', ctH1: 'عندك نص أو عرض أو حتى', ctH2: 'موعد تصوير فقط؟', ctP: 'أرسل ما لديك، وسأرد عليك بطريقة تنفيذه وما يحتاجه.', ctEmail: 'البريد الإلكتروني',
      foot: 'أسماء العملاء والحملات ملك لأصحابها.',
      close: 'إغلاق', behance: 'شاهد المشروع على Behance', film: 'فيلم', photo: 'صورة', lang: 'English'
    }
  };
  var VT_AR = { 'Hero film': 'الفيلم الرئيسي', 'Behind the scenes': 'الكواليس', 'Case film': 'فيلم الحملة', 'CEO interview': 'لقاء الرئيس التنفيذي', 'Film': 'الفيلم', 'Trailer': 'الإعلان التشويقي', 'TV commercial': 'الإعلان التلفزيوني' };
  // One line under each selected project (shown on hover).
  var SEED = {
    'ajmal-perfumes-untold-stories': ['Hero film, behind the scenes and a CEO interview for the Untold Stories campaign.', 'الفيلم الرئيسي والكواليس ولقاء الرئيس التنفيذي لحملة Untold Stories.'],
    'hublot-x-seddiqi-75th-anniversary': ['From concept to delivery in one week, for the 75th anniversary.', 'من الفكرة إلى التسليم في أسبوع واحد، للذكرى الخامسة والسبعين.'],
    'skechers-back-to-school': ['The Back to school TVC and the 2025 campaign, with behind the scenes.', 'إعلان العودة إلى المدارس وحملة 2025، مع الكواليس.'],
    'hublot-x-seddiqi-big-bang-75th-titanium': ['The titanium Big Bang, made for Seddiqi\'s 75th anniversary.', 'إصدار بيغ بانغ من التيتانيوم بمناسبة الذكرى الخامسة والسبعين لصدّيقي.'],
    'skechers-back-to-school-2025': ['Back to school 2025, shot in the lab, the gym and the art room, with behind the scenes.', 'العودة إلى المدارس 2025، صُوّر في المختبر والصالة الرياضية ومرسم المدرسة، مع الكواليس.'],
    'treva-home-economist': ['A rap song for Saudi homemakers, shot as a music video.', 'أغنية راب لربّات البيوت في السعودية، صُوّرت فيديو كليب.'],
    'ghamran-camp-documentary': ['A documentary from the Ghamran desert camp.', 'فيلم وثائقي من مخيم غمران الصحراوي.'],
    'emaar-new-year-s-eve-film': ["The visitor film for New Year's Eve in Downtown Dubai.", 'فيلم الزوّار لليلة رأس السنة في وسط مدينة دبي.'],
    'rawaa-rice-the-longer-table': ['The longer the grain, the longer the table. Made with AI.', 'كلما طالت الحبّة، طالت المائدة. صُنع بالذكاء الاصطناعي.']
  };
  var SECS = [
    { id: 'tvc', kind: 'wide',
      en: ['TV commercials', 'Hero films for TV and digital. I take them from the script through casting, the shoot and post to the final master.'],
      ar: ['الإعلانات التلفزيونية', 'أفلام رئيسية للتلفزيون والمنصات الرقمية. أتولّاها من النص إلى الكاستينغ والتصوير والمونتاج حتى النسخة النهائية.'] },
    { id: 'music', kind: 'wide',
      en: ['Music videos', 'Songs written for brands and shot as full music videos: the Treva rap for Saudi homemakers, and Just One Tweak, which I wrote and directed.'],
      ar: ['الأغاني المصوّرة', 'أغانٍ تُكتب للعلامات وتُصوَّر فيديو كليب كاملًا، مثل أغنية الراب لتريفا في السعودية، وأغنية Just One Tweak التي كتبتها وأخرجتها.'] },
    { id: 'drama', kind: 'drama',
      en: ['Micro-drama', 'Three original vertical series that I write and direct, made with AI. Each episode runs about a minute.'],
      ar: ['الدراما القصيرة', 'ثلاثة مسلسلات عمودية أصلية أكتبها وأخرجها، مصنوعة بالذكاء الاصطناعي. مدة الحلقة نحو دقيقة.'] },
    { id: 'social', kind: 'tall',
      en: ['Short formats', 'Reels, TikToks and daily event coverage. At Dubai Mallathon my team filmed six malls and delivered new content every day.'],
      ar: ['المحتوى القصير', 'ريلز وتيك توك وتغطيات يومية للفعاليات. في دبي مولاثون صوّر فريقي في ستة مولات وسلّم محتوى جديدًا كل يوم.'] },
    { id: 'cgi', kind: 'wide',
      en: ['CGI', 'Product films and city-scale scenes built in 3D, for Hublot, Emaar and Dubai Silicon Oasis.'],
      ar: ['أفلام CGI', 'أفلام منتجات ومشاهد بحجم المدينة تُبنى بالأبعاد الثلاثية، لهوبلو وإعمار وواحة دبي للسيليكون.'] },
    { id: 'doc', kind: 'wide',
      en: ['Documentaries and event films', "Real people and real places: the Ghamran desert camp, the runners of Dubai Mallathon, Emaar's New Year's Eve."],
      ar: ['الأفلام الوثائقية وأفلام الفعاليات', 'ناس حقيقيون وأماكن حقيقية: مخيم غمران الصحراوي، وعدّاؤو دبي مولاثون، وليلة رأس السنة مع إعمار.'] },
    { id: 'photo', kind: 'photo',
      en: ['Photography', 'Food, product and campaign key visuals, shot alongside the films or on their own.'],
      ar: ['التصوير الفوتوغرافي', 'تصوير الطعام والمنتجات والصور الرئيسية للحملات، مع الأفلام أو في جلسات مستقلة.'] }
  ];
  var PRESS = {
    'doux-a-day-with-doux': 'https://campaignme.com/saudi-arabias-doux-chicken-contatious-launch-ai-powered-campaign/',
    'skechers-back-to-school': 'https://www.adsoftheworld.com/campaigns/back-to-school-a490c419-e4b3-4a18-a45f-2a95e914b4c7',
    'treva-home-economist': 'https://www.adsoftheworld.com/campaigns/treva-s-new-product-launch'
  };
  var CLIENTS = [["hublot.webp", "Hublot", 37], ["emaar.webp", "Emaar", 29], ["skechers.webp", "Skechers", 21], ["ajmal.webp", "Ajmal Perfumes", 54], ["mashreq.webp", "Mashreq", 25], ["abbott.webp", "Abbott", 31], ["treva.webp", "Treva", 40], ["homebox.webp", "Home Box", 47], ["lynk.webp", "LYNK & CO", 26], ["adcb.webp", "ADCB", 33], ["nivea.webp", "NIVEA", 47], ["mercedes.webp", "Mercedes-Benz", 47], ["sgh.webp", "Saudi German Health", 44], ["talabat.webp", "talabat", 30], ["osnplus.webp", "OSN+", 42], ["dabur.webp", "Dabur", 46], ["doux.webp", "Doux", 39], ["oxfam.webp", "Oxfam", 49]];  // [file in media/logos, brand, display height px]

  var lang = 'en';
  try { lang = localStorage.getItem('lang') || 'en'; } catch (e) {}
  if (!T[lang]) lang = 'en';
  var L = function () { return lang === 'ar' ? 1 : 0; };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var t = function (k) { return T[lang][k]; };
  var byId = {};
  P.forEach(function (p) { byId[p.id] = p; });
  var inCat = function (c) { return P.filter(function (p) { return p.cats.indexOf(c) > -1; }); };
  var fmt = function (s) { return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); };
  var vTitle = function (p, v, i) {
    var name = v.t || (p.videos.length === 1 ? 'Film' : '');
    if (!name) return t('film') + ' ' + (i + 1);
    if (lang === 'ar') { if (VT_AR[name]) return VT_AR[name]; return name.replace('Episode', 'الحلقة').replace('Teaser', 'تشويق'); }
    return name;
  };
  var play = function (v) { var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); };

  /* ---------- hero, marquee, facts ---------- */
  var reel = $('#reel');
  if (reduce) { reel.removeAttribute('autoplay'); reel.pause(); }
  CLIENTS.concat(CLIENTS).forEach(function (c) {
    var i = el('img'); i.src = 'media/logos/' + c[0]; i.alt = c[1]; i.title = c[1]; i.style.height = c[2] + 'px'; i.decoding = 'async';
    $('#clients').append(i);
  });

  /* ---------- cards ---------- */
  function hoverPlay(card, src, start) {
    if (!canHover || reduce || !src) return;
    var vid, timer;
    card.addEventListener('pointerenter', function () {
      timer = setTimeout(function () {
        vid = el('video'); vid.muted = true; vid.loop = true; vid.playsInline = true; vid.src = src + (start ? '#t=' + start : '');
        card.insertBefore(vid, card.children[1]);
        vid.addEventListener('playing', function () { card.classList.add('playing'); });
        play(vid);
      }, 160);
    });
    card.addEventListener('pointerleave', function () {
      clearTimeout(timer); card.classList.remove('playing');
      if (vid) { vid.pause(); vid.removeAttribute('src'); vid.load(); vid.remove(); vid = null; }
    });
  }
  // o: {cls, img, client, title, seed, dur, hover, start, go}
  function tile(base, o) {
    var b = el('button', base + (o.cls ? ' ' + o.cls : '')); b.type = 'button';
    var img = el('img'); img.loading = 'lazy'; img.alt = ''; img.src = o.img;
    b.append(img, el('span', 'shade'));
    if (base === 'film') { var pl = el('span', 'play'); pl.innerHTML = SVG; b.append(pl); if (o.dur) b.append(el('span', 'dur', o.dur)); }
    var m = el('span', 'meta');
    m.append(el('span', 'client', o.client), el('h3', '', o.title));
    if (o.seed) m.append(el('span', base === 'film' ? 'seed' : 'line', o.seed));
    b.append(m);
    b.addEventListener('click', o.go);
    hoverPlay(b, o.hover, o.start);
    return b;
  }
  function count(p) { return p.videos.length ? t('films')(p.videos.length) : t('photos')(p.images.length); }
  function wide(p, cls, seed) {
    var v = p.videos[0];
    return tile('film', { cls: cls, img: p.still || p.cover, client: p.client, title: p.title, seed: seed || '', dur: count(p),
      hover: p.loop || (v && v.src), start: p.loop || !v ? 0 : Math.min(4, Math.floor(v.d / 4)), go: function () { openProject(p.id, 0); } });
  }
  function tall(p, kind) {
    var v = p.videos.filter(function (x) { return x.h > x.w; })[0] || p.videos[0];
    if (kind === 'photo') return tile('reel', { img: p.images[0].th, client: p.client, title: p.title, seed: t('photos')(p.images.length), go: function () { openProject(p.id, 0, true); } });
    var seed = kind === 'drama' ? (p.line || '') : count(p);
    return tile('reel', { img: v.poster, client: kind === 'drama' ? t('episodes')(Math.max(1, p.videos.length - 1)) : p.client, title: kind === 'drama' ? p.client : p.title, seed: seed,
      hover: v.src, start: Math.min(4, Math.floor(v.d / 4)), go: function () { openProject(p.id, p.videos.indexOf(v)); } });
  }
  function withMore(host, cards, limit) {
    cards.forEach(function (c, i) { if (i >= limit) c.classList.add('is-extra'); host.append(c); });
    if (cards.length <= limit) return null;
    var more = el('div', 'more'), b = el('button', 'btn btn-ghost', t('showAll')(cards.length)); b.type = 'button';
    b.addEventListener('click', function () { host.classList.add('open'); more.remove(); });
    more.append(b); return more;
  }

  function renderSelected() {
    var box = $('#selected'); box.textContent = '';
    var shape = ['xl', 'm', 'm', 'l', 's', 'm', 'm'];
    P.filter(function (p) { return p.feat; }).forEach(function (p, i) { box.append(wide(p, shape[i] || 'm', SEED[p.id] ? SEED[p.id][L()] : '')); });
  }
  function renderSections() {
    var box = $('#sections'); box.textContent = '';
    SECS.forEach(function (s) {
      var list = inCat(s.id); if (s.id === 'photo') list = list.filter(function (p) { return p.images.length; });
      if (!list.length) return;
      var sec = el('section', 'sec' + (s.id === 'drama' ? ' ai-skin' : '')); sec.id = 'sec-' + s.id;
      var wrap = el('div', 'wrap'), head = el('div', 'head'), left = el('div');
      left.append(el('span', 'eyebrow', t('nProj')(list.length)), el('h2', '', s[lang][0]));
      head.append(left, el('p', 'sub', s[lang][1]));
      var grid, more;
      if (s.kind === 'wide') {
        grid = el('div', 'films even');
        more = withMore(grid, list.map(function (p, i) { return wide(p, i < 2 ? 'm' : ''); }), 8);
      } else {
        grid = el('div', 'wall' + (s.kind === 'drama' ? ' drama' : s.kind === 'photo' ? ' photo' : ''));
        more = withMore(grid, list.map(function (p) { return tall(p, s.kind); }), 12);
      }
      wrap.append(head, grid); if (more) wrap.append(more);
      sec.append(wrap); box.append(sec);
    });
    // AI films
    var ai = inCat('ai'), ab = $('#aiFilms'); ab.textContent = '';
    $('#aiCount').textContent = t('nProj')(ai.length);
    ai.forEach(function (p, i) {
      var v = p.videos[0];
      ab.append(tile('film', { cls: i === 0 ? 'l' : i === 1 ? 's' : i < 4 ? 'm' : '', img: p.still || v.poster, client: p.client, title: p.title, dur: count(p),
        hover: p.loop || v.src, start: p.loop ? 0 : Math.min(4, Math.floor(v.d / 4)), go: function () { openProject(p.id, 0); } }));
    });
    // behind the scenes
    var bb = $('#btsFilms'); bb.textContent = '';
    P.forEach(function (p) {
      p.videos.forEach(function (v, i) {
        if (v.t !== 'Behind the scenes') return;
        bb.append(tile('film', { cls: 'm', img: v.poster, client: t('btsH'), title: p.client, dur: fmt(v.d), hover: v.src, start: Math.min(6, Math.floor(v.d / 4)), go: function () { openProject(p.id, i); } }));
      });
    });
  }

  /* ---------- AI studio visuals ---------- */
  (function () {
    var box = $('#stills'); if (!STILLS.length) return;
    var half = Math.ceil(STILLS.length / 2);
    [STILLS.slice(0, half), STILLS.slice(half)].forEach(function (set) {
      var row = el('div', 'row');
      set.concat(set).forEach(function (src) { var i = el('img'); i.loading = 'lazy'; i.alt = ''; i.src = src; row.append(i); });
      box.append(row);
    });
    var bg = $('#aiBg');
    if ('IntersectionObserver' in window && !reduce) new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { if (!bg.src) bg.src = bg.getAttribute('data-src'); play(bg); } else bg.pause(); });
    }, { rootMargin: '200px' }).observe(bg);
  })();

  /* ---------- viewer ---------- */
  var dlg = $('#viewer'), stage = $('#vwStage'), cur = null;
  function show(kind, i) {
    var p = cur; stage.textContent = '';
    if (kind === 'v') {
      var v = p.videos[i], vid = el('video');
      vid.controls = true; vid.playsInline = true; vid.autoplay = true; vid.poster = v.poster; vid.src = v.src;
      vid.addEventListener('ended', function () { if (i + 1 < p.videos.length) show('v', i + 1); });
      stage.append(vid);
    } else {
      var im = el('img'); im.alt = ''; im.src = p.images[i].src; stage.append(im);
    }
    $$('[data-k]', dlg).forEach(function (n) { n.setAttribute('aria-current', n.getAttribute('data-k') === kind + i); });
    var active = $('[data-k="' + kind + i + '"]', dlg); if (active && active.scrollIntoView) active.scrollIntoView({ block: 'nearest' });
  }
  function openProject(id, vi, photosFirst) {
    var p = byId[id]; if (!p) return; cur = p;
    $('#vwClient').textContent = p.client; $('#vwTitle').textContent = p.title;
    var list = $('#vwList'); list.textContent = '';
    p.videos.forEach(function (v, i) {
      var b = el('button', 'vw-item'); b.type = 'button'; b.setAttribute('data-k', 'v' + i);
      var img = el('img'); img.loading = 'lazy'; img.alt = ''; img.src = v.poster;
      var tx = el('span'); tx.append(el('b', '', vTitle(p, v, i)), el('small', '', fmt(v.d)));
      b.append(img, tx); b.addEventListener('click', function () { show('v', i); }); list.append(b);
    });
    if (p.images.length) {
      var ph = el('div', 'vw-photos');
      p.images.forEach(function (im, i) {
        var b = el('button'); b.type = 'button'; b.setAttribute('data-k', 'i' + i); b.setAttribute('aria-label', t('photo') + ' ' + (i + 1));
        var img = el('img'); img.loading = 'lazy'; img.alt = ''; img.src = im.th; b.append(img);
        b.addEventListener('click', function () { show('i', i); }); ph.append(b);
      });
      list.append(ph);
    }
    var cr = $('#vwCredits'); cr.textContent = '';
    p.credits.forEach(function (c) { cr.append(el('p', '', c)); });
    if (p.link) { var a = el('a', '', t('behance')); a.href = p.link; a.target = '_blank'; a.rel = 'noopener'; cr.append(a); }
    if (PRESS[p.id]) { var pa = el('a', '', t('pressLink')); pa.href = PRESS[p.id]; pa.target = '_blank'; pa.rel = 'noopener'; pa.style.marginInlineStart = '16px'; cr.append(pa); }
    cr.hidden = !p.credits.length && !p.link && !PRESS[p.id];
    $$('main video').forEach(function (v) { v.pause(); });
    if (!dlg.open) dlg.showModal();
    if (p.videos.length && !photosFirst) show('v', Math.min(vi || 0, p.videos.length - 1)); else show('i', 0);
    try { history.replaceState(null, '', '#p/' + id); } catch (e) {}
  }
  function closeViewer() {
    stage.textContent = ''; if (dlg.open) dlg.close();
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
    if (!reduce && window.scrollY < window.innerHeight) play(reel);
  }
  $('#vwClose').addEventListener('click', closeViewer);
  dlg.addEventListener('cancel', function (e) { e.preventDefault(); closeViewer(); });
  $$('[data-open]').forEach(function (b) {
    b.addEventListener('click', function () {
      var p = byId[b.getAttribute('data-open')]; if (!p) return;
      var v = b.getAttribute('data-v'); openProject(p.id, v === 'last' ? p.videos.length - 1 : +v);
    });
  });


  /* ---------- section tabs ---------- */
  var TABS = [
    ['work', 'Selected work', 'أعمال مختارة'], ['press', 'Press', 'الصحافة'], ['ai', 'AI Studio', 'استوديو الذكاء الاصطناعي'], '|',
    ['sec-tvc', 'TVCs', 'الإعلانات'], ['sec-music', 'Music videos', 'الأغاني المصوّرة'], ['sec-drama', 'Micro-drama', 'الدراما القصيرة'],
    ['sec-social', 'Short formats', 'المحتوى القصير'], ['sec-cgi', 'CGI', 'CGI'], ['sec-doc', 'Documentaries', 'الوثائقيات'],
    ['sec-photo', 'Photography', 'التصوير الفوتوغرافي'], '|',
    ['cases', 'Case studies', 'دراسات حالة'], ['bts', 'Behind the scenes', 'كواليس التصوير'], ['services', 'Services', 'الخدمات']
  ];
  var tabLinks = [];
  function renderTabs() {
    var box = $('#tabs'); box.textContent = ''; tabLinks = [];
    box.setAttribute('aria-label', lang === 'ar' ? 'أقسام الموقع' : 'Sections');
    TABS.forEach(function (tb) {
      if (tb === '|') { box.append(el('span', 'sep')); return; }
      if (!document.getElementById(tb[0])) return;
      var a = el('a', '', tb[L() + 1]); a.href = '#' + tb[0];
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById(tb[0]);
        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        history.replaceState(null, '', '#' + tb[0]);
      });
      box.append(a); tabLinks.push([a, tb[0]]);
    });
    spy();
  }
  var current = null;
  function spy() {
    var line = $('.nav').offsetHeight + 24, hit = null;
    tabLinks.forEach(function (x) {
      var n = document.getElementById(x[1]); if (n && n.getBoundingClientRect().top <= line) hit = x;
    });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) hit = tabLinks[tabLinks.length - 1];
    if (hit === current && hit && hit[0].getAttribute('aria-current')) return;
    tabLinks.forEach(function (x) { x[0].removeAttribute('aria-current'); });
    current = hit;
    if (!hit) return;
    hit[0].setAttribute('aria-current', 'true');
    var box = $('#tabs'), r = hit[0].getBoundingClientRect(), b = box.getBoundingClientRect();
    box.scrollBy({ left: (r.left + r.width / 2) - (b.left + b.width / 2), behavior: reduce ? 'auto' : 'smooth' });
  }
  var spyQueued = false;
  window.addEventListener('scroll', function () {
    if (spyQueued) return; spyQueued = true;
    requestAnimationFrame(function () { spyQueued = false; spy(); });
  }, { passive: true });
  window.addEventListener('resize', spy);

  /* ---------- language ---------- */
  function applyText() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $$('[data-t]').forEach(function (n) { var v = t(n.getAttribute('data-t')); if (typeof v === 'string') n.textContent = v; });
    $('#lang').textContent = t('lang');
    renderSelected(); renderSections(); renderTabs();
  }
  $('#lang').addEventListener('click', function () {
    lang = lang === 'en' ? 'ar' : 'en';
    try { localStorage.setItem('lang', lang); } catch (e) {}
    applyText();
  });

  applyText();
  var m = /^#p\/(.+)$/.exec(location.hash); if (m && byId[m[1]]) openProject(m[1], 0);
})();
