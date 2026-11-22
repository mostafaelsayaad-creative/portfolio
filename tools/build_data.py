"""Scans media/ and writes js/data.js. Run from the repo root: python3 tools/build_data.py"""
import os, json, glob, subprocess
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
M = os.path.join(ROOT, "media")

# n, client, title, categories, featured
P = [
 (1, "Ajmal Perfumes", "Untold Stories campaign", "tvc cgi", 1),
 (11, "Hublot x Seddiqi", "75th anniversary film", "tvc photo", 1),
 (9, "Emaar", "New Year's event film", "doc cgi", 1),
 (4, "Treva", "Home Economist, Saudi Arabia", "tvc music", 1),
 (8, "HomeBox", "Ramadan campaign", "tvc social photo", 1),
 (13, "Doux", "A day with Doux, AI commercial", "ai", 1),
 (2, "Dubai Mallathon", "People of Mallathon", "doc social", 1),
 (6, "Dubai Mallathon", "AI video content", "ai", 1),
 (30, "Mashreq", "AI & Me", "tvc", 1),
 (17, "Abbott FreeStyle Libre", "Ramadan campaign", "tvc photo", 1),
 (19, "Skechers", "Back to school TVC", "tvc", 1),
 (16, "Dabur FEM", "New packaging music video", "music", 1),
 (20, "CGI reel", "Ten CGI films", "cgi", 1),
 (7, "Ghamran Camp", "Documentary", "doc", 1),
 (15, "Dari", "Ramadan hero film, Saudi Arabia", "tvc", 1),
 (10, "Hublot x Seddiqi", "Big Bang 75th, Silver", "cgi photo", 0),
 (12, "Hublot x Seddiqi", "Big Bang 75th, Titanium", "cgi photo", 0),
 (3, "Skechers", "Behind the scenes, 2025 TVC", "tvc", 0),
 (5, "Dubai Mallathon", "Short-form social content", "social", 0),
 (29, "Dubai Silicon Oasis", "CGI ad", "cgi", 0),
 (18, "Doux", "Women's Day film", "tvc", 0),
 (14, "Noya Clinics", "Brand ad, Saudi Arabia", "tvc", 0),
 (22, "Mehbaj", "Campaign film 1 of 5", "tvc", 0),
 (25, "Mehbaj", "Campaign film 2 of 5", "tvc", 0),
 (28, "Mehbaj", "Campaign film 3 of 5", "tvc", 0),
 (21, "Mehbaj", "Campaign film 4 of 5", "tvc", 0),
 (24, "TikTik Instant Koshary", "Film 1 of 3", "tvc", 0),
 (23, "TikTik Instant Koshary", "Film 2 of 3", "tvc", 0),
 (27, "TikTik Instant Koshary", "Film 3 of 3", "tvc", 0),
 (26, "Molped", "Digital ad", "tvc", 0),
 (31, "The Entertainer", "Digital ad", "social", 0),
 (32, "OSN+", "Digital campaign", "social", 0),
 (33, "Oleomile", "Photo session, UAE", "photo", 0),
 (34, "Oleomile", "Video reels, UAE", "social", 0),
 (35, "Derman Beauty Salon", "Social films, Saudi Arabia", "social", 0),
 (36, "Atyab", "Digital content reels", "social", 0),
 (37, "Viola Restaurant", "Photoshoot", "photo", 0),
 (38, "Nivea Soft", "Social films, Egypt", "social", 0),
 (40, "Nivea Men", "Social films, Egypt", "social", 0),
 (39, "Chiketita", "World Cup digital campaign", "social", 0),
 (41, "Bashayer", "Digital content reels", "social", 0),
 (42, "Bashayer", "Digital campaign", "social", 0),
 (43, "Al Zamil", "Saudi National Day film", "tvc", 0),
 (44, "Wellness", "Digital ads", "tvc", 0),
 (45, "Al Rayhan", "Photoshoot, Libya", "photo", 0),
 (46, "Star National Automotive", "Mercedes-Benz reels", "social", 0),
 (52, "Mercedes-Benz Egypt", "Social films", "social", 0),
 (47, "Tag El Melouk", "Photoshoot", "photo", 0),
 (48, "Président", "Photo shoot, Egypt", "photo", 0),
 (50, "La Pomme", "Patisserie photoshoot", "photo", 0),
 (49, "Atyab", "Cold cuts reels", "social", 0),
 (58, "Atyab", "Digital video reels", "social", 0),
 (51, "Talabat", "Bumper ads", "tvc", 0),
 (55, "Talabat", "World Cup ad", "tvc", 0),
 (54, "Fine", "World Cup jingle", "music tvc", 0),
 (56, "Fine", "World Cup bumper ads", "tvc", 0),
 (57, "B.TECH", "Creative documentaries", "doc", 0),
 (59, "El Mashrou3", "Reality TV show", "doc", 0),
 (60, "Lamb Weston", "Digital video content", "social", 0),
 (61, "Nogoum FM", "Digital content", "social", 0),
 (62, "Oxfam", "Field films", "doc", 0),
 (63, "Faten Salah", "Cake decoration course ads", "social", 0),
 (64, "City Edge", "Exhibition coverage", "doc", 0),
 (65, "Forasna", "Job fair content", "doc", 0),
]
VT = {1: {"01": "Hero film", "02": "Behind the scenes", "04": "CEO interview"},
      8: {"01": "Hero film", "02": "Teaser 1", "03": "Teaser 2", "04": "Teaser 3"}}
