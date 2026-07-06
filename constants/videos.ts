import type { VideoItem } from "@/types";

/**
 * No real video files exist yet — the scrape of marathonacademy.co.in only
 * referenced a YouTube channel, not specific videos. youtubeId is left empty
 * so the UI renders a clear "video coming soon" placeholder card instead of
 * embedding unrelated content. Fill in real YouTube video IDs before launch.
 */
export const videos: VideoItem[] = [
  { title: "Campus Tour — Marathon Academy, Salt Lake", youtubeId: "", category: "Campus Tour" },
  { title: "Inside a Live Physics Class", youtubeId: "", category: "Teaching Demo" },
  { title: "Meet the Faculty: Shatrudha Prasad", youtubeId: "", category: "Faculty Interview" },
  { title: "Student Interview: From WBJEE to BITS Pilani", youtubeId: "", category: "Student Interview" },
  { title: "Annual Motivational Seminar Highlights", youtubeId: "", category: "Seminar" },
];
