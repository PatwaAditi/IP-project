/**
 * CineVault Database
 * Contains 62 Movies & 18 TV Series (80 titles total)
 * Structure adheres strictly to CineVault MVP requirements:
 * id, title, type, genre (array), year, rating, duration, language,
 * poster, backdrop, description, platforms [ { name, url } ]
 */

const cinevaultData = [
  {
    "id": 1,
    "title": "Inception",
    "type": "Movie",
    "genre": [
      "Sci-Fi",
      "Action",
      "Thriller"
    ],
    "year": 2010,
    "rating": 8.8,
    "duration": "2h 28m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
    "description": "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      },
      {
        "name": "Apple TV+",
        "url": "https://tv.apple.com/"
      }
    ]
  },
  {
    "id": 2,
    "title": "The Dark Knight",
    "type": "Movie",
    "genre": [
      "Action",
      "Crime",
      "Drama",
      "Superhero"
    ],
    "year": 2008,
    "rating": 9,
    "duration": "2h 32m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/9FE5eD92WfVCiivM9Pq9GVSrlWk.jpg",
    "description": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 3,
    "title": "Interstellar",
    "type": "Movie",
    "genre": [
      "Sci-Fi",
      "Drama"
    ],
    "year": 2014,
    "rating": 8.7,
    "duration": "2h 49m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/8sNiAPPYU14PUepFNeSNGUTiHW.jpg",
    "description": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      },
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      }
    ]
  },
  {
    "id": 4,
    "title": "Parasite",
    "type": "Movie",
    "genre": [
      "Thriller",
      "Drama",
      "Comedy"
    ],
    "year": 2019,
    "rating": 8.5,
    "duration": "2h 12m",
    "language": "Korean",
    "poster": "https://image.tmdb.org/t/p/w500/rqpa5dO2zZIHqknnJr8LKwiYHy8.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w500/rqpa5dO2zZIHqknnJr8LKwiYHy8.jpg",
    "description": "In September 2019, the band held its first-ever independently organized outdoor event in their hometown of Kansai. After a three-year hiatus, the event—PARASITE DEJAVU—was held again in October 2022 at Saitama Super Arena. The live performances from both 2019 and 2022 have been compiled. The 2019 event, PARASITE DEJAVU ~2DAYS OPEN AIR SHOW~, took place at Izumiotsu Phoenix in Osaka, chosen as the stage in their home region. It drew around 40,000 people over two days. DAY 1 was a solo headliner show, while DAY 2 was held in an omnibus format featuring various artists. This release includes not only the DAY 1 solo performance but also previously unreleased footage from DAY 2, along with a behind-the-scenes documentary!",
    "platforms": [
      {
        "name": "SonyLIV",
        "url": "https://www.sonyliv.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 5,
    "title": "Dune",
    "type": "Movie",
    "genre": [
      "Sci-Fi",
      "Action",
      "Drama"
    ],
    "year": 2021,
    "rating": 8,
    "duration": "2h 35m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/pc15b0pi8o1oUv9vNhakwMQ9TxA.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/zRKQW58MBEY078AxkHxEJzUskCl.jpg",
    "description": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence - a commodity capable of unlocking humanity's greatest potential - only those who can conquer their fear will survive.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 6,
    "title": "Avengers: Endgame",
    "type": "Movie",
    "genre": [
      "Action",
      "Superhero",
      "Sci-Fi"
    ],
    "year": 2019,
    "rating": 8.4,
    "duration": "3h 1m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    "description": "अवेंजर्स: इन्फिनिटी वॉर की विनाशकारी घटनाओं के बाद, मैड टाइटन, थानोस के प्रयासों के कारण ब्रह्मांड खंडहर में है। शेष सहयोगियों की मदद से, एवेंजर्स को थानोस के कार्यों को पूर्ववत करने के लिए एक बार फिर से इकट्ठा करना चाहिए और एक बार और सभी के लिए ब्रह्मांड को आदेश बहाल करना चाहिए, कोई फर्क नहीं पड़ता कि क्या परिणाम स्टोर में हो सकते हैं।",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      },
      {
        "name": "YouTube",
        "url": "https://www.youtube.com/movies"
      }
    ]
  },
  {
    "id": 7,
    "title": "Joker",
    "type": "Movie",
    "genre": [
      "Drama",
      "Crime",
      "Thriller"
    ],
    "year": 2019,
    "rating": 8.4,
    "duration": "2h 2m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/ka54zRv6rU26iCbzU2dAJDp3lxE.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/w6AHJecamiNKLRI1aRkqAFnvD5u.jpg",
    "description": "We don't have an overview translated in English. Help us expand our database by adding one.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      },
      {
        "name": "Apple TV+",
        "url": "https://tv.apple.com/"
      }
    ]
  },
  {
    "id": 8,
    "title": "Oppenheimer",
    "type": "Movie",
    "genre": [
      "Drama",
      "Thriller"
    ],
    "year": 2023,
    "rating": 8.9,
    "duration": "3h",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/neeNHeXjMF5fXoCJRsOmkNGC7q.jpg",
    "description": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 9,
    "title": "Spider-Man: No Way Home",
    "type": "Movie",
    "genre": [
      "Action",
      "Superhero",
      "Sci-Fi"
    ],
    "year": 2021,
    "rating": 8.2,
    "duration": "2h 28m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/tJ44EffQBBUMc61xa8QDz0oijQT.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    "description": "पीटर पार्कर के अपने लोग खतरे में पड़ जाते हैं, तो वह डॉक्टर स्ट्रेंज से कहता है उसके राज़ को पहले जैसा कर दे - और इसी दौरान वह गलती से एक भारी मुसीबत को बुलावा दे देता है।",
    "platforms": [
      {
        "name": "SonyLIV",
        "url": "https://www.sonyliv.com/"
      },
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      }
    ]
  },
  {
    "id": 10,
    "title": "Whiplash",
    "type": "Movie",
    "genre": [
      "Drama"
    ],
    "year": 2014,
    "rating": 8.5,
    "duration": "1h 47m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/fRGxZuo7jJUWQsVg9PREb98Aclp.jpg",
    "description": "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 11,
    "title": "The Shawshank Redemption",
    "type": "Movie",
    "genre": [
      "Drama",
      "Crime"
    ],
    "year": 1994,
    "rating": 9.3,
    "duration": "2h 22m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pNjh59JSxChQktamG3LMp9ZoQzp.jpg",
    "description": "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      },
      {
        "name": "Apple TV+",
        "url": "https://tv.apple.com/"
      }
    ]
  },
  {
    "id": 12,
    "title": "The Godfather",
    "type": "Movie",
    "genre": [
      "Crime",
      "Drama"
    ],
    "year": 1972,
    "rating": 9.2,
    "duration": "2h 55m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/wWJbBo5yjw22AIjE8isBFoiBI3S.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/ejdD20cdHNFAYAN2DlqPToXKyzx.jpg",
    "description": "1945 से 1955 तक फैले हुए, काल्पनिक इतालवी-अमेरिकी कोरलियॉन अपराध परिवार का एक क्रॉनिकल। जब संगठित अपराध परिवार के कुलपति, वीटो कोरलियोन मुश्किल से अपने जीवन पर प्रयास करते हैं, तो उनका सबसे छोटा बेटा, माइकल हत्यारों की देखभाल करने के लिए कदम उठाता है, खूनी बदला लेने का अभियान शुरू करता है.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 13,
    "title": "Pulp Fiction",
    "type": "Movie",
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "year": 1994,
    "rating": 8.9,
    "duration": "2h 34m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    "description": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      },
      {
        "name": "YouTube",
        "url": "https://www.youtube.com/movies"
      }
    ]
  },
  {
    "id": 14,
    "title": "Fight Club",
    "type": "Movie",
    "genre": [
      "Drama",
      "Thriller"
    ],
    "year": 1999,
    "rating": 8.8,
    "duration": "2h 19m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/c6OLXfKAk5BKeR6broC8pYiCquX.jpg",
    "description": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      },
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      }
    ]
  },
  {
    "id": 15,
    "title": "Forrest Gump",
    "type": "Movie",
    "genre": [
      "Drama",
      "Romance",
      "Comedy"
    ],
    "year": 1994,
    "rating": 8.8,
    "duration": "2h 22m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/Cw4hIUIAmSYfK9QfaUW5igp9La.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/66Kn4XWhkuPkJxOJyPEx4U2CUfN.jpg",
    "description": "अपनी सकारात्मकता और उमंग से सभी को प्रेरित करने वाला एक शरीफ़ आदमी, कई असाधारण घटनाओं का गवाह बनता है.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      },
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      }
    ]
  },
  {
    "id": 16,
    "title": "The Matrix",
    "type": "Movie",
    "genre": [
      "Sci-Fi",
      "Action"
    ],
    "year": 1999,
    "rating": 8.7,
    "duration": "2h 16m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/oEJvgjTffAczVq6n1TgnJ40l4rU.jpg",
    "description": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 17,
    "title": "The Prestige",
    "type": "Movie",
    "genre": [
      "Drama",
      "Thriller",
      "Sci-Fi"
    ],
    "year": 2006,
    "rating": 8.5,
    "duration": "2h 10m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/rOa94QOq3wbqKBHjSqL0WtPPJm1.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/yaExZh6qE2cfyK3o4kAMEq0mkgy.jpg",
    "description": "A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy -- full of obsession, deceit and jealousy with dangerous and deadly consequences.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      },
      {
        "name": "Apple TV+",
        "url": "https://tv.apple.com/"
      }
    ]
  },
  {
    "id": 18,
    "title": "Good Will Hunting",
    "type": "Movie",
    "genre": [
      "Drama",
      "Romance"
    ],
    "year": 1997,
    "rating": 8.3,
    "duration": "2h 6m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/z2FnLKpFi1HPO7BEJxdkv6hpJSU.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xj1Sv1xm4Y0ydBueGuf10Y9qM0O.jpg",
    "description": "Will Hunting is a headstrong, working-class genius who is failing the lessons of life. After one too many run-ins with the law, Will's last chance is a psychology professor, who might be the only man who can reach him.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 19,
    "title": "Se7en",
    "type": "Movie",
    "genre": [
      "Crime",
      "Thriller",
      "Drama"
    ],
    "year": 1995,
    "rating": 8.6,
    "duration": "2h 7m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/i5H7zusQGsysGQ8i6P361Vnr0n2.jpg",
    "description": "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the 'seven deadly sins'.",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 20,
    "title": "The Departed",
    "type": "Movie",
    "genre": [
      "Crime",
      "Thriller",
      "Drama"
    ],
    "year": 2006,
    "rating": 8.5,
    "duration": "2h 31m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/6WRrGYalXXveItfpnipYdayFkQB.jpg",
    "description": "To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise. While an undercover cop curries favor with the mob kingpin, a career criminal rises through the police ranks. But both sides soon discover there's a mole among them.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      },
      {
        "name": "Apple TV+",
        "url": "https://tv.apple.com/"
      }
    ]
  },
  {
    "id": 21,
    "title": "Avengers: Infinity War",
    "type": "Movie",
    "genre": [
      "Action",
      "Superhero",
      "Sci-Fi"
    ],
    "year": 2018,
    "rating": 8.4,
    "duration": "2h 29m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/qOsvcxDd3txFzy30rFbfknnd8Ek.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
    "description": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      },
      {
        "name": "YouTube",
        "url": "https://www.youtube.com/movies"
      }
    ]
  },
  {
    "id": 22,
    "title": "Iron Man",
    "type": "Movie",
    "genre": [
      "Action",
      "Superhero",
      "Sci-Fi"
    ],
    "year": 2008,
    "rating": 7.9,
    "duration": "2h 6m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/cKvDv2LpwVEqbdXWoQl4XgGN6le.jpg",
    "description": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 23,
    "title": "Captain America: Civil War",
    "type": "Movie",
    "genre": [
      "Action",
      "Superhero",
      "Sci-Fi"
    ],
    "year": 2016,
    "rating": 7.8,
    "duration": "2h 27m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/7FWlcZq3r6525LWOcvO9kNWurN1.jpg",
    "description": "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      }
    ]
  },
  {
    "id": 24,
    "title": "Guardians of the Galaxy",
    "type": "Movie",
    "genre": [
      "Action",
      "Sci-Fi",
      "Comedy",
      "Superhero"
    ],
    "year": 2014,
    "rating": 8,
    "duration": "2h 1m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/uLtVbjvS1O7gXL8lUOwsFOH4man.jpg",
    "description": "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      }
    ]
  },
  {
    "id": 25,
    "title": "Black Panther",
    "type": "Movie",
    "genre": [
      "Action",
      "Superhero",
      "Sci-Fi"
    ],
    "year": 2018,
    "rating": 7.3,
    "duration": "2h 14m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/5WRGN4lwJf7xrewfqY6I5aUmlEI.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/b6ZJZHUdMEFECvGiDpJjlfUWela.jpg",
    "description": "King T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantle to join with ex-girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      }
    ]
  },
  {
    "id": 26,
    "title": "Doctor Strange",
    "type": "Movie",
    "genre": [
      "Action",
      "Superhero",
      "Sci-Fi"
    ],
    "year": 2016,
    "rating": 7.5,
    "duration": "1h 55m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/kkoiH8ZWxJ9WSAjOadGtuHUQxbm.jpg",
    "description": "After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      }
    ]
  },
  {
    "id": 27,
    "title": "Thor: Ragnarok",
    "type": "Movie",
    "genre": [
      "Action",
      "Comedy",
      "Superhero",
      "Sci-Fi"
    ],
    "year": 2017,
    "rating": 7.9,
    "duration": "2h 10m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/vLmHH8jAy8Jq8uBsLucd3592WGh.jpg",
    "description": "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of a powerful new threat, the ruthless Hela.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      }
    ]
  },
  {
    "id": 28,
    "title": "Spider-Man: Homecoming",
    "type": "Movie",
    "genre": [
      "Action",
      "Superhero",
      "Comedy"
    ],
    "year": 2017,
    "rating": 7.4,
    "duration": "2h 13m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg",
    "description": "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
    "platforms": [
      {
        "name": "SonyLIV",
        "url": "https://www.sonyliv.com/"
      },
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      }
    ]
  },
  {
    "id": 29,
    "title": "Deadpool",
    "type": "Movie",
    "genre": [
      "Action",
      "Comedy",
      "Superhero"
    ],
    "year": 2016,
    "rating": 8,
    "duration": "1h 48m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/rFj9IKlL75B2pXhZA60jkNWvxeW.jpg",
    "description": "The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      }
    ]
  },
  {
    "id": 30,
    "title": "Logan",
    "type": "Movie",
    "genre": [
      "Action",
      "Drama",
      "Superhero",
      "Sci-Fi"
    ],
    "year": 2017,
    "rating": 8.1,
    "duration": "2h 17m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/4DZxWNSAyksN6N3JkvpJ53Yq6zU.jpg",
    "description": "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      }
    ]
  },
  {
    "id": 31,
    "title": "The Martian",
    "type": "Movie",
    "genre": [
      "Sci-Fi",
      "Drama"
    ],
    "year": 2015,
    "rating": 8,
    "duration": "2h 24m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/lzMS0CI3FLQYC5EgJoWeIaEt0lm.jpg",
    "description": "During a mission to Mars, astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 32,
    "title": "Blade Runner 2049",
    "type": "Movie",
    "genre": [
      "Sci-Fi",
      "Thriller",
      "Drama"
    ],
    "year": 2017,
    "rating": 8,
    "duration": "2h 44m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/gNdLJU9TxrpGx4dkZidjys3fyy0.jpg",
    "description": "एक छिपी हुई कब्र में मिली चीज़ें एक बड़े इंडस्ट्रियलिस्ट का ध्यान खींचती हैं और फिर लॉस एंजेलिस पुलिस विभाग का ब्लेड रनर ऑफ़िसर एक लापता लेजेंड की खोज में निकल पड़ता है.",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      },
      {
        "name": "SonyLIV",
        "url": "https://www.sonyliv.com/"
      }
    ]
  },
  {
    "id": 33,
    "title": "Arrival",
    "type": "Movie",
    "genre": [
      "Sci-Fi",
      "Drama",
      "Thriller"
    ],
    "year": 2016,
    "rating": 7.9,
    "duration": "1h 56m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/pEzNVQfdzYDzVK0XqxERIw2x2se.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/8MUZz7oPXQftFTslZpRP3CVMOoq.jpg",
    "description": "Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 34,
    "title": "Tenet",
    "type": "Movie",
    "genre": [
      "Sci-Fi",
      "Action",
      "Thriller"
    ],
    "year": 2020,
    "rating": 7.3,
    "duration": "2h 30m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/f9zhIg8M1X1tFpHFUEA3scA6OYb.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/mQOUyqDybTqxl73hO5LujCZsM1o.jpg",
    "description": "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      },
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      }
    ]
  },
  {
    "id": 35,
    "title": "Ex Machina",
    "type": "Movie",
    "genre": [
      "Sci-Fi",
      "Thriller",
      "Drama"
    ],
    "year": 2014,
    "rating": 7.7,
    "duration": "1h 48m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/dmJW8IAKHKxFNiUnoDR7JfsK7Rp.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/uqOuJ50EtTj7kkDIXP8LCg7G45D.jpg",
    "description": "Caleb, a coder at the world's largest internet company, wins a competition to spend a week at a private mountain retreat belonging to Nathan, the reclusive CEO of the company. But when Caleb arrives at the remote location he finds that he will have to participate in a strange and fascinating experiment in which he must interact with the world's first true artificial intelligence, housed in the body of a beautiful robot girl.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 36,
    "title": "Everything Everywhere All at Once",
    "type": "Movie",
    "genre": [
      "Sci-Fi",
      "Comedy",
      "Action",
      "Drama"
    ],
    "year": 2022,
    "rating": 7.8,
    "duration": "2h 19m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/u68AjlvlutfEIcpmbYpKcdi09ut.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/fIwiFha3WPu5nHkBeMQ4GzEk0Hv.jpg",
    "description": "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
    "platforms": [
      {
        "name": "SonyLIV",
        "url": "https://www.sonyliv.com/"
      }
    ]
  },
  {
    "id": 37,
    "title": "Gravity",
    "type": "Movie",
    "genre": [
      "Sci-Fi",
      "Thriller",
      "Drama"
    ],
    "year": 2013,
    "rating": 7.7,
    "duration": "1h 31m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/uOELpg4fZrlGNn1dst4NXSchtCK.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/a2n6bKD7qhCPCAEALgsAhWOAQcc.jpg",
    "description": "Dr Ryan Stone, an engineer on her first space mission, and Matt Kowalski, an astronaut on his final expedition, have to survive in space after they are hit by debris while spacewalking.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 38,
    "title": "Mad Max: Fury Road",
    "type": "Movie",
    "genre": [
      "Action",
      "Sci-Fi",
      "Thriller"
    ],
    "year": 2015,
    "rating": 8.1,
    "duration": "2h",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/ulcAi4dKpAjHwYGS08vNyx9H6I9.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/gqrnQA6Xppdl8vIb2eJc58VC1tW.jpg",
    "description": "तबाही से बदहाल हालात में मैक्स एक बागी महिला और कुछ कैदी औरतों की दरिंदों के चंगुल से भागने में मदद करता है. वह उन्हें बचाता है और उनकी वतन वापसी का रास्ता निकालता है.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 39,
    "title": "Edge of Tomorrow",
    "type": "Movie",
    "genre": [
      "Sci-Fi",
      "Action"
    ],
    "year": 2014,
    "rating": 7.9,
    "duration": "1h 53m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/nBM9MMa2WCwvMG4IJ3eiGUdbPe6.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/4V1yIoAKPMRQwGBaSses8Bp2nsi.jpg",
    "description": "युद्ध में मारा गया बिल केज, टाइम लूप में फंसा हुआ है. वह उसी दिन को तब तक बार-बार जीता रहेगा, जब तक ज़िंदा बचने और हमलावर परजीवियों को हराने का तरीका नहीं ढूंढ लेता.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 40,
    "title": "Ready Player One",
    "type": "Movie",
    "genre": [
      "Sci-Fi",
      "Action"
    ],
    "year": 2018,
    "rating": 7.4,
    "duration": "2h 20m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/5a7lMDn3nAj2ByO0X1fg6BhUphR.jpg",
    "description": "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 41,
    "title": "3 Idiots",
    "type": "Movie",
    "genre": [
      "Indian",
      "Comedy",
      "Drama"
    ],
    "year": 2009,
    "rating": 8.4,
    "duration": "2h 50m",
    "language": "Hindi",
    "poster": "https://image.tmdb.org/t/p/w500/gmSRHU1Wtiatj8KoyVt8rT9ockx.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/u7kuUaySqXBVAtqEl9vkTkAzHV9.jpg",
    "description": "Rascal. Joker. Dreamer. Genius... You've never met a college student quite like \"Rancho.\" From the moment he arrives at India's most prestigious university, Rancho's outlandish schemes turn the campus upside down—along with the lives of his two newfound best friends. Together, they make life miserable for \"Virus,\" the school’s uptight and heartless dean. But when Rancho catches the eye of the dean's daughter, Virus sets his sights on flunking out the \"3 idiots\" once and for all.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      },
      {
        "name": "YouTube",
        "url": "https://www.youtube.com/movies"
      }
    ]
  },
  {
    "id": 42,
    "title": "Dangal",
    "type": "Movie",
    "genre": [
      "Indian",
      "Drama",
      "Action"
    ],
    "year": 2016,
    "rating": 8.3,
    "duration": "2h 41m",
    "language": "Hindi",
    "poster": "https://image.tmdb.org/t/p/w500/cJRPOLEexI7qp2DKtFfCh7YaaUG.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/l0fNAHLOFReQJsxCOmGWvJDnimn.jpg",
    "description": "Dangal is an extraordinary true story based on the life of Mahavir Singh and his two daughters, Geeta and Babita Phogat. The film traces the inspirational journey of a father who trains his daughters to become world class wrestlers.",
    "platforms": [
      {
        "name": "Apple TV+",
        "url": "https://tv.apple.com/"
      },
      {
        "name": "YouTube",
        "url": "https://www.youtube.com/movies"
      }
    ]
  },
  {
    "id": 43,
    "title": "Taare Zameen Par",
    "type": "Movie",
    "genre": [
      "Indian",
      "Drama"
    ],
    "year": 2007,
    "rating": 8.3,
    "duration": "2h 45m",
    "language": "Hindi",
    "poster": "https://image.tmdb.org/t/p/w500/lmz3fQV9wrrYiTU1gCdjhAc8pZ6.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/bPwdy3zaNnMdZ22u0WCcYu0xxgt.jpg",
    "description": "सपनों की दुनिया में रहने वाले ईशान को हॉस्टल भेज दिया जाता है, जहां लीक से हट कर सोचने वाला एक टीचर उसकी कल्पना को उड़ान भरने के लिए नए पंख देता है.",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      },
      {
        "name": "YouTube",
        "url": "https://www.youtube.com/movies"
      }
    ]
  },
  {
    "id": 44,
    "title": "Zindagi Na Milegi Dobara",
    "type": "Movie",
    "genre": [
      "Indian",
      "Drama",
      "Comedy",
      "Romance"
    ],
    "year": 2011,
    "rating": 8.2,
    "duration": "2h 35m",
    "language": "Hindi",
    "poster": "https://image.tmdb.org/t/p/w500/hKO9O715wYxjkQSEv47giCYcyO8.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/z4k7b66jAHP8sQbEahxss6Ct8BW.jpg",
    "description": "Three friends who were inseparable in childhood decide to go on a three-week-long bachelor road trip to Spain, in order to re-establish their bond and explore thrilling adventures, before one of them gets married. What will they learn of themselves and each other during the adventure?",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 45,
    "title": "Andhadhun",
    "type": "Movie",
    "genre": [
      "Indian",
      "Thriller",
      "Crime",
      "Comedy"
    ],
    "year": 2018,
    "rating": 8.2,
    "duration": "2h 19m",
    "language": "Hindi",
    "poster": "https://image.tmdb.org/t/p/w500/dy3K6hNvwE05siGgiLJcEiwgpdO.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/73aKTjdQ46jpv3InqNVnV76Nl0K.jpg",
    "description": "A series of mysterious events changes the life of a blind pianist who now must report a crime that was actually never witnessed by him.",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      },
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      }
    ]
  },
  {
    "id": 46,
    "title": "Drishyam",
    "type": "Movie",
    "genre": [
      "Indian",
      "Thriller",
      "Crime",
      "Drama"
    ],
    "year": 2015,
    "rating": 8.2,
    "duration": "2h 43m",
    "language": "Hindi",
    "poster": "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/5jnoAA74Qwb5w6B9FMvnc20n6Ie.jpg",
    "description": "A simple cable TV operator in a small town goes to extreme lengths to protect his family after they commit an accidental crime against a corrupt inspector general's son.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      },
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      }
    ]
  },
  {
    "id": 47,
    "title": "Gully Boy",
    "type": "Movie",
    "genre": [
      "Indian",
      "Drama"
    ],
    "year": 2019,
    "rating": 7.9,
    "duration": "2h 34m",
    "language": "Hindi",
    "poster": "https://image.tmdb.org/t/p/w500/h57EzPdrDvtUkvbTj6ar5yZOPic.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/gcZbciueHH7WmD03GcVZX7LYqmR.jpg",
    "description": "Murad, an underdog, struggles to convey his views on social issues and life in Dharavi through rapping. His life changes drastically when he meets a local rapper, Shrikant alias MC Sher.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 48,
    "title": "Article 15",
    "type": "Movie",
    "genre": [
      "Indian",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "year": 2019,
    "rating": 8.1,
    "duration": "2h 10m",
    "language": "Hindi",
    "poster": "https://image.tmdb.org/t/p/w500/egknEWNt2B0slG2OC0gSpLZdVHj.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/wN5e6gMVBTEihohzFkuGyZGbDOw.jpg",
    "description": "A young IPS officer’s new posting in rural India has him confronting caste disparities and uncomfortable truths in the face of a gruesome crime. When three girls go missing in the fictional village of Lalgaon, two of them are found dead and there is no trace of the third one. Where is she and who is responsible for this heinous act?",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      },
      {
        "name": "YouTube",
        "url": "https://www.youtube.com/movies"
      }
    ]
  },
  {
    "id": 49,
    "title": "Stree",
    "type": "Movie",
    "genre": [
      "Indian",
      "Comedy",
      "Horror"
    ],
    "year": 2018,
    "rating": 7.5,
    "duration": "2h 8m",
    "language": "Hindi",
    "poster": "https://image.tmdb.org/t/p/w500/bajajkoErDst0JxdFyBkABiF9rW.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/wGwSWDG3LIQxchg2M8HV7bDqYKU.jpg",
    "description": "In the small town of Chanderi, the menfolk live in fear of an evil spirit named 'Stree' who abducts men in the night during annual festivals.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      },
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      }
    ]
  },
  {
    "id": 50,
    "title": "Tumbbad",
    "type": "Movie",
    "genre": [
      "Indian",
      "Horror",
      "Drama",
      "Thriller"
    ],
    "year": 2018,
    "rating": 8.2,
    "duration": "1h 44m",
    "language": "Hindi",
    "poster": "https://image.tmdb.org/t/p/w500/z1xOCxw780WFJC5uCTMfCkQ4Agi.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/l0YKBu3LaehIFzBNjseLjx7MbaN.jpg",
    "description": "India, 1918. On the outskirts of Tumbbad, a cursed village where it always rains, Vinayak, along with his mother and his brother, care of a mysterious old woman who keeps the secret of an ancestral treasure that Vinayak gets obsessed with.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 51,
    "title": "Spirited Away",
    "type": "Movie",
    "genre": [
      "Animation",
      "Drama"
    ],
    "year": 2001,
    "rating": 8.6,
    "duration": "2h 5m",
    "language": "Japanese",
    "poster": "https://image.tmdb.org/t/p/w500/jUo8cNmU400WtZiJss45HNXlQ2e.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/dyJvKsNs2KP8qQnAXbRwDjblViy.jpg",
    "description": "एक युवा लड़की, चीहिरो, आत्माओं की एक अजीब नई दुनिया में फंस जाती है। जब उसके माता-पिता एक रहस्यमय परिवर्तन से गुजरते हैं, तो उसे उस साहस को बुलाना चाहिए जिसे वह कभी नहीं जानती थी कि उसे अपने परिवार को मुक्त करना है।",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      }
    ]
  },
  {
    "id": 52,
    "title": "Spider-Man: Into the Spider-Verse",
    "type": "Movie",
    "genre": [
      "Animation",
      "Action",
      "Superhero",
      "Sci-Fi"
    ],
    "year": 2018,
    "rating": 8.4,
    "duration": "1h 57m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/1ntePsIqeklfmrQJqZPncCydsqY.jpg",
    "description": "ब्रुकलिन के नौजवान माइल्स मोरालेस को एक रेडियोऐक्टिव मकड़ी काट लेती है. बाद में, माइल्स के ही वैकल्पिक आयाम से आए कुछ साथी उसे जाल फैंकना वगैरह सिखाते हैं.",
    "platforms": [
      {
        "name": "SonyLIV",
        "url": "https://www.sonyliv.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 53,
    "title": "RRR",
    "type": "Movie",
    "genre": [
      "Indian",
      "Action",
      "Drama"
    ],
    "year": 2022,
    "rating": 7.8,
    "duration": "3h 7m",
    "language": "Telugu",
    "poster": "https://image.tmdb.org/t/p/w500/tjpiEnZBUAA8pdNPRKa5vP2Zpqw.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/i0Y0wP8H6SRgjr6QmuwbtQbS24D.jpg",
    "description": "A fearless warrior on a perilous mission comes face to face with a steely cop serving the British forces in pre-independent India.",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      },
      {
        "name": "ZEE5",
        "url": "https://www.zee5.com/"
      }
    ]
  },
  {
    "id": 54,
    "title": "Gladiator",
    "type": "Movie",
    "genre": [
      "Action",
      "Drama"
    ],
    "year": 2000,
    "rating": 8.5,
    "duration": "2h 35m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/nX8iYh2PiClqTKxgxu8r8HHXlJW.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/oyxrOyl30Q37fbFolIO5kPWNWJT.jpg",
    "description": "In a post-apocalyptic Texas, a band of warriors fight against a fascist regime that is trying to take control of all surviving population.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      },
      {
        "name": "Apple TV+",
        "url": "https://tv.apple.com/"
      }
    ]
  },
  {
    "id": 55,
    "title": "Shutter Island",
    "type": "Movie",
    "genre": [
      "Thriller",
      "Drama"
    ],
    "year": 2010,
    "rating": 8.2,
    "duration": "2h 18m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/nrmXQ0zcZUL8jFLrakWc90IR8z9.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/rbZvGN1A1QyZuoKzhCw8QPmf2q0.jpg",
    "description": "World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by troubling visions and a mysterious doctor.",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 56,
    "title": "The Silence of the Lambs",
    "type": "Movie",
    "genre": [
      "Thriller",
      "Crime",
      "Drama"
    ],
    "year": 1991,
    "rating": 8.6,
    "duration": "1h 58m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/mbOx1wxMLikzwWUO9TKAcFIy6op.jpg",
    "description": "Clarice Starling is a top student at the FBI's training academy.  Jack Crawford wants Clarice to interview Dr. Hannibal Lecter, a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism.  Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 57,
    "title": "Coco",
    "type": "Movie",
    "genre": [
      "Animation",
      "Comedy",
      "Drama"
    ],
    "year": 2017,
    "rating": 8.4,
    "duration": "1h 45m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/olRSTQXTNRPwIUIjbeVs5LGrYGC.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/ry4aOGPuyt4Nz3B67cOJuOqXYAz.jpg",
    "description": "Bernadinho and Pedro are students and face the classic tasks of fulfilling school obligations, taking good grades, being well behaved and complying with school rules, increasingly elaborated thanks to director Ademar. Frustrated, Pedro ends up finding a diary of how to cause chaos in school without being caught, which leads the two friends to follow the tips of the notebook.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      }
    ]
  },
  {
    "id": 58,
    "title": "La La Land",
    "type": "Movie",
    "genre": [
      "Romance",
      "Comedy",
      "Drama"
    ],
    "year": 2016,
    "rating": 8,
    "duration": "2h 8m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/nlPCdZlHtRNcF6C9hzUH4ebmV1w.jpg",
    "description": "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
    "platforms": [
      {
        "name": "SonyLIV",
        "url": "https://www.sonyliv.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 59,
    "title": "Get Out",
    "type": "Movie",
    "genre": [
      "Horror",
      "Thriller",
      "Drama"
    ],
    "year": 2017,
    "rating": 7.8,
    "duration": "1h 44m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/eIeI1j2e0Gg6aX2bQ1k9vY9k4M8.jpg",
    "description": "Chris and his girlfriend Rose have reached the meet-the-parents milestone of dating. But as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he could have never imagined.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 60,
    "title": "A Quiet Place",
    "type": "Movie",
    "genre": [
      "Horror",
      "Sci-Fi",
      "Thriller"
    ],
    "year": 2018,
    "rating": 7.5,
    "duration": "1h 30m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/roYyPiQDZsnkRIJn2xJ15TZAFlU.jpg",
    "description": "A family is forced to navigate an invaded post-apocalyptic world in complete silence while hiding from monsters with ultra-sensitive hearing.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      },
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      }
    ]
  },
  {
    "id": 61,
    "title": "Hereditary",
    "type": "Movie",
    "genre": [
      "Horror",
      "Drama",
      "Thriller"
    ],
    "year": 2018,
    "rating": 7.3,
    "duration": "2h 7m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/4GFPuL14eXi66V96xBWY73Y9PfR.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/gJbTXKNTL6O7r7PzF6ZRkJGBlPp.jpg",
    "description": "Following the death of the Leigh family matriarch, Annie and her children uncover disturbing secrets about their heritage. Their daily lives are not only impacted, but they also become entangled in a chilling fate from which they cannot escape, driving them to the brink of madness.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 62,
    "title": "Dune: Part Two",
    "type": "Movie",
    "genre": [
      "Sci-Fi",
      "Action",
      "Drama"
    ],
    "year": 2024,
    "rating": 8.6,
    "duration": "2h 46m",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/3HzGtM0JpfH2pWFGugJK22LRP6b.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/eZ239CUp1d6OryZEBPnO2n87gMG.jpg",
    "description": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      },
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ]
  },
  {
    "id": 101,
    "title": "Breaking Bad",
    "type": "Series",
    "genre": [
      "Drama",
      "Crime",
      "Thriller"
    ],
    "year": 2008,
    "rating": 9.5,
    "duration": "5 Seasons (62 eps)",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/anFx9aTOOYqgS3v7x3R84Kz67ly.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    "description": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's financial future.",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      }
    ],
    "seasons": 5,
    "episodes": 62
  },
  {
    "id": 102,
    "title": "Stranger Things",
    "type": "Series",
    "genre": [
      "Sci-Fi",
      "Horror",
      "Drama"
    ],
    "year": 2016,
    "rating": 8.7,
    "duration": "4 Seasons (34 eps)",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/9P4IIMYY3HifqeruZq0ZZ9g7YUi.jpg",
    "description": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      }
    ],
    "seasons": 4,
    "episodes": 34
  },
  {
    "id": 103,
    "title": "Dark",
    "type": "Series",
    "genre": [
      "Sci-Fi",
      "Thriller",
      "Crime",
      "Drama"
    ],
    "year": 2017,
    "rating": 8.7,
    "duration": "3 Seasons (26 eps)",
    "language": "German",
    "poster": "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/75HgaphatW0PDI3XIHQWZUpbhn6.jpg",
    "description": "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations in a small German town.",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      }
    ],
    "seasons": 3,
    "episodes": 26
  },
  {
    "id": 104,
    "title": "The Boys",
    "type": "Series",
    "genre": [
      "Superhero",
      "Action",
      "Comedy",
      "Drama"
    ],
    "year": 2019,
    "rating": 8.7,
    "duration": "4 Seasons (32 eps)",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/in1R2dDc421JxsoRWaIIAqVI2KE.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/bq28ajZaoMyzEIm6REelqyqtEDZ.jpg",
    "description": "A fun and irreverent take on what happens when superheroes—who are as popular as celebrities and revered as gods—abuse their superpowers rather than use them for good.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      }
    ],
    "seasons": 4,
    "episodes": 32
  },
  {
    "id": 105,
    "title": "The Last of Us",
    "type": "Series",
    "genre": [
      "Drama",
      "Sci-Fi",
      "Horror",
      "Action"
    ],
    "year": 2023,
    "rating": 8.8,
    "duration": "1 Season (9 eps)",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/lY2DhbA7Hy44fAKddr06UrXWWaQ.jpg",
    "description": "Twenty years after a fungal outbreak ravages the planet, survivors Joel and Tess are tasked with a mission that could change everything.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      }
    ],
    "seasons": 1,
    "episodes": 9
  },
  {
    "id": 106,
    "title": "Wednesday",
    "type": "Series",
    "genre": [
      "Comedy",
      "Horror",
      "Crime"
    ],
    "year": 2022,
    "rating": 8.1,
    "duration": "1 Season (8 eps)",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/avzWIWe6FWZi7r1qJeQZcDTv3Ex.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
    "description": "A sleuthing, supernaturally infused mystery charting Wednesday Addams' years as a student at Nevermore Academy.",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      }
    ],
    "seasons": 1,
    "episodes": 8
  },
  {
    "id": 107,
    "title": "Money Heist",
    "type": "Series",
    "genre": [
      "Crime",
      "Thriller",
      "Action",
      "Drama"
    ],
    "year": 2017,
    "rating": 8.2,
    "duration": "5 Seasons (41 eps)",
    "language": "Spanish",
    "poster": "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg",
    "description": "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose.",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      }
    ],
    "seasons": 5,
    "episodes": 41
  },
  {
    "id": 108,
    "title": "Peaky Blinders",
    "type": "Series",
    "genre": [
      "Crime",
      "Drama"
    ],
    "year": 2013,
    "rating": 8.8,
    "duration": "6 Seasons (36 eps)",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/dzq83RHwQcnP6WGJ6YkenIqeaa5.jpg",
    "description": "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      }
    ],
    "seasons": 6,
    "episodes": 36
  },
  {
    "id": 109,
    "title": "Sherlock",
    "type": "Series",
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "year": 2010,
    "rating": 9.1,
    "duration": "4 Seasons (13 eps)",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/8rvLEmdI4gLrMO1rLqbNdnNcPFE.jpg",
    "description": "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
    "platforms": [
      {
        "name": "Amazon Prime Video",
        "url": "https://www.primevideo.com/"
      },
      {
        "name": "SonyLIV",
        "url": "https://www.sonyliv.com/"
      }
    ],
    "seasons": 4,
    "episodes": 13
  },
  {
    "id": 110,
    "title": "The Office",
    "type": "Series",
    "genre": [
      "Comedy"
    ],
    "year": 2005,
    "rating": 9,
    "duration": "9 Seasons (201 eps)",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/7DJKHzAi83BmQrWLrYYOqcoKfhR.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/mLyW3UTgi2lsMdtueYODcfAB9Ku.jpg",
    "description": "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      },
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      }
    ],
    "seasons": 9,
    "episodes": 201
  },
  {
    "id": 111,
    "title": "Better Call Saul",
    "type": "Series",
    "genre": [
      "Crime",
      "Drama"
    ],
    "year": 2015,
    "rating": 9,
    "duration": "6 Seasons (63 eps)",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/rfxryDIv8huejujg4JueDJx8zCz.jpg",
    "description": "The trials and tribulations of criminal lawyer Jimmy McGill in the years leading up to his fateful run-in with Walter White and Jesse Pinkman.",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      }
    ],
    "seasons": 6,
    "episodes": 63
  },
  {
    "id": 112,
    "title": "Game of Thrones",
    "type": "Series",
    "genre": [
      "Drama",
      "Action"
    ],
    "year": 2011,
    "rating": 9.2,
    "duration": "8 Seasons (73 eps)",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/seGbGCqUI1DzYndRekrpuBQS64k.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/zZqpAXxVSBtxV9qPBcscfXBcL2w.jpg",
    "description": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      }
    ],
    "seasons": 8,
    "episodes": 73
  },
  {
    "id": 113,
    "title": "The Mandalorian",
    "type": "Series",
    "genre": [
      "Sci-Fi",
      "Action"
    ],
    "year": 2019,
    "rating": 8.7,
    "duration": "3 Seasons (24 eps)",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/9zcbqSxdsRMZWHYtyCd1nXPr2xq.jpg",
    "description": "After the fall of the Galactic Empire, a lone gunfighter makes his way through the outer reaches of the lawless galaxy.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      }
    ],
    "seasons": 3,
    "episodes": 24
  },
  {
    "id": 114,
    "title": "Black Mirror",
    "type": "Series",
    "genre": [
      "Sci-Fi",
      "Thriller",
      "Drama"
    ],
    "year": 2011,
    "rating": 8.7,
    "duration": "6 Seasons (27 eps)",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/seN6rRfN0I6n8iDXjlSMk1QjNcq.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/dg3OindVAGZBjlT3xYKqIAdukPL.jpg",
    "description": "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      }
    ],
    "seasons": 6,
    "episodes": 27
  },
  {
    "id": 115,
    "title": "Squid Game",
    "type": "Series",
    "genre": [
      "Thriller",
      "Drama",
      "Action"
    ],
    "year": 2021,
    "rating": 8,
    "duration": "2 Seasons (16 eps)",
    "language": "Korean",
    "poster": "https://image.tmdb.org/t/p/w500/iE21DSI3n5vI6v1W2HT4feKoM97.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/2meX1nMdScFOoV4370rqHWKmXhY.jpg",
    "description": "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
    "platforms": [
      {
        "name": "Netflix",
        "url": "https://www.netflix.com/"
      }
    ],
    "seasons": 2,
    "episodes": 16
  },
  {
    "id": 116,
    "title": "Succession",
    "type": "Series",
    "genre": [
      "Drama"
    ],
    "year": 2018,
    "rating": 8.9,
    "duration": "4 Seasons (39 eps)",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/z0XiwdrCQ9yVIr4O0pxzaAYRxdW.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/d87JXX3DLkRJMfm5StCmmnmhHuX.jpg",
    "description": "The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their aging father steps down from the company.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      }
    ],
    "seasons": 4,
    "episodes": 39
  },
  {
    "id": 117,
    "title": "Severance",
    "type": "Series",
    "genre": [
      "Sci-Fi",
      "Thriller",
      "Drama"
    ],
    "year": 2022,
    "rating": 8.7,
    "duration": "1 Season (9 eps)",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/fAzHg1AB7ZleOnnxip85DNu165d.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/ixgFmf1X59PUZam2qbAfskx2gQr.jpg",
    "description": "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives.",
    "platforms": [
      {
        "name": "Apple TV+",
        "url": "https://tv.apple.com/"
      }
    ],
    "seasons": 1,
    "episodes": 9
  },
  {
    "id": 118,
    "title": "Chernobyl",
    "type": "Series",
    "genre": [
      "Drama",
      "Thriller"
    ],
    "year": 2019,
    "rating": 9.3,
    "duration": "1 Season (5 eps)",
    "language": "English",
    "poster": "https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/900tHlUYUkp7Ol04XFSoAaEIXcT.jpg",
    "description": "Dramatizes the true story of the 1986 nuclear accident, one of the worst human-made catastrophes in history, and the sacrifices made to save Europe from unimaginable disaster.",
    "platforms": [
      {
        "name": "JioHotstar",
        "url": "https://www.hotstar.com/"
      }
    ],
    "seasons": 1,
    "episodes": 5
  }
];

