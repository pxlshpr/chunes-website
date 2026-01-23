# Chunes Website - Screenshots & Videos Needed

All media should be saved to: `/public/screenshots/`

## Screenshot Requirements

All screenshots should be taken on iPhone 17 Pro Max (or latest simulator) at native resolution.
Take both **light mode** and **dark mode** versions of each.

---

### 1. Hero Section
**Files:** `player-dark.png`, `player-light.png`

**What to capture:**
- Player view with the vinyl disc spinning
- AI-suggested tags visible on screen (showing the colorful tag pills)
- A song playing with album artwork visible
- Shows the core Chunes experience at a glance

---

### 2. Smart Tags Section
**Files:** `tags-dark.png`, `tags-light.png`

**What to capture:**
- Tag selection/editing screen
- Show the tabs: Moods / Activities / Genres / Instruments
- Colorful tag pills visible (purple for genres, pink for moods, orange for activities, gold for instruments)
- AI suggestion feature if possible (the sparkle/suggestion UI)
- Examples of tags like: Energetic, Workout, Rock, Guitar, Chill, Road Trip

---

### 3. Custom Mixes Section
**Files:** `mixes-dark.png`, `mixes-light.png`

**What to capture:**
- Either the Mixes list showing saved mixes with custom icons
- OR the filter view with multiple filters active
- Show the variety of filter types available:
  - Mood filters
  - Activity filters
  - Genre filters
  - Instrument filters
  - Vocal level filter
  - Artist filter
  - Duration filter
  - Release date filter
- If possible, show the sort menu with options:
  - Date Added (latest/oldest)
  - Release Date (newest/oldest)
  - Play Count (most/least)
  - Skip Count (most/least)
  - Duration (longest/shortest)
  - Last Played (latest/oldest)

---

### 4. Markers Section
**Files:** `markers-dark.png`, `markers-light.png`

**What to capture:**
- Markers sheet/view showing a list of markers for a song
- Each marker showing:
  - Marker name/emoji (e.g., "Drop", "Verse", "Solo")
  - Timestamp position
- If possible, show the buffer playback UI:
  - The 5 / 10 / 15 second buffer options
  - "Play Now" vs "With Buffer" buttons
- Timeline visualization showing marker positions

**Use case to highlight:**
- Gym prep: marking drops in DJ mixes to get hyped with the buildup
- Practice: marking solos to loop the lead-in until you nail it

---

### 5. Apple Music Integration Section
**Files:** `library-dark.png`, `library-light.png`

**What to capture:**
- Library view showing songs from Apple Music
- OR player view showing an imported track playing (a DJ mix you've uploaded)
- Shows that both streaming and imported/uploaded tracks work
- iCloud sync indicator if visible

---

## Video Requirements (Optional)

Videos provide a better experience than static screenshots. Use screen recording on device.

**Format:** MP4, H.264 codec
**Resolution:** Native device resolution
**Duration:** 5-15 seconds each
**Settings:** Autoplay, muted, loop

### Videos to create:

| Video | Files | What to show |
|-------|-------|--------------|
| Tags Demo | `tags-dark.mp4`, `tags-light.mp4` | Scrolling through tag categories, tapping to add tags, AI suggesting tags |
| Mixes Demo | `mixes-dark.mp4`, `mixes-light.mp4` | Opening filters, selecting multiple filters, changing sort order, saving as mix |
| Markers Demo | `markers-dark.mp4`, `markers-light.mp4` | Opening markers sheet, tapping a marker to jump, using buffer playback |
| Player Demo | `player-dark.mp4`, `player-light.mp4` | Vinyl spinning, song playing, showing tags on player |

### Video Conversion Command

Convert MOV screen recordings to optimized MP4:

```bash
ffmpeg -i input.mov -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k output.mp4
```

---

## Current Screenshots Available

- `player-dark.png` - Player view (dark mode)
- `tags-dark.png` - Tags view (dark mode)
- `app-dark.png` - App screenshot (dark mode)

## Still Needed

- [ ] All light mode versions
- [ ] mixes-dark.png / mixes-light.png
- [ ] markers-dark.png / markers-light.png
- [ ] library-dark.png / library-light.png
- [ ] Videos (optional but recommended)
