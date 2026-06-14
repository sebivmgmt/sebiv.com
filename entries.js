const JOURNAL_ENTRIES = [
  {
    date: "June 14, 2026",
    title: "Kanye Induction",
    song: "Gemini Season",
    artist: "Kanye",
    quote: "It's better to be hated for who you are than loved for who you are not.",
    quoteAuthor: "Kurt Cobain",
    excerpt: "Today I'd like to formally induct Kanye West into the SEBIV POT. He's not walking around w a mask. Be like Kanye.",
    file: "journal-39.html"
  },
  {
    date: "June 12, 2026",
    title: "Man of experience",
    song: "Water and Power",
    artist: "ear",
    quote: "Success does not consist in never making mistakes but in never making the same one a second time.",
    quoteAuthor: "George Bernard Shaw",
    excerpt: "I'm a man of experience. That's how I learn best. I found my true motivations: money, women, and the law.",
    file: "journal-38.html"
  },
  {
    date: "June 8, 2026",
    title: "Back from Court",
    song: "Allons-y",
    artist: "Nikita, The Wicked",
    quote: "Lost time is never found again.",
    quoteAuthor: "Benjamin Franklin",
    excerpt: "Time is the absolute most valuable asset. Consuming is the drug that is killing our youth. Go create.",
    file: "journal-35.html"
  },
  {
    date: "June 1, 2026",
    title: "Affirmations",
    song: "A New Life",
    artist: "Zeke Blue",
    quote: "If you want something you've never had, you must be willing to do something you've never done.",
    quoteAuthor: "Thomas Jefferson",
    excerpt: "Money flows to me always in all ways. I guess I'm gonna be a citizen of all 195 countries. Wish me luck.",
    file: "journal-37.html"
  },
  {
    date: "May 31, 2026",
    title: "Bumps in the road",
    song: "You Know My Name",
    artist: "Finn Sigil",
    quote: "Life is not a problem to be solved, but a reality to be experienced.",
    quoteAuthor: "Søren Kierkegaard",
    excerpt: "Don't wait for all of the lights to turn green before leaving the house. My future wife will replace my addiction. Calling it now it's gonna be Jackie.",
    file: "journal-36.html"
  },
  {
    date: "May 30, 2026",
    title: "Logo redesign",
    song: "Nano",
    artist: "FX",
    quote: "Then remind yourself that past and future have no power over you. Only the present, and even that can be minimized.",
    quoteAuthor: "Marcus Aurelius",
    excerpt: "Today I redesigned the E in SEBIV. It now resembles a 7. I manifest myself living the life.",
    file: "journal-34.html"
  },
  {
    date: "May 29, 2026",
    title: "Temptations",
    song: "Take Everything",
    artist: "Europa",
    quote: "Wealth consists not in having great possessions, but in having few wants.",
    quoteAuthor: "Epictetus",
    excerpt: "I live for the chase. As soon as I have it, I don't want it anymore. I'm worried that I won't appreciate it.",
    file: "journal-33.html"
  },
  {
    date: "May 28, 2026",
    title: "Nikita, The Wicked Induction",
    song: "Control",
    artist: "Nikita, The Wicked",
    quote: "If you are always trying to be normal, you will never know how amazing you can be.",
    quoteAuthor: "Maya Angelou",
    excerpt: "Today I am inducting Nikita, The Wicked into the SEBIV POT. Throw him on shuffle you will not be disappointed.",
    file: "journal-31.html"
  },
  {
    date: "May 26, 2026",
    title: "The Builder in Exile",
    song: "Me Plus Ultra",
    artist: "ear",
    quote: "Life doesn't get easier or more forgiving, we get stronger and more resilient.",
    quoteAuthor: "Steve Maraboli",
    excerpt: "The Builder in Exile. I know I was meant for something. This could be the stepping stone.",
    file: "journal-32.html"
  },
  {
    date: "May 25, 2026",
    title: "Be You",
    song: "Hands on Me (Sped Up)",
    artist: "Elias",
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    quoteAuthor: "Ralph Waldo Emerson",
    excerpt: "In a world full of façades, be yourself. I'm not for everyone. If you can't handle my attitude, it's not a reflection of me, but a reflection of you.",
    file: "journal-30.html"
  },
  {
    date: "May 22, 2026",
    title: "No friends",
    song: "Sometimes I Believe in God Sometimes I Believe in Me",
    artist: "Bassvictim",
    quote: "Life's too short to hang out with people who aren't resourceful.",
    quoteAuthor: "Jeff Bezos",
    excerpt: "I have no friends. I have no social life. I just don't think like everyone else. Family over everything.",
    file: "journal-29.html"
  },
  {
    date: "May 21, 2026",
    title: "Morning routine",
    song: "Give Way",
    artist: "ear",
    quote: "Stop chasing the money and start chasing the passion.",
    quoteAuthor: "Tony Hsieh",
    excerpt: "This morning was different than most. I now have one robot telling another what to build tf.",
    file: "journal-28.html"
  },
  {
    date: "May 19, 2026",
    title: "New default",
    song: "Lines",
    artist: "Lorem Ipsum",
    quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
    quoteAuthor: "Mark Twain",
    excerpt: "I am beyond blessed to be connected to music. I've decided my signature symbol is going to be the default profile picture for users. I'm going all in.",
    file: "journal-27.html"
  },
  {
    date: "May 18, 2026",
    title: "Hourglass with no bottom",
    song: "Palaces",
    artist: "Flume",
    quote: "If you don't have time to do it right, when will you have time to do it over?",
    quoteAuthor: "John Wooden",
    excerpt: "I feel like time is running out. Like an hourglass w no bottom. Something big is coming. I can fucking feel it.",
    file: "journal-24.html"
  },
  {
    date: "May 17, 2026",
    title: "\" Realism \"",
    song: "Pink Matter",
    artist: "Frank Ocean",
    quote: "The world only exists in your eyes. You can make it as big or as small as you want.",
    quoteAuthor: "F. Scott Fitzgerald",
    excerpt: "I am surrounded by small minds. Pessimism is not realism. I have decided I don't give a fuck. I do things for me now.",
    file: "journal-25.html"
  },
  {
    date: "May 16, 2026",
    title: "Optimism",
    song: "New World",
    artist: "Aloboi",
    quote: "Optimism is a perfectly legitimate response to failure.",
    quoteAuthor: "Stephen King",
    excerpt: "Optimism is the most important virtue. Positivity is a muscle that you have control of. Go conquer it.",
    file: "journal-26.html"
  },
  {
    date: "May 14, 2026",
    title: "Flume Induction",
    song: "No Other",
    artist: "Flume",
    quote: "Success seems to be connected with action. Successful people keep moving.",
    quoteAuthor: "Conrad Hilton",
    excerpt: "Today I am etching Flume into the SEBIV POT. The #1 artist of all time. 5256 minutes played last year.",
    file: "journal-23.html"
  },
  {
    date: "May 14, 2026",
    title: "You're Someone Else's Excuse",
    song: "Valley Serpent",
    artist: "ear",
    quote: "The universe is change; our life is what our thoughts make it.",
    quoteAuthor: "Marcus Aurelius",
    excerpt: "YOU are probably someone else's excuse. Today I am entering ear into the SEBIV POT.",
    file: "journal-22.html"
  },
  {
    date: "May 13, 2026",
    title: "Sculptor",
    song: "Hyper Romance",
    artist: "Jadu Heart",
    quote: "I paint myself because I am alone. I paint myself because I am the subject I know best.",
    quoteAuthor: "Frida Kahlo",
    excerpt: "This was my first birthday alone. Alone but not lonely. I have been sculpting myself for years.",
    file: "journal-21.html"
  },
  {
    date: "May 9, 2026",
    title: "Create or Die",
    song: "You Don't Get Me High Anymore",
    artist: "Phantogram",
    quote: "The grass is always greener on the other side of the fence.",
    quoteAuthor: "Mom",
    excerpt: "I think we chase the chase. I think we want the want. We secretly crave the suffering.",
    file: "journal-20.html"
  },
  {
    date: "May 7, 2026",
    title: "Create Something",
    song: "Finding Butterflies",
    artist: "Blissfool",
    quote: "You control what you give value to.",
    quoteAuthor: "Alexandrino",
    excerpt: "Creating has done something powerful for me. We were put on this earth to use our minds. Use yours in ways that other people wouldn't.",
    file: "journal-19.html"
  },
  {
    date: "May 6, 2026",
    title: "Flavored Vapes",
    song: "If You Wanna Party",
    artist: "Fcukers",
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    quoteAuthor: "Elon Musk",
    excerpt: "49 days vape free. I'll leave the flavored vapes for the high schoolers. You should too.",
    file: "journal-18.html"
  },
  {
    date: "May 5, 2026",
    title: "Punching Air",
    song: "Love Yourself DMT",
    artist: "Worldpeace",
    quote: "I am the greatest. I said that even before I knew I was.",
    quoteAuthor: "Muhammad Ali",
    excerpt: "Go try something new. There's no Olympic sport for scrolling. Next week is my first boxing class.",
    file: "journal-14.html"
  },
  {
    date: "May 3, 2026",
    title: "Enjoy the Journey",
    song: "Rotted Arp",
    artist: "Lapalux",
    quote: "Success is stumbling from failure to failure with no loss of enthusiasm.",
    quoteAuthor: "Winston Churchill",
    excerpt: "After sobriety, weight loss, doubling my portfolio and halving my debt — it all seems insignificant if I can't finish this app. But is the struggle ever really over?",
    file: "journal-13.html"
  },
  {
    date: "May 2, 2026",
    title: "Do It For Future You",
    song: "Uber Jeets",
    artist: "Blissfool",
    quote: "First you take a drink, then the drink takes a drink, then the drink takes you.",
    quoteAuthor: "F. Scott Fitzgerald",
    excerpt: "Addiction resembles a vortex — it will suck you back in faster than you even realize. Do it for future you.",
    file: "journal-12.html"
  },
  {
    date: "April 30, 2026",
    title: "May Means Millions",
    song: "Hi",
    artist: "New York",
    quote: "All the world's a stage, and all the men and women merely players.",
    quoteAuthor: "William Shakespeare",
    excerpt: "Simulation theory was so easy for me to grasp because that is my reality. I see it. I want it. I have it.",
    file: "journal-11.html"
  },
  {
    date: "April 29, 2026",
    title: "I AM",
    song: "Send the Pain On",
    artist: "Chrome Sparks",
    quote: "In order to be irreplaceable one must always be different.",
    quoteAuthor: "Coco Chanel",
    excerpt: "\"I AM\" is the single strongest string of words combined. Use it to your advantage.",
    file: "journal-10.html"
  },
  {
    date: "April 28, 2026",
    title: "Invest in Yourself",
    song: "Fruity",
    artist: "Rubblebucket",
    quote: "If you're not embarrassed by who you were last year, you're not growing.",
    quoteAuthor: "Alex Hormozi",
    excerpt: "I officially quit events today. I have been working weekends every week for 5 years. Invest in yourself.",
    file: "journal-9.html"
  },
  {
    date: "April 26, 2026",
    title: "Stop Procrastinating",
    song: "Patience",
    artist: "Porches",
    quote: "Do not pray for easy lives. Pray to be stronger men.",
    quoteAuthor: "John F. Kennedy",
    excerpt: "Reflect on the dreams you had growing up. Are you on the right track? If not, what is your excuse?",
    file: "journal-8.html"
  },
  {
    date: "April 25, 2026",
    title: "Son Of a Bitch Everything's Real",
    song: "Linked",
    artist: "Bonobo",
    quote: "Everything you want is on the other side of fear.",
    quoteAuthor: "David Goggins",
    excerpt: "514 days sober now. In a world where everyone wants to impress others — impress yourself.",
    file: "journal-7.html"
  },
  {
    date: "April 24, 2026",
    title: "Etching My Story Into the Emerald Tablets",
    song: "Dogs",
    artist: "ear",
    quote: "You don't need anyone else's permission to be happy, to pursue your passions, express yourself more, or to live the life you've always dreamed of.",
    quoteAuthor: "Mel Robbins",
    excerpt: "I'm etching my story into the emerald fucking tablets.",
    file: "journal-17.html"
  },
  {
    date: "April 23, 2025",
    title: "Welcome to SEBIV",
    song: "All I Need",
    artist: "Clams Casino",
    quote: "The most genius thing about the way I create is to create with other geniuses.",
    quoteAuthor: "Kanye West",
    excerpt: "I can't help but obsess over success. My last trademark was abandoned due to procrastination. I filed a new one today.",
    file: "journal-6.html"
  },
  {
    date: "April 20, 2025",
    title: "You Decided to Be Here",
    song: "It's Ok (Just Raw)",
    artist: "Aloboi",
    quote: "I'm in love with everyone I've ever met in one way or another. I'm just a crazy, unhinged disaster of a human being.",
    quoteAuthor: "Edie Sedgwick",
    excerpt: "It's so easy to hate the world. It's so easy to be a victim. It takes courage to be grateful.",
    file: "journal-2.html"
  },
  {
    date: "April 19, 2025",
    title: "Gratitude is the Secret",
    song: "Gold Guns Girls",
    artist: "Metric",
    quote: "Life is a series of experiences, each one of which makes us bigger, even though sometimes it is hard to realize this.",
    quoteAuthor: "Henry Ford",
    excerpt: "Life is like a sine wave. The highs are reflective and dependent on the lows. Gratitude is the fucking secret.",
    file: "journal-1.html"
  },
  {
    date: "April 18, 2025",
    title: "Change the Orientation",
    song: "I NEVER DIE",
    artist: "Love Eli",
    quote: "Time is a sort of river of passing events, and strong is its current.",
    quoteAuthor: "Marcus Aurelius",
    excerpt: "I changed how my bedroom is setup today. Habituation is one of my biggest fears. Change the orientation of your bed this spring.",
    file: "journal-3.html"
  },
  {
    date: "April 17, 2025",
    title: "I Am the Bull",
    song: "All U Gotta Do",
    artist: "Bou",
    quote: "Perhaps the most tragic thing about mankind is that we are all dreaming about some magical garden over the horizon.",
    quoteAuthor: "Andrew Carnegie",
    excerpt: "Anything I've ever wanted in life I've received. Before I had it, I thought it. My manifestation is so unbelievable.",
    file: "journal-5.html"
  },
  {
    date: "April 16, 2025",
    title: "I Am Not a Consumer",
    song: "Galaxy Surfing",
    artist: "Jadu Heart",
    quote: "Change happens when the pain of staying the same is greater than the pain of change.",
    quoteAuthor: "Tony Robbins",
    excerpt: "I deleted TikTok because I found myself consuming more than creating. I am not a consumer. I just don't have creator money *yet.",
    file: "journal-4.html"
  },
  {
    date: "April 14, 2026",
    title: "April Is the Month",
    song: "Fetish",
    artist: "ear",
    quote: "No matter what has occurred in your life up to this point, it should have no bearing at all on how you live from now on.",
    quoteAuthor: "Ichiro Kishimi",
    excerpt: "April is the month I decided to adjust investments towards crypto. SOL @80. ETH @2k.",
    file: "journal-16.html"
  },
  {
    date: "April 12, 2026",
    title: "7 Months Until Release",
    song: "Real Life",
    artist: "ear",
    quote: "Do not wait; the time will never be 'just right.' Start where you stand, and work with whatever tools you may have at your command.",
    quoteAuthor: "Napoleon Hill",
    excerpt: "Last week my app was approved by Plaid. 7 months until release.",
    file: "journal-15.html"
  }
];
