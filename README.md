# AURA Music Player

AURA is a modern, browser-based music player built as a single-page HTML
application. It combines local music playback, a full Web Audio
processing chain, playlists, lyrics, visualization, internet radio, and
media support in one interface.

> **Version:** 4.2.0\
> **Type:** Single-file HTML music player\
> **Languages:** فارسی / English

------------------------------------------------------------------------

## Features

### Music playback

-   Local music library with multi-file import
-   MP3, WAV, OGG, M4A and FLAC file selection
-   Add tracks from a direct audio URL
-   Play, pause, previous, next and seek controls
-   Volume and mute control
-   Shuffle and repeat modes
-   Playback speed control
-   Pitch control
-   Crossfade
-   Gapless playback
-   Sleep timer
-   Playback history and play counts

AURA uses two audio elements for playback and supports real-time
crossfade between tracks.

### Audio processing

AURA uses the browser's Web Audio API for real audio processing,
including:

-   32-band graphic EQ
-   Tone controls: Preamp, Balance, Bass, Treble, Vocal, Presence and
    Air
-   PureCore noise reduction
-   8D audio
-   Reverb
-   Delay / Echo
-   Distortion
-   Compressor
-   Stereo enhancement
-   Loudness normalization
-   Studio / Punch / Night processing modes
-   A/B comparison

The EQ and effects are connected to real Web Audio nodes rather than
being visual-only controls.

### Visualizer

-   Real-time spectrum visualization
-   Waveform display
-   Mini visualizer
-   Fullscreen visualization
-   Smooth animation using `requestAnimationFrame`
-   Visualizer work is reduced or paused when the page is hidden to
    avoid unnecessary CPU/GPU usage

### Library organization

AURA includes:

-   Home
-   Library
-   Albums
-   Artists
-   Favorites
-   Playlists
-   History
-   Statistics
-   Karaoke
-   Radio
-   Video & Photo
-   Tools

Uploaded tracks are included in the live artist/library data, so the
library can update dynamically as files are added.

### Lyrics and karaoke

-   Lyrics display
-   Lyrics synchronization
-   Karaoke view
-   Automatic karaoke mode
-   Copy lyrics
-   Previous/current/next lyric display

Lyrics can be fetched when a track is played if a source is available.

### Internet radio

The Radio section loads real radio stations at runtime through public
Radio Browser API mirrors.

### Video & Photo

AURA also includes a separate media section for local:

-   Video files
-   Image files

Media can be opened in a viewer, navigated between items, and removed
from the local collection.

### Appearance

The interface supports:

-   Theme color
-   RGB color cycling
-   Hue adjustment
-   Background blur
-   Darkness adjustment
-   CRT scanlines
-   Playback progress ring
-   Artwork display
-   Ambient mode

The interface can be switched between Persian and English.

------------------------------------------------------------------------

# How to Use --- فارسی

## 1. اجرای AURA

فایل اصلی پروژه `aura-real-5.html` است.

برای بهترین عملکرد، آن را روی یک وب‌سرور یا GitHub Pages اجرا کنید. بعضی
قابلیت‌های آنلاین مانند دریافت کتابخانه دمو و رادیو به محیط `http://` یا
`https://` نیاز دارند و اجرای مستقیم فایل با `file://` ممکن است باعث
محدودیت CORS شود.

## 2. افزودن موزیک

از منوی **افزودن موزیک** استفاده کنید.

می‌توانید: - چند فایل را هم‌زمان انتخاب کنید. - فایل‌های MP3، WAV، OGG، M4A
و FLAC اضافه کنید. - فایل را داخل ناحیه انتخاب فایل Drag & Drop کنید. -
در صورت وجود یک لینک مستقیم به فایل صوتی، از بخش **Add from URL**
استفاده کنید.

کتابخانه محلی AURA از IndexedDB برای نگهداری اطلاعات و فایل‌های محلی
استفاده می‌کند.

## 3. پخش موزیک

بعد از اضافه‌شدن آهنگ، آن را از Library، Home، Playlist یا سایر بخش‌ها
انتخاب کنید.

در Player پایین صفحه می‌توانید: - پخش و توقف را کنترل کنید. - آهنگ
قبلی/بعدی را انتخاب کنید. - روی نوار زمان کلیک کنید و به بخش دیگری از
آهنگ بروید. - صدا را تنظیم یا mute کنید. - Shuffle و Repeat را فعال
کنید.

## 4. تنظیم صدا

از بخش **Settings → Audio** وارد تنظیمات صوتی شوید.

در این قسمت می‌توانید از EQ و پردازش‌های صوتی مختلف استفاده کنید.

برای تنظیم دقیق‌تر، AURA دارای EQ چندبانده و کنترل‌های جداگانه برای Bass،
Treble، Vocal، Presence و Air است.

## 5. افکت‌های صوتی

افکت‌های صوتی AURA شامل 8D، Reverb، Delay، Distortion، Compressor، Stereo
و PureCore هستند.

بهتر است افکت‌ها را با شدت کم شروع کنید و سپس مقدار آن‌ها را افزایش دهید
تا از افت کیفیت یا صدای غیرطبیعی جلوگیری شود.

## 6. Playlist

از **New Playlist** یک Playlist جدید بسازید و آهنگ‌های موردنظر را در آن
قرار دهید.

Playlistها از منوی کناری قابل دسترسی هستند.

## 7. Favorites و Rating

