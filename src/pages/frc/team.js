import React from 'react';
import Link from 'gatsby-link';
import Members from './../../components/general/members';
import "./less/team.less";

const teamList = [
  {
    image: 'Dylan F..jpg',
    name: 'Dylan Fernandes',
    subteam: 'Web',
    fact: 'I make a lot of bad jokes.',
    memory: '2017 FRC Worlds Competition.',
    year: 2015,
    leader: "Web Lead"
  },
  {
    image: 'Nicholas M..jpg',
    name: 'Nicholas Miller',
    subteam: 'Web',
    fact: 'I was part of a World Champion archery team.',
    memory: 'Joining the team.',
    year: 2017,
  },
  {
    image: 'Kavya A..jpg',
    name: 'Kavya Annapareddy',
    subteam: 'Graphics',
    fact: 'BLAAAAAAH',
    memory: 'HAAAAAALB',
    year: 2017,
  },
  {
    image: 'Urvi P..jpg',
    name: 'Urvi Pisal',
    subteam: 'Web',
    fact: 'I love spicy food.',
    memory: 'When Tropical Smoothie was at the STEM Expo.',
    year: 2017,
  },
  {
    image: 'Adeel A..jpg',
    name: 'Adeel Aziz',
    subteam: 'Web',
    fact: "I'm Apple Certified.",
    memory: '2018 Kickoff.',
    year: 2017,
  },
  {
    image: 'Kyle R..jpg',
    name: 'Kyle Rowland',
    subteam: 'Web',
    fact: '',
    memory: '',
    year: 2017,
  },
  {
    image: 'Harry D..jpg',
    name: 'Harry Davidson',
    subteam: 'Web',
    fact: '',
    memory: '',
    year: 2017,
  },
  {
    image: 'ErinGrace D..jpg',
    name: 'ErinGrace Drake',
    subteam: 'Leadership',
    fact: 'I can recite all of "Sweet Caroline" by Neil Diamond.',
    memory: "Being a Chairman's finalist at the World Championship.",
    year: 2004,
    leader: 'President'
  },
  {
    image: 'Cameron B..jpg',
    name: 'Cameron Bell',
    subteam: 'Electronics',
    fact: 'I am currently training to do a 21 day backpacking trek that will be over 200 miles long this summer.',
    memory: "Having to switch our intake in under 5 minutes before an elimination match.",
    year: 2014,
    leader: 'Co-Vice President'
  },
  {
    image: 'Nicole C..jpg',
    name: 'Nicole Cheng',
    subteam: 'Outreach',
    fact: 'I collect rubber ducks.',
    memory: "Finally transitioning from Honorary Member to ILITE Member.",
    year: 2017,
    leader: 'Secretary'
  },
  {
    image: 'Emily S..jpg',
    name: 'Emily Shaw',
    subteam: 'Build',
    fact: 'My dream is to meet a river otter.',
    memory: "Fixing the gear box at Worlds 2017.",
    year: 2011,
    leader: 'Build Lead'
  },
  {
    image: 'Harrison K..jpg',
    name: 'Harrison Kwak',
    subteam: 'Build',
    fact: 'I like pineapples.',
    memory: "Winning my very first competition as a member of ILITE.",
    year: 2015,
    leader: 'Build Lead'
  },
  {
    image: 'Cole R..jpg',
    name: 'Cole Roof',
    subteam: 'Electronics',
    fact: ' ',
    memory: " ",
    year: 2016,
    leader: 'Electronics Lead'
  },
  {
    image: 'Justin W..jpg',
    name: 'Justin Williams',
    subteam: 'Electronics',
    fact: 'I like memes.',
    memory: "Worlds vlogging.",
    year: 2016,
    leader: 'Electronics Lead'
  },
  {
    image: 'Stephen W..jpg',
    name: 'Stephen Welch',
    subteam: 'Programming',
    fact: 'I like food.',
    memory: "Eating food.",
    year: 2015,
    leader: 'Programming Lead'
  },
  {
    image: 'Brandon M..jpg',
    name: 'Brandon Morrell',
    subteam: 'Programming',
    fact: 'I like food.',
    memory: "Eating food.",
    year: 2016,
    leader: 'Programming Lead'
  },
  {
    image: 'Diego H..jpg',
    name: 'Diego Hernandez',
    subteam: 'Outreach',
    fact: 'I am always peachy.',
    memory: "My favorite memory is ILITE winning its first District event in 2017 season.",
    year: 2015,
    leader: 'Outreach Lead'
  },
  {
    image: 'Jibran J..jpg',
    name: 'Jibran Jahangiri',
    subteam: 'Outreach',
    fact: 'I give the best massages.',
    memory: "At 2017 World Championship, when they announced ILITE as the Chairmans Finalist.",
    year: 2015,
    leader: 'Outreach Lead'
  },
  {
    image: 'Jessica C..jpg',
    name: 'Jessica Capayachi',
    subteam: 'Graphics',
    fact: 'I love watching Miraculous ladybug with my friends.',
    memory: "Girls in Stem summer camp, getting to meet all the girls and talk to them.",
    year: 2016,
    leader: 'Graphics Lead'
  },
  {
    image: 'Aliyah D..jpg',
    name: 'Aliyah Desautels',
    subteam: 'Sponsorship',
    fact: "Some of my friends call me 'White Rice', because I'm half white and half asian.",
    memory: "Rushing the Darwin field at Worlds as Chairmans Finalists.",
    year: 2014,
    leader: 'Sponsorship Lead'
  },
  {
    image: 'Mia A..jpg',
    name: 'Mia Alessi',
    subteam: 'Sponsorship',
    fact: "I want to teach in a different country after college.",
    memory: "Always meeting new people and making closer friends.",
    year: 2016,
    leader: 'Sponsorship Lead'
  },
  {
    image: 'Calvin M..jpg',
    name: 'Calvin Min',
    subteam: 'Build',
    fact: "I have a sibling on the team.",
    memory: "World Championships 2017.",
    year: 2016,
    leader: 'Integration Lead'
  },
  {
    image: 'Kiyan Z..jpg',
    name: 'Kiyan Zewer',
    subteam: 'Outreach',
    fact: "I am Kurdish.",
    memory: "Rumble in the Roads.",
    year: 2017,
    leader: 'Strategy Lead'
  },
  {
    image: 'Kyle J..jpg',
    name: 'Kyle Jarrett',
    subteam: 'Build',
    fact: "I am a Life scout in the BSA.",
    memory: "Bunking with my friends at districts.",
    year: 2015,
  },
  {
    image: 'Vallabi V..jpg',
    name: 'Vallabi Vallaban',
    subteam: 'Build',
    fact: "I have a dog.",
    memory: "District Championships this year.",
    year: 2015,
  },
  {
    image: 'Trevor L..jpg',
    name: 'Trevor Lew',
    subteam: 'Build',
    fact: "",
    memory: "",
    year: 2017,
  },
  {
    image: 'Matthew R..jpg',
    name: 'Matthew Reheuser',
    subteam: 'Build',
    fact: "",
    memory: "",
    year: 2017,
  },
  {
    image: 'Lily K..jpg',
    name: 'Lily Khochareun',
    subteam: 'Build',
    fact: "I play 3 instruments.",
    memory: "Kickoff.",
    year: 2017,
  },
  {
    image: 'Upneet S..jpg',
    name: 'Upneet Singh',
    subteam: 'Build',
    fact: "I dream about robotics all the time.",
    memory: "Kickoff - when Power Up was announced.",
    year: 2017,
  },
  {
    image: 'Iain M..jpg',
    name: 'Iain Mischel',
    subteam: 'Build',
    fact: "I was born in England.",
    memory: "Playing guitar at IROC setup.",
    year: 2017,
  },
  {
    image: 'Juan C..jpg',
    name: 'Juan Corsino',
    subteam: 'Build',
    fact: "I like betta fish and quadcopters",
    memory: "Joining the team.",
    year: 2017,
  },
  {
    image: 'Kaihil P..jpg',
    name: 'Kaihil Patel',
    subteam: 'Build',
    fact: "I love the Dallas Cowboys.",
    memory: "Laughing and having fun building with the rest of the build team.",
    year: 2017,
  },
  {
    image: 'Hannah C..jpg',
    name: 'Hannah Credno',
    subteam: 'Outreach',
    fact: "I like pineapple on pizza.",
    memory: "2016 District Champs at UMD. I got to meet so many people from all over the area and I made strong friendships then that have lasted today.",
    year: 2015,
  },
  {
    image: 'Jacob S..jpg',
    name: 'Jacob Schaum',
    subteam: 'Outreach',
    fact: "I am a triplet.",
    memory: "FRC Kickoff and helping learn the rules and design our new robot.",
    year: 2017,
  },
  {
    image: 'Grace C..jpg',
    name: 'Grace Cutsinger',
    subteam: 'Outreach',
    fact: "I'm always singing, either out loud or in my head.",
    memory: "Volunteering at IROC 2017!",
    year: 2017,
  },
  {
    image: 'Carrie M..jpg',
    name: 'Carrie Morrell',
    subteam: 'Outreach',
    fact: "I'm on an all girls Cyber Defense team.",
    memory: "Volunteering at IROC.",
    year: 2017,
  },
  {
    image: 'Grace H..jpg',
    name: 'Grace Henderson',
    subteam: 'Outreach',
    fact: "My birthday is 03/03/2003.",
    memory: "Volunteering at IROC.",
    year: 2017,
  },
  {
    image: 'Faran J..jpg',
    name: 'Faran Jahangiri',
    subteam: 'Outreach',
    fact: "I love singing.",
    memory: "Team bonding moments.",
    year: 2017,
  },
  {
    image: 'John C..jpg',
    name: 'John Curley',
    subteam: 'Outreach',
    fact: "",
    memory: "",
    year: '',
  },
  {
    image: 'Srinitya A..jpg',
    name: 'Srinitya Allam',
    subteam: 'Outreach',
    fact: "I have major trypophobia.",
    memory: "Scorekeeping at IROC 2017.",
    year: 2017,
  },
  {
    image: 'Savannah Z..jpg',
    name: 'Savannah Zamudio',
    subteam: 'Sponsorship',
    fact: "I only have half siblings.",
    memory: "Attending the IROC event.",
    year: 2017,
  },
  {
    image: 'Nathan B..jpg',
    name: 'Nathan Burks',
    subteam: 'Electronics',
    fact: "My favorite plant is the cactus.",
    memory: "The first game we won during the steam punk games and the Christmas party.",
    year: 2016,
  },
  {
    image: 'Robert M..jpg',
    name: 'Robert McCulloch',
    subteam: 'Electronics',
    fact: "I love motorcycles.",
    memory: "IROC setup.",
    year: 2017,
  },
  {
    image: 'Carson M..jpg',
    name: 'Carson Min',
    subteam: 'Electronics',
    fact: "I stream League of Legends.",
    memory: "Going to Rumble in the Roads.",
    year: 2017,
  },
  {
    image: 'Adam S..jpg',
    name: 'Adam Stevenson',
    subteam: 'Electronics',
    fact: "My last name is not spelled with a PH.",
    memory: "IROC.",
    year: 2017,
  },
  {
    image: 'Meet P..jpg',
    name: 'Meet Patel',
    subteam: 'Electronics',
    fact: "",
    memory: "",
    year: "",
  },
  {
    image: 'Kavya A..jpg',
    name: 'Kavya Annapareddy',
    subteam: 'Graphics',
    fact: "I can draw. No, I won't draw you. I can, but I won't.",
    memory: "Being too small to fit in the barrels at the corn maze and just falling out.",
    year: 2017,
  },
  {
    image: 'Seneca U..jpg',
    name: 'Seneca Ung',
    subteam: 'Graphics',
    fact: "I have a subtle obsession with Chick Fil A sauce.",
    memory: "Hotel nights at Districts.",
    year: 2016,
  },
  {
    image: 'Michael C..jpg',
    name: 'Michael Castell',
    subteam: 'Graphics',
    fact: "I balance playing football for the school with working on the robotics team.",
    memory: "Staying up till 2am watching movies in a packed hotel room at competitions.",
    year: 2015,
  },
  {
    image: 'Caitlin M..jpg',
    name: 'Caitlin McIntosh',
    subteam: 'Graphics',
    fact: "I'm a half ginger.",
    memory: "Watching my first competition at IROC.",
    year: 2017,
  },
  {
    image: 'Alyssa S..jpg',
    name: 'Alyssa Stump',
    subteam: 'Graphics',
    fact: "I love League of Legends.",
    memory: "I loved the fall party at the corn maze. I enjoyed having to problem solve with my teammates.",
    year: 2017,
  },
  {
    image: 'Hayden B..jpg',
    name: 'Hayden Bushnell',
    subteam: 'Graphics',
    fact: "I'm a CS:GO Gold Nova II.",
    memory: "My awkward interview.",
    year: 2017,
  },
  {
    image: 'Tam V..jpg',
    name: 'Tam Vu',
    subteam: 'Graphics',
    fact: "My favorite movie is Kung Fu Panda.",
    memory: "Being accepted.",
    year: 2017,
  },
  {
    image: 'Atishay K..jpg',
    name: 'Atishay Kasera',
    subteam: 'Programming',
    fact: "I am a vegetarian who is not fond of salads.",
    memory: "Joining the team.",
    year: 2015,
  },
  {
    image: 'George A..jpg',
    name: 'George Alphonse',
    subteam: 'Programming',
    fact: "I like food.",
    memory: "Eating food.",
    year: 2017,
  },
  {
    image: 'Nathan C..jpg',
    name: 'Nathaniel Chong',
    subteam: 'Programming',
    fact: "I like food.",
    memory: "Eating food.",
    year: 2017,
  },
  {
    image: 'Daniel T..jpg',
    name: 'Daniel Tolbert',
    subteam: 'Programming',
    fact: "I like food.",
    memory: "Eating food.",
    year: 2017,
  },
  {
    image: 'Kate B..jpg',
    name: 'Kate Balint',
    subteam: 'Programming',
    fact: "I'm a theater nerd.",
    memory: "My first kickoff.",
    year: 2017,
  },
]

