export interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  image: string;
  category: string;
  content?: string;
  author?: string;
  videoUrl?: string;
  gallery?: string[];
  externalLink?: string;
  imageSource?: string;
  status?: "draft" | "published" | "past";
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  author?: string;
  description: string;
  image: string;
  category: string;
  content?: string;
  imageSource?: string;
  gallery?: string[]; // Added gallery field to NewsItem
  status?: "draft" | "published" | "past";
}

// Sample upcoming events data
export const upcomingEvents: Event[] = [

];

// Sample news items data
export const newsItems: NewsItem[] = [
  {
    id: "news-003",
    title: "PAM-BAM Mission Africa Summit Held in Addis Ababa, Ethiopia",
    date: "June 19 - 23, 2025",
    author: "AIIS Communications Team",
    description: "The African Institute for International Studies (AIIS) hosted the PAM-BAM Mission Africa Summit in Addis Ababa, Ethiopia, focusing on integrating business, profession, and mission for global outreach.",
    image: "/images/events/summit-1.jpg",
    gallery: [

      "/images/events/summit-2.jpg",
      "/images/events/summit-3.jpg",
      "/images/events/summit-4.jpg",
      "/images/events/summit-5.jpg",
      "/images/events/summit-6.jpg",
    ],
    category: "Event",
    imageSource: "AIIS Library",
    content: `
      <div class="article-content">
        <h2 class="text-2xl font-bold mb-4">PAM-BAM Mission Africa Summit</h2>
        <p class="mb-4">From June 19-23, 2025, the African Institute for International Studies (AIIS), in collaboration with mission institutes such as GONEANAME, Nectar Leadership Institute, and Global Connections for Advancement (GCA), hosted the PAM-BAM Mission Africa Summit in Addis Ababa, Ethiopia.</p>
        <p class="mb-4">Ethiopia, one of the oldest Christian nations with a history of nearly 2,000 years, has a rich spiritual heritage. However, the nation has faced challenges in actively sharing the Gospel with its neighbors and the global community. The summit aimed to address this by exploring how businesses and professions can be integrated with mission work to strengthen Ethiopia's role in global missions.</p>
        <p class="mb-4">The event brought together participants from Addis Ababa and featured distinguished trainers from the global community, including Professor Andrew B. Kim, head of GCA, Professor Helen Cho from the United States, Dr. Jae J. Jang from the Philippines, Dr. Lipok Ao from Nagaland, India, and Professor Tiyee Allison from Abidjan, West Africa.</p>
        <p class="mb-6">The summit focused on strategies to combine business, professional skills, and mission efforts, fostering a renewed commitment to global outreach from Ethiopia.</p>
      </div>
    `,
    status: "published"
  },
  {
    id: "news-001",
    title: "New Students Registration is Open",
    date: "April 30, 2025",
    author: "AIIS Communications Team",
    description: "AIIS is now accepting new students for its programs. Interested applicants can contact the school for more information.",
    image: "/images/programs/Registration.jpg",
    gallery: [

    ],
    category: "News",
    imageSource: "AIIS Library",
    content: `
      <div class="article-content">
        <h2 class="text-2xl font-bold mb-4">Admissions Open</h2>
        <p class="mb-6">The African Institute for International Studies (AIIS) is currently accepting new students for its programs. Prospective students who wish to join the college can contact the AIIS Admissions Office for more information about the application process and program details.</p>
      </div>
    `,
    status: "published"
  },
  {
    id: "news-002",
    title: "New Program Launched",
    date: "April 30, 2025",
    author: "AIIS Academic Affairs Office",
    description: "AIIS is proud to announce the launch of a new Master of Arts in Development and Theological Studies.",
    image: "/images/programs/New program.jpg",
    gallery: [
    ],
    category: "News",
    imageSource: "AIIS Library",
    content: `
      <div class="article-content">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        
        <h2 class="text-2xl font-bold mb-4">Program Overview</h2>
        <p class="mb-6">The African Institute for International Studies (AIIS) is excited to announce the launch of a new Master of Arts in Development and Theological Studies (MADTS), beginning in the Fall 2024 semester.</p>
        
        <h2 class="text-2xl font-bold mb-4">Program Details</h2>
        <p class="mb-6">This two-year program, supervised by the AIIS Graduate Studies Committee of the Department of International Development, is designed to equip students with advanced knowledge and research skills in development studies and theological perspectives, with a focus on global and regional challenges.</p>
        
        <p class="mb-6">Key features of the program include:</p>
        <ul class="mb-6 space-y-2 list-none">
          <li class="flex items-start">
            <i class="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
            A core course in Development Studies covering social, political, global, and development theory, as well as key themes such as agrarian change, urbanization, social policy, sustainable development, states and governance, and technology and innovation.
          </li>
          <li class="flex items-start">
            <i class="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
            Two foundation papers selected from History and Politics, Economics, or Social Anthropology, with specific requirements for non-economics background students to include Economics.
          </li>
          <li class="flex items-start">
            <i class="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
            Research methodology training, including a written paper on qualitative and quantitative methods and a research design essay of up to 5,000 words.
          </li>
          <li class="flex items-start">
            <i class="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
            A thesis of up to 30,000 words on a topic in development studies, approved by the MADTS Teaching Committee.
          </li>
          <li class="flex items-start">
            <i class="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
            Two options courses assessed either by timed written examination or coursework submission in the second year.
          </li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4">Program Structure</h2>
        <p class="mb-6">The program includes a rigorous first-year qualifying test comprising two foundation papers, a Research Methods paper, and a research design essay. Candidates must pass all components to progress to the second year. Marks from these assessments contribute to the final degree outcome. In the final year, candidates submit a thesis and complete two options courses. Failure in any final-year component results in degree failure, with the opportunity to retake or resubmit the following academic year.</p>
        
        <h2 class="text-2xl font-bold mb-4">Faculty Leadership</h2>
        <p class="mb-6">The program will be overseen by the Department Head of MADTS, with thesis supervision provided by faculty approved by the Graduate Studies Committee. Additional support comes from AIIS faculty members and visiting scholars from partner institutions.</p>
        
        <h2 class="text-2xl font-bold mb-4">Admissions Information</h2>
        <p class="mb-6">Applications for the inaugural cohort are now being accepted. Prospective students should hold a relevant bachelor’s degree and meet the academic requirements set by the AIIS Graduate Studies Committee. Candidates are admitted to examinations in a specific year, with exceptional permissions for deferral granted by the Proctors through the candidate’s college.</p>
        
        <p class="mb-6">For more information about the program and application process, please contact the AIIS Admissions Office or visit the Course Handbook for detailed submission requirements and deadlines.</p>
      </div>
    `,
    status: "published"
  }
];

// Import blog posts from blog-data.ts
import { blogPosts } from './blog-data';

// Export a combined array for easy access
export const allContent = [...upcomingEvents, ...newsItems, ...blogPosts];