"""Scans media/ and ai/ and writes js/data.js. Run from the repo root: python3 tools/build_data.py

Each project: (client, title, categories, [media folder numbers]).
Categories: tvc, music, drama, social, cgi, ai, doc, photo. Order here is the order on the site.
"""
import os, json, glob, subprocess
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
M = os.path.join(ROOT, "media")
AI = os.path.join(ROOT, "ai")

P = [
 ("Ajmal Perfumes", "Untold Stories", "tvc cgi", [1]),
 ("Hublot x Seddiqi", "75th anniversary", "tvc cgi photo", [11]),
 ("Hublot x Seddiqi", "Big Bang 75th Silver", "tvc photo", [10]),
 ("Hublot x Seddiqi", "Big Bang 75th Titanium", "tvc photo", [12]),
 ("Skechers", "Back to school 2025", "tvc", [3]),
 ("Skechers", "Back to school", "tvc", [19]),
 ("Treva", "Home Economist", "tvc music", [4]),
 ("Ghamran Camp", "Documentary", "doc", [7]),
 ("Emaar", "New Year's Eve film", "doc cgi", [9]),
 ("HomeBox", "Ramadan campaign", "tvc social photo", [8]),
 ("Mashreq", "AI & Me", "tvc", [30]),
 ("Abbott FreeStyle Libre", "Ramadan campaign", "tvc photo", [17]),
 ("Dari", "Ramadan hero film", "tvc", [15]),
 ("Dabur FEM", "New packaging music video", "music", [16]),
 ("Dubai Mallathon", "People of Mallathon", "doc", [2]),
 ("Dubai Mallathon", "Short-form social content", "social", [5]),
 ("Dubai Mallathon", "AI video content", "ai", [6]),
 ("Doux", "A day with Doux", "ai", [13]),
 ("CGI reel", "Ten CGI films", "cgi", [20]),
 ("Dubai Silicon Oasis", "CGI ad", "cgi", [29]),
 ("Doux", "Women's Day film", "tvc", [18]),
 ("Noya Clinics", "Brand ad, Saudi Arabia", "tvc", [14]),
 ("Mehbaj", "Campaign films, Saudi Arabia", "tvc", [22, 25, 28, 21]),
 ("TikTik Instant Koshary", "Three films", "tvc", [24, 23, 27]),
 ("Molped", "Digital ad", "tvc", [26]),
 ("The Entertainer", "Digital ad", "social", [31]),
 ("OSN+", "Digital campaign", "social", [32]),
 ("Oleomile", "Photo session, UAE", "photo", [33]),
 ("Oleomile", "Video reels, UAE", "social", [34]),
 ("Derman Beauty Salon", "Social films, Saudi Arabia", "social", [35]),
 ("Atyab", "Digital content reels", "social", [36, 49, 58]),
 ("Viola Restaurant", "Photoshoot", "photo", [37]),
 ("Nivea Soft", "Social films, Egypt", "social", [38]),
 ("Nivea Men", "Social films, Egypt", "social", [40]),
 ("Chiketita", "World Cup digital campaign", "social", [39]),
 ("Bashayer", "Digital content", "social", [41, 42]),
 ("Al Zamil", "Saudi National Day film", "tvc", [43]),
 ("Wellness", "Digital ads", "tvc", [44]),
 ("Al Rayhan", "Photoshoot, Libya", "photo", [45]),
 ("Mercedes-Benz Egypt", "Social films", "social", [52, 46]),
 ("Tag El Melouk", "Photoshoot", "photo", [47]),
 ("Président", "Photo shoot, Egypt", "photo", [48]),
 ("La Pomme", "Patisserie photoshoot", "photo", [50]),
 ("Talabat", "World Cup ad and bumpers", "tvc", [55, 51]),
 ("Fine", "World Cup jingle", "music tvc", [54, 56]),
 ("B.TECH", "Creative documentaries", "doc", [57]),
 ("El Mashrou3", "Reality TV show", "doc", [59]),
 ("Lamb Weston", "Digital video content", "social", [60]),
 ("Nogoum FM", "Digital content", "social", [61]),
 ("Oxfam", "Field films", "doc", [62]),
 ("Faten Salah", "Cake decoration course ads", "social", [63]),
 ("City Edge", "Exhibition coverage", "doc", [64]),
 ("Forasna", "Job fair content", "doc", [65]),
]
# Home-page panels, in this order: project id -> key of media/reel/f-<key>.mp4 and .jpg
FEATURED = [("ajmal-perfumes-untold-stories", "ajmal"), ("hublot-x-seddiqi-big-bang-75th-titanium", "titanium"),
            ("skechers-back-to-school-2025", "skechers25"), ("treva-home-economist", "treva"),
            ("ghamran-camp-documentary", "ghamran"), ("emaar-new-year-s-eve-film", "emaar"),
            ("rawaa-rice-the-longer-table", "rawaa")]
