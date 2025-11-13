export const vitTubeDetails = {
  keyFeatures: [
    {
      emoji: "1️⃣",
      feature: "Filter videos by category",
    },
    {
      emoji: "2️⃣",
      feature: "Search functionality",
    },
    {
      emoji: "3️⃣",
      feature: "Playlist support",
    },
    {
      emoji: "4️⃣",
      feature: "See what others think through comments",
    },
    {
      emoji: "5️⃣",
      feature: "Dark/Light theme toggle",
    },
  ],
  customHooks: ["useDebounce", "useFetch", "useLocalStorage"],
  optimizations: [
    {
      emoji: "1️⃣",
      text: "Initially, the site fetched data every time the category changed (e.g., All → Gaming → All), which caused redundant requests. Now, it fetches data only once per category, skipping already loaded ones.",
    },
    {
      emoji: "2️⃣",
      text: "Comments are fetched only when users open them, saving unnecessary API calls.",
    },
    {
      emoji: "3️⃣",
      text: "Added lazy loading so only visible images get downloaded.",
    },
    {
      emoji: "4️⃣",
      text: "Used a custom debounce hook to delay searches and reduce API hits.",
    },
    {
      emoji: "5️⃣",
      text: "Implemented React Lazy + Suspense to load pages only when needed — improving initial load time dramatically.",
    },
  ],
};
