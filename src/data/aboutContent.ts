// Content of the original about.html / about.js, kept verbatim.

export type ImpactStat = {
  icon: string;
  iconColor: string;
  target: number;
  label: string;
  caption: string;
  /** Fill of the thin bar under each card. */
  barPercent: number;
  barColor: string;
};

export type ImpactDetailGroup = {
  icon: string;
  iconColor: string;
  title: string;
  items: string[];
};

export type ProgressGoal = { label: string; percent: number; aos: "fade-right" | "fade-left" };

export type TeamMember = { name: string; role: string; alt: string };

export type TimelineEntry = { year: string; text: string };

export type Supporter = {
  name: string;
  image: string;
  imageAlt: string;
  message: string;
  date: string;
  location: string;
};

export const impactStats: ImpactStat[] = [
  {
    icon: "fa-tree",
    iconColor: "text-[#4caf50]",
    target: 1000000,
    label: "Trees Planted",
    caption: "Restoring ecosystems worldwide",
    barPercent: 85,
    barColor: "bg-bs-success",
  },
  {
    icon: "fa-globe-americas",
    iconColor: "text-[#2196f3]",
    target: 25,
    label: "Countries",
    caption: "Global conservation network",
    barPercent: 65,
    barColor: "bg-bs-info",
  },
  {
    icon: "fa-mountain",
    iconColor: "text-[#795548]",
    target: 50000,
    label: "Acres Protected",
    caption: "Preserving natural habitats",
    barPercent: 75,
    barColor: "bg-bs-warning",
  },
  {
    icon: "fa-handshake",
    iconColor: "text-[#ff9800]",
    target: 100,
    label: "Community Partners",
    caption: "Local collaboration network",
    barPercent: 90,
    barColor: "bg-bs-primary",
  },
];

export const impactDetails: ImpactDetailGroup[] = [
  {
    icon: "fa-tree",
    iconColor: "text-bs-success",
    title: "Tree Planting Impact",
    items: ["500,000 native species planted", "400,000 fruit-bearing trees", "100,000 rare species preserved"],
  },
  {
    icon: "fa-globe-americas",
    iconColor: "text-bs-info",
    title: "Global Reach",
    items: ["Active in 25 countries", "50+ local partnerships", "15 conservation zones"],
  },
  {
    icon: "fa-mountain",
    iconColor: "text-bs-warning",
    title: "Protected Areas",
    items: ["30,000 acres of rainforest", "15,000 acres of woodland", "5,000 acres of wetlands"],
  },
  {
    icon: "fa-handshake",
    iconColor: "text-bs-primary",
    title: "Community Impact",
    items: ["1,000+ jobs created", "50 educational programs", "25 indigenous partnerships"],
  },
];

export const progressGoals: ProgressGoal[] = [
  { label: "Reforestation Goal", percent: 75, aos: "fade-right" },
  { label: "Community Engagement", percent: 90, aos: "fade-left" },
];

// The original pointed every photo at "/api/placeholder/150/150", a URL that
// never served an image; it is kept so the page renders the same way.
export const TEAM_PHOTO_PLACEHOLDER = "/api/placeholder/150/150";

export const teamMembers: TeamMember[] = [
  { name: "Phoung visal", role: "Full stack Developer", alt: "Team leader" },
  { name: "Sal monineath", role: "Full stack Developer", alt: "Team Member" },
  { name: "Soum dy monyrachana", role: "Full stack Developer", alt: "Team Member" },
];

export const timeline: TimelineEntry[] = [
  { year: "2020", text: "Founded Wildwood with a mission to reforest the planet" },
  { year: "2021", text: "Reached our first 100,000 trees planted milestone" },
  { year: "2022", text: "Expanded operations to 15 countries" },
  { year: "2023", text: "Achieved 1 million trees planted globally" },
];

export const supporters: Supporter[] = [
  {
    name: "Emma Green",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtyT6GIEc2u5G9st3QFFqjjZBgPhler4oUKJSiJL0kZbPTDAeMSEqibkgGSZtwdRMuKtg&usqp=CAU",
    imageAlt: "John Doe",
    message: "Thrilled to contribute to forest conservation efforts.",
    date: "December 28, 2021",
    location: "New York, USA",
  },
  {
    name: "Liam Woods",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&s",
    imageAlt: "Jane Smith",
    message: "Forests are the lungs of our planet. Let’s save them together.",
    date: "January 2, 2022",
    location: "London, UK",
  },
  {
    name: "Sofia Rivera",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToT7cZ-FaEH5FrdGblHF-d6jkCESxM0bcE7HqwOi1kL1tSRCqSOEAR8OAmxCW-ocl_1-Y&usqp=CAU",
    imageAlt: "Jane Smith",
    message: "Proud to be a part of this noble cause!",
    date: "December 15, 2024",
    location: "Sydney, Australia",
  },
  {
    name: "Ethan Patel",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP4Xnsq7Q5E_6Hs67VKLlm3oF1cEeDU8QazoLtmr27tCHuHSSVgVkrm9aCvusUUXQl_FM&usqp=CAU",
    imageAlt: "Jane Smith",
    message: "Every small effort counts. Let’s protect nature.",
    date: "December 8, 2024",
    location: "Tokyo, Japan",
  },
];