CREDITS = {
 2: ["Client: Dubai Mallathon", "Creative producer: Mostafa Elsayaad", "Filmmakers: Zeyad Sami, Tornike Gulashvili", "Agency: THREE59"],
 3: ["Agency: LPS Brands", "Creative producer: Mostafa Elsayaad", "Director: Hany Visuals"],
 4: ["Creative producer: Mostafa Elsayaad", "Agency and production house: LPS Brands"],
 5: ["I led the video production department for the event: daily coverage across six malls, recap films, short-form and AI content."],
 7: ["Client: Ghamran Camp", "Creative producer: Mostafa Elsayaad", "Camera and edit: Zeyad Sami", "Agency: THREE59"],
 11: ["Creative producer with Contagious x Hashtag.", "Concept, production design, shoot and delivery in one week."],
 13: ["Made entirely with AI, from the mood board to the final animation.", "Only the voice-over was recorded the traditional way."],
 14: ["Creative producer: Mostafa Elsayaad"],
 16: ["Client: Dabur FEM", "Creative producer: Mostafa Elsayaad"],
 17: ["Creative producer: Mostafa Elsayaad", "Agency: LPS Brands, UAE", "Director: Omar Abd El Aziz", "DOP: Karim El Husseiny"],
 19: ["Production house: LPS", "Creative producer: Mostafa Elsayaad", "Director: Disha Hisham", "DOP: Amr Nazeer"],
 21: ["Creative director and producer: Mostafa Elsayaad", "Director: Youssef Ashraf", "DOP: Mohamed Tawfek"],
 23: ["Creative director and producer: Mostafa Elsayaad", "Director: Alaa Din", "DOP: Mostafa Desha"],
 26: ["Agency: Birdmilk", "Producer: Mostafa Elsayaad", "Director: Mo Salah"],
 30: ["Agency: LPS", "Creative producer: Mostafa Elsayaad", "Director: Youssef Ashraf", "DOP: Zeyad Sami"],
 32: ["Agency: Birdmilk", "Producer: Mostafa Elsayaad", "Creative director: Mohamed Salah"],
 33: ["Producer: Mostafa Elsayaad", "Photographer: Ahmed Abdelgawad", "Art director: Noura Saafan"],
 34: ["Producer: Mostafa Elsayaad", "DOP: Karim El Hussainy", "Art director: Noura Saafan"],
 45: ["Producer: Mostafa Elsayaad", "Photographer: Shreef Ashrf", "Food stylist: Lilly Islam"],
 46: ["Agency: Birdmilk", "Producer: Mostafa Elsayaad", "DOP: Mohamed Tawfik"],
 47: ["Producer: Mostafa Elsayaad", "Photographer: Shreef Ashrf"],
 48: ["Client: Président Egypt", "Producer: Mostafa Elsayaad", "Photographer: Abdelrahman Fawzy"],
 50: ["Client: La Pomme Egypt", "Producer: Mostafa Elsayaad", "Photographer: Abdelrahman Fawzy"],
}
for k in (22, 25, 28): CREDITS[k] = CREDITS[21]
for k in (24, 27): CREDITS[k] = CREDITS[23]
BEHANCE = {}
for line in open(os.path.join(ROOT, "tools", "manifest.txt")).read().strip().split("\n"):
    pid, slug = line.split("|")[:2]
    BEHANCE[len(BEHANCE) + 1] = f"https://www.behance.net/gallery/{pid}/{slug}"

def vinfo(rel):
    f = os.path.join(M, rel)
    r = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries",
                        "stream=width,height:format=duration", "-of", "json", f], capture_output=True, text=True)
    j = json.loads(r.stdout); s = j["streams"][0]
    return {"src": "media/" + rel, "poster": "media/" + rel.replace("v/", "p/", 1).replace(".mp4", ".jpg"),
            "w": s["width"], "h": s["height"], "d": round(float(j["format"]["duration"]))}

def slug(s):
    return "".join(c.lower() if c.isalnum() else "-" for c in s).strip("-").replace("--", "-").replace("--", "-")

