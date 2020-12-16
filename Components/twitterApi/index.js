const tweetInfo = [
  
  {
    heading: "Charlie Chaplin: A Vaudeville Star",
    para: "To celebrate Variety’s 115th anniversary, we went to the archives to see how some of Hollywood’s biggest stars",
    imgUrl: "https://www.dw.com/image/15759510_401.jpg",
    tweetId: "000012"
  },
  {
    heading: "Warner Bros. Shifts ‘Mortal Kombat,’ ‘Tom and Jerry’ Release",
    para: "Warner Bros. has shuffled around release dates for three of the studio’s upcoming movies: “Mortal Kombat.”",
    imgUrl: "https://img.theweek.in/content/dam/week/leisure/society/images/2018/3/17/tom-and-jerry.jpg",
    tweetId: "000013"
  },
  {
    heading:
      "An Earth-Shattering Year: Entertainment Industry Reflect on 2020",
    para: "o say that 2020 has been a ground-shifting year, would be to minimize all of the profound sorrow",
    imgUrl: "https://s.yimg.com/ny/api/res/1.2/Wxg.5HJltoEixOQlp3a7JQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNi42NjY2NjY2NjY2NjY3/https://media.zenfs.com/en-US/variety.com/0ffd5fed20b8b50587da4c1b8fa72dfb",
    tweetId: "000014"
  },
  {
    heading: "Malayalam movie ’Jallikattu’ is India’s official Oscar entry",
    para: "Malayalam feature “Jallikattu”, directed by Lijo Jose Pellissery, has been selected as India's official entry",
    imgUrl: "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/JallikattuMovie_251120_1200.jpg?itok=yEbplgVc",
    tweetId: "000015"
  },
  {
    heading: "Top Hollywood films of 2020",
    para: "The Trial of Chicago 7, Mank and Tenet make it to the list of top ten Hollywood movies that released in 2020.",
    imgUrl: "https://images.indianexpress.com/2020/06/birds-of-prey-759.jpeg",
    tweetId: "000016"
  },
  {
    heading: "George Clooney on Why the Movie Industry Will Continue to Survive",
    para: "To make sense of all that has transpired in 2020 and what it portends for the media and entertainment",
    imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/george-amal-clooney-twins-1606743795.jpg",
    tweetId: "000017"
  },

  {
    heading: "The Biggest Comic Book Movie News Stories of 2020",
    para: "The coronavirus pandemic caused a lot of disruption to the superhero genre - but there have still been some major",
    imgUrl: "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/12/Biggest-Comic-Book-Movie-Stories.jpg?q=50&fit=crop&w=960&h=500",
    tweetId: "000011"
  },

  {
    heading: "Pratik Gandhi: Scam 1992 changed my life completely",
    para: "“Risk hai toh ishq hai,” says Pratik Gandhi's Harshad Mehta in SonyLIV's Scam 1992.",
    imgUrl: "https://images.firstpost.com/wp-content/uploads/large_file_plugin/2020/11/1605241826_pratikgandhi.jpg",
    tweetId: "000018"
  }
];

export default (n = 6) =>
  Promise.resolve(tweetInfo.sort(() => 0.6 - Math.random()).slice(0, n));
