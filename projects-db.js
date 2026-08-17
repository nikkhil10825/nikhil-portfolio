/**
 * Projects Database (projects-db.js)
 * Centralized repository of all portfolio projects for Nikhil.
 * Edit this file to add, modify, or remove projects.
 */

const projectsData = [
  // --- 16:9 Long Form Projects (Placed First) ---
  {
    id: 1,
    title: "Options Buyer",
    category: "long-form",
    categoryLabel: "Long Form 16:9",
    vimeoUrl: "https://drive.google.com/file/d/1TjvsV3LLVI_m54gUt9U0UoUoKZT9L9dy/preview",
    aspectRatio: "16-9",
    tools: ["Adobe Premiere Pro", "After Effects", "Sound Design", "Color Grading"],
    client: "Options Buyer",
    year: "2026",
    description: "In-depth long-form financial breakdown and case study edit featuring dynamic motion graphics, screen recordings, custom callouts, and clean narrative pacing."
  },
  {
    id: 2,
    title: "CoinDCX",
    category: "long-form",
    categoryLabel: "Long Form 16:9",
    vimeoUrl: "https://drive.google.com/file/d/1-W0gQ0A9WXO4Oui6l6ypMDRefP3jX-2m/preview",
    aspectRatio: "16-9",
    tools: ["Adobe Premiere Pro", "After Effects", "Motion Graphics", "Sound Design"],
    client: "CoinDCX",
    year: "2026",
    description: "High-production long-form crypto market and product educational video with kinetic graphics, smooth transitions, and brand-aligned visual storytelling."
  },
  {
    id: 3,
    title: "Gym Promo Edit",
    category: "long-form",
    categoryLabel: "Long Form 16:9",
    vimeoUrl: "https://player.vimeo.com/video/1129979338?title=0&byline=0&portrait=0",
    aspectRatio: "16-9",
    tools: ["Adobe Premiere Pro", "After Effects", "Color Grading"],
    client: "FitNation Gym",
    year: "2025",
    description: "High-energy promotional commercial for a premium fitness brand. Features rhythmic editing, bass-drop audio sync, cinematic speed ramps, and bold graphic callouts."
  },
  {
    id: 4,
    title: "Real Estate Walkthrough",
    category: "long-form",
    categoryLabel: "Long Form 16:9",
    vimeoUrl: "https://player.vimeo.com/video/1129979338?title=0&byline=0&portrait=0",
    aspectRatio: "16-9",
    tools: ["Adobe Premiere Pro", "Photoshop", "Sound Design"],
    client: "Skyline Properties",
    year: "2025",
    description: "Architectural and interior luxury real estate film showcasing property highlights with elegant transitions, ambient music design, and pristine color correction."
  },
  {
    id: 5,
    title: "AI Video Generation & VFX",
    category: "ai-video",
    categoryLabel: "AI Video",
    vimeoUrl: "https://player.vimeo.com/video/1129979338?title=0&byline=0&portrait=0",
    aspectRatio: "16-9",
    tools: ["Midjourney", "Runway Gen-2", "After Effects"],
    client: "Experimental",
    year: "2026",
    description: "Experimental creative video leveraging generative AI tools for concept generation, prompt styling, camera motion synthesis, and compositing."
  },
  {
    id: 6,
    title: "Podcast Highlight Cut",
    category: "long-form",
    categoryLabel: "Long Form 16:9",
    vimeoUrl: "https://player.vimeo.com/video/1129979338?title=0&byline=0&portrait=0",
    aspectRatio: "16-9",
    tools: ["Adobe Premiere Pro", "Adobe Audition"],
    client: "Tech Talk Podcast",
    year: "2025",
    description: "Multi-cam interview and podcast episode editing with speaker tracking, custom lower thirds, intro/outro animations, and sound enhancement."
  },

  // --- 9:16 Vertical & Short Form Projects ---
  {
    id: 7,
    title: "Campa - AI Generated",
    category: "ai-video",
    categoryLabel: "AI Video",
    vimeoUrl: "https://player.vimeo.com/video/1217739688?h=ccfdbd75f9&title=0&byline=0&portrait=0",
    aspectRatio: "9-16",
    tools: ["AI Video", "After Effects", "Premiere Pro", "Motion Graphics"],
    client: "Campa",
    year: "2026",
    description: "Creative AI-generated vertical video ad combining AI synthesis, custom visual effects, motion graphics, and high-retention pacing."
  },
  {
    id: 8,
    title: "Options Buyer - Reel",
    category: "short-form",
    categoryLabel: "Short Form 9:16",
    vimeoUrl: "https://player.vimeo.com/video/1217515299?h=a89542e034&title=0&byline=0&portrait=0",
    aspectRatio: "9-16",
    tools: ["Adobe Premiere Pro", "After Effects", "Motion Graphics"],
    client: "Finance Creator",
    year: "2026",
    description: "Engaging vertical financial reel with animated subtitles, kinetic graphical callouts, sound design, and retention-focused pacing."
  },
  {
    id: 9,
    title: "Uplearn",
    category: "short-form",
    categoryLabel: "Short Form 9:16",
    vimeoUrl: "https://drive.google.com/file/d/1I5JNHTnx6Ai90zBp_qJ86o1ALAqdcx46/preview",
    aspectRatio: "9-16",
    tools: ["Adobe Premiere Pro", "After Effects", "Motion Graphics", "Sound Design"],
    client: "Uplearn",
    year: "2026",
    description: "Dynamic educational and promotional vertical short-form reel featuring sleek typography, smooth animations, and high audience retention pacing."
  },
  {
    id: 10,
    title: "Product Motion Ad",
    category: "short-form",
    categoryLabel: "Short Form 9:16",
    vimeoUrl: "https://player.vimeo.com/video/1021836644?title=0&byline=0&portrait=0",
    aspectRatio: "9-16",
    tools: ["After Effects", "Figma", "3D Motion"],
    client: "Aura Apparel",
    year: "2026",
    description: "Fast-paced vertical mobile video ad designed for Instagram Reels & TikTok campaigns. Engineered for high scroll-stopping retention and conversion."
  },
  {
    id: 11,
    title: "Brand Story Film",
    category: "motion-graphics",
    categoryLabel: "Motion Graphics",
    vimeoUrl: "https://player.vimeo.com/video/1021836644?title=0&byline=0&portrait=0",
    aspectRatio: "9-16",
    tools: ["After Effects", "Photoshop", "Typography"],
    client: "Luminary Studios",
    year: "2025",
    description: "Branded storytelling piece combining kinetic typography, custom 2D motion graphics, and sleek brand color palettes."
  },
  {
    id: 12,
    title: "Social Media Reel",
    category: "short-form",
    categoryLabel: "Short Form 9:16",
    vimeoUrl: "https://player.vimeo.com/video/1021836644?title=0&byline=0&portrait=0",
    aspectRatio: "9-16",
    tools: ["Adobe Premiere Pro", "CapCut Pro", "Auto-Captions"],
    client: "Creator Network",
    year: "2026",
    description: "Viral creator reel formatted for short-form retention with dynamic animated captions, sound effects, pop-up graphics, and pacing control."
  },
  {
    id: 13,
    title: "Kinetic Typography Reel",
    category: "motion-graphics",
    categoryLabel: "Motion Graphics",
    vimeoUrl: "https://player.vimeo.com/video/1021836644?title=0&byline=0&portrait=0",
    aspectRatio: "9-16",
    tools: ["After Effects", "Illustrator"],
    client: "SoundPulse Fest",
    year: "2025",
    description: "Rhythmic motion typography animation synchronizing bold statement text with punchy audio beats for social media announcement videos."
  },

  // --- Batch Added: New Vimeo Projects ---
  {
    id: 14,
    title: "Ford Mustang Speedramp VFX",
    category: "long-form",
    categoryLabel: "Long Form 16:9",
    vimeoUrl: "https://player.vimeo.com/video/1129979338?h=da58b5fac9&title=0&byline=0&portrait=0",
    aspectRatio: "16-9",
    tools: ["Adobe Premiere Pro", "After Effects", "VFX", "Speed Ramping"],
    client: "Ford Mustang",
    year: "2025",
    description: "High-octane VFX-driven speed ramp edit featuring a Ford Mustang with dynamic camera transitions, cinematic grading, and impactful visual effects."
  },
  {
    id: 15,
    title: "Protien Red",
    category: "short-form",
    categoryLabel: "Short Form 9:16",
    vimeoUrl: "https://player.vimeo.com/video/1021845773?h=13c9fa56ec&title=0&byline=0&portrait=0",
    aspectRatio: "9-16",
    tools: ["Adobe Premiere Pro", "After Effects", "Motion Graphics"],
    client: "Protien Red",
    year: "2025",
    description: "Punchy vertical product promo with bold color grading, fast-paced cuts, and attention-grabbing motion design."
  },
  {
    id: 16,
    title: "NutriStation Diwali Offer",
    category: "short-form",
    categoryLabel: "Short Form 9:16",
    vimeoUrl: "https://player.vimeo.com/video/1027340508?h=0327449779&title=0&byline=0&portrait=0",
    aspectRatio: "9-16",
    tools: ["Adobe Premiere Pro", "After Effects", "Motion Graphics"],
    client: "NutriStation",
    year: "2025",
    description: "Festive Diwali promotional reel for a nutrition brand with vibrant animations, offer callouts, and seasonal visual storytelling."
  },
  {
    id: 17,
    title: "Muftlo",
    category: "short-form",
    categoryLabel: "Short Form 9:16",
    vimeoUrl: "https://player.vimeo.com/video/1206015554?h=c2ebfc5f6b&title=0&byline=0&portrait=0",
    aspectRatio: "9-16",
    tools: ["Adobe Premiere Pro", "After Effects", "Motion Graphics"],
    client: "Muftlo",
    year: "2026",
    description: "Sleek real estate advertisement reel with smooth transitions, property highlights, and polished visual branding."
  },
  {
    id: 18,
    title: "Kontent",
    category: "short-form",
    categoryLabel: "Short Form 9:16",
    vimeoUrl: "https://player.vimeo.com/video/1209041905?h=f4d1722bb8&title=0&byline=0&portrait=0",
    aspectRatio: "9-16",
    tools: ["Adobe Premiere Pro", "After Effects", "Motion Graphics"],
    client: "Kontent",
    year: "2026",
    description: "Engaging short-form vertical reel with dynamic pacing, bold typography, and high-retention editing techniques."
  },
  {
    id: 19,
    title: "Gym Edit",
    category: "short-form",
    categoryLabel: "Short Form 9:16",
    vimeoUrl: "https://player.vimeo.com/video/1217739689?h=b7dff61156&title=0&byline=0&portrait=0",
    aspectRatio: "9-16",
    tools: ["Adobe Premiere Pro", "After Effects", "Color Grading"],
    client: "Gym",
    year: "2026",
    description: "High-energy gym workout reel with bass-drop synced cuts, speed ramps, and motivational visual storytelling."
  }
];

// Export for ES module environments if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}
