export const CHARACTERS = [
  {
    id: 1,
    name: "Naruto Uzumaki",
    role: "Seventh Hokage",
    village: "Hidden Leaf",
    description:
      "The hyperactive, unpredictable ninja who dreams of becoming Hokage. Host of the Nine-Tailed Fox and master of the Shadow Clone Technique.",
    imageSrc: "/images/naruto.png",
    color: "#FF7800",
    jutsu: ["Rasengan", "Shadow Clone Jutsu", "Sage Mode", "Talk no Jutsu", "Tailed Beast Mode"],
    slug: "naruto-uzumaki",
    background: [
      "Naruto Uzumaki was born on October 10th to the Fourth Hokage, Minato Namikaze, and the Nine-Tails' jinchūriki, Kushina Uzumaki. He was named after the protagonist of Jiraiya's first book, which made the Sannin his godfather.",
      "The night of Naruto's birth, a masked man who claimed to be Madara Uchiha took control of the Nine-Tails and used it to attack Konoha. To save the village, Minato sealed the Nine-Tails into Naruto's body, believing his son would someday need the fox's power to defeat the masked man.",
      "Orphaned, Naruto grew up shunned by the villagers, who viewed him as the Nine-Tails itself. This prejudice caused Naruto to seek acknowledgement through pranks and misbehavior. However, he was shown compassion by his academy teacher Iruka Umino, who became a surrogate family figure to him.",
    ],
    personality: [
      "Naruto is characterized by his hyperactive, exuberant, and sometimes naive personality. He inherited his mother's verbal tic, ending sentences with 'dattebayo' (or 'believe it' in the English dub).",
      "His most remarkable trait is his determination and unwavering will. Naruto never gives up, no matter how difficult the challenge, embodying his 'ninja way'. This persistence has allowed him to overcome seemingly impossible obstacles and change the hearts of many former enemies.",
      "Despite his difficult childhood, Naruto maintains an optimistic outlook and a deep capacity for forgiveness. His ability to understand others' pain and his desire to end the cycle of hatred became his greatest strength as he matured.",
    ],
    stats: [
      { name: "Strength", value: 9, icon: "strength" },
      { name: "Intelligence", value: 6, icon: "intelligence" },
      { name: "Speed", value: 8, icon: "speed" },
      { name: "Stamina", value: 10, icon: "stamina" },
      { name: "Chakra Control", value: 7, icon: "chakra" },
    ],
    quickFacts: [
      { label: "Birthday", value: "October 10" },
      { label: "Age", value: "33 (Boruto Era)" },
      { label: "Height", value: "180 cm" },
      { label: "Ninja Rank", value: "Hokage (Former Genin)" },
      { label: "Tailed Beast", value: "Kurama (Nine-Tails)" },
    ],
    jutsuDetails: [
      {
        name: "Rasengan",
        description:
          "A spinning ball of chakra that causes massive internal damage to targets. Created by the Fourth Hokage and passed down to Naruto by Jiraiya.",
        type: "Offensive",
        rank: "A-Rank",
        chakraNature: "None",
      },
      {
        name: "Shadow Clone Jutsu",
        description:
          "Creates solid copies of the user that can think and act independently. Naruto's signature technique that he uses to overwhelm opponents.",
        type: "Supplementary",
        rank: "B-Rank",
        chakraNature: "None",
      },
      {
        name: "Sage Mode",
        description:
          "A heightened state where the user balances their own chakra with natural energy to greatly enhance physical abilities and sensory perception.",
        type: "Supplementary",
        rank: "S-Rank",
        chakraNature: "Senjutsu",
      },
      {
        name: "Rasenshuriken",
        description:
          "An advanced form of the Rasengan that adds wind-nature transformation, creating a shuriken-like shape that slices at a cellular level.",
        type: "Offensive",
        rank: "S-Rank",
        chakraNature: "Wind",
      },
      {
        name: "Tailed Beast Mode",
        description:
          "A transformation that allows Naruto to manifest Kurama's chakra as a glowing avatar, granting immense power and abilities.",
        type: "Transformation",
        rank: "S-Rank",
        chakraNature: "Tailed Beast",
      },
    ],
    relationships: [
      {
        name: "Sasuke Uchiha",
        relationship: "Best Friend/Rival",
        description:
          "Naruto's closest friend and greatest rival. Their bond has defined both their lives, with Naruto never giving up on bringing Sasuke back to the village.",
        imageSrc: "/images/sasuke.png",
      },
      {
        name: "Hinata Hyuga",
        relationship: "Wife",
        description:
          "Hinata admired Naruto from childhood for his determination. Her unwavering love and support eventually led to their marriage and two children.",
        imageSrc: "/images/hinata.png",
      },
      {
        name: "Kakashi Hatake",
        relationship: "Teacher/Mentor",
        description:
          "As the leader of Team 7, Kakashi guided Naruto's development as a ninja and later passed the title of Hokage to him.",
        imageSrc: "/images/kakashi.png",
      },
      {
        name: "Jiraiya",
        relationship: "Mentor/Godfather",
        description:
          "One of the Legendary Sannin who took Naruto under his wing, teaching him many techniques including the Rasengan and Sage Mode.",
        imageSrc: "/images/jiraiya.png",
      },
    ],
    timeline: [
      {
        year: "Pre-Series",
        title: "Birth & Nine-Tails Attack",
        description:
          "Born to Minato Namikaze and Kushina Uzumaki. The Nine-Tails was sealed within him after attacking the village.",
      },
      {
        year: "Part I",
        title: "Graduation & Team 7",
        description:
          "Graduates from the Academy after learning Shadow Clone Jutsu. Joins Team 7 with Sasuke, Sakura, and Kakashi.",
      },
      {
        year: "Part I",
        title: "Chunin Exams",
        description:
          "Participates in the Chunin Exams, defeats Neji Hyuga, and confronts Gaara, changing the Sand ninja's outlook on life.",
      },
      {
        year: "Part I",
        title: "Sasuke Retrieval",
        description:
          "Fails to stop Sasuke from leaving the village to join Orochimaru, vowing to bring him back someday.",
      },
      {
        year: "Part II",
        title: "Sage Training",
        description: "After Jiraiya's death, trains at Mount Myoboku to master Sage Mode to confront Pain.",
      },
      {
        year: "Part II",
        title: "Fourth Great Ninja War",
        description:
          "Plays a crucial role in the war, masters Kurama's power, and ultimately defeats Madara and Kaguya with Sasuke.",
      },
      {
        year: "Post-War",
        title: "Becomes Hokage",
        description: "Achieves his lifelong dream of becoming the Seventh Hokage of the Hidden Leaf Village.",
      },
    ],
    backgroundImage: "/images/naruto-uzumaki-bg.png",
    tags: ["Hokage", "Rasengan", "Sage Mode"],
    bio: "Naruto Uzumaki is the main protagonist of the Naruto series. He is a ninja from Konohagakure and the jinchuriki of the Nine-Tails. He dreams of becoming Hokage.",
    personality: "Naruto is hyperactive, exuberant, and sometimes naive. He is also determined and never gives up.",
    achievements: ["Defeated Pain", "Mastered Sage Mode", "Became the Seventh Hokage"],
    stats: {
      strength: 9,
      intelligence: 6,
      speed: 8,
      stamina: 10,
      chakraControl: 7,
    },
    personalDetails: {
      age: "33",
      birthday: "October 10",
      height: "180 cm",
      weight: "77 kg",
      bloodType: "B",
      rank: "Hokage",
      affiliation: "Konohagakure",
    },
    relationships: [
      {
        name: "Sasuke Uchiha",
        relationship: "Best Friend/Rival",
        description:
          "Naruto's closest friend and greatest rival. Their bond has defined both their lives, with Naruto never giving up on bringing Sasuke back to the village.",
        imageSrc: "/images/sasuke.png",
      },
      {
        name: "Hinata Hyuga",
        relationship: "Wife",
        description:
          "Hinata admired Naruto from childhood for his determination. Her unwavering love and support eventually led to their marriage and two children.",
        imageSrc: "/images/hinata.png",
      },
      {
        name: "Kakashi Hatake",
        relationship: "Teacher/Mentor",
        description:
          "As the leader of Team 7, Kakashi guided Naruto's development as a ninja and later passed the title of Hokage to him.",
        imageSrc: "/images/kakashi.png",
      },
      {
        name: "Jiraiya",
        relationship: "Mentor/Godfather",
        description:
          "One of the Legendary Sannin who took Naruto under his wing, teaching him many techniques including the Rasengan and Sage Mode.",
        imageSrc: "/images/jiraiya.png",
      },
    ],
    jutsu: [
      {
        name: "Rasengan",
        description:
          "A spinning ball of chakra that causes massive internal damage to targets. Created by the Fourth Hokage and passed down to Naruto by Jiraiya.",
        type: "Offensive",
        rank: "A-Rank",
        chakraNature: "None",
      },
      {
        name: "Shadow Clone Jutsu",
        description:
          "Creates solid copies of the user that can think and act independently. Naruto's signature technique that he uses to overwhelm opponents.",
        type: "Supplementary",
        rank: "B-Rank",
        chakraNature: "None",
      },
      {
        name: "Sage Mode",
        description:
          "A heightened state where the user balances their own chakra with natural energy to greatly enhance physical abilities and sensory perception.",
        type: "Supplementary",
        rank: "S-Rank",
        chakraNature: "Senjutsu",
      },
      {
        name: "Rasenshuriken",
        description:
          "An advanced form of the Rasengan that adds wind-nature transformation, creating a shuriken-like shape that slices at a cellular level.",
        type: "Offensive",
        rank: "S-Rank",
        chakraNature: "Wind",
      },
      {
        name: "Tailed Beast Mode",
        description:
          "A transformation that allows Naruto to manifest Kurama's chakra as a glowing avatar, granting immense power and abilities.",
        type: "Transformation",
        rank: "S-Rank",
        chakraNature: "Tailed Beast",
      },
    ],
  },
  {
    id: 2,
    name: "Sasuke Uchiha",
    role: "Shadow Hokage",
    village: "Hidden Leaf",
    description:
      "The last surviving member of the Uchiha clan, seeking power to avenge his family. Possesses the Sharingan and later the Rinnegan.",
    imageSrc: "/images/sasuke.png",
    color: "#3D5AFE",
    jutsu: ["Chidori", "Amaterasu", "Susanoo", "Kirin", "Rinnegan Abilities"],
    slug: "sasuke-uchiha",
    background: [
      "Sasuke Uchiha was born as the second son of Fugaku and Mikoto Uchiha, the head family of the Uchiha clan. As a child, Sasuke lived in the shadow of his older brother Itachi, a prodigy who was already rising through the ninja ranks at a young age.",
      "His life changed dramatically when Itachi massacred the entire Uchiha clan, sparing only Sasuke. Before leaving the village, Itachi told Sasuke to hate him, to grow stronger, and to seek revenge. This traumatic event shaped Sasuke's character and goals, as he dedicated his life to killing Itachi and restoring his clan.",
      "After graduating from the Academy, Sasuke was placed on Team 7 alongside Naruto Uzumaki and Sakura Haruno, under the leadership of Kakashi Hatake. Despite initially viewing his teammates as hindrances to his goal, he gradually formed bonds with them, especially with Naruto, who became both his closest friend and greatest rival.",
    ],
    personality: [
      "Sasuke is characterized by his cool, reserved, and sometimes arrogant demeanor. He rarely displays emotion and maintains a calm, calculating approach to most situations. His single-minded focus on his goals often leads him to push others away.",
      "After the Uchiha massacre, Sasuke's personality became dominated by his desire for revenge. This obsession led him to seek power at any cost, eventually abandoning the village to train under Orochimaru. His pursuit of vengeance caused him to reject bonds and connections, viewing them as distractions.",
      "Following the Fourth Great Ninja War and his final battle with Naruto, Sasuke underwent a significant change in perspective. While still stoic and independent, he came to value the bonds he had formed and dedicated himself to protecting the village from the shadows, becoming what many call the 'Shadow Hokage.'",
    ],
    stats: [
      { name: "Strength", value: 8, icon: "strength" },
      { name: "Intelligence", value: 9, icon: "intelligence" },
      { name: "Speed", value: 9, icon: "speed" },
      { name: "Stamina", value: 7, icon: "stamina" },
      { name: "Chakra Control", value: 9, icon: "chakra" },
    ],
    quickFacts: [
      { label: "Birthday", value: "July 23" },
      { label: "Age", value: "33 (Boruto Era)" },
      { label: "Height", value: "182 cm" },
      { label: "Ninja Rank", value: "Genin (Technically)" },
      { label: "Kekkei Genkai", value: "Sharingan, Rinnegan" },
    ],
    jutsuDetails: [
      {
        name: "Chidori",
        description:
          "A lightning-based attack that concentrates a high amount of lightning chakra in the hand. Taught to Sasuke by Kakashi Hatake.",
        type: "Offensive",
        rank: "A-Rank",
        chakraNature: "Lightning",
      },
      {
        name: "Amaterasu",
        description:
          "Black flames that burn anything they touch and cannot be extinguished by normal means. Activated through Sasuke's Mangekyo Sharingan.",
        type: "Offensive",
        rank: "S-Rank",
        chakraNature: "Fire (Blaze)",
      },
      {
        name: "Susanoo",
        description:
          "A gigantic, humanoid avatar made of chakra that surrounds the user and fights on their behalf. Sasuke's is purple and wields a bow.",
        type: "Defensive/Offensive",
        rank: "S-Rank",
        chakraNature: "None",
      },
      {
        name: "Kirin",
        description:
          "A technique that uses natural lightning guided by Sasuke's chakra to strike with devastating power and speed.",
        type: "Offensive",
        rank: "S-Rank",
        chakraNature: "Lightning",
      },
      {
        name: "Amenotejikara",
        description:
          "A space-time ninjutsu granted by Sasuke's Rinnegan that allows him to instantly swap places with any object within a certain range.",
        type: "Supplementary",
        rank: "S-Rank",
        chakraNature: "None",
      },
    ],
    relationships: [
      {
        name: "Naruto Uzumaki",
        relationship: "Best Friend/Rival",
        description:
          "Sasuke's most significant relationship. Their rivalry pushed both to become stronger, and Naruto's refusal to give up on him ultimately led to Sasuke's redemption.",
        imageSrc: "/images/naruto.png",
      },
      {
        name: "Sakura Haruno",
        relationship: "Wife",
        description:
          "Initially one of Sasuke's many admirers, Sakura's genuine love persisted despite his dark path. They eventually married and had a daughter, Sarada.",
        imageSrc: "/images/sakura.png",
      },
      {
        name: "Itachi Uchiha",
        relationship: "Brother",
        description:
          "Sasuke's older brother who massacred their clan to prevent a coup. Sasuke later learned Itachi had always loved him and acted to protect the village.",
        imageSrc: "/images/itachi.png",
      },
      {
        name: "Kakashi Hatake",
        relationship: "Teacher/Mentor",
        description:
          "Team 7's leader who taught Sasuke the Chidori. Despite Sasuke's defection, Kakashi never gave up on him and welcomed him back to the village.",
        imageSrc: "/images/kakashi.png",
      },
    ],
    timeline: [
      {
        year: "Pre-Series",
        title: "Uchiha Massacre",
        description:
          "Sasuke's entire clan is killed by his brother Itachi, who spares only him and encourages him to seek revenge.",
      },
      {
        year: "Part I",
        title: "Team 7 Formation",
        description: "Graduates as the top student and joins Team 7 with Naruto, Sakura, and Kakashi.",
      },
      {
        year: "Part I",
        title: "Chunin Exams & Curse Mark",
        description:
          "Receives Orochimaru's Curse Mark during the Chunin Exams, which begins to influence his desire for power.",
      },
      {
        year: "Part I",
        title: "Defection from Konoha",
        description: "Leaves the village to seek power from Orochimaru, fighting Naruto at the Valley of the End.",
      },
      {
        year: "Part II",
        title: "Defeat of Orochimaru & Itachi",
        description:
          "Absorbs Orochimaru and finally confronts and kills Itachi, only to learn the truth about the Uchiha massacre.",
      },
      {
        year: "Part II",
        title: "Formation of Team Hebi/Taka",
        description:
          "Forms his own team to hunt down Itachi, later redirecting their goal to destroy Konoha after learning the truth.",
      },
      {
        year: "Part II",
        title: "Fourth Great Ninja War",
        description:
          "Eventually joins the Allied Shinobi Forces, fights alongside Naruto against Madara and Kaguya, and has a final battle with Naruto.",
      },
      {
        year: "Post-War",
        title: "Redemption Journey",
        description:
          "Embarks on a journey of redemption, occasionally returning to the village and eventually marrying Sakura.",
      },
    ],
    backgroundImage: "/images/sasuke-uchiha-bg.png",
    tags: ["Avenger", "Sharingan", "Rinnegan"],
    bio: "Sasuke Uchiha is one of the main characters in the Naruto series. He is a ninja from Konohagakure and the last surviving member of the Uchiha clan. He seeks power to avenge his family.",
    personality: "Sasuke is cool, reserved, and sometimes arrogant. He is driven by his desire for revenge.",
    achievements: ["Defeated Orochimaru", "Killed Itachi Uchiha", "Awakened the Rinnegan"],
    stats: {
      strength: 8,
      intelligence: 9,
      speed: 9,
      stamina: 7,
      chakraControl: 9,
    },
    personalDetails: {
      age: "33",
      birthday: "July 23",
      height: "182 cm",
      weight: "67 kg",
      bloodType: "AB",
      rank: "Genin",
      affiliation: "Konohagakure",
    },
    jutsu: [
      {
        name: "Chidori",
        description:
          "A lightning-based attack that concentrates a high amount of lightning chakra in the hand. Created by Kakashi and later taught to Sasuke.",
        type: "Offensive",
        rank: "A-Rank",
        chakraNature: "Lightning",
      },
      {
        name: "Amaterasu",
        description:
          "Black flames that burn anything they touch and cannot be extinguished by normal means. Activated through Sasuke's Mangekyo Sharingan.",
        type: "Offensive",
        rank: "S-Rank",
        chakraNature: "Fire (Blaze)",
      },
      {
        name: "Susanoo",
        description:
          "A gigantic, humanoid avatar made of chakra that surrounds the user and fights on their behalf. Sasuke's is purple and wields a bow.",
        type: "Defensive/Offensive",
        rank: "S-Rank",
        chakraNature: "None",
      },
      {
        name: "Kirin",
        description:
          "A technique that uses natural lightning guided by Sasuke's chakra to strike with devastating power and speed.",
        type: "Offensive",
        rank: "S-Rank",
        chakraNature: "Lightning",
      },
      {
        name: "Amenotejikara",
        description:
          "A space-time ninjutsu granted by Sasuke's Rinnegan that allows him to instantly swap places with any object within a certain range.",
        type: "Supplementary",
        rank: "S-Rank",
        chakraNature: "None",
      },
    ],
    relationships: [
      {
        name: "Naruto Uzumaki",
        relationship: "Best Friend/Rival",
        description:
          "Sasuke's most significant relationship. Their rivalry pushed both to become stronger, and Naruto's refusal to give up on him ultimately led to Sasuke's redemption.",
        imageSrc: "/images/naruto.png",
      },
      {
        name: "Sakura Haruno",
        relationship: "Wife",
        description:
          "Initially one of Sasuke's many admirers, Sakura's genuine love persisted despite his dark path. They eventually married and had a daughter, Sarada.",
        imageSrc: "/images/sakura.png",
      },
      {
        name: "Itachi Uchiha",
        relationship: "Brother",
        description:
          "Sasuke's older brother who massacred their clan to prevent a coup. Sasuke later learned Itachi had always loved him and acted to protect the village.",
        imageSrc: "/images/itachi.png",
      },
      {
        name: "Kakashi Hatake",
        relationship: "Teacher/Mentor",
        description:
          "Team 7's leader who taught Sasuke the Chidori. Despite Sasuke's defection, Kakashi never gave up on him and welcomed him back to the village.",
        imageSrc: "/images/kakashi.png",
      },
    ],
  },
  {
    id: 3,
    name: "Sakura Haruno",
    role: "Medical Ninja",
    village: "Hidden Leaf",
    description:
      "A kunoichi with exceptional chakra control and medical ninjutsu skills. Trained by Tsunade to become one of the strongest medical ninjas.",
    imageSrc: "/images/sakura.png",
    color: "#F06292",
    jutsu: ["Chakra Enhanced Strength", "Healing Jutsu", "Summoning: Katsuyu", "Byakugō Seal", "Cherry Blossom Impact"],
    slug: "sakura-haruno",
    background: [
      "Sakura Haruno was born to civilian parents in the Hidden Leaf Village. Unlike many of her peers, she did not come from a prestigious clan or possess any special bloodline traits. She entered the Academy as a normal student with no exceptional abilities.",
      "During her early Academy days, Sakura was often bullied for her large forehead. She was befriended by Ino Yamanaka, who helped her gain confidence. Their friendship later turned into a rivalry when both developed feelings for Sasuke Uchiha.",
      "After graduating from the Academy, Sakura was placed on Team 7 with Naruto Uzumaki and Sasuke Uchiha, under the leadership of Kakashi Hatake. Initially, she was primarily focused on gaining Sasuke's attention and was often dismissive of Naruto.",
    ],
    personality: [
      "In her early years, Sakura was characterized by her crush on Sasuke and her annoyance with Naruto. She was often vain about her appearance and concerned with how others perceived her, particularly Sasuke.",
      "After Sasuke's defection from the village, Sakura underwent significant character development. Determined not to be a burden to her teammates, she sought training from the Fifth Hokage, Tsunade, becoming more confident, mature, and focused on her goals as a medical ninja.",
      "As an adult, Sakura is known for her compassionate nature, fierce loyalty to her friends, and incredible strength—both physical and emotional. She balances her roles as the head of the Konoha Hospital, a combat medic, a wife to Sasuke, and a mother to their daughter Sarada.",
    ],
    stats: [
      { name: "Strength", value: 10, icon: "strength" },
      { name: "Intelligence", value: 9, icon: "intelligence" },
      { name: "Speed", value: 7, icon: "speed" },
      { name: "Stamina", value: 7, icon: "stamina" },
      { name: "Chakra Control", value: 10, icon: "chakra" },
    ],
    quickFacts: [
      { label: "Birthday", value: "March 28" },
      { label: "Age", value: "33 (Boruto Era)" },
      { label: "Height", value: "165 cm" },
      { label: "Ninja Rank", value: "Jonin" },
      { label: "Specialty", value: "Medical Ninjutsu" },
    ],
    jutsuDetails: [
      {
        name: "Chakra Enhanced Strength",
        description:
          "Concentrates chakra in the fists or feet and releases it on impact, creating devastating force that can shatter the ground or crush boulders.",
        type: "Offensive",
        rank: "B-Rank",
        chakraNature: "None",
      },
      {
        name: "Mystical Palm Technique",
        description:
          "A medical ninjutsu that accelerates the body's natural healing process by sending chakra from the hands into a wound.",
        type: "Supplementary",
        rank: "A-Rank",
        chakraNature: "None",
      },
      {
        name: "Summoning: Katsuyu",
        description:
          "Summons the slug Katsuyu, who can divide into smaller slugs to heal multiple people simultaneously over a wide area.",
        type: "Supplementary",
        rank: "B-Rank",
        chakraNature: "None",
      },
      {
        name: "Strength of a Hundred Seal",
        description:
          "A seal on Sakura's forehead that stores vast amounts of chakra over time, which can be released for various purposes including healing and combat.",
        type: "Supplementary",
        rank: "S-Rank",
        chakraNature: "None",
      },
      {
        name: "Cherry Blossom Impact",
        description:
          "A powerful punch that releases chakra on impact, causing widespread destruction. Named for the pink cherry blossom-like debris created.",
        type: "Offensive",
        rank: "A-Rank",
        chakraNature: "None",
      },
    ],
    relationships: [
      {
        name: "Sasuke Uchiha",
        relationship: "Husband",
        description:
          "Sakura's childhood crush who eventually became her husband. Despite his long absences, their bond remains strong, and they have a daughter named Sarada.",
        imageSrc: "/images/sasuke.png",
      },
      {
        name: "Naruto Uzumaki",
        relationship: "Teammate/Friend",
        description:
          "Initially annoyed by Naruto, Sakura grew to respect his determination and kindness. They became close friends who trust each other completely.",
        imageSrc: "/images/naruto.png",
      },
      {
        name: "Tsunade",
        relationship: "Mentor",
        description:
          "The Fifth Hokage who took Sakura as her apprentice, teaching her medical ninjutsu and her legendary strength technique.",
        imageSrc: "/images/tsunade.png",
      },
      {
        name: "Ino Yamanaka",
        relationship: "Best Friend/Rival",
        description:
          "Sakura's first friend who helped her overcome her insecurities. Their friendship endured despite their rivalry over Sasuke.",
        imageSrc: "/images/ino.png",
      },
    ],
    timeline: [
      {
        year: "Pre-Series",
        title: "Academy Days",
        description:
          "Befriended by Ino Yamanaka, who helps her gain confidence. Their friendship later turns into a rivalry over Sasuke.",
      },
      {
        year: "Part I",
        title: "Team 7 Formation",
        description: "Graduates from the Academy and joins Team 7 with Naruto, Sasuke, and Kakashi.",
      },
      {
        year: "Part I",
        title: "Chunin Exams",
        description:
          "Shows her first signs of growth during the Forest of Death, cutting her hair and fighting to protect her teammates.",
      },
      {
        year: "Part I",
        title: "Sasuke's Departure",
        description:
          "Fails to stop Sasuke from leaving the village, prompting her to seek training from Tsunade to become stronger.",
      },
      {
        year: "Part II",
        title: "Defeat of Sasori",
        description: "Demonstrates her growth by defeating the Akatsuki member Sasori with the help of Lady Chiyo.",
      },
      {
        year: "Part II",
        title: "Fourth Great Ninja War",
        description:
          "Serves as a combat medic and reveals her mastery of the Strength of a Hundred Seal, fighting alongside Naruto and Sasuke against Madara and Kaguya.",
      },
      {
        year: "Post-War",
        title: "Marriage & Family",
        description: "Marries Sasuke and gives birth to their daughter Sarada. Becomes the head of Konoha Hospital.",
      },
    ],
    backgroundImage: "/images/sakura-haruno-bg.png",
    tags: ["Medical Ninja", "Strength", "Byakugo Seal"],
    bio: "Sakura Haruno is a member of Team 7 and a skilled medical ninja. She trained under Tsunade and is known for her chakra control and strength.",
    personality:
      "Sakura is compassionate, fierce, and loyal to her friends. She is also known for her incredible strength.",
    achievements: ["Mastered medical ninjutsu", "Unlocked the Byakugo Seal", "Defeated Sasori"],
    stats: {
      strength: 10,
      intelligence: 9,
      speed: 7,
      stamina: 7,
      chakraControl: 10,
    },
    personalDetails: {
      age: "33",
      birthday: "March 28",
      height: "165 cm",
      weight: "53 kg",
      bloodType: "O",
      rank: "Jonin",
      affiliation: "Konohagakure",
    },
    jutsu: [
      {
        name: "Chakra Enhanced Strength",
        description:
          "Concentrates chakra in the fists or feet and releases it on impact, creating devastating force that can shatter the ground or crush boulders.",
        type: "Offensive",
        rank: "B-Rank",
        chakraNature: "None",
      },
      {
        name: "Mystical Palm Technique",
        description:
          "A medical ninjutsu that accelerates the body's natural healing process by sending chakra from the hands into a wound.",
        type: "Supplementary",
        rank: "A-Rank",
        chakraNature: "None",
      },
      {
        name: "Summoning: Katsuyu",
        description:
          "Summons the slug Katsuyu, who can divide into smaller slugs to heal multiple people simultaneously over a wide area.",
        type: "Supplementary",
        rank: "B-Rank",
        chakraNature: "None",
      },
      {
        name: "Strength of a Hundred Seal",
        description:
          "A seal on Sakura's forehead that stores vast amounts of chakra over time, which can be released for various purposes including healing and combat.",
        type: "Supplementary",
        rank: "S-Rank",
        chakraNature: "None",
      },
      {
        name: "Cherry Blossom Impact",
        description:
          "A powerful punch that releases chakra on impact, causing widespread destruction. Named for the pink cherry blossom-like debris created.",
        type: "Offensive",
        rank: "A-Rank",
        chakraNature: "None",
      },
    ],
  },
  {
    id: 4,
    name: "Kakashi Hatake",
    role: "Sixth Hokage",
    village: "Hidden Leaf",
    description:
      "Known as the 'Copy Ninja' for his use of the Sharingan to copy over a thousand jutsu. Leader of Team 7 and later becomes the Sixth Hokage.",
    imageSrc: "/images/kakashi.png",
    color: "#90A4AE",
    jutsu: ["Chidori", "Lightning Blade", "Kamui", "Water Dragon Bullet", "Earth Wall"],
    slug: "kakashi-hatake",
    background: [
      "Kakashi Hatake was born to the legendary White Fang of Konoha, Sakumo Hatake. After his father's suicide following a failed mission where he chose to save his comrades rather than complete the mission, Kakashi adopted a strict adherence to the ninja rules.",
      "As a child prodigy, Kakashi graduated from the Academy at age 5, became a Chunin at 6, and a Jonin by 12. He was placed on a team with Obito Uchiha and Rin Nohara, under the leadership of Minato Namikaze, the future Fourth Hokage.",
      "During a mission in the Third Great Ninja War, Obito was seemingly killed while saving Kakashi, gifting him his Sharingan eye before his apparent death. Later, Kakashi was forced to kill Rin when she was made into the Three-Tails jinchūriki by enemy ninja. These traumatic events deeply affected Kakashi's outlook on life.",
    ],
    personality: [
      "Kakashi is characterized by his relaxed, almost lazy demeanor. He is habitually late for appointments and is often seen reading his favorite adult novel series, 'Icha Icha,' written by Jiraiya.",
      "Despite his casual attitude, Kakashi is highly perceptive, analytical, and takes his duties seriously. The traumatic experiences of his youth taught him the importance of teamwork and protecting one's comrades, values he strives to instill in his students.",
      "Over time, Kakashi developed a more balanced approach to the ninja code, understanding that while rules are important, protecting one's friends and doing what is right should take precedence. This philosophy made him an effective teacher and leader.",
    ],
    stats: [
      { name: "Strength", value: 8, icon: "strength" },
      { name: "Intelligence", value: 10, icon: "intelligence" },
      { name: "Speed", value: 9, icon: "speed" },
      { name: "Stamina", value: 7, icon: "stamina" },
      { name: "Chakra Control", value: 9, icon: "chakra" },
    ],
    quickFacts: [
      { label: "Birthday", value: "September 15" },
      { label: "Age", value: "47 (Boruto Era)" },
      { label: "Height", value: "181 cm" },
      { label: "Ninja Rank", value: "Jonin (Former Hokage)" },
      { label: "Nickname", value: "Copy Ninja Kakashi" },
    ],
    jutsuDetails: [
      {
        name: "Chidori",
        description:
          "A lightning-based attack that concentrates a high amount of lightning chakra in the hand. Created by Kakashi and later taught to Sasuke.",
        type: "Offensive",
        rank: "A-Rank",
        chakraNature: "Lightning",
      },
      {
        name: "Lightning Blade",
        description:
          "An enhanced version of the Chidori with greater piercing power, named after Kakashi used it to cut a bolt of lightning in half.",
        type: "Offensive",
        rank: "S-Rank",
        chakraNature: "Lightning",
      },
      {
        name: "Kamui",
        description:
          "A space-time ninjutsu granted by Kakashi's Mangekyo Sharingan that allows him to teleport objects to another dimension.",
        type: "Supplementary/Offensive",
        rank: "S-Rank",
        chakraNature: "None",
      },
      {
        name: "Water Dragon Bullet",
        description:
          "Creates a large dragon-shaped projectile made of water that crashes into the target with tremendous force.",
        type: "Offensive",
        rank: "B-Rank",
        chakraNature: "Water",
      },
      {
        name: "Earth Style Wall",
        description: "Creates a solid wall of earth as a defensive barrier or as a platform to gain higher ground.",
        type: "Defensive",
        rank: "B-Rank",
        chakraNature: "Earth",
      },
    ],
    relationships: [
      {
        name: "Might Guy",
        relationship: "Rival/Best Friend",
        description:
          "Kakashi's self-proclaimed eternal rival who constantly challenges him to competitions. Despite their different personalities, they share a deep bond of friendship.",
        imageSrc: "/images/guy.png",
      },
      {
        name: "Obito Uchiha",
        relationship: "Former Teammate",
        description:
          "Kakashi's teammate who was presumed dead but later revealed to be Tobi/Madara. Obito's apparent death and gift of his Sharingan profoundly influenced Kakashi's life.",
        imageSrc: "/images/obito.png",
      },
      {
        name: "Minato Namikaze",
        relationship: "Teacher/Mentor",
        description:
          "The Fourth Hokage who was Kakashi's jonin sensei. Minato taught Kakashi many techniques and entrusted him with carrying on his legacy.",
        imageSrc: "/images/minato.png",
      },
      {
        name: "Team 7",
        relationship: "Students",
        description:
          "Naruto, Sasuke, and Sakura were Kakashi's genin team. He guided their development as ninjas and formed strong bonds with each of them.",
        imageSrc: "/images/team7.png",
      },
    ],
    timeline: [
      {
        year: "Pre-Series",
        title: "Early Prodigy",
        description: "Graduates from the Academy at age 5, becomes a Chunin at 6, and a Jonin by 12.",
      },
      {
        year: "Pre-Series",
        title: "Kannabi Bridge Mission",
        description: "Loses his teammate Obito, who gives Kakashi his Sharingan eye before his apparent death.",
      },
      {
        year: "Pre-Series",
        title: "ANBU Career",
        description:
          "Serves in the ANBU Black Ops under the Fourth Hokage, later continuing under the Third Hokage after the Nine-Tails attack.",
      },
      {
        year: "Part I",
        title: "Team 7 Leader",
        description: "Assigned as the jonin leader of Team 7, consisting of Naruto, Sasuke, and Sakura.",
      },
      {
        year: "Part II",
        title: "Confrontation with Akatsuki",
        description:
          "Fights various Akatsuki members including Itachi, Deidara, and Pain, developing his Mangekyo Sharingan abilities.",
      },
      {
        year: "Part II",
        title: "Fourth Great Ninja War",
        description:
          "Serves as a commander in the Allied Shinobi Forces and fights against Obito, Madara, and the Ten-Tails.",
      },
      {
        year: "Post-War",
        title: "Sixth Hokage",
        description:
          "Becomes the Sixth Hokage after the war, leading the village during a period of peace and technological advancement.",
      },
      {
        year: "Boruto Era",
        title: "Retirement",
        description:
          "Retires as Hokage, passing the position to Naruto, and continues to serve the village as an advisor and jonin.",
      },
    ],
    backgroundImage: "/images/kakashi-hatake-bg.png",
    tags: ["Copy Ninja", "Sharingan", "Hokage"],
    bio: "Kakashi Hatake, known as Kakashi of the Sharingan, is a ninja from Konohagakure. He is a member of Team 7 and later becomes the Sixth Hokage.",
    personality:
      "Kakashi is relaxed, analytical, and takes his duties seriously. He is also known for his love of reading.",
    achievements: ["Became a Jonin at a young age", "Mastered the Sharingan", "Became the Sixth Hokage"],
    stats: {
      strength: 8,
      intelligence: 10,
      speed: 9,
      stamina: 7,
      chakraControl: 9,
    },
    personalDetails: {
      age: "47",
      birthday: "September 15",
      height: "181 cm",
      weight: "67.5 kg",
      bloodType: "O",
      rank: "Jonin",
      affiliation: "Konohagakure",
    },
    jutsu: [
      {
        name: "Chidori",
        description:
          "A lightning-based attack that concentrates a high amount of lightning chakra in the hand. Created by Kakashi and later taught to Sasuke.",
        type: "Offensive",
        rank: "A-Rank",
        chakraNature: "Lightning",
      },
      {
        name: "Lightning Blade",
        description:
          "An enhanced version of the Chidori with greater piercing power, named after Kakashi used it to cut a bolt of lightning in half.",
        type: "Offensive",
        rank: "S-Rank",
        chakraNature: "Lightning",
      },
      {
        name: "Kamui",
        description:
          "A space-time ninjutsu granted by Kakashi's Mangekyo Sharingan that allows him to teleport objects to another dimension.",
        type: "Supplementary/Offensive",
        rank: "S-Rank",
        chakraNature: "None",
      },
      {
        name: "Water Dragon Bullet",
        description:
          "Creates a large dragon-shaped projectile made of water that crashes into the target with tremendous force.",
        type: "Offensive",
        rank: "B-Rank",
        chakraNature: "Water",
      },
      {
        name: "Earth Style Wall",
        description: "Creates a solid wall of earth as a defensive barrier or as a platform to gain higher ground.",
        type: "Defensive",
        rank: "B-Rank",
        chakraNature: "Earth",
      },
    ],
  },
  {
    id: 5,
    name: "Itachi Uchiha",
    role: "Rogue Ninja / ANBU",
    village: "Hidden Leaf (Former)",
    description:
      "A prodigy who became an ANBU captain at a young age. Massacred his clan to prevent a coup, but secretly remained loyal to the Leaf.",
    imageSrc: "/images/itachi.png",
    color: "#B30000",
    jutsu: ["Tsukuyomi", "Amaterasu", "Susanoo", "Izanami", "Crow Clone Technique"],
    slug: "itachi-uchiha",
    background: [
      "Itachi Uchiha was born as the first son of Fugaku and Mikoto Uchiha, the head family of the Uchiha clan. A prodigy even by the standards of the talented Uchiha, Itachi graduated from the Academy at age 7, mastered the Sharingan at 8, became a Chunin at 10, and joined the ANBU at 11, eventually becoming a captain at 13.",
      "Having witnessed the horrors of the Third Great Ninja War as a child, Itachi developed a pacifistic nature and a deep desire for peace. This worldview would be tested when he discovered the Uchiha clan's plans to stage a coup against Konoha, which would likely trigger another war.",
      "Faced with an impossible choice, Itachi chose to follow Danzo Shimura's orders to eliminate the Uchiha clan to prevent the coup and potential war. However, he could not bring himself to kill his younger brother Sasuke. Instead, he made a deal with the Third Hokage to protect Sasuke, and with Danzo to spare the village from further bloodshed.",
    ],
    personality: [
      "Itachi was characterized by his calm, composed demeanor and exceptional intelligence. He rarely displayed emotion and maintained a stoic facade, even when confronted with extreme situations. This control allowed him to effectively play the role of a villain for years.",
      "Despite his actions, Itachi was driven by a profound love for his brother and village. His decision to massacre his clan was made with the belief that it would prevent greater bloodshed and protect Sasuke in the long run. He willingly accepted the role of a traitor and criminal to ensure peace.",
      "Itachi possessed a philosophical outlook on life, often contemplating the nature of power, sacrifice, and the shinobi system. He believed in looking 'underneath the underneath' and understanding the broader implications of one's actions rather than following orders blindly.",
    ],
    stats: [
      { name: "Strength", value: 7, icon: "strength" },
      { name: "Intelligence", value: 10, icon: "intelligence" },
      { name: "Speed", value: 9, icon: "speed" },
      { name: "Stamina", value: 6, icon: "stamina" },
      { name: "Chakra Control", value: 10, icon: "chakra" },
    ],
    quickFacts: [
      { label: "Birthday", value: "June 9" },
      { label: "Age at Death", value: "21" },
      { label: "Height", value: "178 cm" },
      { label: "Ninja Rank", value: "ANBU Captain (Former)" },
      { label: "Kekkei Genkai", value: "Sharingan, Mangekyo Sharingan" },
    ],
    jutsuDetails: [
      {
        name: "Tsukuyomi",
        description:
          "A powerful genjutsu that traps the target in an illusory world where Itachi controls time, space, and mass. Can cause psychological trauma.",
        type: "Genjutsu",
        rank: "S-Rank",
        chakraNature: "None",
      },
      {
        name: "Amaterasu",
        description:
          "Creates black flames at the focal point of the user's vision that burn for seven days and nights and cannot be extinguished by normal means.",
        type: "Offensive",
        rank: "S-Rank",
        chakraNature: "Fire (Blaze)",
      },
      {
        name: "Susanoo",
        description:
          "A gigantic, humanoid avatar made of chakra that surrounds the user and fights on their behalf. Itachi's is red and wields the Totsuka Blade and Yata Mirror.",
        type: "Defensive/Offensive",
        rank: "S-Rank",
        chakraNature: "None",
      },
      {
        name: "Izanami",
        description:
          "A genjutsu that traps the target in a loop of events that continues until they accept their fate and stop trying to change it.",
        type: "Genjutsu",
        rank: "S-Rank",
        chakraNature: "None",
      },
      {
        name: "Crow Clone Technique",
        description:
          "Creates a clone that disperses into a flock of crows when attacked, allowing Itachi to escape or reposition himself.",
        type: "Supplementary",
        rank: "B-Rank",
        chakraNature: "None",
      },
    ],
    relationships: [
      {
        name: "Sasuke Uchiha",
        relationship: "Brother",
        description:
          "Itachi's younger brother whom he deeply loved. Despite massacring their clan, Itachi spared Sasuke and manipulated him to become stronger through hatred.",
        imageSrc: "/images/sasuke.png",
      },
      {
        name: "Shisui Uchiha",
        relationship: "Best Friend/Cousin",
        description:
          "Itachi's closest friend and mentor who shared his desire for peace. Shisui's death and gift of his eye profoundly affected Itachi.",
        imageSrc: "/images/shisui.png",
      },
      {
        name: "Kisame Hoshigaki",
        relationship: "Akatsuki Partner",
        description:
          "Itachi's partner in the Akatsuki. Despite their different personalities, they worked well together and Kisame respected Itachi's abilities.",
        imageSrc: "/images/kisame.png",
      },
      {
        name: "Danzo Shimura",
        relationship: "Manipulator",
        description:
          "The leader of Root who ordered the Uchiha massacre and later took Shisui's eye. Itachi threatened him to protect Sasuke after leaving the village.",
        imageSrc: "/images/danzo.png",
      },
    ],
    timeline: [
      {
        year: "Pre-Series",
        title: "Early Prodigy",
        description:
          "Graduates from the Academy at age 7, masters the Sharingan at 8, becomes a Chunin at 10, and joins ANBU at 11.",
      },
      {
        year: "Pre-Series",
        title: "Uchiha Massacre",
        description:
          "At age 13, massacres the entire Uchiha clan except for Sasuke, then flees the village as a rogue ninja.",
      },
      {
        year: "Pre-Series",
        title: "Joins Akatsuki",
        description:
          "Becomes a member of the Akatsuki, secretly serving as a double agent to monitor the organization for Konoha.",
      },
      {
        year: "Part I",
        title: "Return to Konoha",
        description:
          "Returns to Konoha after the Third Hokage's death, confronts Kakashi and reminds Danzo of his presence to protect Sasuke.",
      },
      {
        year: "Part II",
        title: "Final Battle with Sasuke",
        description:
          "Fights Sasuke in their long-awaited confrontation, but instead of taking Sasuke's eyes, reveals some truth through genjutsu before dying from illness.",
      },
      {
        year: "Part II",
        title: "Reanimation",
        description:
          "Is reanimated during the Fourth Great Ninja War, breaks free of control, and helps defeat Kabuto using Izanami.",
      },
      {
        year: "Part II",
        title: "Final Farewell",
        description:
          "Before his soul returns to the afterlife, Itachi tells Sasuke the full truth and expresses his unconditional love for his brother.",
      },
    ],
    backgroundImage: "/images/itachi-uchiha-bg.png",
    tags: ["Sharingan", "Akatsuki", "Uchiha"],
    bio: "Itachi Uchiha was a prodigy of the Uchiha clan. He became an ANBU captain at a young age and was known for his exceptional skills.",
    personality:
      "Itachi was calm, composed, and intelligent. He was driven by a profound love for his brother and village.",
    achievements: ["Became an ANBU captain at a young age", "Mastered the Sharingan", "Helped defeat Kabuto"],
    stats: {
      strength: 7,
      intelligence: 10,
      speed: 9,
      stamina: 6,
      chakraControl: 10,
    },
    personalDetails: {
      age: "21",
      birthday: "June 9",
      height: "178 cm",
      weight: "57 kg",
      bloodType: "AB",
      rank: "ANBU Captain",
      affiliation: "Akatsuki",
    },
    jutsu: [
      {
        name: "Tsukuyomi",
        description:
          "A powerful genjutsu that traps the target in an illusory world where Itachi controls time, space, and mass. Can cause psychological trauma.",
        type: "Genjutsu",
        rank: "S-Rank",
        chakraNature: "None",
      },
      {
        name: "Amaterasu",
        description:
          "Creates black flames at the focal point of the user's vision that burn for seven days and nights and cannot be extinguished by normal means.",
        type: "Offensive",
        rank: "S-Rank",
        chakraNature: "Fire (Blaze)",
      },
      {
        name: "Susanoo",
        description:
          "A gigantic, humanoid avatar made of chakra that surrounds the user and fights on their behalf. Itachi's is red and wields the Totsuka Blade and Yata Mirror.",
        type: "Defensive/Offensive",
        rank: "S-Rank",
        chakraNature: "None",
      },
      {
        name: "Izanami",
        description:
          "A genjutsu that traps the target in a loop of events that continues until they accept their fate and stop trying to change it.",
        type: "Genjutsu",
        rank: "S-Rank",
        chakraNature: "None",
      },
      {
        name: "Crow Clone Technique",
        description:
          "Creates a clone that disperses into a flock of crows when attacked, allowing Itachi to escape or reposition himself.",
        type: "Supplementary",
        rank: "B-Rank",
        chakraNature: "None",
      },
    ],
  },
  {
    id: 6,
    name: "Hinata Hyuga",
    role: "Jonin",
    village: "Hidden Leaf",
    description:
      "A member of the Hyuga clan with the Byakugan. Initially shy and timid, she grows into a confident and strong kunoichi. Naruto's wife.",
    imageSrc: "/images/hinata.png",
    color: "#9575CD",
    jutsu: ["Gentle Fist", "Twin Lion Fists", "Byakugan", "Protective Eight Trigrams", "Air Palm"],
    slug: "hinata-hyuga",
    background: [
      "Hinata Hyuga was born as the eldest daughter of Hiashi Hyuga, the head of the Hyuga clan's main branch. As the firstborn, she was designated as the heir to lead the clan. However, her gentle nature and kind heart were seen as weaknesses by her father and the clan elders.",
      "When Hinata was young, she was nearly kidnapped by a ninja from the Hidden Cloud Village. Her father killed the kidnapper to protect her, which led to political tensions between the villages. This incident, combined with her perceived weakness, caused her father to view her as a disappointment.",
      "At the Academy, Hinata struggled with confidence issues and was often bullied. It was during this time that she first observed Naruto Uzumaki, who despite being ostracized and failing repeatedly, never gave up. His determination and resilience inspired her, leading to her deep admiration and eventually love for him.",
    ],
    personality: [
      "In her early years, Hinata was characterized by her extreme shyness, soft-spoken nature, and lack of self-confidence. She often stuttered when speaking, especially around Naruto, and had difficulty asserting herself in combat situations.",
      "Despite her timidity, Hinata possessed a strong inner determination and a kind heart. She was one of the few people who recognized Naruto's worth from the beginning, seeing beyond his troublemaker facade to his true strength of character.",
      "As she matured, Hinata grew more confident and assertive, inspired by Naruto's never-give-up attitude. By adulthood, she had become a strong, capable kunoichi and a loving mother to her two children, while maintaining her gentle and compassionate nature.",
    ],
    stats: [
      { name: "Strength", value: 7, icon: "strength" },
      { name: "Intelligence", value: 8, icon: "intelligence" },
      { name: "Speed", value: 8, icon: "speed" },
      { name: "Stamina", value: 7, icon: "stamina" },
      { name: "Chakra Control", value: 9, icon: "chakra" },
    ],
    quickFacts: [
      { label: "Birthday", value: "December 27" },
      { label: "Age", value: "33 (Boruto Era)" },
      { label: "Height", value: "163 cm" },
      { label: "Ninja Rank", value: "Jonin" },
      { label: "Kekkei Genkai", value: "Byakugan" },
    ],
    jutsuDetails: [
      {
        name: "Gentle Fist",
        description:
          "The Hyuga clan's signature fighting style that targets the chakra pathway system with precise strikes, damaging internal organs and disrupting chakra flow.",
        type: "Taijutsu",
        rank: "B-Rank",
        chakraNature: "None",
      },
      {
        name: "Twin Lion Fists",
        description:
          "Shapes chakra around the hands into large lion-shaped shrouds that drain the target's chakra upon contact.",
        type: "Offensive",
        rank: "B-Rank",
        chakraNature: "None",
      },
      {
        name: "Byakugan",
        description:
          "The Hyuga clan's kekkei genkai that grants near 360° vision, the ability to see chakra networks, and vision through solid objects.",
        type: "Dojutsu",
        rank: "None",
        chakraNature: "None",
      },
      {
        name: "Protective Eight Trigrams Sixty-Four Palms",
        description:
          "Creates a field of chakra blades around the user by moving the hands at high speed, cutting and repelling any incoming attacks.",
        type: "Defensive",
        rank: "B-Rank",
        chakraNature: "None",
      },
      {
        name: "Eight Trigrams Air Palm",
        description:
          "Expels chakra from the palm to create a wave of air pressure that can damage opponents from a distance.",
        type: "Offensive",
        rank: "B-Rank",
        chakraNature: "None",
      },
    ],
    relationships: [
      {
        name: "Naruto Uzumaki",
        relationship: "Husband",
        description:
          "Hinata admired Naruto from childhood for his determination and never-give-up attitude. Her love for him eventually led to their marriage and two children.",
        imageSrc: "/images/naruto.png",
      },
    ],
    timeline: [
      {
        year: "Pre-Series",
        title: "Kidnapping Attempt",
        description:
          "Nearly kidnapped by a Hidden Cloud ninja, leading to political tensions when her father killed the kidnapper to protect her.",
      },
      {
        year: "Pre-Series",
        title: "Academy Days",
        description:
          "Struggles with confidence at the Academy but finds inspiration in Naruto's determination and resilience.",
      },
      {
        year: "Part I",
        title: "Chunin Exams",
        description:
          "Fights her cousin Neji in the preliminary rounds, showing courage by refusing to give up despite being outmatched.",
      },
      {
        year: "Part II",
        title: "Pain's Assault",
        description:
          "Declares her love for Naruto and willingly risks her life to protect him from Pain, nearly dying in the process.",
      },
      {
        year: "Part II",
        title: "Fourth Great Ninja War",
        description:
          "Fights alongside Neji and Naruto, witnessing Neji's sacrifice to protect both her and Naruto from the Ten-Tails' attack.",
      },
      {
        year: "The Last",
        title: "Moon Crisis",
        description:
          "Helps Naruto save the world from Toneri Otsutsuki, leading to Naruto finally recognizing and reciprocating her feelings.",
      },
      {
        year: "Post-War",
        title: "Marriage & Family",
        description:
          "Marries Naruto and gives birth to two children: Boruto and Himawari. Supports Naruto in his role as Hokage while raising their family.",
      },
    ],
    backgroundImage: "/images/hinata-hyuga-bg.png",
    tags: ["Byakugan", "Gentle Fist", "Hyuga Clan"],
    bio: "Hinata Hyuga is a member of the Hyuga clan and a skilled ninja. She is known for her Byakugan and her gentle nature.",
    personality: "Hinata is shy, kind, and determined. She is also deeply in love with Naruto Uzumaki.",
    achievements: ["Mastered the Gentle Fist", "Gained Naruto's love", "Became a Jonin"],
    stats: {
      strength: 7,
      intelligence: 8,
      speed: 8,
      stamina: 7,
      chakraControl: 9,
    },
    personalDetails: {
      age: "33",
      birthday: "December 27",
      height: "163 cm",
      weight: "45 kg",
      bloodType: "A",
      rank: "Jonin",
      affiliation: "Konohagakure",
    },
    jutsu: [
      {
        name: "Gentle Fist",
        description:
          "The Hyuga clan's signature fighting style that targets the chakra pathway system with precise strikes, damaging internal organs and disrupting chakra flow.",
        type: "Taijutsu",
        rank: "B-Rank",
        chakraNature: "None",
      },
      {
        name: "Twin Lion Fists",
        description:
          "Shapes chakra around the hands into large lion-shaped shrouds that drain the target's chakra upon contact.",
        type: "Offensive",
        rank: "B-Rank",
        chakraNature: "None",
      },
      {
        name: "Byakugan",
        description:
          "The Hyuga clan's kekkei genkai that grants near 360° vision, the ability to see chakra networks, and vision through solid objects.",
        type: "Dojutsu",
        rank: "None",
        chakraNature: "None",
      },
      {
        name: "Protective Eight Trigrams Sixty-Four Palms",
        description:
          "Creates a field of chakra blades around the user by moving the hands at high speed, cutting and repelling any incoming attacks.",
        type: "Defensive",
        rank: "B-Rank",
        chakraNature: "None",
      },
      {
        name: "Eight Trigrams Air Palm",
        description:
          "Expels chakra from the palm to create a wave of air pressure that can damage opponents from a distance.",
        type: "Offensive",
        rank: "B-Rank",
        chakraNature: "None",
      },
    ],
  },
  {
    id: 7,
    name: "Gaara",
    role: "Fifth Kazekage",
    village: "Hidden Sand",
    description:
      "Former jinchūriki of the One-Tailed Shukaku who overcame his violent past to become the respected leader of the Hidden Sand Village.",
    imageSrc: "/images/gaara.png",
    color: "#E6A23C",
    jutsu: ["Sand Shield", "Sand Burial", "Sand Tsunami", "Desert Coffin", "Sand Clone"],
    slug: "gaara",
    background: [
      "Gaara was born as the son of the Fourth Kazekage and was made into a jinchūriki before birth when his father ordered Shukaku to be sealed within him. This was done in the hopes of creating a powerful weapon for the village.",
      "His mother died giving birth to him, and his father arranged it so that Gaara would never experience love, raising him as a weapon of terror. Gaara was ostracized and feared by the villagers of Suna.",
      "After his uncle Yashamaru, the only person Gaara thought cared for him, tried to assassinate him on the Kazekage's orders, Gaara became emotionally broken and developed a sadistic and murderous personality, living only for himself and killing anyone he perceived as a threat.",
    ],
    personality: [
      "In his early years, Gaara was a ruthless killer who believed his purpose was to kill others to validate his own existence. He was isolated, emotionally damaged, and unable to sleep due to Shukaku's influence.",
      "After being defeated by Naruto Uzumaki during the Konoha Crush, Gaara underwent a profound change. Naruto's words about the importance of bonds and fighting for others resonated with him, leading him to reconsider his purpose in life.",
      "As he matured, Gaara became calm, collected, and deeply committed to protecting his village and siblings. He developed a strong sense of duty and compassion, becoming a respected leader who would sacrifice himself for his people.",
    ],
    stats: [
      { name: "Strength", value: 7, icon: "strength" },
      { name: "Intelligence", value: 8, icon: "intelligence" },
      { name: "Speed", value: 7, icon: "speed" },
      { name: "Stamina", value: 8, icon: "stamina" },
      { name: "Chakra Control", value: 9, icon: "chakra" },
    ],
    quickFacts: [
      { label: "Birthday", value: "January 19" },
      { label: "Age", value: "33 (Boruto Era)" },
      { label: "Height", value: "177 cm" },
      { label: "Ninja Rank", value: "Kazekage" },
      { label: "Former Tailed Beast", value: "Shukaku (One-Tail)" },
    ],
    jutsuDetails: [
      {
        name: "Sand Shield",
        description:
          "An automatic defense that protects Gaara from harm, moving independently of his will to block attacks.",
        type: "Defensive",
        rank: "B-Rank",
        chakraNature: "Earth",
      },
      {
        name: "Sand Burial",
        description: "Encases an opponent in sand and then crushes them with immense pressure.",
        type: "Offensive",
        rank: "A-Rank",
        chakraNature: "Earth",
      },
      {
        name: "Sand Tsunami",
        description: "Creates a massive wave of sand that can overwhelm multiple opponents and cover a large area.",
        type: "Offensive",
        rank: "A-Rank",
        chakraNature: "Earth",
      },
      {
        name: "Desert Coffin",
        description: "Surrounds and immobilizes an opponent with sand, often used as a precursor to Sand Burial.",
        type: "Supplementary",
        rank: "B-Rank",
        chakraNature: "Earth",
      },
      {
        name: "Sand Clone",
        description:
          "Creates a clone made of sand that can fight on Gaara's behalf and dissolve back into sand when defeated.",
        type: "Supplementary",
        rank: "B-Rank",
        chakraNature: "Earth",
      },
    ],
    relationships: [
      {
        name: "Naruto Uzumaki",
        relationship: "Friend/Fellow Jinchūriki",
        description:
          "Naruto was the first person to defeat Gaara and show him that true strength comes from protecting others. This encounter changed Gaara's life path.",
        imageSrc: "/images/naruto.png",
      },
      {
        name: "Temari",
        relationship: "Sister",
        description:
          "Gaara's older sister who initially feared him but later became one of his closest advisors and supporters after his change of heart.",
        imageSrc: "/images/temari.png",
      },
      {
        name: "Kankuro",
        relationship: "Brother",
        description:
          "Gaara's older brother who, like Temari, was afraid of Gaara in his youth but later developed a strong brotherly bond with him.",
        imageSrc: "/images/kankuro.png",
      },
      {
        name: "Shukaku",
        relationship: "Former Tailed Beast",
        description:
          "The One-Tailed beast that was sealed within Gaara at birth. Their relationship was initially antagonistic but improved after Shukaku was extracted.",
        imageSrc: "/images/shukaku.png",
      },
    ],
    timeline: [
      {
        year: "Pre-Series",
        title: "Birth & Jinchūriki Creation",
        description:
          "Born as the son of the Fourth Kazekage and made into a jinchūriki before birth, with his mother dying in childbirth.",
      },
      {
        year: "Pre-Series",
        title: "Yashamaru's Betrayal",
        description:
          "Discovers that his uncle Yashamaru, who attempted to assassinate him, never loved him and was acting on the Kazekage's orders.",
      },
      {
        year: "Part I",
        title: "Chunin Exams Invasion",
        description:
          "Participates in the plan to invade Konoha but is defeated by Naruto, leading to a profound change in his worldview.",
      },
      {
        year: "Part I",
        title: "Sasuke Retrieval",
        description:
          "Arrives with his siblings to help the Konoha ninja in their fight against the Sound Four, showing his new alliance with the Leaf.",
      },
      {
        year: "Part II",
        title: "Becomes Kazekage",
        description:
          "Becomes the Fifth Kazekage of the Hidden Sand Village, earning the respect and admiration of his people.",
      },
      {
        year: "Part II",
        title: "Akatsuki Capture",
        description:
          "Captured by Deidara and Sasori of the Akatsuki, who extract Shukaku from him, resulting in his death (later revived by Chiyo).",
      },
      {
        year: "Part II",
        title: "Fourth Great Ninja War",
        description:
          "Serves as the commander of the Allied Shinobi Forces' Fourth Division and fights against the reanimated Kage.",
      },
      {
        year: "Boruto Era",
        title: "Continued Leadership",
        description:
          "Continues to serve as the Kazekage, maintaining peace and fostering strong relations with other villages.",
      },
    ],
    backgroundImage: "/images/gaara-bg.png",
    tags: ["Kazekage", "Sand", "Jinchuriki"],
    bio: "Gaara is the Fifth Kazekage of the Hidden Sand Village. He was once the jinchūriki of the One-Tailed Shukaku.",
    personality: "Gaara is calm, collected, and deeply committed to protecting his village and siblings.",
    achievements: ["Became the Kazekage", "Overcame his violent past", "Commanded the Allied Shinobi Forces"],
    stats: {
      strength: 7,
      intelligence: 8,
      speed: 7,
      stamina: 8,
      chakraControl: 9,
    },
    personalDetails: {
      age: "33",
      birthday: "January 19",
      height: "177 cm",
      weight: "55 kg",
      bloodType: "AB",
      rank: "Kazekage",
      affiliation: "Sunagakure",
    },
    jutsu: [
      {
        name: "Sand Shield",
        description:
          "An automatic defense that protects Gaara from harm, moving independently of his will to block attacks.",
        type: "Defensive",
        rank: "B-Rank",
        chakraNature: "Earth",
      },
      {
        name: "Sand Burial",
        description: "Encases an opponent in sand and then crushes them with immense pressure.",
        type: "Offensive",
        rank: "A-Rank",
        chakraNature: "Earth",
      },
      {
        name: "Sand Tsunami",
        description: "Creates a massive wave of sand that can overwhelm multiple opponents and cover a large area.",
        type: "Offensive",
        rank: "A-Rank",
        chakraNature: "Earth",
      },
      {
        name: "Desert Coffin",
        description: "Surrounds and immobilizes an opponent with sand, often used as a precursor to Sand Burial.",
        type: "Supplementary",
        rank: "B-Rank",
        chakraNature: "Earth",
      },
      {
        name: "Sand Clone",
        description:
          "Creates a clone made of sand that can fight on Gaara's behalf and dissolve back into sand when defeated.",
        type: "Supplementary",
        rank: "B-Rank",
        chakraNature: "Earth",
      },
    ],
  },
]

