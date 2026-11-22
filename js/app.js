(function () {
  'use strict';
  var P = window.PROJECTS || [], STILLS = window.AI_STILLS || [];
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var el = function (tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };

  var T = {
    en: {
      skip: 'Skip to the work', navSel: 'Selected work', navAi: 'AI Studio', navFilms: 'Films by type', navContact: 'Contact',
      roles: 'Creative film producer and AI creative director',
      heroSub: 'Fourteen years of commercials, music videos and social content across the Gulf and Egypt, and films directed with AI.',
      about: "I started as a copywriter and creative director, then moved into production. So I read a script the way a creative does and budget it the way a producer has to. I've run sets with more than 150 crew and delivered for Hublot, Emaar, Skechers, Ajmal, Mashreq and Abbott.",
      watch: 'Watch the film',
      aiH: 'AI Studio', aiTag: 'Ideas that render.',
      aiP: 'Where a one-line idea becomes a finished film. I direct brand commercials and my own micro-dramas with AI, and fourteen years on real sets decide what goes in the frame.',
      aiBtn: 'Enter the AI studio', aiBtn2: 'See the micro-dramas',
      aiFilmsH: 'Brand films made with AI', aiFilmsP: 'Commercials directed with AI from the first mood board to the final frame, for LYNK & CO, ADCB, Rawaa Rice and Doux.',
      films: function (n) { return n + (n === 1 ? ' film' : ' films'); }, photos: function (n) { return n + (n === 1 ? ' photo' : ' photos'); },
      episodes: function (n) { return n + (n === 1 ? ' episode' : ' episodes') + ' to watch'; },
      casesH: 'Two campaigns with numbers', playCase: 'Play the case film',
      c1H: 'Treva: a rap song for the home economist',
      c1P: "The brief was to reach homemakers in Saudi Arabia. We wrote a rap song that calls them the household's economists and shot it as a music video.",
      c2H: 'Vatika Fruitamin: #WhatsYourFlavour', c2P: 'A jingle built for TikTok and a set of films for the hair-mask range.',
      stSales: 'Increase in sales', stReach: 'Reach', stCtr: 'Click-through rate', stTraffic: 'Increase in traffic',
      caseNote: "Figures as reported in the campaign's case film.",
      btsH: 'Behind the scenes', btsP: 'Some of the shoot days, before the edit.',
      svH: 'Crew, talent and production services',
      sv1H: 'Talent and casting', sv1P: 'Actors, models, presenters and voice artists from the Gulf, Egypt and Lebanon.',
      sv2H: 'Production services', sv2P: 'Crew, equipment, locations and permits, with one contact from the recce to delivery.',
      sv3H: 'Where', sv3P: 'United Arab Emirates, Saudi Arabia, Egypt and Lebanon.',
      povH: 'I also act. Once.', povP: "A sketch from the office: what happens when you help a stranger strictly according to your job title. I'm in it. Casting directors, go easy.",
      ctH: 'Got a script, a deck, or just a shoot date?', ctP: "Send whatever you have. I'll reply with how I'd make it and what it would take.", ctEmail: 'Email',
      foot: 'Client names and campaigns belong to their owners.',
      close: 'Close', behance: 'See this project on Behance', film: 'Film', photo: 'Photo', lang: 'العربية', prev: 'Scroll back', next: 'Scroll forward'
    },
    ar: {
      skip: 'انتقل إلى الأعمال', navSel: 'أعمال مختارة', navAi: 'استوديو الذكاء الاصطناعي', navFilms: 'الأفلام حسب النوع', navContact: 'تواصل',
      roles: 'منتج أفلام إبداعي ومخرج إبداعي بالذكاء الاصطناعي',
      heroSub: 'أربعة عشر عامًا من الإعلانات والأغاني المصوّرة ومحتوى السوشيال ميديا في الخليج ومصر، وأفلام أخرجتها بالذكاء الاصطناعي.',
      about: 'بدأت كاتبًا إعلانيًا ومديرًا إبداعيًا، ثم انتقلت إلى الإنتاج. لذلك أقرأ النص بعين المبدع وأضع ميزانيته بحساب المنتج. أدرت مواقع تصوير فيها أكثر من 150 فردًا، وسلّمت أعمالًا لهوبلو وإعمار وسكيتشرز وأجمل والمشرق وأبوت.',
      watch: 'شاهد الفيلم',
      aiH: 'استوديو الذكاء الاصطناعي', aiTag: 'أفكار تتحول إلى صورة.',
      aiP: 'هنا تتحول فكرة من سطر واحد إلى فيلم كامل. أُخرج إعلانات العلامات ومسلسلاتي القصيرة بالذكاء الاصطناعي، وأربعة عشر عامًا في مواقع التصوير الحقيقية تحدد ما يدخل الكادر.',
      aiBtn: 'ادخل استوديو الذكاء الاصطناعي', aiBtn2: 'شاهد الدراما القصيرة',
      aiFilmsH: 'أفلام علامات صُنعت بالذكاء الاصطناعي', aiFilmsP: 'إعلانات أخرجتها بالذكاء الاصطناعي من أول لوحة إلهام حتى آخر لقطة، للينك آند كو وبنك أبوظبي التجاري وأرز رواء ودو.',
      films: function (n) { return n + ' فيلم'; }, photos: function (n) { return n + ' صورة'; },
      episodes: function (n) { return n + ' حلقات للمشاهدة'; },
      casesH: 'حملتان بالأرقام', playCase: 'شاهد فيلم الحملة',
      c1H: 'تريفا: أغنية راب لاقتصادية المنزل',
      c1P: 'كان المطلوب الوصول إلى ربّات البيوت في السعودية. كتبنا أغنية راب تسمّيهنّ «اقتصاديات المنزل»، وصوّرناها فيديو كليب.',
      c2H: 'فاتيكا فروتامين: ‎#WhatsYourFlavour', c2P: 'جِنغل صُمّم لتيك توك مع مجموعة أفلام لسلسلة أقنعة الشعر.',
      stSales: 'زيادة في المبيعات', stReach: 'وصول', stCtr: 'نسبة النقر', stTraffic: 'زيادة في الزيارات',
      caseNote: 'الأرقام كما وردت في فيلم الحملة.',
      btsH: 'كواليس التصوير', btsP: 'أيام من مواقع التصوير، قبل المونتاج.',
      svH: 'الطواقم والمواهب وخدمات الإنتاج',
      sv1H: 'المواهب والكاستينغ', sv1P: 'ممثلون وعارضون ومقدّمون ومعلّقون صوتيون من الخليج ومصر ولبنان.',
      sv2H: 'خدمات الإنتاج', sv2P: 'طواقم ومعدات ومواقع تصوير وتصاريح، مع جهة اتصال واحدة من المعاينة حتى التسليم.',
      sv3H: 'أين', sv3P: 'الإمارات والسعودية ومصر ولبنان.',
      povH: 'وأمثّل أيضًا. مرة واحدة.', povP: 'اسكتش من المكتب: ماذا يحدث حين تساعد غريبًا بحسب مسمّاك الوظيفي فقط. أنا أحد الممثلين. رفقًا بي يا مديري الكاستينغ.',
      ctH: 'عندك نص أو عرض أو حتى موعد تصوير فقط؟', ctP: 'أرسل ما لديك، وسأرد عليك بطريقة تنفيذه وما يحتاجه.', ctEmail: 'البريد الإلكتروني',
      foot: 'أسماء العملاء والحملات ملك لأصحابها.',
      close: 'إغلاق', behance: 'شاهد المشروع على Behance', film: 'فيلم', photo: 'صورة', lang: 'English', prev: 'السابق', next: 'التالي'
    }
  };
  var VT_AR = { 'Hero film': 'الفيلم الرئيسي', 'Behind the scenes': 'الكواليس', 'Case film': 'فيلم الحملة', 'CEO interview': 'لقاء الرئيس التنفيذي', 'Film': 'الفيلم', 'Trailer': 'الإعلان التشويقي', 'TV commercial': 'الإعلان التلفزيوني' };

  // Sections by content type, in page order. kind decides the card shape.
  var SECS = [
    { id: 'tvc', kind: 'wide', tag: ['TV commercial', 'إعلان تلفزيوني'],
      en: ['TV commercials', 'Hero films for TV and digital. I take them from the script through casting, the shoot and post to the final master.'],
      ar: ['الإعلانات التلفزيونية', 'أفلام رئيسية للتلفزيون والمنصات الرقمية. أتولّاها من النص إلى الكاستينغ والتصوير والمونتاج حتى النسخة النهائية.'] },
    { id: 'music', kind: 'wide', tag: ['Music video', 'فيديو كليب'],
      en: ['Music videos', 'Songs written for a brand and shot as a proper music video, like the Treva rap for Saudi homemakers.'],
      ar: ['الأغاني المصوّرة', 'أغانٍ تُكتب للعلامة وتُصوَّر فيديو كليب كاملًا، مثل أغنية الراب التي كتبناها لتريفا في السعودية.'] },
    { id: 'drama', kind: 'drama', tag: ['Micro-drama', 'دراما قصيرة'],
      en: ['Micro-drama', 'Three original vertical series that I write and direct, made with AI. Each episode runs about a minute.'],
      ar: ['الدراما القصيرة', 'ثلاثة مسلسلات عمودية أصلية أكتبها وأخرجها، مصنوعة بالذكاء الاصطناعي. مدة الحلقة نحو دقيقة.'] },
    { id: 'social', kind: 'tall', tag: ['Short formats', 'محتوى قصير'],
      en: ['Short formats', 'Reels, TikToks and daily event coverage. At Dubai Mallathon my team filmed six malls and delivered new content every day.'],
      ar: ['المحتوى القصير', 'ريلز وتيك توك وتغطيات يومية للفعاليات. في دبي مولاثون صوّر فريقي في ستة مولات وسلّم محتوى جديدًا كل يوم.'] },
    { id: 'cgi', kind: 'wide', tag: ['CGI', 'CGI'],
      en: ['CGI', 'Product films and city-scale scenes built in 3D, for Hublot, Emaar and Dubai Silicon Oasis.'],
      ar: ['أفلام CGI', 'أفلام منتجات ومشاهد بحجم المدينة تُبنى بالأبعاد الثلاثية، لهوبلو وإعمار وواحة دبي للسيليكون.'] },
    { id: 'doc', kind: 'wide', tag: ['Documentary', 'وثائقي'],
      en: ['Documentaries and event films', "Real people and real places: the Ghamran desert camp, the runners of Dubai Mallathon, Emaar's New Year's Eve."],
      ar: ['الأفلام الوثائقية وأفلام الفعاليات', 'ناس حقيقيون وأماكن حقيقية: مخيم غمران الصحراوي، وعدّاؤو دبي مولاثون، وليلة رأس السنة مع إعمار.'] },
    { id: 'photo', kind: 'photo', tag: ['Photography', 'تصوير فوتوغرافي'],
      en: ['Photography', 'Food, product and campaign key visuals, shot alongside the films or on their own.'],
      ar: ['التصوير الفوتوغرافي', 'تصوير الطعام والمنتجات والصور الرئيسية للحملات، مع الأفلام أو في جلسات مستقلة.'] }
  ];
  var TAG = { ai: ['AI film', 'فيلم بالذكاء الاصطناعي'] };
  SECS.forEach(function (s) { TAG[s.id] = s.tag; });

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
  var sep = function () { return lang === 'ar' ? '، ' : ', '; };
  var vTitle = function (p, v, i) {
    var name = v.t || (p.videos.length === 1 ? 'Film' : '');
    if (!name) return t('film') + ' ' + (i + 1);
    if (lang === 'ar') { if (VT_AR[name]) return VT_AR[name]; return name.replace('Episode', 'الحلقة').replace('Teaser', 'تشويق'); }
    return name;
  };
  var play = function (v) { var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); };

  /* ---------- hero ---------- */
  var reel = $('#reel');
  if (reduce) { reel.removeAttribute('autoplay'); reel.pause(); }
  var bar = $('.bar');
  window.addEventListener('scroll', function () { bar.classList.toggle('is-solid', window.scrollY > window.innerHeight * 0.7); }, { passive: true });

  /* ---------- selected panels ---------- */
  var panelIO = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      var v = e.target.querySelector('video'); if (!v) return;
      if (e.isIntersecting && e.intersectionRatio > 0.55 && !reduce) {
        if (!v.src) v.src = v.getAttribute('data-src');
        play(v);
      } else { v.pause(); }
    });
  }, { threshold: [0, 0.55, 1] }) : null;
  function renderPanels() {
    var box = $('#panels'); box.textContent = '';
    var list = P.filter(function (p) { return p.feat; });
    list.forEach(function (p, i) {
      var b = el('button', 'panel'); b.type = 'button';
      var img = el('img'); img.alt = ''; img.loading = i ? 'lazy' : 'eager'; img.src = p.still;
      var v = el('video'); v.muted = true; v.loop = true; v.playsInline = true; v.preload = 'none'; v.setAttribute('data-src', p.loop);
      v.addEventListener('playing', function () { v.classList.add('is-live'); });
      var n = el('span', 'panel-n'); n.append(String(i + 1), el('small', '', ' / ' + list.length));
      var tx = el('span', 'panel-text');
      var tags = p.cats.map(function (c) { return TAG[c] ? TAG[c][L()] : ''; }).filter(Boolean).join(sep());
      tx.append(el('span', 'panel-client', p.client), el('span', 'panel-title', p.title), el('span', 'panel-tags', tags), el('span', 'panel-watch', t('watch')));
      b.append(img, v, el('span', 'panel-shade'), n, tx);
      b.addEventListener('click', function () { openProject(p.id, 0); });
      box.append(b);
      if (panelIO) panelIO.observe(b);
    });
  }

  /* ---------- cards and rails ---------- */
  function preview(target, media, v) {
    var vid, timer;
    target.addEventListener('pointerenter', function () {
      timer = setTimeout(function () {
        vid = el('video'); vid.muted = true; vid.loop = true; vid.playsInline = true; vid.src = v.src + '#t=' + Math.min(4, Math.floor(v.d / 4));
        media.append(vid);
        vid.addEventListener('playing', function () { vid.classList.add('is-live'); });
        play(vid);
      }, 180);
    });
    target.addEventListener('pointerleave', function () { clearTimeout(timer); if (vid) { vid.pause(); vid.removeAttribute('src'); vid.load(); vid.remove(); vid = null; } });
  }
  function card(p, kind, vi) {
    var b = el('button', 'card'); b.type = 'button';
    var m = el('span', 'card-media');
    var v = p.videos[vi || 0], src = p.still || p.cover;
    if (kind === 'tall' || kind === 'drama') {
      var vert = p.videos.filter(function (x) { return x.h > x.w; })[0]; v = vert || v; if (v) src = v.poster;
    } else if (kind === 'photo' && p.images.length) { src = p.images[0].th; v = null; }
    else if (kind === 'bts' || kind === 'ai') { src = v.poster; }
    var img = el('img'); img.loading = 'lazy'; img.alt = ''; img.src = src; m.append(img);
    b.append(m, el('span', 'card-client', p.client));
    if (kind !== 'bts') b.append(el('span', 'card-title', p.title));
    if (kind === 'drama') {
      if (p.line) b.append(el('span', 'card-line', p.line));
      b.append(el('span', 'card-meta', t('episodes')(Math.max(1, p.videos.length - 1))));
    } else if (kind !== 'bts') {
      var meta = [];
      if (p.videos.length && kind !== 'photo') meta.push(t('films')(p.videos.length));
      if (p.images.length && (kind === 'photo' || !p.videos.length)) meta.push(t('photos')(p.images.length));
      b.append(el('span', 'card-meta', meta.join(sep())));
    }
    b.addEventListener('click', function () {
      if (kind === 'photo' && p.images.length) openProject(p.id, 0, true); else openProject(p.id, vi != null ? vi : (v ? p.videos.indexOf(v) : 0));
    });
    if (canHover && !reduce && v) preview(b, m, v);
    return b;
  }
  function rail(host, cards, kind) {
    host.textContent = '';
    var r = el('div', 'rail k-' + (kind === 'bts' || kind === 'ai' ? 'wide' : kind));
    cards.forEach(function (c) { r.append(c); });
    host.append(r);
    var mk = function (cls, dir, label) {
      var b = el('button', 'rail-btn ' + cls, dir < 0 ? '←' : '→'); b.type = 'button'; b.setAttribute('aria-label', label);
      b.addEventListener('click', function () { r.scrollBy({ left: dir * r.clientWidth * 0.8, behavior: reduce ? 'auto' : 'smooth' }); });
      return b;
    };
    host.append(mk('prev', -1, t('prev')), mk('next', 1, t('next')));
  }
  function renderSections() {
    var box = $('#sections'), nav = $('#types'); box.textContent = ''; nav.textContent = '';
    SECS.forEach(function (s) {
      var list = inCat(s.id); if (s.id === 'photo') list = list.filter(function (p) { return p.images.length; });
      if (!list.length) return;
      var a = el('a', '', s[lang][0]); a.href = '#sec-' + s.id; a.append(el('small', '', list.length)); nav.append(a);
      var sec = el('section', 'sec sec-' + s.id); sec.id = 'sec-' + s.id;
      var head = el('div', 'wrap sec-head'); head.append(el('h2', '', s[lang][0]), el('p', '', s[lang][1]));
      var host = el('div', 'rail-wrap');
      sec.append(head, host); box.append(sec);
      rail(host, list.map(function (p) { return card(p, s.kind); }), s.kind);
    });
    rail($('[data-rail=ai]'), inCat('ai').map(function (p) { return card(p, 'ai'); }), 'ai');
    var bts = [];
    P.forEach(function (p) { p.videos.forEach(function (v, i) { if (v.t === 'Behind the scenes') bts.push(card(p, 'bts', i)); }); });
    rail($('[data-rail=bts]'), bts, 'bts');
  }

  /* ---------- AI studio visuals ---------- */
  (function () {
    var mq = $('#marquee'); if (!STILLS.length) return;
    var half = Math.ceil(STILLS.length / 2);
    [STILLS.slice(0, half), STILLS.slice(half)].forEach(function (set) {
      var row = el('div', 'mq-row');
      set.concat(set).forEach(function (src) { var i = el('img'); i.loading = 'lazy'; i.alt = ''; i.src = src; row.append(i); });
      mq.append(row);
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
    cr.hidden = !p.credits.length && !p.link;
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

  /* ---------- language ---------- */
  function applyText() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $$('[data-t]').forEach(function (n) { var v = t(n.getAttribute('data-t')); if (typeof v === 'string') n.textContent = v; });
    $('#lang').textContent = t('lang');
    renderPanels(); renderSections();
  }
  $('#lang').addEventListener('click', function () {
    lang = lang === 'en' ? 'ar' : 'en';
    try { localStorage.setItem('lang', lang); } catch (e) {}
    applyText();
  });

  applyText();
  var m = /^#p\/(.+)$/.exec(location.hash); if (m && byId[m[1]]) openProject(m[1], 0);
})();
