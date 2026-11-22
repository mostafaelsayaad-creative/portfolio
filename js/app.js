(function () {
  'use strict';
  var P = window.PROJECTS || [];
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var el = function (tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };

  var T = {
    en: {
      skip: 'Skip to the work', navWork: 'Work', navSheet: 'Call sheet', navCases: 'Case studies', navBts: 'Behind the scenes', navAi: 'AI studio', navContact: 'Contact',
      roleSet: 'Creative film producer', roleAi: 'AI creative director',
      heroSub: 'Fourteen years producing commercials, music videos and social content in the Gulf and Egypt. I also direct films made with AI. Pick a title to switch reels.',
      reelSet: 'Reel A, shot on set', reelAi: 'Reel B, AI and CGI',
      about: "I started as a copywriter and creative director, then moved into production. So I read a script the way a creative does and budget it the way a producer has to. I've run sets with more than 150 crew, worked with high-end talent, and delivered for Hublot, Emaar, Skechers, Mashreq, Abbott and Nivea. I'm based in Dubai.",
      slYears: 'Years in production', slProjects: 'Projects on this site', slFilms: 'Films you can watch', slMarkets: 'Crew and talent in', slMarketsV: 'UAE, KSA, Egypt, Lebanon',
      sheetH: 'What I can put on a call sheet', sheetP: 'Pick a line to see the work behind it.',
      shDept: 'Department', shWhat: 'What you get', shHere: 'On this site',
      nProj: function (n) { return n + (n === 1 ? ' project' : ' projects'); },
      workH: 'The work', fSel: 'Selected', fAll: 'Everything',
      showAll: function (n) { return 'Show all ' + n + ' projects'; },
      films: function (n) { return n + (n === 1 ? ' film' : ' films'); }, photos: function (n) { return n + (n === 1 ? ' photo' : ' photos'); },
      casesH: 'Two campaigns with numbers', playCase: 'Play the case film',
      c1H: 'Treva: a rap song for the home economist',
      c1P: "The brief was to reach homemakers in Saudi Arabia. We wrote a rap song that calls them the household's economists and shot it as a music video.",
      c2H: 'Vatika Fruitamin: #WhatsYourFlavour', c2P: 'A jingle built for TikTok and a set of films for the hair-mask range.',
      stSales: 'Increase in sales', stReach: 'Reach', stCtr: 'Click-through rate', stTraffic: 'Increase in traffic',
      caseNote: "Figures as reported in the campaign's case film.",
      btsH: 'Behind the scenes', btsP: 'Some of the shoot days, before the edit.',
      aiH: 'The AI studio', aiP: 'A separate room for the AI work: brand films, three original micro-dramas, and how each one gets made, step by step.', aiBtn: 'Open the AI studio',
      mkH: 'Where I can put a crew on the ground', mkUae: 'United Arab Emirates', mkKsa: 'Saudi Arabia', mkEg: 'Egypt', mkLb: 'Lebanon', mkFor: 'Work for', mkLbP: 'Crews and talent on call.',
      povH: 'I also act. Once.', povP: "A sketch from the office: what happens when you help a stranger strictly according to your job title. I'm in it. Casting directors, go easy.",
      ctH: 'Got a script, a deck, or just a shoot date?', ctP: "Send whatever you have. I'll reply with how I'd make it and what it would take.", ctEmail: 'Email',
      foot: 'Client names and campaigns belong to their owners.',
      close: 'Close', behance: 'See this project on Behance', film: 'Film', photo: 'Photo', lang: 'العربية'
    },
    ar: {
      skip: 'انتقل إلى الأعمال', navWork: 'الأعمال', navSheet: 'جدول التصوير', navCases: 'دراسات حالة', navBts: 'الكواليس', navAi: 'استوديو الذكاء الاصطناعي', navContact: 'تواصل',
      roleSet: 'منتج أفلام إبداعي', roleAi: 'مخرج إبداعي بالذكاء الاصطناعي',
      heroSub: 'أربعة عشر عامًا في إنتاج الإعلانات والأغاني المصوّرة ومحتوى السوشيال ميديا في الخليج ومصر، وأُخرج كذلك أفلامًا مصنوعة بالذكاء الاصطناعي. اضغط على أحد اللقبين لتبديل العرض.',
      reelSet: 'العرض الأول، تصوير حي', reelAi: 'العرض الثاني، ذكاء اصطناعي و CGI',
      about: 'بدأت كاتبًا إعلانيًا ومديرًا إبداعيًا، ثم انتقلت إلى الإنتاج. لذلك أقرأ النص بعين المبدع وأضع ميزانيته بحساب المنتج. أدرت مواقع تصوير فيها أكثر من 150 فردًا، وعملت مع مواهب من الصف الأول، وسلّمت أعمالًا لهوبلو وإعمار وسكيتشرز والمشرق وأبوت ونيفيا. أقيم في دبي.',
      slYears: 'سنة في الإنتاج', slProjects: 'مشروعًا في هذا الموقع', slFilms: 'فيلمًا تستطيع مشاهدته', slMarkets: 'طواقم ومواهب في', slMarketsV: 'الإمارات، السعودية، مصر، لبنان',
      sheetH: 'ما أستطيع وضعه على جدول التصوير', sheetP: 'اختر سطرًا لترى الأعمال التي وراءه.',
      shDept: 'القسم', shWhat: 'ما تحصل عليه', shHere: 'في هذا الموقع',
      nProj: function (n) { return n + ' مشروع'; },
      workH: 'الأعمال', fSel: 'مختارات', fAll: 'كل الأعمال',
      showAll: function (n) { return 'اعرض المشاريع كلها (' + n + ')'; },
      films: function (n) { return n + ' فيلم'; }, photos: function (n) { return n + ' صورة'; },
      casesH: 'حملتان بالأرقام', playCase: 'شاهد فيلم الحملة',
      c1H: 'تريفا: أغنية راب لاقتصادية المنزل',
      c1P: 'كان المطلوب الوصول إلى ربّات البيوت في السعودية. كتبنا أغنية راب تسمّيهنّ «اقتصاديات المنزل»، وصوّرناها فيديو كليب.',
      c2H: 'فاتيكا فروتامين: ‎#WhatsYourFlavour', c2P: 'جِنغل صُمّم لتيك توك مع مجموعة أفلام لسلسلة أقنعة الشعر.',
      stSales: 'زيادة في المبيعات', stReach: 'وصول', stCtr: 'نسبة النقر', stTraffic: 'زيادة في الزيارات',
      caseNote: 'الأرقام كما وردت في فيلم الحملة.',
      btsH: 'كواليس التصوير', btsP: 'أيام من مواقع التصوير، قبل المونتاج.',
      aiH: 'استوديو الذكاء الاصطناعي', aiP: 'غرفة مستقلة لأعمال الذكاء الاصطناعي: أفلام للعلامات، وثلاثة مسلسلات دراما قصيرة أصلية، وطريقة صنع كل عمل خطوة بخطوة.', aiBtn: 'افتح استوديو الذكاء الاصطناعي',
      mkH: 'أين أستطيع تجهيز فريق تصوير', mkUae: 'الإمارات', mkKsa: 'السعودية', mkEg: 'مصر', mkLb: 'لبنان', mkFor: 'أعمال لصالح', mkLbP: 'طواقم ومواهب جاهزة عند الطلب.',
      povH: 'وأمثّل أيضًا. مرة واحدة.', povP: 'اسكتش من المكتب: ماذا يحدث حين تساعد غريبًا بحسب مسمّاك الوظيفي فقط. أنا أحد الممثلين. رفقًا بي يا مديري الكاستينغ.',
      ctH: 'عندك نص أو عرض أو حتى موعد تصوير فقط؟', ctP: 'أرسل ما لديك، وسأرد عليك بطريقة تنفيذه وما يحتاجه.', ctEmail: 'البريد الإلكتروني',
      foot: 'أسماء العملاء والحملات ملك لأصحابها.',
      close: 'إغلاق', behance: 'شاهد المشروع على Behance', film: 'فيلم', photo: 'صورة', lang: 'English'
    }
  };
  var VT_AR = { 'Hero film': 'الفيلم الرئيسي', 'Behind the scenes': 'الكواليس', 'Case film': 'فيلم الحملة', 'CEO interview': 'لقاء الرئيس التنفيذي', 'Film': 'الفيلم', 'Trailer': 'الإعلان التشويقي' };

  var CATS = [
    { id: 'tvc', en: ['Commercials and TVCs', 'Hero films for TV and digital, from the script to the final master.'], ar: ['الإعلانات التلفزيونية والرقمية', 'أفلام رئيسية للتلفزيون والمنصات الرقمية، من النص حتى النسخة النهائية.'] },
    { id: 'music', en: ['Music videos and jingles', 'Songs written for brands and shot as proper music videos.'], ar: ['الأغاني المصوّرة والجِنغل', 'أغانٍ تُكتب للعلامات وتُصوَّر فيديو كليب كاملًا.'] },
    { id: 'social', en: ['Short-form and social', 'Reels, TikToks and daily event coverage, delivered in volume.'], ar: ['المحتوى القصير والسوشيال ميديا', 'ريلز وتيك توك وتغطيات يومية للفعاليات، بكميات كبيرة وفي موعدها.'] },
    { id: 'cgi', en: ['CGI', 'Product films and city-scale stunts built in 3D.'], ar: ['أفلام CGI', 'أفلام منتجات ومشاهد بحجم المدينة تُبنى بالأبعاد الثلاثية.'] },
    { id: 'ai', en: ['AI films', 'Commercials made with AI, from the mood board to the last frame.'], ar: ['أفلام الذكاء الاصطناعي', 'إعلانات تُصنع بالذكاء الاصطناعي، من لوحة الإلهام حتى آخر لقطة.'] },
    { id: 'original', en: ['Original micro-dramas', 'Vertical series I write and direct.'], ar: ['دراما قصيرة أصلية', 'مسلسلات عمودية أكتبها وأخرجها.'] },
    { id: 'photo', en: ['Photo sessions', 'Food, product and campaign key visuals.'], ar: ['جلسات التصوير الفوتوغرافي', 'تصوير الطعام والمنتجات والصور الرئيسية للحملات.'] },
    { id: 'doc', en: ['Documentary and event films', 'Real people and real places, cut into short films.'], ar: ['الأفلام الوثائقية وأفلام الفعاليات', 'ناس حقيقيون وأماكن حقيقية في أفلام قصيرة.'] }
  ];
  var SERVICES = [
    { en: ['Talent and casting', 'Actors, models, presenters and voice artists from the Gulf, Egypt and Lebanon.', 'Ask for a shortlist'], ar: ['المواهب والكاستينغ', 'ممثلون وعارضون ومقدّمون ومعلّقون صوتيون من الخليج ومصر ولبنان.', 'اطلب قائمة مرشحين'] },
    { en: ['Production services', 'Crew, equipment, locations and permits in the UAE, Saudi Arabia, Egypt and Lebanon, with one contact from the recce to delivery.', 'Send a brief'], ar: ['خدمات الإنتاج', 'طواقم ومعدات ومواقع تصوير وتصاريح في الإمارات والسعودية ومصر ولبنان، مع جهة اتصال واحدة من المعاينة حتى التسليم.', 'أرسل البريف'] }
  ];

  var lang = 'en';
  try { lang = localStorage.getItem('lang') || 'en'; } catch (e) {}
  if (!T[lang]) lang = 'en';
  var filter = 'sel';
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

  /* ---------- text ---------- */
  function applyText() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $$('[data-t]').forEach(function (n) { var v = t(n.getAttribute('data-t')); if (typeof v === 'string') n.textContent = v; });
    $('#lang').textContent = t('lang');
    $('#tcReel').textContent = t(reel === 'ai' ? 'reelAi' : 'reelSet');
    renderSheet(); renderFilters(); renderGrid(); renderBts(); renderAi();
  }

  /* ---------- hero reel ---------- */
  var reel = 'set', video = $('#reel'), tc = $('#tc');
  function setReel(name, user) {
    reel = name;
    $$('.role').forEach(function (b) { var on = b.getAttribute('data-reel') === name; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on); });
    video.poster = 'media/reel/' + name + '.jpg';
    video.src = 'media/reel/' + name + '.mp4';
    $('#tcReel').textContent = t(name === 'ai' ? 'reelAi' : 'reelSet');
    if (!reduce || user) { var pr = video.play(); if (pr && pr.catch) pr.catch(function () {}); }
  }
  $$('.role').forEach(function (b) { b.addEventListener('click', function () { setReel(b.getAttribute('data-reel'), true); }); });
  video.addEventListener('ended', function () { setReel(reel === 'set' ? 'ai' : 'set'); });
  if (reduce) { video.removeAttribute('autoplay'); video.pause(); }
  (function tick() {
    var s = video.currentTime || 0, f = Math.floor((s % 1) * 24), pad = function (n) { return ('0' + n).slice(-2); };
    tc.textContent = '00:' + pad(Math.floor(s / 60)) + ':' + pad(Math.floor(s % 60)) + ':' + pad(f);
    requestAnimationFrame(tick);
  })();
  var bar = $('.bar');
  window.addEventListener('scroll', function () { bar.classList.toggle('is-solid', window.scrollY > window.innerHeight * 0.6); }, { passive: true });

  /* ---------- slate ---------- */
  $('#nProjects').textContent = P.length;
  $('#nFilms').textContent = P.reduce(function (a, p) { return a + p.videos.length; }, 0);

  /* ---------- call sheet ---------- */
  function renderSheet() {
    var box = $('#sheetRows'); box.textContent = '';
    var head = el('div', 'sheet-row is-head');
    head.append(el('span', '', t('shDept')), el('span', '', t('shWhat')), el('span', '', t('shHere')));
    box.append(head);
    CATS.forEach(function (c) {
      var n = inCat(c.id).length; if (!n) return;
      var row = el('button', 'sheet-row'); row.type = 'button'; row.setAttribute('role', 'listitem');
      row.append(el('span', 'sr-dept', c[lang][0]), el('span', 'sr-desc', c[lang][1]), el('span', 'sr-count', t('nProj')(n)));
      row.addEventListener('click', function () { filter = c.id; renderFilters(); renderGrid(); $('#work').scrollIntoView(); });
      box.append(row);
    });
    SERVICES.forEach(function (s) {
      var row = el('a', 'sheet-row'); row.href = '#contact'; row.setAttribute('role', 'listitem');
      row.append(el('span', 'sr-dept', s[lang][0]), el('span', 'sr-desc', s[lang][1]), el('span', 'sr-count', s[lang][2]));
      box.append(row);
    });
  }

  /* ---------- work grid ---------- */
  function renderFilters() {
    var box = $('#filters'); box.textContent = '';
    var add = function (id, label, n) {
      var b = el('button', 'chip', label); b.type = 'button'; b.setAttribute('aria-pressed', filter === id);
      if (n != null) b.append(el('small', '', n));
      b.addEventListener('click', function () { filter = id; renderFilters(); renderGrid(); });
      box.append(b);
    };
    add('sel', t('fSel')); add('all', t('fAll'), P.length);
    CATS.forEach(function (c) { var n = inCat(c.id).length; if (n) add(c.id, c[lang][0], n); });
  }
  function card(p, cls) {
    var b = el('button', cls || 'card'); b.type = 'button';
    var m = el('span', 'card-media'); m.style.display = 'block';
    var img = el('img'); img.loading = 'lazy'; img.alt = ''; img.src = p.cover; m.append(img);
    b.append(m, el('span', 'card-client', p.client), el('span', 'card-title', p.title));
    var meta = [];
    if (p.videos.length) meta.push(t('films')(p.videos.length));
    if (p.images.length) meta.push(t('photos')(p.images.length));
    b.append(el('span', 'card-meta', meta.join(lang === 'ar' ? '، ' : ', ')));
    b.addEventListener('click', function () { openProject(p.id, 0); });
    if (canHover && !reduce && p.videos.length) preview(b, m, p.videos[0]);
    return b;
  }
  function preview(target, media, v) {
    var vid, timer;
    target.addEventListener('pointerenter', function () {
      timer = setTimeout(function () {
        vid = el('video'); vid.muted = true; vid.loop = true; vid.playsInline = true; vid.src = v.src + '#t=' + Math.min(4, Math.floor(v.d / 4));
        media.append(vid);
        vid.addEventListener('playing', function () { vid.classList.add('is-live'); });
        var pr = vid.play(); if (pr && pr.catch) pr.catch(function () {});
      }, 180);
    });
    target.addEventListener('pointerleave', function () { clearTimeout(timer); if (vid) { vid.pause(); vid.removeAttribute('src'); vid.load(); vid.remove(); vid = null; } });
  }
  function renderGrid() {
    var grid = $('#grid'); grid.textContent = '';
    var list = filter === 'sel' ? P.filter(function (p) { return p.feat; }) : filter === 'all' ? P : inCat(filter);
    grid.className = 'grid' + (filter === 'sel' ? ' is-lead' : list.length > 12 ? ' is-dense' : '');
    list.forEach(function (p) { grid.append(card(p)); });
    var more = $('.more'), btn = $('#showAll');
    more.hidden = filter !== 'sel'; btn.textContent = t('showAll')(P.length);
  }
  $('#showAll').addEventListener('click', function () { filter = 'all'; renderFilters(); renderGrid(); $('#filters').scrollIntoView(); });

  /* ---------- behind the scenes ---------- */
  function renderBts() {
    var row = $('#btsRow'); row.textContent = '';
    P.forEach(function (p) {
      p.videos.forEach(function (v, i) {
        if (v.t !== 'Behind the scenes' && !(p.id.indexOf('skechers-behind') === 0 && i === 0)) return;
        var b = el('button', 'bts-tile'); b.type = 'button';
        var m = el('span', 'card-media'); m.style.display = 'block';
        var img = el('img'); img.loading = 'lazy'; img.alt = ''; img.src = v.poster; m.append(img);
        b.append(m, el('span', '', p.client));
        b.addEventListener('click', function () { openProject(p.id, i); });
        if (canHover && !reduce) preview(b, m, v);
        row.append(b);
      });
    });
  }

  /* ---------- AI band ---------- */
  function renderAi() {
    var box = $('#aiPosters'); box.textContent = '';
    ['six-seconds', 'seven-lives', 'one-wish-before-dawn'].forEach(function (id) {
      var p = byId[id]; if (!p) return;
      var b = el('button'); b.type = 'button';
      var img = el('img'); img.loading = 'lazy'; img.alt = ''; img.src = p.cover;
      b.append(img, el('span', '', p.client));
      b.addEventListener('click', function () { openProject(id, 0); });
      box.append(b);
    });
  }

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
  function openProject(id, vi) {
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
    var pov = $('#povVideo'); if (pov) pov.pause();
    if (!dlg.open) dlg.showModal();
    if (p.videos.length) show('v', Math.min(vi || 0, p.videos.length - 1)); else show('i', 0);
    try { history.replaceState(null, '', '#p/' + id); } catch (e) {}
  }
  function closeViewer() { stage.textContent = ''; if (dlg.open) dlg.close(); try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {} }
  $('#vwClose').addEventListener('click', closeViewer);
  dlg.addEventListener('cancel', function (e) { e.preventDefault(); closeViewer(); });
  $$('[data-open]').forEach(function (b) {
    b.addEventListener('click', function () {
      var p = byId[b.getAttribute('data-open')]; if (!p) return;
      var v = b.getAttribute('data-v'); openProject(p.id, v === 'last' ? p.videos.length - 1 : +v);
    });
  });

  /* ---------- language ---------- */
  $('#lang').addEventListener('click', function () {
    lang = lang === 'en' ? 'ar' : 'en';
    try { localStorage.setItem('lang', lang); } catch (e) {}
    applyText();
  });

  applyText();
  var m = /^#p\/(.+)$/.exec(location.hash); if (m && byId[m[1]]) openProject(m[1], 0);
})();
