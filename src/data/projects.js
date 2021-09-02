const getListOfPaths = (folderName, numberOfImages) => {
  let list = [];
  for (let i = 0; i < numberOfImages; i++) {
    list.push("/images/" + folderName + "/" + String(i) + ".png");
  }
  return list;
};

export const projects = [
  {
    folderName: "wisermachines",
    title: "WiserMachines",
    description: [
      "A full-stack web app built for digitizing factory shop floors. Its users can be factory personnel with different roles.",
      "The app features different dashboards that visualize real-time data from machines, track machine performance and up-time, provide insights about machine utilization. Factories are mapped out in terms of workshops, zones, and machines which can be monitored individually and grouped.",
      "Users can set triggers and thresholds on machine or environment data for alert generation, schedule work shifts, keep track of production schedules, and generate reports.",
    ],
    tags: [
      "React",
      "Material UI",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "Websockets",
      "MQTT",
      "JWT",
    ],
    source: "https://github.com/tlhysf/wisermachines-webapp",
    demo: "https://wisermachines-demo-12e0a.web.app/",
  },
  {
    folderName: "sedenius",
    title: "Asset Management",
    description: [
      "A comprehensive asset management tool for inventory keeping, maintenance planning and scheduling, resource allocation, rent scheduling, and location monitoring, of assets such electronics, mechanical equipment, etc.",

      "Its users can be renting agencies, renters/customers, maintenace agencies, agency employees, freelancers. etc. each having different level of authorization and roles. These user can coordinate with other users for booking assets for rent, planning maintenance, and assigning tasks.",

      "Users can have an overview of schedules, locations and status of their assets.They can create and modify assets, change ownerships, set reminders for events, and create templates for assets, events and tasks.",
    ],
    tags: ["React", "Redux", "Leaflet", "RBC"],
  },
  {
    folderName: "portfolio",
    title: "Portfolio",
    description: [
      "Second iteration of my personal website. Designed and developed with a conscious effort to avoid using any superfluous frameworks like Bootstrap.",
      "I built this site from scratch. By scratch, I mean absolutely from scratch without any UI library/framework (except React though) and had so much fun along the way.",
    ],
  },
  {
    folderName: "devlink",
    title: "MERN Social Media App",
    description: [
      "This was a personal project. Its a full-stack app build in MERN, featuring basic functionalities of a social media platform.",
      "Users can create profiles, add experiences and education fields. They can create posts and can view public profiles and posts made by others, and can like/unlike and comment on posts.",
    ],
    tags: ["React", "Node", "Express", "Mongo", "Redux", "Bootstrap", "JWT"],
    source: "https://github.com/tlhysf/DevLink",
    demo: "https://devlink-merndemo.herokuapp.com/",
  },

  {
    folderName: "genes",
    title: "Genes and Machines",
  },
  {
    folderName: "redux",
    title: "React-Redux Boilerplate",
  },
];
