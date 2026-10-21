// Home page content. Copy is from the original site, with typos fixed.

export type Species = {
  title: string;
  /** Latin name, shown for trees only. */
  latinName?: string;
  image: string;
  imageAlt: string;
  description: string;
};

export type FaqItem = { id: string; question: string; answer: string };

export const heroImage =
  "https://whatcanyoudo.earth/wp-content/uploads/2023/04/Conservation-of-forest-and-wildlife-scaled.jpg";

export const whyImage = {
  src: "https://media.istockphoto.com/id/854086988/photo/jungle-tree.jpg?s=612x612&w=0&k=20&c=S5RaMOW-1nbdNzqXccJs0q7lvuIOqEb8vmLa1ANKCRQ=",
  alt: "An old tree rising out of dense jungle",
};

export const aboutImage = {
  src: "https://www.kubota.com/sustainability/society/community/images/kubota-forest/img_hero.jpg",
  alt: "Volunteers in hard hats planting saplings on a forest slope",
};

export const trees: Species[] = [
  {
    title: "Oak",
    latinName: "Quercus robur",
    image:
      "https://www.thegaragespecialist.com/wp-content/uploads/2022/05/oak-tree-in-full-leaf-standing-alone-in-a-field-in-summer-against-a-white-background-1024x683.jpg",
    imageAlt: "A lone oak in full leaf",
    description:
      "Oak trees are known for their strength and longevity. They provide excellent shade and can support a variety of wildlife, including birds and insects. The wood is used in furniture and flooring due to its durability. Oaks also improve soil quality by enhancing nitrogen content.",
  },
  {
    title: "Banyan",
    latinName: "Ficus benghalensis",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjI9pG2ntPwzRptiOegesEWPJNspQae6Rhyphenhyphen2Ia42XWWQc2TfoIVhTdnzagP-fCh6AyrdLdINXf2_NOoC4BnyUtJYDmzffC-AHs0AuOBweYo_nBhgSO9Hk_jQQESWQLbwU15ec4U5A9NI_fV/s1600/596e84645d182f6a486d74a84ccd66.jpg",
    imageAlt: "A wide banyan tree with many trunks grown from its roots",
    description:
      "The banyan tree is a symbol of longevity and strength, with its aerial roots that form new trunks. It offers cooling shade, reduces air pollution, and serves as an important habitat for birds and small animals. Banyans also contribute to reducing carbon dioxide levels in the air.",
  },
  {
    title: "Maple",
    latinName: "Acer spp.",
    image: "https://cdn.mos.cms.futurecdn.net/vvUydgY3JGpDQ8aXNRAHtM.jpg",
    imageAlt: "A maple covered in bright red leaves",
    description:
      "Maple trees are known for their striking fall foliage and sweet sap, which is used to make maple syrup. These trees help improve air quality and provide habitat for various species. Maple wood is also highly valued for its strength and fine grain, often used in cabinetry and flooring.",
  },
  {
    title: "Pine",
    latinName: "Pinus spp.",
    image:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pine-tree-in-spring-borchee.jpg",
    imageAlt: "A tall pine standing in a meadow",
    description:
      "Pine trees are evergreen conifers that provide year-round greenery. They are essential in stabilizing soil, preventing erosion, and creating habitats for wildlife. Pine needles decompose to enrich soil, and their wood is valuable in construction and paper products, contributing to the economy.",
  },
  {
    title: "Baobab",
    latinName: "Adansonia",
    image:
      "https://media.npr.org/assets/img/2018/06/10/gettyimages-157863121-50_custom-289ae9d453e14833aaf8394690778e5858877f7f.jpg",
    imageAlt: "A dirt road lined with baobab trees",
    description:
      'The baobab, often called the "Tree of Life," is known for its massive trunk and longevity. It provides valuable resources, including water stored in its trunk and nutrient-rich fruit. Baobabs also help maintain soil fertility and shelter wildlife, particularly in arid regions.',
  },
  {
    title: "Teak",
    latinName: "Tectona grandis",
    image:
      "https://media.istockphoto.com/id/637738128/photo/teak-garden.jpg?s=612x612&w=0&k=20&c=fJZPI3qWPEZ-ee1mwQaRae968rfYfu0DDyi3Ky04qeM=",
    imageAlt: "Rows of tall, straight teak trees",
    description:
      "Teak is a highly prized hardwood tree, valued for its durability and resistance to pests. It grows in tropical regions and plays a role in maintaining biodiversity. Teak wood is used extensively in furniture, flooring, and shipbuilding. Its fallen leaves also improve soil fertility.",
  },
];

