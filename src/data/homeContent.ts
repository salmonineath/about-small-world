// Content of the original index.html, kept verbatim (including its typos).

export type SlideImage = { src: string; alt: string };

export type PlantCard = {
  title: string;
  /** Latin name, shown under the title for trees only. */
  latinName?: string;
  image: string;
  imageAlt: string;
  description: string;
};

export type FaqItem = { id: string; question: string; answer: string };

export type NavItem = { href: string; label: string };

export const homeNavItems: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#introduction", label: "Introduction" },
  { href: "#about", label: "About" },
  { href: "#trees", label: "Trees" },
  { href: "#seeds", label: "Seeds" },
  // The original page links to #donor-wall although that section only
  // exists on the about page, so this link does not scroll anywhere.
  { href: "#donor-wall", label: "Supporters" },
  { href: "#faq", label: "FAQ" },
];

/** Background images cross-faded behind the hero (set from main.js). */
export const heroSlideImages = [
  "https://whatcanyoudo.earth/wp-content/uploads/2023/04/Conservation-of-forest-and-wildlife-scaled.jpg",
  "https://montepress.com/wp-content/uploads/2021/09/forest-.jpg",
];

export const introductionImages: SlideImage[] = [
  {
    src: "https://opendevelopmentcambodia.net/wp-content/uploads/2016/01/12716144895_47c9798eae_k.jpg",
    alt: "Forest Image 1",
  },
  {
    src: "https://media.istockphoto.com/id/854086988/photo/jungle-tree.jpg?s=612x612&w=0&k=20&c=S5RaMOW-1nbdNzqXccJs0q7lvuIOqEb8vmLa1ANKCRQ=",
    alt: "Forest Image 2",
  },
];

export const aboutImages: SlideImage[] = [
  {
    src: "https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/07/12123124/Forest-Conservation-Act-1980-1634162729429.jpg",
    alt: "Forest Image 1",
  },
  {
    src: "https://static.vecteezy.com/system/resources/previews/012/723/494/large_2x/handing-over-a-tree-in-human-hands-forest-conservation-concept-protection-and-conservation-of-resources-plant-trees-to-reduce-global-warming-use-renewable-energy-conservation-of-natural-forests-free-photo.jpg",
    alt: "Forest Image 2",
  },
];

export const trees: PlantCard[] = [
  {
    title: "Oak Tree",
    latinName: "(Quercus robur)",
    image:
      "https://www.thegaragespecialist.com/wp-content/uploads/2022/05/oak-tree-in-full-leaf-standing-alone-in-a-field-in-summer-against-a-white-background-1024x683.jpg",
    imageAlt: "Tree 1",
    description:
      "Oak trees are known for their strength and longevity. They provide excellent shade and can support a variety of wildlife, including birds and insects. The wood is used in furniture and flooring due to its durability. Oaks also improve soil quality by enhancing nitrogen content.",
  },
  {
    title: "Banyan Tree",
    latinName: "(Ficus benghalensis)",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjI9pG2ntPwzRptiOegesEWPJNspQae6Rhyphenhyphen2Ia42XWWQc2TfoIVhTdnzagP-fCh6AyrdLdINXf2_NOoC4BnyUtJYDmzffC-AHs0AuOBweYo_nBhgSO9Hk_jQQESWQLbwU15ec4U5A9NI_fV/s1600/596e84645d182f6a486d74a84ccd66.jpg",
    imageAlt: "Tree 2",
    description:
      "The banyan tree is a symbol of longevity and strength, with its aerial roots that form new trunks. It offers cooling shade, reduces air pollution, and serves as an important habitat for birds and small animals. Banyans also contribute to reducing carbon dioxide levels in the air.",
  },
  {
    title: "Maple Tree",
    latinName: "(Acer spp.)",
    image: "https://cdn.mos.cms.futurecdn.net/vvUydgY3JGpDQ8aXNRAHtM.jpg",
    imageAlt: "Tree 3",
    description:
      "Maple trees are known for their striking fall foliage and sweet sap, which is used to make maple syrup. These trees help improve air quality and provide habitat for various species. Maple wood is also highly valued for its strength and fine grain, often used in cabinetry and flooring in homes and other.",
  },
  {
    title: "Pine Tree",
    latinName: "(Pinus spp.)",
    image:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pine-tree-in-spring-borchee.jpg",
    imageAlt: "Tree 4",
    description:
      "Pine trees are evergreen conifers that provide year-round greenery. They are essential in stabilizing soil, preventing erosion, and creating habitats for wildlife. Pine needles decompose to enrich soil, and their wood is valuable in construction and paper products, contributing to the economy.",
  },
  {
    title: "Baobab Tree",
    latinName: "(Adansonia)",
    image:
      "https://media.npr.org/assets/img/2018/06/10/gettyimages-157863121-50_custom-289ae9d453e14833aaf8394690778e5858877f7f.jpg",
    imageAlt: "Tree 5",
    description:
      'The baobab, often called the "Tree of Life," is known for its massive trunk and longevity. It provides valuable resources, including water stored in its trunk and nutrient-rich fruit. Baobabs also help maintain soil fertility and support wildlife, particularly in arid regions by providing shelter.',
  },
  {
    title: "Teak Tree",
    latinName: "(Tectona grandis)",
    image:
      "https://media.istockphoto.com/id/637738128/photo/teak-garden.jpg?s=612x612&w=0&k=20&c=fJZPI3qWPEZ-ee1mwQaRae968rfYfu0DDyi3Ky04qeM=",
    imageAlt: "Tree 6",
    description:
      "Teak is a highly prized hardwood tree, valued for its durability and resistance to pests. It grows in tropical regions and plays a role in maintaining biodiversity. Teak wood is used extensively in furniture, flooring, and shipbuilding. Its leaves also improve soil fertility and all the things on earth.",
  },
];

