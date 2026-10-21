// About page content, from the original about page.

export type ImpactStat = {
  value: string;
  label: string;
  /** Breakdown shown beside the headline number. */
  details: string[];
};

export type ProgressGoal = { label: string; percent: number };

export type TeamMember = { name: string; role: string };

export type TimelineEntry = { year: string; text: string };

export type Supporter = {
  name: string;
  image: string;
  imageAlt: string;
  message: string;
  date: string;
  location: string;
};

export const aboutHeroImage =
  "https://corporate.walmart.com/content/dam/corporate/images/global-responsibility/sustainability/planet/nature/businessfornature-banner.png";

export const impactStats: ImpactStat[] = [
  {
    value: "1,000,000",
    label: "trees planted",
    details: ["500,000 native species", "400,000 fruit-bearing trees", "100,000 rare species preserved"],
  },
  {
    value: "50,000",
    label: "acres protected",
    details: ["30,000 acres of rainforest", "15,000 acres of woodland", "5,000 acres of wetlands"],
  },
  {
    value: "25",
    label: "countries",
    details: ["50+ local partnerships", "15 conservation zones"],
  },
  {
    value: "100",
    label: "community partners",
    details: ["1,000+ jobs created", "50 educational programs", "25 indigenous partnerships"],
  },
];

export const progressGoals: ProgressGoal[] = [
  { label: "Reforestation goal", percent: 75 },
  { label: "Community engagement", percent: 90 },
];

export const teamMembers: TeamMember[] = [
  { name: "Phoung Visal", role: "Team lead, full-stack developer" },
  { name: "Sal Monineath", role: "Full-stack developer" },
  { name: "Soum Dy Monyrachana", role: "Full-stack developer" },
];

export const timeline: TimelineEntry[] = [
  { year: "2020", text: "Founded Wildwood with a mission to reforest the planet" },
  { year: "2021", text: "Reached our first 100,000 trees planted" },
  { year: "2022", text: "Expanded operations to 15 countries" },
  { year: "2023", text: "Passed 1 million trees planted worldwide" },
];

export const supporters: Supporter[] = [
  {
    name: "Emma Green",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtyT6GIEc2u5G9st3QFFqjjZBgPhler4oUKJSiJL0kZbPTDAeMSEqibkgGSZtwdRMuKtg&usqp=CAU",
    imageAlt: "Portrait of Emma Green",
    message: "Thrilled to contribute to forest conservation efforts.",
    date: "December 28, 2021",
    location: "New York, USA",
  },
  {
    name: "Liam Woods",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&s",
    imageAlt: "Portrait of Liam Woods",
    message: "Forests are the lungs of our planet. Let’s save them together.",
    date: "January 2, 2022",
    location: "London, UK",
  },
  {
    name: "Sofia Rivera",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToT7cZ-FaEH5FrdGblHF-d6jkCESxM0bcE7HqwOi1kL1tSRCqSOEAR8OAmxCW-ocl_1-Y&usqp=CAU",
    imageAlt: "Portrait of Sofia Rivera",
    message: "Proud to be a part of this noble cause!",
    date: "December 15, 2024",
    location: "Sydney, Australia",
  },
  {
    name: "Ethan Patel",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP4Xnsq7Q5E_6Hs67VKLlm3oF1cEeDU8QazoLtmr27tCHuHSSVgVkrm9aCvusUUXQl_FM&usqp=CAU",
    imageAlt: "Portrait of Ethan Patel",
    message: "Every small effort counts. Let’s protect nature.",
    date: "December 8, 2024",
    location: "Tokyo, Japan",
  },
];
