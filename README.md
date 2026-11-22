# Mostafa Elsayaad portfolio

Live at https://mostafaelsayaad-creative.github.io/portfolio/

- `index.html`, `css/`, `js/`: the main site (film production and AI direction).
- `ai/`: the AI studio site, kept as its own page at `/portfolio/ai/`.
- `media/`: web-sized videos (`v/`), posters (`p/`), photos (`i/`, thumbnails in `t/`), covers (`c/`) and the two hero reels (`reel/`).
- `tools/build_data.py`: scans `media/` and `ai/` and rewrites `js/data.js`. Project names, categories and credits are edited at the top of that file.

To add a film: drop the mp4 in `media/v/<project number>/`, add a poster jpg with the same name in `media/p/<project number>/`, then run `python3 tools/build_data.py`.