VT = {(1, "01"): "Hero film", (1, "02"): "Behind the scenes", (1, "04"): "CEO interview",
      (8, "01"): "Hero film", (8, "02"): "Teaser 1", (8, "03"): "Teaser 2", (8, "04"): "Teaser 3",
      (11, "01"): "Anniversary film", (10, "01"): "TV commercial", (12, "01"): "TV commercial",
      (19, "01"): "TV commercial", (3, "01"): "TV commercial", (4, "01"): "TV commercial",
      (54, "01"): "Jingle film", (55, "01"): "World Cup ad"}
CREDITS = {
 2: ["Client: Dubai Mallathon", "Creative producer: Mostafa Elsayaad", "Filmmakers: Zeyad Sami, Tornike Gulashvili", "Agency: THREE59"],
 19: ["Production house: LPS", "Creative producer: Mostafa Elsayaad", "Director: Disha Hisham", "DOP: Amr Nazeer"],
 3: ["Production house: LPS", "Creative producer: Mostafa Elsayaad", "Director: Hany Visuals"],
 4: ["Creative producer: Mostafa Elsayaad", "Agency and production house: LPS Brands"],
 5: ["I led the video production department for the event: daily coverage across six malls, recap films, short-form and AI content."],
 7: ["Client: Ghamran Camp", "Creative producer: Mostafa Elsayaad", "Camera and edit: Zeyad Sami", "Agency: THREE59"],
 11: ["Creative producer with Contagious x Hashtag.", "Concept, production design, shoot and delivery in one week."],
 13: ["Made entirely with AI, from the mood board to the final animation.", "Only the voice-over was recorded the traditional way."],
 14: ["Creative producer: Mostafa Elsayaad"],
 16: ["Client: Dabur FEM", "Creative producer: Mostafa Elsayaad"],
 17: ["Creative producer: Mostafa Elsayaad", "Agency: LPS Brands, UAE", "Director: Omar Abd El Aziz", "DOP: Karim El Husseiny"],
 22: ["Creative director and producer: Mostafa Elsayaad", "Director: Youssef Ashraf", "DOP: Mohamed Tawfek"],
 24: ["Creative director and producer: Mostafa Elsayaad", "Director: Alaa Din", "DOP: Mostafa Desha"],
 26: ["Agency: Birdmilk", "Producer: Mostafa Elsayaad", "Director: Mo Salah"],
 30: ["Agency: LPS", "Creative producer: Mostafa Elsayaad", "Director: Youssef Ashraf", "DOP: Zeyad Sami"],
 32: ["Agency: Birdmilk", "Producer: Mostafa Elsayaad", "Creative director: Mohamed Salah"],
 33: ["Producer: Mostafa Elsayaad", "Photographer: Ahmed Abdelgawad", "Art director: Noura Saafan"],
 34: ["Producer: Mostafa Elsayaad", "DOP: Karim El Hussainy", "Art director: Noura Saafan"],
 45: ["Producer: Mostafa Elsayaad", "Photographer: Shreef Ashrf", "Food stylist: Lilly Islam"],
 52: ["Agency: Birdmilk", "Producer: Mostafa Elsayaad", "DOP: Mohamed Tawfik"],
 47: ["Producer: Mostafa Elsayaad", "Photographer: Shreef Ashrf"],
 48: ["Client: Président Egypt", "Producer: Mostafa Elsayaad", "Photographer: Abdelrahman Fawzy"],
 50: ["Client: La Pomme Egypt", "Producer: Mostafa Elsayaad", "Photographer: Abdelrahman Fawzy"],
}
BEHANCE = {}
for line in open(os.path.join(ROOT, "tools", "manifest.txt")).read().strip().split("\n"):
    pid, slug_ = line.split("|")[:2]
    BEHANCE[len(BEHANCE) + 1] = f"https://www.behance.net/gallery/{pid}/{slug_}"