out = []
for n, client, title, cats, feat in P:
    vids = []
    for f in sorted(glob.glob(f"{M}/v/{n:02d}/*.mp4")):
        if ".tmp" in f: continue
        k = os.path.basename(f)[:2]
        v = vinfo(f"v/{n:02d}/{k}.mp4")
        v["t"] = VT.get(n, {}).get(k, "")
        vids.append(v)
    if n == 4:
        for rel, t in (("v/x/treva-bts.mp4", "Behind the scenes"), ("v/x/case-treva.mp4", "Case film")):
            v = vinfo(rel); v["t"] = t; vids.append(v)
    imgs = []
    for f in sorted(glob.glob(f"{M}/i/{n:02d}/*.webp")):
        k = os.path.basename(f)
        w, h = Image.open(f).size
        if max(w, h) < 500: continue   # tiny credit strips from Behance
        imgs.append({"src": f"media/i/{n:02d}/{k}", "th": f"media/t/{n:02d}/{k}", "w": w, "h": h})
    out.append({"id": slug(f"{client} {title}"), "client": client, "title": title, "cats": cats.split(),
                "feat": feat, "cover": f"media/c/{n:02d}.webp", "videos": vids, "images": imgs,
                "credits": CREDITS.get(n, []), "link": BEHANCE[n]})

def extra(pid, client, title, cats, files, credits, pos):
    vids = []
    for rel, t in files:
        v = vinfo(rel); v["t"] = t; vids.append(v)
    out.insert(pos, {"id": pid, "client": client, "title": title, "cats": cats.split(), "feat": 1,
                     "cover": vids[0]["poster"], "videos": vids, "images": [], "credits": credits, "link": ""})
extra("saudi-german-health", "Saudi German Health", "Mental health film", "tvc",
      [("v/x/sgh-film.mp4", "Film"), ("v/x/sgh-bts.mp4", "Behind the scenes")], ["Produced with THREE59."], 3)
extra("vatika-whatsyourflavour", "Vatika Fruitamin", "#WhatsYourFlavour on TikTok", "social music",
      [("v/x/case-vatika.mp4", "Case film")], [], 12)

# AI studio work lives in ai/ (the AI portfolio site); reference its files instead of copying them.
AI = os.environ.get("AI_DIR", os.path.join(ROOT, "ai"))
def ai(pid, client, title, cats, files, feat, pos, credits=()):
    vids = []
    for name, t in files:
        r = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries",
                            "stream=width,height:format=duration", "-of", "json", f"{AI}/m/{name}.mp4"], capture_output=True, text=True)
        j = json.loads(r.stdout); s = j["streams"][0]
        vids.append({"src": f"ai/m/{name}.mp4", "poster": f"ai/p/{name}.jpg", "w": s["width"], "h": s["height"],
                     "d": round(float(j["format"]["duration"])), "t": t})
    out.insert(pos, {"id": pid, "client": client, "title": title, "cats": cats.split(), "feat": feat,
                     "cover": vids[0]["poster"], "videos": vids, "images": [], "credits": list(credits), "link": ""})
MADE = ["Written and directed by Mostafa Elsayaad, made with AI."]
ai("six-seconds", "Six Seconds", "Original micro-drama", "original ai",
   [("sixseconds", "Trailer")] + [(f"ss-ep{i}", f"Episode {i}") for i in range(1, 7)], 1, 9, MADE)
ai("lynk-co-900-qafila", "LYNK & CO 900", "Qafila", "ai", [("qafila169", "Qafila"), ("mainchar", "Main Character")], 1, 11,
   ["Directed by Mostafa Elsayaad, made with AI."])
ai("adcb-eid-in-the-details", "ADCB", "Eid in the Details", "ai", [("adcb", "")], 1, 16, ["Directed by Mostafa Elsayaad, made with AI."])
n = len(out)
ai("seven-lives", "Seven Lives", "Original micro-drama", "original ai",
   [("sevenlives", "Trailer")] + [(f"sl-ep{i}", f"Episode {i}") for i in range(1, 5)], 0, n, MADE)
ai("one-wish-before-dawn", "One Wish Before Dawn", "Original micro-drama", "original ai", [("onewish", "Trailer")], 0, n + 1, MADE)
ai("uae-national-anthem-film", "UAE National Anthem film", "One Anthem", "ai", [("anthem", "")], 0, n + 2)
ai("rawaa-rice-the-longer-table", "Rawaa Rice", "The Longer Table", "ai", [("rawaa", "")], 0, n + 3)
ai("sorbonne-abu-dhabi", "Sorbonne University Abu Dhabi", "Weaving Tomorrow", "ai",
   [("suadwomen", "Weaving Tomorrow"), ("suadasmr", ""), ("suadorient", "")], 0, n + 4)
ai("icaur", "iCAUR", "Mission Complete", "ai", [("mission", "Mission Complete"), ("gameplay", ""), ("reev", ""), ("sf17", "")], 0, n + 5)
ai("equestrian-heritage", "Equestrian heritage", "Heritage in Motion", "ai", [("horses", "Heritage in Motion"), ("hf0421", "")], 0, n + 6)

pov = vinfo("v/x/pov.mp4")
with open(os.path.join(ROOT, "js", "data.js"), "w", encoding="utf-8") as f:
    f.write("window.PROJECTS=" + json.dumps(out, ensure_ascii=False, separators=(",", ":")) + ";\n")
    f.write("window.POV=" + json.dumps(pov) + ";\n")
print(len(out), "projects,", sum(len(p["videos"]) for p in out), "videos,", sum(len(p["images"]) for p in out), "images")
