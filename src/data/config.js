// ============================================================
//  OUR FOREVER — MAIN CONFIGURATION
//  Everything personal that is not a photo, a timeline entry
//  or the letter lives in this file. Edit freely.
// ============================================================

export const config = {
  // ------------------------------------------------------------
  // DEMO PASSWORD  ← CHANGE THIS
  // Not case-sensitive. NOTE: this is NOT real security.
  // Anyone who inspects the site's JavaScript can find it.
  // See "Security limitation" in README.md.
  // ------------------------------------------------------------
  password: '02112005',

  // Key used to remember (for this browser tab only) that the gate was passed.
  sessionKey: 'our-forever-unlocked',

  siteName: 'Dear Pondati',
  tagline: 'A Love Story',

  // Page 1 — password gate
  gate: {
    heading: 'A Little World, Just for You',
    text: 'Special One For My Bujii 😘',
    inputLabel: 'Secret password',
    inputPlaceholder: 'Enter the password',
    button: 'Unlock',
    errorMessage: "Santhu corret ahh password podu ❤️",
  },

  // Page 2 — welcome
  hero: {
    intro: 'Love you da Bujii',
    heading: 'Whis you happy birthday dear Ammu 😘 !!',
    text: "I'll be with you until my last breath, Ammu. This life of mine is yours, my love 😚💘",
    button: 'Relive Our Memories ❤️',
  },

  // Page 3 — timeline header
  story: {
    heading: 'Our Sweet Moments',
    intro: 'Intha Moment Ellam Niyabagam Irruka Da Ammu ❤️',
  },

  // Page 4 — gallery header
  memories: {
    heading: 'Our Little World',
    intro: "I don't ever want to miss even the tiniest moment with you, my love. 🫂🩷",
  },

  // Page 6 — finale
  forever: {
    message: "I don't want to be just a chapter in your life. I want to be your whole story. ❤️",
    subMessage:
      "I don't know what tomorrow holds, but I know one thing — I want every tomorrow to begin and end with you. ❤️ You're not just my love, Ammu. You're my forever. 🫂",
    surpriseButton: 'Touch This Beauty 😘',
    replayButton: 'Replay our story',
    homeButton: 'Back to the welcome',
  },

  // Optional background music. It NEVER plays automatically.
  // Put your song at public/audio/background-music.mp3 (or change src).
  music: {
    enabled: true,
    src: '/audio/background-music.mp3',
  },
}
