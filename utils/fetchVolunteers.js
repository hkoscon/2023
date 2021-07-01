const volunteers = {
  exco: [
    {
      name: 'Calvin Tsang',
      avatar: `${process.env.PUBLIC_PATH}/images/volunteer/36cc4b80c152f962ea08477ad3d92182.jpg`,
      description:
        'Vice President of Open Source Hong Kong and Chairman of HKOSCon since 2020. Interested in Front-end Technology | Innovation | Agile Practice. Promote and embrace robust technology for continuous improving I.T. industry in Hong Kong. ',
      role: 'Executive Committee',
      posts: ['Conference Chair', 'Programme Team', 'Sponsor Team Lead'],
      social: {
        linkedin: 'calvin-tyl',
        github: 'DebugTsang',
      },
    },
    {
      name: 'Claire Chung',
      avatar: `${process.env.PUBLIC_PATH}/images/volunteer/7871c0482c9d274d68fe1d056a7cce8b.jpg`,
      description:
        'Academic researcher in Bioinformatics / Geek coder / Graphic design / Language enthusiast / Volunteer. Co-authored on Python Data Visualization Books and spoke at PyConHK; front-end development of mental health service search engine. Ever learn, ever challenge, ever explore.',
      role: 'Executive Committee',
      posts: ['Interpretation Team Lead', 'Design Team', 'Website Team'],
      social: {
        linkedin: 'claire-chung',
      },
    },
    {
      name: 'Daisy Maris Fung',
      avatar:
        'https://www.gravatar.com/avatar/822d46a19923f28d1fe527bd2b2f82e8?s=128',
      role: 'Executive Committee',
      posts: ['Marketing Tead Lead', 'Website Team'],
      social: {},
    },
    {
      name: 'Fiona Lam',
      avatar: `${process.env.PUBLIC_PATH}/images/volunteer/fa29d4359d8c420eec9b84532765dfec.jpg`,
      role: 'Executive Committee',
      posts: ['MC Team Lead', 'Marketing Team'],
      social: {},
    },
    {
      name: 'Haggen So',
      avatar: `${process.env.PUBLIC_PATH}/images/volunteer/c63e3dcf23114e4769ac00c16617d1e9.jpg`,
      description:
        'Dr. Haggen So is an Open Tech. Activists. Interested in FOSS, Open Hardware, Open Standards and Creative Commons.',
      role: 'Executive Committee',
      posts: ['Finance Team Lead', 'Programme Team'],
      social: {},
    },
    {
      name: 'Henry Law',
      avatar: `${process.env.PUBLIC_PATH}/images/volunteer/318824b7d24aa53a1550c3fdcc3cdaad.jpg`,
      role: 'Executive Committee',
      posts: ['Streaming Team Lead'],
      social: {},
    },
    {
      name: 'Ken Chu',
      avatar: `${process.env.PUBLIC_PATH}/images/volunteer/d22e8f6bf9c2ce9b185c270a442e288a.jpg`,
      role: 'Executive Committee',
      posts: ['Administration Team Lead'],
      social: {
        linkedin: 'ken-chu-ky',
      },
    },
    {
      name: 'Koala Yeung',
      avatar: `${process.env.PUBLIC_PATH}/images/volunteer/824010d0d7fcf80d2f629309de68becb.jpg`,
      description:
        'Web developer by training. Works with Javascript, PHP, CSS, Golang, and Docker. Convener of "the Loop", a recurring opensource hacker event in Hong Kong. Linux enthusiast. Father of a 3-years-old.',
      role: 'Executive Committee',
      posts: ['Web Team Lead'],
      social: {
        github: 'yookoala',
        web: 'https://loopdev.community/',
      },
    },
    {
      name: 'Pau Wah',
      role: 'Executive Committee',
      posts: ['Operation Team Lead', 'Administration Team'],
      social: {},
    },
    {
      name: 'Sam Chiu',
      role: 'Executive Committee',
      posts: ['Photo Team Lead'],
      social: {},
    },
    {
      name: 'Alvis Wong',
      role: 'Executive Committee',
      posts: ['Programme Team'],
      social: {
        linkedin: 'calvin-tyl',
        github: 'DebugTsang',
      },
    },
    {
      name: 'Eric Ng',
      role: 'Executive Committee',
      posts: ['Website Team'],
      social: {},
    },
    {
      name: 'Ken Chiu',
      role: 'Executive Committee',
      posts: ['Website Team'],
      social: {},
    },
    {
      name: 'Kingman Leung',
      role: 'Executive Committee',
      posts: ['Operation Team'],
      social: {},
    },
    {
      name: 'Nicholas Yau',
      avatar:
        "https://www.gravatar.com/avatar/f9729bf7b60a37d9874f5a8bd42409c5?s=128'",
      description:
        'Systems Engineer experienced in system and cloud infrastructure. Contributor in various Open Source community events and projects since 2015, including Open Source Hong Kong (Executive Committee), Hong Kong Open Source Conference (Operation), Hong Kong WordPress Meetup (Speaker & Volunteer), LikeCoin community (Validator) and Hong Kong Tor User Group (Volunteer).',
      role: 'Executive Committee',
      posts: ['Operation Team'],
      social: {
        linkedin: 'nicholasyau',
        fb: 'nicholas.techblog',
        web: 'https://nicholas.hk',
      },
    },
    {
      name: 'Ray Wong',
      description:
        'Veteran copywriter, content producer and marketing personnel. Served various HK local media outlet.',
      role: 'Executive Committee',
      posts: ['Marketing Team', 'Sponsor Team'],
      social: {},
    },
    {
      name: 'Sana Siu',
      avatar: `${process.env.PUBLIC_PATH}/images/volunteer/71595c7e137e7975a347a627c17cfc88.jpg`,
      description:
        'Make a living with event management, administration and emceeing; specialised in none. Curious to the world, prudential on all works. Kids and cats lover, coffee and tea addict.',
      role: 'Executive Committee',
      posts: ['Operation Team'],
      social: {},
    },
    {
      name: 'Tommy Han',
      avatar: `${process.env.PUBLIC_PATH}/images/volunteer/ac09c01ecec26e63726faa64ca59fa30.jpg`,
      role: 'Executive Committee',
      posts: ['Streaming Team'],
      social: {},
    },
  ],
  volunteers: [
    {
      name: 'Toby@Happeas',
      role: 'Volunteer',
      posts: ['Design Team'],
      social: {},
    },
    {
      name: 'Frankie Yuen',
      role: 'Volunteer',
      posts: ['Design Team'],
      social: {},
    },
    {
      name: 'Ivan Ip',
      role: 'Volunteer',
      posts: ['Streaming Team'],
      social: {},
    },
  ],
};

export default function fetchVolunteers() {
  return new Promise(resolve => resolve(volunteers));
}
