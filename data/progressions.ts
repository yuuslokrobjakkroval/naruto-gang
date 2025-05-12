export interface CharacterStage {
  name: string
  image?: string
  age?: string
  description?: string
  stats: {
    ninjutsu: number
    taijutsu: number
    genjutsu: number
    intelligence: number
    strength: number
    speed: number
    stamina: number
    handSeals: number
  }
  abilities: string[]
  tags?: string[]
  keyEvents?: Array<{
    title: string
    description: string
  }>
}

export interface CharacterProgression {
  characterId: string
  characterName: string
  stages: CharacterStage[]
}

export const characterProgressions = {
  "naruto-uzumaki": {
    characterId: "naruto-uzumaki",
    characterName: "Naruto Uzumaki",
    stages: [
      {
        name: "Academy Student",
        image: "/images/naruto-academy.png",
        age: "12",
        description: "A mischievous academy student who struggles with basic jutsu but dreams of becoming Hokage.",
        stats: {
          ninjutsu: 2,
          taijutsu: 2,
          genjutsu: 1,
          intelligence: 2,
          strength: 2,
          speed: 2,
          stamina: 4,
          handSeals: 1,
        },
        abilities: ["Basic Clone Jutsu (Poor)", "Transformation Jutsu", "Sexy Jutsu"],
        tags: ["Academy Student", "Prankster", "Kyuubi Jinchūriki"],
        keyEvents: [
          {
            title: "Graduation",
            description: "Learns the Shadow Clone Jutsu from the Forbidden Scroll after being tricked by Mizuki.",
          },
          {
            title: "Team Formation",
            description: "Assigned to Team 7 with Sasuke Uchiha and Sakura Haruno under Kakashi Hatake.",
          },
        ],
      },
      {
        name: "Genin",
        image: "/images/naruto.png",
        age: "12-13",
        description:
          "A newly appointed Genin who begins to harness the power of the Nine-Tails and learns the Rasengan.",
        stats: {
          ninjutsu: 3,
          taijutsu: 2,
          genjutsu: 1,
          intelligence: 3,
          strength: 3,
          speed: 3,
          stamina: 5,
          handSeals: 1,
        },
        abilities: ["Shadow Clone Jutsu", "Summoning Jutsu (Toads)", "Rasengan (Basic)", "Initial Nine-Tails Chakra"],
        tags: ["Genin", "Team 7", "Kyuubi Jinchūriki"],
        keyEvents: [
          {
            title: "Land of Waves Mission",
            description: "First major mission where Naruto experiences real combat and awakens his nindo.",
          },
          {
            title: "Chūnin Exams",
            description: "Fights Neji Hyuga and Gaara, showing his determination and changing their perspectives.",
          },
          {
            title: "Training with Jiraiya",
            description: "Learns the Summoning Jutsu and begins to access the Nine-Tails' chakra.",
          },
        ],
      },
      {
        name: "Post-Training",
        image: "/images/naruto-shippuden.png",
        age: "15-16",
        description:
          "Returns to the village after training with Jiraiya for 2.5 years, with improved skills and determination.",
        stats: {
          ninjutsu: 4,
          taijutsu: 3,
          genjutsu: 2,
          intelligence: 3,
          strength: 3,
          speed: 4,
          stamina: 5,
          handSeals: 2,
        },
        abilities: [
          "Shadow Clone Jutsu (Advanced)",
          "Rasengan (Improved)",
          "Odama Rasengan (Giant Rasengan)",
          "Nine-Tails Chakra (Initial Control)",
          "Wind Release: Rasengan (Incomplete)",
        ],
        tags: ["Genin", "Team 7", "Kyuubi Jinchūriki", "Sage Training"],
        keyEvents: [
          {
            title: "Rescue Gaara Arc",
            description: "Fights Akatsuki members Deidara and Sasori alongside Team Kakashi and Team Guy.",
          },
          {
            title: "Reunion with Sasuke",
            description:
              "Briefly reunites with Sasuke at Orochimaru's hideout, strengthening his resolve to bring him back.",
          },
          {
            title: "Wind Release Training",
            description: "Trains with Kakashi and Yamato to develop his wind nature and create the Rasenshuriken.",
          },
        ],
      },
      {
        name: "Sage Mode",
        image: "/images/naruto-sage-mode.png",
        age: "16",
        description: "Masters Sage Mode after training at Mount Myoboku following Jiraiya's death.",
        stats: {
          ninjutsu: 5,
          taijutsu: 5,
          genjutsu: 2,
          intelligence: 4,
          strength: 5,
          speed: 5,
          stamina: 7,
          handSeals: 2,
        },
        abilities: [
          "Sage Mode",
          "Sage Art: Massive Rasengan Barrage",
          "Wind Release: Rasenshuriken",
          "Frog Kumite",
          "Improved Sensory Abilities",
        ],
        tags: ["Genin", "Sage", "Kyuubi Jinchūriki", "Mount Myoboku"],
        keyEvents: [
          {
            title: "Defeat of Pain",
            description: "Defeats the Six Paths of Pain and convinces Nagato to believe in his vision of peace.",
          },
          {
            title: "Recognition",
            description: "Acknowledged by the entire village as a hero after saving them from Pain's destruction.",
          },
          {
            title: "Meeting Minato",
            description: "Meets the chakra imprint of his father when the Eight-Tails nearly breaks free.",
          },
        ],
      },
      {
        name: "Nine-Tails Chakra Mode",
        image: "/images/naruto-kcm.png",
        age: "16-17",
        description: "Defeats and befriends the Nine-Tails, gaining access to its chakra without losing control.",
        stats: {
          ninjutsu: 7,
          taijutsu: 6,
          genjutsu: 2,
          intelligence: 5,
          strength: 7,
          speed: 7,
          stamina: 8,
          handSeals: 3,
        },
        abilities: [
          "Nine-Tails Chakra Mode",
          "Super Mini Tailed Beast Ball",
          "Planetary Rasengan",
          "Enhanced Speed and Strength",
          "Negative Emotion Sensing",
        ],
        tags: ["Genin", "Kyuubi Jinchūriki", "Perfect Control"],
        keyEvents: [
          {
            title: "Fourth Great Ninja War",
            description: "Joins the Allied Shinobi Forces in the war against Madara, Obito, and the Ten-Tails.",
          },
          {
            title: "Meeting Killer B",
            description: "Trains with Killer B to control the Nine-Tails' power at the Island Turtle.",
          },
          {
            title: "Confronting the Masked Man",
            description: "Discovers the true identity of Tobi as Obito Uchiha, his father's former student.",
          },
        ],
      },
      {
        name: "Six Paths Sage Mode",
        image: "/images/naruto-six-paths.png",
        age: "17",
        description: "Receives the Six Paths Sage Mode from Hagoromo Otsutsuki, reaching the pinnacle of his power.",
        stats: {
          ninjutsu: 9,
          taijutsu: 8,
          genjutsu: 3,
          intelligence: 7,
          strength: 8,
          speed: 9,
          stamina: 10,
          handSeals: 5,
        },
        abilities: [
          "Six Paths Sage Mode",
          "Truth-Seeking Balls",
          "Six Paths: Ultra-Big Ball Rasenshuriken",
          "Tailed Beast Rasenshuriken",
          "Flight",
          "Universal Healing",
        ],
        tags: ["Genin", "Six Paths Power", "Kyuubi Jinchūriki", "Allied Forces"],
        keyEvents: [
          {
            title: "Battle against Madara",
            description: "Fights alongside Sasuke against Madara Uchiha who has become the Ten-Tails Jinchūriki.",
          },
          {
            title: "Sealing Kaguya",
            description: "Works with Team 7 to seal away Kaguya Otsutsuki, the progenitor of chakra.",
          },
          {
            title: "Final Battle with Sasuke",
            description: "Fights Sasuke at the Valley of the End, finally bringing him back to the village.",
          },
        ],
      },
      {
        name: "Hokage",
        image: "/images/naruto-hokage.png",
        age: "33",
        description:
          "Achieves his lifelong dream of becoming the Seventh Hokage, protecting the village and maintaining peace.",
        stats: {
          ninjutsu: 10,
          taijutsu: 9,
          genjutsu: 5,
          intelligence: 8,
          strength: 9,
          speed: 9,
          stamina: 10,
          handSeals: 7,
        },
        abilities: [
          "Six Paths Sage Mode (Mastered)",
          "Baryon Mode (Limited Use)",
          "All Five Nature Transformations",
          "Advanced Sealing Techniques",
          "Mastered Tailed Beast Control",
        ],
        tags: ["Seventh Hokage", "Hero of the Fourth War", "Kyuubi Partner"],
        keyEvents: [
          {
            title: "Hokage Inauguration",
            description: "Officially becomes the Seventh Hokage, fulfilling his childhood dream.",
          },
          {
            title: "Otsutsuki Threats",
            description: "Defends the village against new threats from the Otsutsuki clan and other dimensions.",
          },
          {
            title: "New Generation",
            description:
              "Guides the next generation of shinobi, including his son Boruto and Sasuke's daughter Sarada.",
          },
        ],
      },
    ],
  },
  "sasuke-uchiha": {
    characterId: "sasuke-uchiha",
    characterName: "Sasuke Uchiha",
    stages: [
      {
        name: "Academy Student",
        image: "/images/sasuke-academy.png",
        age: "12",
        description: "A talented academy student, traumatized by the massacre of his clan and focused on revenge.",
        stats: {
          ninjutsu: 3,
          taijutsu: 3,
          genjutsu: 2,
          intelligence: 4,
          strength: 2,
          speed: 3,
          stamina: 2,
          handSeals: 3,
        },
        abilities: ["Fire Release: Great Fireball Technique", "Shuriken Jutsu (Advanced)", "Basic Taijutsu"],
        tags: ["Academy Student", "Uchiha Clan", "Top Student"],
        keyEvents: [
          {
            title: "Uchiha Massacre",
            description:
              "Witnessed the aftermath of his clan's massacre by his brother Itachi, shaping his vengeful path.",
          },
          {
            title: "Graduation",
            description: "Graduates as the top student of his class at the Academy.",
          },
        ],
      },
      {
        name: "Genin",
        image: "/images/sasuke.png",
        age: "12-13",
        description: "A skilled Genin who awakens his Sharingan and begins to develop his own fighting style.",
        stats: {
          ninjutsu: 3,
          taijutsu: 3,
          genjutsu: 3,
          intelligence: 4,
          strength: 3,
          speed: 4,
          stamina: 3,
          handSeals: 4,
        },
        abilities: ["Sharingan (Two Tomoe)", "Fire Release: Dragon Fire Technique", "Lion Combo", "Chidori (Initial)"],
        tags: ["Genin", "Team 7", "Sharingan User"],
        keyEvents: [
          {
            title: "Land of Waves Mission",
            description: "Awakens his Sharingan during the battle with Haku and nearly sacrifices himself for Naruto.",
          },
          {
            title: "Chūnin Exams",
            description: "Receives the Cursed Seal of Heaven from Orochimaru and fights Gaara during the Konoha Crush.",
          },
          {
            title: "Training with Kakashi",
            description: "Learns the Chidori from Kakashi in preparation for the Chūnin Exam finals.",
          },
        ],
      },
      {
        name: "Cursed Seal",
        image: "/images/sasuke-cursed-seal.png",
        age: "13",
        description: "Leaves the village to seek power from Orochimaru, driven by his desire to kill Itachi.",
        stats: {
          ninjutsu: 4,
          taijutsu: 4,
          genjutsu: 3,
          intelligence: 4,
          strength: 4,
          speed: 4,
          stamina: 3,
          handSeals: 4,
        },
        abilities: [
          "Cursed Seal Level 1 & 2",
          "Chidori (Improved)",
          "Sharingan (Three Tomoe)",
          "Enhanced Physical Abilities",
        ],
        tags: ["Missing-nin", "Cursed Seal", "Sound Four"],
        keyEvents: [
          {
            title: "Defection",
            description: "Leaves Konoha to join Orochimaru after being defeated by Itachi again.",
          },
          {
            title: "Valley of the End",
            description:
              "Fights Naruto at the Valley of the End, nearly killing him but sparing his life at the last moment.",
          },
          {
            title: "Sound Four Battle",
            description: "Undergoes a dangerous ritual with the Sound Four to advance his Cursed Seal to Level 2.",
          },
        ],
      },
      {
        name: "Hebi Sasuke",
        image: "/images/sasuke-hebi.png",
        age: "15-16",
        description:
          "After training with Orochimaru for years, Sasuke defeats him and forms Team Hebi to hunt down Itachi.",
        stats: {
          ninjutsu: 5,
          taijutsu: 4,
          genjutsu: 4,
          intelligence: 5,
          strength: 4,
          speed: 5,
          stamina: 4,
          handSeals: 5,
        },
        abilities: [
          "Chidori Stream",
          "Chidori Sharp Spear",
          "Summoning: Snakes",
          "Kirin (Lightning Technique)",
          "Sharingan Genjutsu",
        ],
        tags: ["Team Hebi Leader", "Orochimaru's Student", "Avenger"],
        keyEvents: [
          {
            title: "Defeating Orochimaru",
            description: "Absorbs Orochimaru when he attempts to take over Sasuke's body.",
          },
          {
            title: "Team Formation",
            description: "Forms Team Hebi with Suigetsu, Karin, and Jugo to help track down Itachi.",
          },
          {
            title: "Battle with Deidara",
            description: "Survives a difficult battle with Deidara of the Akatsuki, who ultimately self-destructs.",
          },
        ],
      },
      {
        name: "Mangekyo Sharingan",
        image: "/images/sasuke-mangekyo.png",
        age: "16",
        description:
          "After killing Itachi and learning the truth about the Uchiha massacre, Sasuke awakens his Mangekyo Sharingan and turns against Konoha.",
        stats: {
          ninjutsu: 5,
          taijutsu: 4,
          genjutsu: 5,
          intelligence: 5,
          strength: 4,
          speed: 5,
          stamina: 4,
          handSeals: 5,
        },
        abilities: ["Mangekyo Sharingan", "Amaterasu", "Susanoo (Incomplete)", "Flame Control", "Inferno Style"],
        tags: ["Team Taka Leader", "Akatsuki Affiliate", "Mangekyo User"],
        keyEvents: [
          {
            title: "Battle with Itachi",
            description: "Fights and seemingly defeats Itachi, who dies from illness after the battle.",
          },
          {
            title: "Truth Revealed",
            description:
              "Learns from Tobi that Itachi was ordered to kill the Uchiha clan and was actually protecting Sasuke.",
          },
          {
            title: "Five Kage Summit",
            description: "Attacks the Five Kage Summit and declares war on the shinobi world.",
          },
        ],
      },
      {
        name: "Eternal Mangekyo",
        image: "/images/sasuke-eternal-mangekyo.png",
        age: "16-17",
        description:
          "Implants Itachi's eyes to gain the Eternal Mangekyo Sharingan, preventing blindness and increasing his power.",
        stats: {
          ninjutsu: 6,
          taijutsu: 5,
          genjutsu: 7,
          intelligence: 6,
          strength: 5,
          speed: 6,
          stamina: 5,
          handSeals: 6,
        },
        abilities: [
          "Eternal Mangekyo Sharingan",
          "Perfect Susanoo (Developing)",
          "Enhanced Amaterasu",
          "Blaze Release: Kagutsuchi",
          "Improved Genjutsu",
        ],
        tags: ["Rogue Ninja", "Eternal Mangekyo User", "Uchiha Avenger"],
        keyEvents: [
          {
            title: "Eye Transplant",
            description: "Receives Itachi's eyes from Tobi and recovers from the transplant surgery.",
          },
          {
            title: "Reanimated Itachi",
            description: "Encounters the reanimated Itachi and fights alongside him against Kabuto.",
          },
          {
            title: "Decision to Protect",
            description: "After speaking with the reanimated Hokage, decides to protect Konoha rather than destroy it.",
          },
        ],
      },
      {
        name: "Rinnegan",
        image: "/images/sasuke-rinnegan.png",
        age: "17",
        description: "Receives the Six Paths Chakra from Hagoromo Otsutsuki and awakens the Rinnegan in his left eye.",
        stats: {
          ninjutsu: 9,
          taijutsu: 8,
          genjutsu: 9,
          intelligence: 8,
          strength: 7,
          speed: 9,
          stamina: 8,
          handSeals: 8,
        },
        abilities: [
          "Rinnegan (Left Eye)",
          "Amenotejikara (Teleportation)",
          "Perfect Susanoo",
          "Six Paths Chidori",
          "Chibaku Tensei",
        ],
        tags: ["Six Paths Power", "Rinnegan User", "Allied Forces"],
        keyEvents: [
          {
            title: "Battle against Madara",
            description: "Fights alongside Naruto against Madara Uchiha with his new Rinnegan powers.",
          },
          {
            title: "Sealing Kaguya",
            description: "Uses his Rinnegan to help seal away Kaguya Otsutsuki with Naruto and Sakura.",
          },
          {
            title: "Final Battle with Naruto",
            description: "Fights Naruto at the Valley of the End, ultimately losing and accepting Naruto's vision.",
          },
        ],
      },
      {
        name: "Shadow Hokage",
        image: "/images/sasuke-adult.png",
        age: "33",
        description:
          "Works from the shadows to protect the village as Naruto's right-hand man and the 'Shadow Hokage'.",
        stats: {
          ninjutsu: 10,
          taijutsu: 9,
          genjutsu: 10,
          intelligence: 9,
          strength: 8,
          speed: 9,
          stamina: 8,
          handSeals: 9,
        },
        abilities: [
          "Mastered Rinnegan",
          "Space-Time Ninjutsu",
          "Perfect Susanoo (Complete)",
          "All Five Nature Transformations",
          "Advanced Dojutsu Techniques",
        ],
        tags: ["Shadow Hokage", "Konoha Supporter", "Dimension Traveler"],
        keyEvents: [
          {
            title: "Redemption Journey",
            description: "Travels the world to atone for his sins and investigate threats to the shinobi world.",
          },
          {
            title: "Otsutsuki Threats",
            description: "Investigates and combats the emerging threat of the Otsutsuki clan across dimensions.",
          },
          {
            title: "Mentoring Boruto",
            description: "Takes Naruto's son Boruto as his student, passing on his knowledge and skills.",
          },
        ],
      },
    ],
  },
  "sakura-haruno": {
    characterId: "sakura-haruno",
    characterName: "Sakura Haruno",
    stages: [
      {
        name: "Academy Student",
        image: "/images/sakura.png",
        age: "12",
        description: "A book-smart student with a crush on Sasuke Uchiha and a rivalry with Ino Yamanaka.",
        stats: {
          ninjutsu: 2,
          taijutsu: 1,
          genjutsu: 3,
          intelligence: 4,
          strength: 1,
          speed: 2,
          stamina: 1,
          handSeals: 3,
        },
        abilities: ["Basic Academy Jutsu", "Chakra Control"],
        tags: ["Academy Student", "Fangirl", "Ino's Friend"],
        keyEvents: [
          {
            title: "Friendship with Ino",
            description: "Was initially friends with Ino Yamanaka, who helped her gain confidence.",
          },
          {
            title: "Rivalry with Ino",
            description: "Ended her friendship with Ino to pursue Sasuke, beginning their rivalry.",
          },
          {
            title: "Graduated from Academy",
            description: "Graduated from the Academy with high academic scores but low practical skills.",
          },
        ],
      },
      {
        name: "Genin",
        image: "/images/sakura.png",
        age: "12-13",
        description: "A newly appointed Genin who begins to develop her chakra control and genjutsu resistance.",
        stats: {
          ninjutsu: 2,
          taijutsu: 1,
          genjutsu: 3,
          intelligence: 4,
          strength: 1,
          speed: 2,
          stamina: 1,
          handSeals: 3,
        },
        abilities: ["Tree Walking Technique", "Genjutsu Resistance"],
        tags: ["Genin", "Team 7", "Chakra Control"],
        keyEvents: [
          {
            title: "Land of Waves Mission",
            description: "Participated in the mission to escort Tazuna to the Land of Waves.",
          },
          {
            title: "Protected Tazuna",
            description: "Stayed behind to protect Tazuna during the battle on the bridge.",
          },
          {
            title: "Witnessed Sasuke's 'Death'",
            description: "Emotionally affected by Sasuke's apparent death during the battle against Haku.",
          },
        ],
      },
      {
        name: "Chūnin Exams",
        image: "/images/sakura.png",
        age: "12-13",
        description: "Participating in the Chūnin Exams, where she begins to show growth in courage and determination.",
        stats: {
          ninjutsu: 2,
          taijutsu: 2,
          genjutsu: 3,
          intelligence: 4,
          strength: 1,
          speed: 2,
          stamina: 2,
          handSeals: 3,
        },
        abilities: ["Water Walking Technique", "Basic Trap Setting"],
        tags: ["Genin", "Team 7", "Courage"],
        keyEvents: [
          {
            title: "Forest of Death",
            description: "Protected Naruto and Sasuke when they were incapacitated during the attack by Orochimaru.",
          },
          {
            title: "Cut Her Hair",
            description: "Cut her long hair to free herself from the Sound ninja's grip, symbolizing her growth.",
          },
          {
            title: "Fought Sound Ninja",
            description: "Stood up against the Sound ninja to protect her teammates, showing her developing courage.",
          },
          {
            title: "Draw with Ino",
            description:
              "Fought to a draw with Ino Yamanaka in the preliminary rounds, ending their match in mutual knockout.",
          },
        ],
      },
      {
        name: "Medical Training",
        image: "/images/sakura.png",
        age: "13-15",
        description:
          "After Sasuke's defection, Sakura resolves to become stronger and begins medical training under Tsunade.",
        stats: {
          ninjutsu: 3,
          taijutsu: 2,
          genjutsu: 3,
          intelligence: 5,
          strength: 2,
          speed: 2,
          stamina: 2,
          handSeals: 4,
        },
        abilities: ["Basic Medical Ninjutsu", "Poison Extraction", "Enhanced Chakra Control"],
        tags: ["Medical Ninja", "Tsunade's Student", "Determination"],
        keyEvents: [
          {
            title: "Sasuke's Departure",
            description: "Failed to stop Sasuke from leaving the village despite her emotional plea.",
          },
          {
            title: "Request to Tsunade",
            description: "Asked Tsunade to take her as an apprentice to become a medical ninja.",
          },
          {
            title: "Promise from Naruto",
            description: "Received a promise from Naruto that he would bring Sasuke back to the village.",
          },
        ],
      },
      {
        name: "Post-Training",
        image: "/images/sakura-shippuden.png",
        age: "15-16",
        description:
          "Returns to the village after training with Tsunade for 2.5 years, with improved medical skills and strength.",
        stats: {
          ninjutsu: 4,
          taijutsu: 3,
          genjutsu: 4,
          intelligence: 6,
          strength: 5,
          speed: 4,
          stamina: 4,
          handSeals: 5,
        },
        abilities: ["Healing Jutsu (Advanced)", "Chakra Enhanced Strength", "Mitotic Regeneration", "Poison Creation"],
        tags: ["Medical Ninja", "Team 7", "Strength"],
        keyEvents: [
          {
            title: "Rescue Gaara Arc",
            description: "Fights Sasori of the Akatsuki alongside Chiyo, showcasing her medical skills and strength.",
          },
          {
            title: "Sasori's Poison",
            description: "Successfully creates an antidote to Sasori's poison, saving Kankuro's life.",
          },
          {
            title: "Reunion with Sasuke",
            description: "Briefly reunites with Sasuke, realizing the extent of his darkness and power.",
          },
        ],
      },
      {
        name: "Fourth Great War",
        image: "/images/sakura-war.png",
        age: "16-17",
        description:
          "Joins the Allied Shinobi Forces as a medical ninja, providing crucial support and healing to her comrades.",
        stats: {
          ninjutsu: 5,
          taijutsu: 4,
          genjutsu: 5,
          intelligence: 7,
          strength: 6,
          speed: 5,
          stamina: 5,
          handSeals: 6,
        },
        abilities: ["Byakugo Seal", "Creation Rebirth", "Medical Ninjutsu (Mastered)", "Summoning: Katsuyu"],
        tags: ["Medical Ninja", "Byakugo User", "Allied Forces"],
        keyEvents: [
          {
            title: "Byakugo Seal",
            description: "Unlocks the Byakugo Seal, storing chakra over time to unleash powerful healing and strength.",
          },
          {
            title: "Healing Comrades",
            description: "Provides crucial medical support to the Allied Shinobi Forces, saving countless lives.",
          },
          {
            title: "Summoning Katsuyu",
            description: "Summons Katsuyu to aid in healing and communication across the battlefield.",
          },
        ],
      },
      {
        name: "Six Paths Power",
        image: "/images/sakura-six-paths.png",
        age: "17",
        description:
          "Receives a small amount of Six Paths Chakra from Naruto, enhancing her abilities and allowing her to fight alongside him and Sasuke.",
        stats: {
          ninjutsu: 6,
          taijutsu: 5,
          genjutsu: 6,
          intelligence: 8,
          strength: 7,
          speed: 6,
          stamina: 6,
          handSeals: 7,
        },
        abilities: [
          "Six Paths Chakra Enhanced Strength",
          "Universal Healing",
          "Medical Ninjutsu (God Level)",
          "Chakra Transfer",
        ],
        tags: ["Medical Ninja", "Six Paths Power", "Team 7"],
        keyEvents: [
          {
            title: "Battle against Madara",
            description: "Fights alongside Naruto and Sasuke against Madara Uchiha, providing crucial support.",
          },
          {
            title: "Sealing Kaguya",
            description: "Helps Naruto and Sasuke seal away Kaguya Otsutsuki by delivering a powerful punch.",
          },
          {
            title: "Healing Naruto and Sasuke",
            description: "Provides medical aid to Naruto and Sasuke after their final battle at the Valley of the End.",
          },
        ],
      },
      {
        name: "Adult Sakura",
        image: "/images/sakura-adult.png",
        age: "33",
        description:
          "A respected medical ninja and mother, Sakura continues to protect the village and support her family.",
        stats: {
          ninjutsu: 7,
          taijutsu: 6,
          genjutsu: 7,
          intelligence: 9,
          strength: 8,
          speed: 7,
          stamina: 7,
          handSeals: 8,
        },
        abilities: [
          "Medical Ninjutsu (Perfected)",
          "Chakra Enhanced Strength (Mastered)",
          "Intelligence Gathering",
          "Family Support",
        ],
        tags: ["Medical Ninja", "Mother", "Konoha Supporter"],
        keyEvents: [
          {
            title: "Sarada's Birth",
            description: "Gives birth to Sarada Uchiha, her daughter with Sasuke.",
          },
          {
            title: "Supporting Sarada",
            description: "Supports Sarada in her journey to become a strong shinobi and understand her father.",
          },
          {
            title: "Protecting the Village",
            description: "Continues to protect the village from threats, both internal and external.",
          },
        ],
      },
    ],
  },
}

// Add more character progressions as needed