def probe(path):
    r = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries",
                        "stream=width,height:format=duration", "-of", "json", path], capture_output=True, text=True)
    j = json.loads(r.stdout); s = j["streams"][0]
    return s["width"], s["height"], round(float(j["format"]["duration"]))

def vinfo(rel, t=""):
    w, h, d = probe(os.path.join(M, rel))
    return {"src": "media/" + rel, "poster": "media/" + rel.replace("v/", "p/", 1).replace(".mp4", ".jpg"), "w": w, "h": h, "d": d, "t": t}

def slug(s):
    s = "".join(c.lower() if c.isalnum() else "-" for c in s)
    while "--" in s: s = s.replace("--", "-")
    return s.strip("-")

EXTRA_V = {1: [], 4: [("v/x/treva-bts.mp4", "Behind the scenes"), ("v/x/case-treva.mp4", "Case film")],
           3: [("v/x/skechers-bts.mp4", "Behind the scenes")]}
out = []
for client, title, cats, nums in P:
    vids, imgs = [], []
    for n in nums:
        for f in sorted(glob.glob(f"{M}/v/{n:02d}/*.mp4")):
            if ".tmp" in f: continue
            k = os.path.basename(f)[:2]
            vids.append(vinfo(f"v/{n:02d}/{k}.mp4", VT.get((n, k), "")))
        for f in sorted(glob.glob(f"{M}/i/{n:02d}/*.webp")):
            k = os.path.basename(f)
            w, h = Image.open(f).size
            if max(w, h) < 500: continue   # tiny credit strips from Behance
            imgs.append({"src": f"media/i/{n:02d}/{k}", "th": f"media/t/{n:02d}/{k}", "w": w, "h": h})
    for rel, t in EXTRA_V.get(nums[0], []):
        vids.append(vinfo(rel, t))
    out.append({"id": slug(f"{client} {title}"), "client": client, "title": title, "cats": cats.split(),
                "cover": f"media/c/{nums[0]:02d}.webp", "videos": vids, "images": imgs,
                "credits": CREDITS.get(nums[0], []), "link": BEHANCE[nums[0]]})

def extra(pid, client, title, cats, files, credits, pos):
    vids = [vinfo(rel, t) for rel, t in files]
    out.insert(pos, {"id": pid, "client": client, "title": title, "cats": cats.split(),
                     "cover": vids[0]["poster"], "videos": vids, "images": [], "credits": credits, "link": ""})
extra("three59-just-one-tweak", "THREE59", "Just One Tweak", "music",
      [("v/x/just-one-tweak.mp4", "Music video")], ["Song written and directed by Mostafa Elsayaad", "Agency: THREE59"], 7)
extra("saudi-german-health", "Saudi German Health", "Mental health film", "tvc",
      [("v/x/sgh-film.mp4", "Film"), ("v/x/sgh-bts.mp4", "Behind the scenes")], ["Produced with THREE59."], 6)
extra("vatika-whatsyourflavour", "Vatika Fruitamin", "#WhatsYourFlavour on TikTok", "",
      [("v/x/case-vatika.mp4", "Case film")], [], 12)

# AI studio work lives in ai/ (the AI portfolio site); reference its files instead of copying them.
def ai(pid, client, title, cats, files, credits=(), images=(), line=""):
    vids = []
    for name, t in files:
        w, h, d = probe(f"{AI}/m/{name}.mp4")
        vids.append({"src": f"ai/m/{name}.mp4", "poster": f"ai/p/{name}.jpg", "w": w, "h": h, "d": d, "t": t})
    imgs = []
    for name in images:
        w, h = Image.open(f"{AI}/i/{name}").size
        imgs.append({"src": f"ai/i/{name}", "th": f"ai/i/{name}", "w": w, "h": h})
    out.append({"id": pid, "client": client, "title": title, "cats": cats.split(), "cover": vids[0]["poster"],
                "videos": vids, "images": imgs, "credits": list(credits), "link": "", "line": line})