برای اضافه‌کردن آهنگ به Favorites از دکمه Like استفاده کنید.

همچنین می‌توانید برای آهنگ امتیاز 1 تا 5 تعیین کنید.

## 8. Lyrics و Karaoke

از بخش **Karaoke** برای نمایش متن آهنگ استفاده کنید.

در صورت در دسترس بودن متن، AURA می‌تواند آن را با زمان پخش هماهنگ کند.

## 9. Radio

از منوی **Radio** وارد بخش رادیو شوید.

ایستگاه‌های رادیویی واقعی در زمان اجرا دریافت می‌شوند، بنابراین اتصال
اینترنت لازم است.

## 10. Video & Photo

از بخش **Video & Photo** می‌توانید فایل‌های ویدیویی و تصویری محلی را اضافه
کنید.

فایل‌ها در Media Library نمایش داده می‌شوند و می‌توان آن‌ها را در Viewer باز
کرد.

## 11. ظاهر برنامه

در **Settings → Appearance** می‌توانید رنگ و ظاهر AURA را شخصی‌سازی کنید.

گزینه‌هایی مانند RGB Cycle، Hue، Blur، Darkness، Scanlines، Progress Ring
و Ambient Mode در دسترس هستند.

## 12. زبان

AURA از فارسی و انگلیسی پشتیبانی می‌کند.

تغییر زبان از تنظیمات انجام می‌شود و جهت رابط نیز متناسب با زبان تغییر
می‌کند.

------------------------------------------------------------------------

# How to Use --- English

## 1. Run AURA

The main application file is `aura-real-5.html`.

For the best experience, serve it through a web server or GitHub Pages.
Online features such as the remote demo library and radio services may
require `http://` or `https://`; opening the HTML directly with
`file://` can cause CORS restrictions.

## 2. Add Music

Open **Add Music**.

You can: - Select multiple audio files. - Add MP3, WAV, OGG, M4A or FLAC
files. - Drag and drop files into the file area. - Add a direct audio
URL using **Add from URL**.

AURA uses IndexedDB for its local library and stores local track data in
the browser.

## 3. Play Music

Select a track from Home, Library, Artists, Albums, Playlists or another
library section.

The bottom player provides: - Play / pause - Previous / next - Seek -
Volume and mute - Shuffle - Repeat

## 4. Audio Settings

Open **Settings → Audio**.

Here you can control the equalizer, tone shaping and audio effects.

The player includes a multi-band EQ plus separate controls for Preamp,
Balance, Bass, Treble, Vocal, Presence and Air.

## 5. Audio Effects

Available effects include:

-   8D
-   PureCore
-   Reverb
-   Delay
-   Distortion
-   Compressor
-   Stereo enhancement

Use moderate effect levels when possible to preserve the original sound.

## 6. Playlists

Use **New Playlist** to create a playlist.

Your playlists are available from the sidebar and can be opened
directly.

## 7. Favorites and Ratings

Use the Like control to add a track to Favorites.

Tracks can also receive a 1--5 star rating.

## 8. Lyrics and Karaoke

Open **Karaoke** to view lyrics.

When lyrics are available, AURA can synchronize them with playback and
provides a karaoke-style current/previous/next lyric display.

## 9. Radio

Open **Radio** to load real internet radio stations.

An internet connection is required because stations are retrieved at
runtime.

## 10. Video & Photo

The **Video & Photo** section accepts local video and image files.

Items are displayed in a media grid and can be opened in the built-in
viewer.

## 11. Customize the Interface

Open **Settings → Appearance**.

You can customize:

-   Theme color
-   RGB Cycle
-   Hue
-   Background Blur
-   Darkness
-   CRT Scanlines
-   Progress Ring
-   Ambient Mode
-   Artwork display

## 12. Language

AURA supports both Persian and English.

Changing the language also changes the interface direction
automatically.

------------------------------------------------------------------------

# Storage and Performance

AURA keeps local media inside the browser rather than requiring a
traditional backend server.

Local tracks are stored as browser-managed Blob data in IndexedDB. The
application also avoids unnecessary memory duplication when storing
large files.

The visualizer uses `requestAnimationFrame` and stops active drawing
work when it becomes idle. Background polling intervals are also
disabled while the page is hidden.

This makes AURA suitable for a static deployment such as GitHub Pages
while keeping local media processing on the user's device.

------------------------------------------------------------------------

# Deployment

A simple GitHub Pages structure can look like:

``` text
AURA/
├── aura-real-5.html
├── manifest.json
├── sw.js
└── icon-512.png
```

If the HTML file is renamed to `index.html`, GitHub Pages can serve AURA
directly as the repository's main page.

For PWA support, keep `manifest.json`, `sw.js`, and `icon-512.png` in
the paths referenced by the HTML/manifest.

------------------------------------------------------------------------

# Notes

-   Local music is stored in the browser and is not uploaded to a server
    by the local-library mechanism.
-   Clearing browser site data can remove locally stored AURA media and
    settings.
-   Internet radio and remote demo tracks require an internet
    connection.
-   Some browser security policies can affect features when the HTML is
    opened directly with `file://`.
-   Browser support for Web Audio, IndexedDB, Media APIs and PWA
    features can vary.

------------------------------------------------------------------------

## Project

**AURA Music Player**

A single-file, browser-based music player focused on local playback,
audio processing, visualization and a modern desktop-style interface.
