/**
 * Projects Database (projects-db.js)
 * Centralized repository of all portfolio projects for Nikhil.
 * Edit this file to add, modify, or remove projects.
 */

const projectsData = [
  // --- 16:9 Long Form Projects ---
  {
    id: 1,
    title: "Options Buyer",
    category: "long-form",
    categoryLabel: "Long Form 16:9",
    vimeoUrl: "https://www.youtube.com/embed/wK15IdxGqsk",
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
    vimeoUrl: "https://www.youtube.com/embed/cVhBW6zOmeQ",
    aspectRatio: "16-9",
    tools: ["Adobe Premiere Pro", "After Effects", "Motion Graphics", "Sound Design"],
    client: "CoinDCX",
    year: "2026",
    description: "High-production long-form crypto market and product educational video with kinetic graphics, smooth transitions, and brand-aligned visual storytelling."
  },
  {
    id: 3,
    title: "Ford Mustang Speedramp VFX",
    category: "long-form",
    categoryLabel: "Long Form 16:9",
    vimeoUrl: "https://www.youtube.com/embed/IPRx1G0UFfU",
    aspectRatio: "16-9",
    tools: ["Adobe Premiere Pro", "After Effects", "VFX", "Speed Ramping"],
    client: "Ford Mustang",
    year: "2025",
    description: "High-octane VFX-driven speed ramp edit featuring a Ford Mustang with dynamic camera transitions, cinematic grading, and impactful visual effects."
  },

  // --- 9:16 Vertical & Short Form Projects ---
  {
    id: 4,
    title: "Campa - AI Generated",
    category: "ai-video",
    categoryLabel: "AI Video",
    vimeoUrl: "https://www.youtube.com/embed/EVdA8IumSD4",
    aspectRatio: "9-16",
    tools: ["AI Video", "After Effects", "Premiere Pro", "Motion Graphics"],
    client: "Campa",
    year: "2026",
    description: "Creative AI-generated vertical video ad combining AI synthesis, custom visual effects, motion graphics, and high-retention pacing."
  },
  {
    id: 5,
    title: "Options Buyer - Reel",
    category: "short-form",
    categoryLabel: "Short Form 9:16",
    vimeoUrl: "https://www.youtube.com/embed/A65tksiAY9Y",
    aspectRatio: "9-16",
    tools: ["Adobe Premiere Pro", "After Effects", "Motion Graphics"],
    client: "Finance Creator",
    year: "2026",
    description: "Engaging vertical financial reel with animated subtitles, kinetic graphical callouts, sound design, and retention-focused pacing."
  },
  {
    id: 6,
    title: "Uplearn",
    category: "short-form",
    categoryLabel: "Short Form 9:16",
    vimeoUrl: "https://www.youtube.com/embed/jNyDgWqpm44",
    aspectRatio: "9-16",
    tools: ["Adobe Premiere Pro", "After Effects", "Motion Graphics", "Sound Design"],
    client: "Uplearn",
    year: "2026",
    description: "Dynamic educational and promotional vertical short-form reel featuring sleek typography, smooth animations, and high audience retention pacing."
  },
  {
    id: 7,
    title: "Protien Red",
    category: "short-form",
    categoryLabel: "Short Form 9:16",
    vimeoUrl: "https://www.youtube.com/embed/--B640i3ngk",
    aspectRatio: "9-16",
    tools: ["Adobe Premiere Pro", "After Effects", "Motion Graphics"],
    client: "Protien Red",
    year: "2025",
    description: "Punchy vertical product promo with bold color grading, fast-paced cuts, and attention-grabbing motion design."
  },
  {
    id: 8,
    title: "NutriStation Diwali Offer",
    category: "short-form",
    categoryLabel: "Short Form 9:16",
    vimeoUrl: "https://www.youtube.com/embed/UKkiC9GOCgE",
    aspectRatio: "9-16",
    tools: ["Adobe Premiere Pro", "After Effects", "Motion Graphics"],
    client: "NutriStation",
    year: "2025",
    description: "Festive Diwali promotional reel for a nutrition brand with vibrant animations, offer callouts, and seasonal visual storytelling."
  },
  {
    id: 9,
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
    id: 10,
    title: "Kontent",
    category: "short-form",
    categoryLabel: "Short Form 9:16",
    vimeoUrl: "https://www.youtube.com/embed/Bz9tseDEjh8",
    aspectRatio: "9-16",
    tools: ["Adobe Premiere Pro", "After Effects", "Motion Graphics"],
    client: "Kontent",
    year: "2026",
    description: "Engaging short-form vertical reel with dynamic pacing, bold typography, and high-retention editing techniques."
  },
  {
    id: 11,
    title: "Gym Edit",
    category: "short-form",
    categoryLabel: "Short Form 9:16",
    vimeoUrl: "https://www.youtube.com/embed/IWbWaQ0PFAw",
    aspectRatio: "9-16",
    tools: ["Adobe Premiere Pro", "After Effects", "Color Grading"],
    client: "Gym",
    year: "2026",
    description: "High-energy gym workout reel with bass-drop synced cuts, speed ramps, and motivational visual storytelling."
  },
  {
    id: 12,
    title: "Kinetic Typography Reel",
    category: "motion-graphics",
    categoryLabel: "Motion Graphics",
    vimeoUrl: "https://www.youtube.com/embed/EwA_jhgv1-M",
    aspectRatio: "9-16",
    tools: ["After Effects", "Illustrator"],
    client: "SoundPulse Fest",
    year: "2025",
    description: "Rhythmic motion typography animation synchronizing bold statement text with punchy audio beats for social media announcement videos."
  },
  {
    id: 13,
    title: "MG Hector",
    category: "short-form",
    categoryLabel: "Short Form 9:16",
    vimeoUrl: "https://player.vimeo.com/video/1021841758?h=522d3fcec1&title=0&byline=0&portrait=0",
    aspectRatio: "9-16",
    tools: ["Adobe Premiere Pro", "After Effects", "Color Grading", "Motion Graphics"],
    client: "MG Hector",
    year: "2026",
    description: "Cinematic short-form automotive reel for MG Hector featuring dynamic cuts, smooth color grading, and high-energy visual storytelling tailored for social media."
  },
  {
    id: 14,
    title: "Heiken Ashi",
    category: "short-form",
    categoryLabel: "Short Form 9:16",
    vimeoUrl: "https://www.youtube.com/embed/3HLGZAtCwhY",
    aspectRatio: "9-16",
    tools: ["Adobe Premiere Pro", "After Effects", "Motion Graphics", "Sound Design"],
    client: "Finance Creator",
    year: "2026",
    description: "High-retention vertical finance reel covering Heiken Ashi trading concepts with animated callouts, kinetic text, and clean narrative pacing."
  },
  {
    id: 15,
    title: "RSI Divergences",
    category: "long-form",
    categoryLabel: "Long Form 16:9",
    vimeoUrl: "https://www.youtube.com/embed/mNtqInBZVPU",
    aspectRatio: "16-9",
    tools: ["Adobe Premiere Pro", "After Effects", "Motion Graphics", "Color Grading"],
    client: "Finance Creator",
    year: "2026",
    description: "In-depth long-form educational video breaking down RSI divergence trading strategies with dynamic screen recordings, custom callouts, and polished motion graphics."
  }
];

// Export for ES module environments if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}
