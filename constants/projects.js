const projectData = [
  {
    id: "4",
    type: "personal",
    name: "Ethicheck.AI",
    imgUrl: "/projects/ethicheck.jpeg",
    videoUrl: "/videos/ethicheck.mp4",
    desc: `
Ethicheck.AI is a project that I did as a part of a hackathon , it helps to check the ethics of the query &  safeguard the response that is given by the chatbot. There is a rule generation pipeline which has automated rule creation from EU AI act etc. forming knowledge graph. 
There is a user interface for the chatbot and the admin panel in which the admin can upload rulebooks, see the 3D knowledge graph, and also overall statistics threat-level wise and also user wise specifying the duration.

        `,
    githubLink: "https://github.com/orgs/knacktohack314/repositories",
    iconLink: "",
    icon: "",
    skills: [
      "React",
      "Shadcn/ui",
      "Flask",
      "Azure(Blob Storage)",
      "Azure(CosmosDB)",
    ],
  },
  {
    id: "1",
    name: "MealApp",
    type: "personal",
    imgUrl: "/projects/mealapp.png",
    videoUrl: "/videos/MealAppDEMO.mp4",
    desc: `
Meal app  built using React Native and TailwindCSS  and sanity.io CMS for backend part 
        `,
    githubLink: "https://github.com/das-kushal/MealApp",
    iconLink:
      "https://github.com/das-kushal/Coding-Ninjas-LeetCode-Font-Changer/blob/main/favFInal.png?raw=true",
    icon: "",
    skills: [
      "React Native",
      "TailwindCSS (NativeWind)",
      "Redux",
      "React Navigation",
    ],
  },

  {
    id: "2",
    type: "personal",
    name: "Survey on Persistent Data Structures",
    imgUrl: "/projects/persistent.png",
    reportUrl: "/projects/Persistent-Stack.pdf",
    // videoUrl: "/videos/PersistentStackDemo.mp4",
    desc: `
 A  research on persistent data structures under the guidance of  Prof. Chandan Mazumdar,
  used Directed Acyclic Graph for Persistent Stack.
        `,

    githubLink: "https://github.com/das-kushal/Persistent_Stack",
    iconLink: "",
    icon: "",
    skills: ["Data Structures","C++","Algorithms"],
  },
  {
    id: "3",
    type: "personal",
    name: "Coding Ninjas & LeetCode Font Changer",
    imgUrl: "/projects/fontchanger.png",
    videoUrl: '/videos/FontChangerExtensionDEMO.mp4',
    desc: `
Chrome extension to change the fonts & letter spacing of editor of leetcode and coding ninjas, has permisions for activeTab & storage , used localStorage.


        `,
    githubLink:
      "https://github.com/das-kushal/Coding-Ninjas-LeetCode-Font-Changer",
    iconLink:
      "https://github.com/das-kushal/Coding-Ninjas-LeetCode-Font-Changer/blob/main/favFInal.png?raw=true",
    icon: "",
    skills: ["HTML","CSS","Javascript","Chrome Extension"],
  },

  {
    id: "5",
    type: "finalYear",
    name: "BPMN2Neo4j",
    imgUrl: "/projects/finalyear/bpmn2neo4j.png",
    reportUrl: "/projects/finalyear/BCSE_Project_Report_Template.pdf",
    videoUrl: "/videos/final_year_project_output_video.mp4",
    presentationUrl: "/projects/finalyear/bpmn-to-neo4j-ppt.pdf",
    desc: `
    This is the final year project which I did under the guidance of Prof. Mridul Sankar Barik. The project is about converting the BPMN model to Neo4j graph database. The project is done using Python and Neo4j.
    In this project we take a BPMN model and extract the different types of nodes and relationships which have different attributes and then convert it to a Neo4j graph.
    The next part of the project was to create a web interface where the user can upload/create a BPMN model, convert into a Neo4j graph, view it and query the graph to see the results.



            `,
    // desc: `This final year project, guided by Prof. Mridul Sankar Barik, focuses on converting BPMN models into Neo4j graph databases using Python and Neo4j. It involves extracting nodes and relationships with attributes from BPMN models and transforming them into graph structures. Additionally, a web interface was developed to allow users to upload or create BPMN models, convert them into graphs, visualize them, and query the graph for insights.`,
    githubLink: "https://github.com/das-kushal/bpmn-to-neo4j",
    iconLink: "",
    icon: "",
    skills: ["Javascript","React","Neo4j","BPMN","Graph Visualization"],
  },
];

export default projectData;