const getMember = (subteam) => {
  return teamList.map(member => {
    if(member.subteam === subteam)
    {
    let image = require(`./../../assets/images/frc/members/${subteam}/${member.image}`);
    return (
      <Members
        name={member.name}
        year={member.year}
        fact={member.fact}
        memory={member.memory}
        image={image}
        leader={member.leader}
        mentor={member.mentor}
      />
    );
  }
  });
};

export default () => {
  return (
    <div className="container">
      <br/><br/><br/>

    <div className="content">
      <ul className="tabs">
        <li><a href="#tab1">Student Leaders</a></li>
        <li><a href="#tab3">Build</a></li>
        <li><a href="#tab4">Outreach</a></li>
        <li><a href="#tab5">Sponsorship</a></li>
        <li><a href="#tab6">Electronics</a></li>
        <li><a href="#tab7">Graphics</a></li>
        <li><a href="#tab8">Programming</a></li>
        <li><a href="#tab9">Web</a></li>
        <li><a href="#tab2">Mentors</a></li>
      </ul>

      <br/>

        <div className="tabs-content">
          <div id="tab1">{getMember("Leadership")}</div>
          <div id="tab2">{getMember("Mentors")}</div>
          <div id="tab3">{getMember("Build")}</div>
          <div id="tab4">{getMember("Outreach")}</div>
          <div id="tab5">{getMember("Sponsorship")}</div>
          <div id="tab6">{getMember("Electronics")}</div>
          <div id="tab7">{getMember("Graphics")}</div>
          <div id="tab8">{getMember("Programming")}</div>
          <div id="tab9">{getMember("Web")}</div>
        </div>

      </div>
    </div>
  )
};