// Derived collections for easy access
const movies = cinevaultData.filter(item => item.type === "Movie");
const series = cinevaultData.filter(item => item.type === "Series");
const allTitles = cinevaultData;

// Available Genres list
const ALL_GENRES = [
  "All",
  "Action",
  "Sci-Fi",
  "Thriller",
  "Drama",
  "Comedy",
  "Horror",
  "Romance",
  "Animation",
  "Superhero",
  "Indian",
  "Crime"
];

// Reusable database helper functions
function getTitleById(id) {
  const numericId = parseInt(id, 10);
  return cinevaultData.find(item => item.id === numericId) || null;
}

function searchTitles(query) {
  if (!query || typeof query !== "string") return [...cinevaultData];
  const q = query.trim().toLowerCase();
  return cinevaultData.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(q);
    const genreMatch = item.genre.some(g => g.toLowerCase().includes(q));
    const yearMatch = item.year.toString().includes(q);
    const typeMatch = item.type.toLowerCase().includes(q);
    return titleMatch || genreMatch || yearMatch || typeMatch;
  });
}

function filterByGenre(titles, genre) {
  if (!genre || genre === "All") return [...titles];
  return titles.filter(item => item.genre.includes(genre));
}

function filterByType(titles, type) {
  if (!type || type === "All") return [...titles];
  return titles.filter(item => item.type.toLowerCase() === type.toLowerCase());
}

function sortTitles(titles, sortOption) {
  const list = [...titles];
  switch (sortOption) {
    case "Highest Rated":
      return list.sort((a, b) => b.rating - a.rating);
    case "Newest":
      return list.sort((a, b) => b.year - a.year);
    case "Oldest":
      return list.sort((a, b) => a.year - b.year);
    case "A-Z":
      return list.sort((a, b) => a.title.localeCompare(b.title));
    case "Popular":
    default:
      return list.sort((a, b) => {
        // High rated and more recent titles favored
        return (b.rating * 2 + (b.year >= 2010 ? 1 : 0)) - (a.rating * 2 + (a.year >= 2010 ? 1 : 0));
      });
  }
}
