<div align="center">

# 🎵 AURA Music Player

A full-featured, studio-grade music player that runs entirely in your browser — as a single self-contained HTML file.

[![Live Demo](https://img.shields.io/badge/▶_Live_Demo-Start_Listening-7c3aed?style=for-the-badge)](https://xparsa070-code.github.io/AURA-PRO/)
[![GitHub stars](https://img.shields.io/github/stars/xparsa070-code/AURA-PRO?style=for-the-badge&color=ec4899)](https://github.com/xparsa070-code/AURA-PRO/stargazers)

**[English](#-english)** · **[فارسی](#-فارسی)**

</div>

---

## 🇬🇧 English

A full-featured, studio-grade music player that runs entirely in your browser — as a single self-contained HTML file. No build step, no server, no installs. Open it and go.

> Built solo, from scratch, with the Web Audio API.

### ✨ Features

#### 🎧 Playback & Library
- Library, Albums, Artists, Favorites, History, and Stats views
- Queue, related-tracks suggestions, and smooth crossfade between songs
- Sleep timer, full keyboard shortcuts, and deep playback settings
- Floating mini player that stays on top even when you switch views or tabs
- Distraction-free fullscreen player mode
- Internet radio streaming built in
- Video & image media view
- One-click backup, import, and export of your whole library and settings
- Installable as an offline-capable PWA

#### 🎛️ Audio Engine
- 32-band parametric equalizer with dedicated tone control
- Studio FX chain: reverb, delay, distortion, compressor, limiter
- 8D spatial audio mode (HRTF-based panner)
- Karaoke mode with synced lyrics
- Built-in vocal remover

#### 🔀 AURA REMIX
A full remix engine hiding inside a music player:
- Multi-part upload, with an optional separate beat track
- Automatic BPM detection per file
- WSOLA time-stretch engine — stretches a beat onto your track's tempo without degrading sustained notes
- Automatic best-alignment detection between beat and song
- Clean crossfade splicing with zero-crossing snap (no clicks)
- Real sidechain compression (bass pumps under the beat)
- Noise and bass-rumble cleanup
- 8 ready-made presets — Rap/Trap, Dark, 8D+Reverb, Slowed+Reverb, Nightcore, Cinematic, Vaporwave, Lo-fi — plus a fully custom mode
- Independent speed/pitch control, separate from the main player
- Wired into the EQ, tone control, Studio/Punch/Night modes, distortion, delay, and live vocal removal
- 15-second instant preview before you commit to a full render
- Complete offline render with downloadable WAV export

#### 📊 Pro Metering & Auto Master
- Momentary, Short-Term, and Integrated LUFS, RMS, True Peak, Dynamic Range (PLR), stereo correlation, and clip counting — based on the ITU-R BS.1770 standard, simplified to run in a browser
- Live vectorscope and loudness-history graph
- One-click Auto Master

#### 🤖 AURA.AI
A conversational assistant that can directly control the player — EQ, effects, stereo width, playback/volume, and Auto Master — just by asking it in plain language. Runs on the Gemini API using your own free key, stored only in your browser and never sent anywhere else.

### 🛠️ Tech
- **Zero dependencies, zero build step** — it's one HTML file
- **Web Audio API** for the entire signal chain
- **IndexedDB / localStorage** for your library, playlists, and settings
- **PWA** — installable and works offline

### 🚀 Getting Started
1. Download the HTML file from this repo
2. Open it in your browser, or host it yourself (e.g. rename it to `index.html` and enable GitHub Pages)
3. Add your music and start listening

No installation, no server, no dependencies to manage.

### 📄 License
*Add your license here.*

---

## 🇮🇷 فارسی

یه موزیک پلیر کاملاً حرفه‌ای که تمام و کمالش تو مرورگرت اجرا میشه — همش تو یه فایل HTML خودکفا. نه بیلد لازم داره، نه سرور، نه نصب. فقط بازش کن و گوش بده.

> تنهایی، از صفر، با Web Audio API ساخته شده.

### ✨ قابلیت‌ها

#### 🎧 پخش و کتابخانه
- نماهای کتابخانه، آلبوم‌ها، هنرمندان، علاقه‌مندی‌ها، تاریخچه و آمار
- صف پخش، پیشنهاد آهنگ‌های مرتبط، و crossfade نرم بین آهنگ‌ها
- تایمر خواب، شورتکات‌های کامل کیبورد، و تنظیمات پخش پیشرفته
- مینی‌پلیر شناور که موقع رفتن به تب/نمای دیگه هم بالای صفحه می‌مونه
- حالت تمام‌صفحه بدون حواس‌پرتی
- رادیوی اینترنتی داخلی
- نمای رسانه برای ویدیو و عکس
- بکاپ، ایمپورت و اکسپورت کل کتابخونه و تنظیمات با یه کلیک
- قابل نصب به عنوان PWA و کار آفلاین

#### 🎛️ موتور صدا
- اکولایزر پارامتریک ۳۲ باند با کنترل تن اختصاصی
- زنجیره افکت استودیویی: ریورب، دیلی، دیستورشن، کمپرسور، لیمیتر
- حالت صدای فضایی ۸بعدی (بر پایه HRTF)
- حالت کارائوکه با لیریک همگام‌شده
- حذف‌کننده وکال داخلی

#### 🔀 AURA REMIX
یه موتور ریمیکس کامل که داخل یه موزیک پلیر قایم شده:
- آپلود چندتیکه‌ای، با امکان بیت جدا (اختیاری)
- تشخیص خودکار BPM هر فایل
- موتور کشش زمانی WSOLA — بیت رو روی تمپوی آهنگت می‌کشه بدون افت کیفیت روی نُت‌های ممتد
- پیدا کردن خودکار بهترین نقطه هم‌ترازی بین بیت و آهنگ
- چسبوندن تمیز تیکه‌ها با crossfade و snap به zero-crossing (بدون کلیک)
- سایدچین واقعی (پمپاژ باس زیر ضرب بیت)
- پاکسازی نویز و رامبل باس
- ۸ پریست آماده — رپ/ترپ، تاریک، ۸بعدی+ریورب، کند‌شده+ریورب، نایت‌کور، سینمایی، ویپرویو، لوفای — به‌علاوه حالت کاملاً دلخواه
- کنترل مستقل سرعت و کوک، جدا از پلیر اصلی
- وصل به اکولایزر، کنترل تن، حالت‌های Studio/Punch/Night، دیستورشن، دیلی و حذف ووکال زنده
- پیش‌نمایش فوری ۱۵ ثانیه‌ای قبل از رندر نهایی
- رندر آفلاین کامل با خروجی WAV قابل دانلود

#### 📊 مترینگ حرفه‌ای و Auto Master
- LUFS آنی/کوتاه‌مدت/یکپارچه، RMS، True Peak، Dynamic Range (PLR)، همبستگی استریو، و شمارنده کلیپ — بر پایه استاندارد ITU-R BS.1770، ساده‌شده برای اجرا تو مرورگر
- ونداسکوپ و گراف لودنس زنده
- Auto Master با یه کلیک

#### 🤖 AURA.AI
یه دستیار مکالمه‌ای که می‌تونه مستقیم پلیر رو کنترل کنه — EQ، افکت‌ها، عرض استریو، پخش/ولوم، و Auto Master — فقط با یه درخواست ساده. با Gemini API کار می‌کنه، با کلید رایگان خودت که فقط تو مرورگر خودت ذخیره میشه و جایی ارسال نمیشه.

### 🛠️ فناوری
- **بدون هیچ وابستگی، بدون بیلد** — همش یه فایل HTMLه
- **Web Audio API** برای کل زنجیره صدا
- **IndexedDB / localStorage** برای کتابخونه، پلی‌لیست و تنظیماتت
- **PWA** — قابل نصب و کار آفلاین

### 🚀 شروع کار
۱. فایل HTML رو از این ریپو دانلود کن
۲. تو مرورگرت بازش کن، یا خودت هاستش کن (مثلاً به `index.html` تغییر نام بده و GitHub Pages رو فعال کن)
۳. آهنگ‌هاتو اضافه کن و گوش بده

نه نصبی لازمه، نه سروری، نه هیچ وابستگی‌ای برای مدیریت کردن.

### 📄 لایسنس
*لایسنس خودتو اینجا اضافه کن.*

</div>