export const seeds: Species[] = [
  {
    title: "Acacia",
    image: "https://cdn.mos.cms.futurecdn.net/EMr5ZSaH9vLT7QunEH2S68.jpg",
    imageAlt: "Acacia seed pods",
    description:
      "Acacia seeds are vital for reforestation in arid regions, as they are drought-resistant and help improve soil fertility. These seeds support the growth of nitrogen-fixing plants, enriching the soil and promoting biodiversity. Acacia trees also help stabilize soil, reduce erosion, and provide shelter for wildlife.",
  },
  {
    title: "Pine",
    image: "https://chefsmandala.com/wp-content/uploads/2018/05/Pine-Nuts.jpg",
    imageAlt: "Shelled pine nuts beside a pine cone",
    description:
      "Pine seeds are crucial for forest restoration in temperate climates. Pine trees grow quickly and help stabilize soil. They are often used in reforestation projects to improve ecosystem resilience, providing habitat for wildlife and increasing oxygen levels. Their needles also enrich the soil and support other plant species.",
  },
  {
    title: "Mangrove",
    image: "https://i.ytimg.com/vi/CfKIF9S2uyQ/mqdefault.jpg",
    imageAlt: "A mangrove seedling hanging from its parent tree",
    description:
      "Mangrove seeds are essential for coastal reforestation, particularly in tropical and subtropical regions. Mangroves protect shorelines from erosion, provide habitat for marine species, and act as carbon sinks. These seeds help restore critical coastal ecosystems, protect biodiversity, and combat the effects of climate change.",
  },
  {
    title: "Mango",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5jltQhBFGPxb523O-GsidS5ulkysJx7rrLg&s",
    imageAlt: "A mango seed sprouting in soil",
    description:
      "Mango seeds contribute to reforestation in tropical areas, enhancing biodiversity and providing fruit for local wildlife. Mango trees also stabilize soil, reduce erosion, and act as windbreaks. By promoting sustainable agriculture, these seeds help communities adapt to climate change.",
  },
  {
    title: "Oak",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRflItkEHba2cla044xOGlpPNdjAVN_3RwnrA&s",
    imageAlt: "Green acorns on an oak branch",
    description:
      "Oak seeds play a vital role in temperate reforestation, as oak trees are long-lived and support diverse ecosystems. They provide shelter for birds, mammals, and insects. Oak forests enhance soil quality, increase carbon sequestration, and contribute to watershed protection, ensuring healthy ecosystems and biodiversity in forested regions.",
  },
  {
    title: "Baobab",
    image: "https://media.npr.org/assets/img/2018/06/10/gettyimages-157863121-50_custom-289ae9d453e14833aaf8394690778e5858877f7f.jpg",
    imageAlt: "Baobab trees, whose large fruit carry the seeds",
    description:
      "Baobab seeds are important for reforestation in dry, African regions. These trees provide critical resources such as water, fruit, and shelter for animals. Baobabs help prevent soil erosion and contribute to sustainable agriculture. Their seeds promote the restoration of degraded land and improve the livelihoods of local communities.",
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
      "Trees improve soil quality by adding organic matter through leaf litter and root decomposition. Their roots prevent erosion, increase water retention, and promote beneficial microorganisms, creating a healthier environment for plant growth.",
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