MADE = ["Written and directed by Mostafa Elsayaad, made with AI."]
DIR = ["Directed by Mostafa Elsayaad, made with AI."]
ai("rawaa-rice-the-longer-table", "Rawaa Rice", "The Longer Table", "ai", [("rawaa", "")], DIR,
   ["rsheet.jpg", "r1.jpg", "r2.jpg", "r3.jpg", "r4.jpg", "r5.jpg"])
ai("lynk-co-900-qafila", "LYNK & CO 900", "Qafila", "ai", [("qafila169", "Qafila"), ("mainchar", "Main Character")], DIR)
ai("adcb-eid-in-the-details", "ADCB", "Eid in the Details", "ai", [("adcb", "")], DIR)
ai("uae-national-anthem-film", "UAE National Anthem film", "One Anthem", "ai", [("anthem", "")], DIR)
ai("sorbonne-abu-dhabi", "Sorbonne University Abu Dhabi", "Weaving Tomorrow", "ai",
   [("suadwomen", "Weaving Tomorrow"), ("suadasmr", ""), ("suadorient", "")], DIR)
ai("icaur", "iCAUR", "Mission Complete", "ai", [("mission", "Mission Complete"), ("gameplay", ""), ("reev", ""), ("sf17", "")], DIR)
ai("equestrian-heritage", "Equestrian heritage", "Heritage in Motion", "ai", [("horses", "Heritage in Motion"), ("hf0421", "")], DIR)
ai("six-seconds", "Six Seconds", "Original micro-drama", "drama",
   [("sixseconds", "Trailer")] + [(f"ss-ep{i}", f"Episode {i}") for i in range(1, 7)], MADE, line="Saving his brother means forgetting him.")
ai("seven-lives", "Seven Lives", "Original micro-drama", "drama",
   [("sevenlives", "Trailer")] + [(f"sl-ep{i}", f"Episode {i}") for i in range(1, 5)], MADE, line="Six lives spent. One kept.")
ai("one-wish-before-dawn", "One Wish Before Dawn", "Original micro-drama", "drama", [("onewish", "Trailer")], MADE, line="Every wish has a price.")
out[-3]["cover"] = "ai/i/ss-keyart.jpg"; out[-2]["cover"] = "ai/i/sl-keyart.jpg"

byid = {p["id"]: p for p in out}
for i, (pid, key) in enumerate(FEATURED):
    byid[pid]["feat"] = i + 1
    byid[pid]["still"] = f"media/reel/f-{key}.jpg"
    byid[pid]["loop"] = f"media/reel/f-{key}.mp4"
# keep each brand's other films right after its featured film in the type sections
FOLLOW = {"hublot-x-seddiqi-75th-anniversary": 2.1, "hublot-x-seddiqi-big-bang-75th-silver": 2.2,
          "skechers-back-to-school": 3.1}
out.sort(key=lambda p: p.get("feat", FOLLOW.get(p["id"], 99)))   # stable: featured first, the rest keep their order

pov = vinfo("v/x/pov.mp4")
stills = [f"ai/i/n{i:02d}.jpg" for i in range(1, 19) if os.path.exists(f"{AI}/i/n{i:02d}.jpg")]
with open(os.path.join(ROOT, "js", "data.js"), "w", encoding="utf-8") as f:
    f.write("window.PROJECTS=" + json.dumps(out, ensure_ascii=False, separators=(",", ":")) + ";\n")
    f.write("window.POV=" + json.dumps(pov) + ";\n")
    f.write("window.AI_STILLS=" + json.dumps(stills) + ";\n")
print(len(out), "projects,", sum(len(p["videos"]) for p in out), "videos,", sum(len(p["images"]) for p in out), "images")
print("featured:", [p["id"] for p in out if p.get("feat")])