export const seeds: PlantCard[] = [
  {
    title: "Acacia Seed",
    image: "https://cdn.mos.cms.futurecdn.net/EMr5ZSaH9vLT7QunEH2S68.jpg",
    imageAlt: "Tree 1",
    description:
      "Acacia seeds are vital for reforestation in arid regions, as they are drought-resistant and help improve soil fertility. These seeds support the growth of nitrogen-fixing plants, enriching the soil and promoting biodiversity. Acacia trees also help stabilize soil, reduce erosion, and provide shelter for wildlife.",
  },
  {
    title: "Pine Seed",
    image: "https://chefsmandala.com/wp-content/uploads/2018/05/Pine-Nuts.jpg",
    imageAlt: "Tree 2",
    description:
      "Pine seeds are crucial for forest restoration in temperate climates. Pine trees grow quickly and help stabilize soil. They are often used in reforestation projects to improve ecosystem resilience, providing habitat for wildlife and increasing oxygen levels. Their needles also enrich the soil and support other plant species.",
  },
  {
    title: "Mangrove Seed",
    image: "https://i.ytimg.com/vi/CfKIF9S2uyQ/mqdefault.jpg",
    imageAlt: "Tree 3",
    description:
      "Mangrove seeds are essential for coastal reforestation, particularly in tropical and subtropical regions. Mangroves protect shorelines from erosion, provide habitat for marine species, and act as carbon sinks. These seeds help restore critical coastal ecosystems, protect biodiversity, and combat the effects of climate change.",
  },
  {
    title: "Mango Seed",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5jltQhBFGPxb523O-GsidS5ulkysJx7rrLg&s",
    imageAlt: "Tree 4",
    description:
      "Mango seeds contribute to reforestation in tropical areas, enhancing biodiversity and providing fruit for local wildlife. Mango trees also stabilize soil, reduce erosion, and act as windbreaks. By restoring mangrove ecosystems and promoting sustainable agriculture, these seeds help communities adapt to climate change and creating.",
  },
  {
    title: "Oak Seed",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRflItkEHba2cla044xOGlpPNdjAVN_3RwnrA&s",
    imageAlt: "Tree 5",
    description:
      "Oak seeds play a vital role in temperate reforestation, as oak trees are long-lived and support diverse ecosystems. They provide shelter for birds, mammals, and insects. Oak forests enhance soil quality, increase carbon sequestration, and contribute to watershed protection, ensuring healthy ecosystems and biodiversity in forested regions.",
  },
  {
    title: "Baobab Seed",
    image:
      "https://aduna.com/cdn/shop/articles/Aduna_Baobab_Fruit___Pot_95557b81-ad6e-4f63-96ee-5df323e49ecf.jpg?v=1721054360&width=2048",
    imageAlt: "Tree 6",
    description:
      "Baobab seeds are important for reforestation in dry, African regions. These trees provide critical resources such as water, fruit, and shelter for animals. Baobabs help prevent soil erosion and contribute to sustainable agriculture. Their seeds promote the restoration of degraded land and improve the livelihoods of local communities such as the world.",
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "How do trees contribute to climate change mitigation and adaptation?",
    answer:
      "Trees absorb carbon dioxide, reducing greenhouse gases in the atmosphere. They also provide shade, stabilize temperatures, and help with water retention, contributing to climate adaptation and resilience.",
  },
  {
    id: "2",
    question: "What are the main benefits of planting trees in cities?",
    answer:
      "Trees in urban areas reduce air pollution, provide shade, improve mental well-being, reduce energy consumption, and enhance the aesthetic value of cities, making them healthier and more livable environments.",
  },
  {
    id: "3",
    question: "How do trees improve soil health and fertility?",
    answer:
      "rees improve soil quality by adding organic matter through leaf litter and root decomposition. Their roots prevent erosion, increase water retention, and promote beneficial microorganisms, creating a healthier environment for plant growth.",
  },
  {
    id: "4",
    question: "What role do trees play in water cycle management?",
    answer:
      "Trees help manage the water cycle by absorbing rainwater, reducing runoff, and maintaining groundwater levels. Their transpiration process also releases moisture into the air, contributing to rainfall and ecosystem balance.",
  },
  {
    id: "5",
    question: "How do trees provide benefits for human mental health and well-being?",
    answer:
      "Trees improve mental health by reducing stress, providing quiet spaces for relaxation, enhancing focus, and promoting physical activity. Their presence offers a sense of peace, supporting emotional well-being and community cohesion.",
  },
];
