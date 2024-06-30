import { useEffect } from "react";

import WebRing from "../components/WebRing";

function Home() {
  useEffect(() => {
    const mad = [
      " inspect element ? ",
      "⣞⢽⢪⢣⢣⢣⢫⡺⡵⣝⡮⣗⢷⢽⢽⢽⣮⡷⡽⣜⣜⢮⢺⣜⢷⢽⢝⡽⣝",
      "⠸⡸⠜⠕⠕⠁⢁⢇⢏⢽⢺⣪⡳⡝⣎⣏⢯⢞⡿⣟⣷⣳⢯⡷⣽⢽⢯⣳⣫⠇",
      "⠀⠀⢀⢀⢄⢬⢪⡪⡎⣆⡈⠚⠜⠕⠇⠗⠝⢕⢯⢫⣞⣯⣿⣻⡽⣏⢗⣗⠏",
      "⠀⠪⡪⡪⣪⢪⢺⢸⢢⢓⢆⢤⢀⠀⠀⠀⠀⠈⢊⢞⡾⣿⡯⣏⢮⠷⠁",
      "⠀⠀⠀⠈⠊⠆⡃⠕⢕⢇⢇⢇⢇⢇⢏⢎⢎⢆⢄⠀⢑⣽⣿⢝⠲⠉",
      "⠀⠀⠀⠀⠀⡿⠂⠠⠀⡇⢇⠕⢈⣀⠀⠁⠡⠣⡣⡫⣂⣿⠯⢪⠰⠂",
      "⠀⠀⠀⠀⡦⡙⡂⢀⢤⢣⠣⡈⣾⡃⠠⠄⠀⡄⢱⣌⣶⢏⢊⠂",
      "⠀⠀⠀⠀⢝⡲⣜⡮⡏⢎⢌⢂⠙⠢⠐⢀⢘⢵⣽⣿⡿⠁⠁",
      "⠀⠀⠀⠀⠨⣺⡺⡕⡕⡱⡑⡆⡕⡅⡕⡜⡼⢽⡻⠏",
      "⠀⠀⠀⠀⣼⣳⣫⣾⣵⣗⡵⡱⡡⢣⢑⢕⢜⢕⡝",
      "⠀⠀⠀⣴⣿⣾⣿⣿⣿⡿⡽⡑⢌⠪⡢⡣⣣⡟",
      "⠀⠀⠀⡟⡾⣿⢿⢿⢵⣽⣾⣼⣘⢸⢸⣞⡟",
      "⠀⠀⠀⠀⠁⠇⠡⠩⡫⢿⣝⡻⡮⣒⢽⠋",
    ];
    console.log(mad.join("\n"));
  }, []);

  const stuff = [
    "Distributed systems",
    "Golang fanboy",
    "Linux/Infrastructure/Cloud",
    "Tech-bro activities (gym 🏋🏻‍♂️ and bouldering 🪨)",
  ]

  const links = [
    {
      name: "microservices architecture deployed on GKE",
      url: "https://github.com/DiogoSantoss/nvolopi",
    },
    {
      name: "instrumentation of java applications in AWS",
      url: "https://github.com/DiogoSantoss/cloud-computing-virtualization",
    },
    {
      name: "secure infrastructure with JWT and 2FA",
      url: "https://github.com/DiogoSantoss/2fa-stock-broker",
    },
    {
      name: "state machine replication using QBFT",
      url: "hhttps://github.com/DiogoSantoss/permissioned-blockchain-qbft",
    },
    {
      name: "multi-paxos implementation",
      url: "https://github.com/DiogoSantoss/fault-tolerant-bank",
    },
  ];

  const experience = [
    {
      date: "Sep 2022 - Apr 2024",
      role: "Full Stack Developer",
      company: "IST",
    },
    {
      date: "Jul 2023 - Aug 2023",
      role: "Software Engineer Intern",
      company: "Jungle",
    },
    {
      date: "Oct 2021 - Mar 2022",
      role: "Outsourcing consultant",
      company: "JUNITEC",
    },
    {
      date: "Jul 2021 - Sep 2021",
      role: "Front-End Developer Intern",
      company: "Spin.Works",
    },
  ]

  return (
    <>
      <div className="bg-githubDark text-white rounded-xl p-5 shadow-homeShadow">
        <h1 className="font-bold text-2xl">🌍 Diogo Santos</h1>
        <span>
          Student, aspiring software engineer <br /> <br />
          Writing my master thesis on byzantine fault tolerant algorithms <br />
          and distributed validator technology for Ethereum
        </span>
        <h3 className="font-bold text-xl mt-5 mb-1">Stuff I like</h3>
        <ul className="ml-5">
          {stuff.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3 className="font-bold text-xl mt-5 mb-1">Professional experience</h3>
        <div className="ml-5">
          <ul>
            {experience.map((item, index) => (
              <li key={index}>
                <span className="font-bold">{item.date}</span>
                <span> - {item.role} @ {item.company}</span>
              </li>
            ))}
          </ul>
        </div>
        <h3 className="font-bold text-xl mt-5 mb-1">Github projects</h3>
        <ul className="ml-5">
          {links.map((item, index) => (
            <li key={index}>
              <a href={item.url}>
                <span className="hover:underline">{item.name}</span>
                <span className="underline-none"> 🔗</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="text-right">
          <span>
            <a
              href="https://www.linkedin.com/in/diogo-silva-santos/"
              className="inline-block mr-2"
            >
              <img
                src="https://skillicons.dev/icons?i=linkedin"
                alt="Linkedin"
              />
            </a>
            <a
              href="https://www.github.com/DiogoSantoss"
              className="inline-block"
            >
              <img src="https://skillicons.dev/icons?i=github" alt="Github" />
            </a>
          </span>
        </div>
        <WebRing />
      </div>
    </>
  );
}

export default Home;