// Process the jutsu data to ensure it's in the correct format
const processedCharacters = CHARACTERS.map((character) => {
  // Process jutsu array to ensure each item is properly formatted
  const processedJutsu = character.jutsu.map((jutsu) => {
    // If jutsu is already a string, return it as is
    if (typeof jutsu === "string") {
      return jutsu
    }

    // If jutsu is an object, ensure it has all required properties
    if (typeof jutsu === "object" && jutsu !== null) {
      return {
        name: jutsu.name || "",
        description: jutsu.description || "",
        type: jutsu.type || "",
        rank: jutsu.rank || "",
        chakraNature: jutsu.chakraNature || "",
      }
    }

    // Fallback for any other case
    return ""
  })

  return {
    ...character,
    jutsu: processedJutsu,
  }
})

// Check and fix the slug values for Hinata and Gaara
// Make sure they match exactly with the file paths and URL structure

// For Hinata Hyuga (character with id 6), ensure the slug is correct
const hinataCharacter = processedCharacters.find((char) => char.id === 6)
if (hinataCharacter) {
  hinataCharacter.slug = "hinata-hyuga"
}

// For Gaara (character with id 7), ensure the slug is correct
const gaaraCharacter = processedCharacters.find((char) => char.id === 7)
if (gaaraCharacter) {
  gaaraCharacter.slug = "gaara"
}

// Define the characters variable that's being exported and used in other files
export const characters = processedCharacters
