import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "News18" },
      author: "Chirag Sehgal",
      title: "Kiara Advani on Marrying Sidharth Malhotra at Peak of Career: ‘There Was Lot of Chatter Why She Is…’ - News18",
      description: "Kiara Advani has also confirmed that she has signed two of her career's biggest films after her marriage.",
      url: "https://www.news18.com/movies/kiara-advani-on-marrying-sidharth-malhotra-at-peak-of-career-there-was-lot-of-chatter-why-she-is-8790874.html",
      urlToImage: "https://images.news18.com/ibnlive/uploads/2023/12/fotojet-38-2023-12-d0d659aeda96c45793ddec8424b5703d-16x9.jpg?impolicy=website&width=1200&height=675",
      publishedAt: "2024-02-24T07:58:30Z",

    },
    {
      source: { id: "news24", name: "News24" },
      author: "Sibusiso Mjikeliso",
      title:
        "Cricket SA wants to 'get to the bottom' of Nkwe resignation concerns, says CEO | Sport",
      description:
        "Acting Cricket South Africa CEO Pholetsi Moseki says the board is concerned about the issues former Proteas assistant coach Enoch Nkwe raised in his resignation.",
      url: "https://www.news24.com/sport/Cricket/Proteas/cricket-sa-wants-to-get-to-the-bottom-of-nkwe-resignation-concerns-says-ceo-20210826",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg",
      publishedAt: "2024-02-25T09:31:55.523Z",
      content:
        '<ul><li>Cricket South Africa has committed to "getting to the bottom" of Enoch Nkwe\'s sudden resignation as Proteas assistant coach. </li><li>Nkwe voiced concerns with the current culture and working… [+3497 chars]',
    },
    {
      source: { id: "abc-news-au", name: "ABC News (AU)" },
      author: "ABC News",
      title: "England cricket great Ted Dexter dies aged 86",
      description:
        'The former England captain, nicknamed "Lord Ted", is fondly remembered as a giant of the game and one of his country\'s greatest players.',
      url: "http://www.abc.net.au/news/2021-08-26/england-cricket-great-ted-dexter-dies-aged-86/100411276",
      urlToImage:
        "https://live-production.wcms.abc-cdn.net.au/1006c7ecf34ec0935eef2aade5017711?impolicy=wcms_crop_resize&cropH=2815&cropW=5004&xPos=0&yPos=223&width=862&height=485",
      publishedAt: "2021-08-26T09:07:52Z",
      content:
        "Former England captain Ted Dexter has died aged 86 following a recent illness.\r\n<ul><li>Dexter played 62 Tests for England and was captain on 30 occasions</li><li>He was inducted into the ICC Hall of… [+1746 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info2", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
    {
      source: { id: "toi2345", name: "Times Of India" },
      author: null,
      title:
        "Bharat Ratna for Chaudhary Charan Singh, PV Narasimha Rao Garu and M S Swaminathan",
      description:
        "India's government honored Chaudhary Charan Singh, PV Narasimha Rao, and Dr MS Swaminathan with the Bharat Ratna Singh's dedication to farmers' welfare, Ra",
      url: "https://timesofindia.indiatimes.com/india/bharat-ratna-for-chaudhary-charan-singh-pv-narasimha-rao-garu-and-m-s-swaminathan/articleshow/107548965.cms?from=mdr",
      urlToImage:
        "https://static.toiimg.com/thumb/imgsize-630882,msid-107549963,width-600,resizemode-4/107549963.jpg",
      publishedAt: "Feb 9, 2024, 14:11 IST",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
    {
      source: { id: null, name: null },
      author: null,
      title: null,
      description: null,
      url: null,
      urlToImage: null,
      publishedAt: "Feb 9, 2024, 14:11 IST",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "\"I'm Going To Punish You\": PM Modi's Banter With MPs At Parliament Canteen - NDTV",
      description:
        "He came. He ate with them. And, reports suggest, he won them over.",
      url: "https://www.ndtv.com/india-news/inside-pm-modis-impromptu-lunch-with-mps-at-parliament-canteen-5025263",
      urlToImage:
        "https://c.ndtvimg.com/2024-02/m29p6u5c_pm-modi-mps-lunch-1200_625x300_09_February_24.jpeg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240117.06",
      publishedAt: "2024-02-09T12:29:11Z",
      content:
        "PM Modi seen eating lunch with fellow MPs at parliament canteen\r\nHe came. He ate with them. And, reports suggest, he won them over.\r\nPrime Minister Narendra Modi caught fellow MPs by surprise when he… [+1323 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "The Indian Express",
      title:
        "Mimas, Saturn's 'Death Star' moon may have a hidden ocean - The Indian Express",
      description: null,
      url: "https://indianexpress.com/article/technology/science/mimas-saturn-moon-death-star-ocean-9153277/",
      urlToImage: null,
      publishedAt: "2024-02-09T12:12:44Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        '"Not True...": AB De Villiers\' Stunning U-Turn After Comment On Virat Kohli, Anushka Sharma - NDTV Sports',
      description:
        "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
      url: "https://news.google.com/rss/articles/CBMijAFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9jcmlja2V0L25vdC10cnVlLWFiLWRlLXZpbGxpZXJzLXN0dW5uaW5nLXUtdHVybi1hZnRlci12aXJhdC1rb2hsaS1hbnVzaGthLXNoYXJtYS1leHBlY3RpbmctMm5kLWNoaWxkLWNvbW1lbnQtNTAyMzEzONIBkgFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9jcmlja2V0L25vdC10cnVlLWFiLWRlLXZpbGxpZXJzLXN0dW5uaW5nLXUtdHVybi1hZnRlci12aXJhdC1rb2hsaS1hbnVzaGthLXNoYXJtYS1leHBlY3RpbmctMm5kLWNoaWxkLWNvbW1lbnQtNTAyMzEzOC9hbXAvMQ",
      urlToImage:
        "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
      publishedAt: "2024-02-09T12:05:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "India Today Science Desk",
      title:
        "Watch LIVE: Four Axiom-3 astronauts splashdown after 288 orbits around Earth - India Today",
      description:
        "Ax-3 has been particularly notable for its crew composition featuring government and European Space Agency ESA-sponsored national astronauts and marking several historic firsts in the annals of space exploration",
      url: "https://www.indiatoday.in/science/story/watch-live-four-axiom-3-astronauts-splashdown-after-288-orbits-around-earth-2499803-2024-02-09",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/dragon-spacecraft-095538285-16x9_0.jpg?VersionId=2lDt7kA3JuCxrUwYdr.3z3keby8DWumH",
      publishedAt: "2024-02-09T12:00:18Z",
      content:
        "After an epic 18-day voyage in space, encompassing 288 orbits and covering a staggering 7.6 million miles, the Axiom-3 (Ax-3) crew is set to splash down on Earth. \r\nThe four astronauts bid farewell t… [+1292 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "IRFC Q3 Results: Net profit declines 1.7% YoY to ₹1,604 crore, revenue rises by 8% YoY to ₹6,742 crore | Mint - Mint",
      description:
        "IRFC Q3 Results: Net profit dropped by 1.7% YoY to  ₹1604 crore in Q3 FY24",
      url: "https://www.livemint.com/companies/company-results/irfc-q3-results-net-profit-increases-to-rs-1604-crore-net-revenue-indian-railway-finance-corporation-stock-price-11707478999603.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2024/02/09/1600x900/IRFC_shares_1707481080555_1707481080904.jpg",
      publishedAt: "2024-02-09T11:47:33Z",
      content:
        "IRFC Q3 Results: Net profit dropped by 1.7% YoY to 1,604 crore in the December quarter. The company had reported a net profit of 1,633 crore in Q3 FY23. The Indian Railway PSU reported an 8% annual r… [+1653 chars]",
    },
    {
      source: {
        id: null,
        name: "Koimoi",
      },
      author: "Trisha Gaur",
      title:
        "Teri Baaton Mein Aisa Uljha Jiya Box Office Collection Day 1 VS Shahid Kapoor’s 1st Opening Day: With 1032% Jump, The Robot-Romance Might Cross Entire Lifetime Collection Of SK’s 1st Hit! - Koimoi",
      description:
        "Teri Baaton Mein Aisa Uljha Jiya box office day 1 might need 85 crore to match the success of Shahid Kapoor's debut film!",
      url: "https://www.koimoi.com/box-office/teri-baaton-mein-aisa-uljha-jiya-box-office-collection-day-1-vs-shahid-kapoors-1st-opening-day-with-1032-jump-the-robot-romance-might-cross-entire-lifetime-collection-of-sks-1st-hit/",
      urlToImage:
        "https://static-koimoi.akamaized.net/wp-content/new-galleries/2024/02/shahid.jpg",
      publishedAt: "2024-02-09T10:56:28Z",
      content:
        "Teri Baaton Mein Aisa Uljha Jiya Box Office Collection Day 1 VS Shahid Kapoor’s 1st Opening Day – Stats (Picture Credit: IMDB &amp; Youtube)\r\nShahid Kapoor and Kriti Sanon’s Teri Baaton Mein Aisa Ulj… [+2677 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT News Desk",
      title:
        "Watch: Former KGB agent Vladimir Putin mocks Tucker Carlson for not getting into CIA - Hindustan Times",
      description:
        "This seemed to flabbergast the former Fox News host who perhaps didn’t expect Putin to have that information.",
      url: "https://www.hindustantimes.com/world-news/us-news/watch-former-kgb-agent-vladimir-putin-mocks-tucker-carlson-for-not-getting-into-cia-101707474964597.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/02/09/1600x900/tucker_putin_1707475272979_1707475279902.jpg",
      publishedAt: "2024-02-09T10:46:36Z",
      content:
        "There have been numerous talking points from Tucker Carlsons long conversation with Vladimir Putin but one interesting one was where Vladimir Putin, a dyed-in-the-wool KGB man, mocked Tucker Carlson … [+2725 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT News Desk",
      title:
        "After RBI curbs, now EPFO blocks Paytm Payments Bank - Hindustan Times",
      description:
        "The EPFO, with a corpus of over 18 trillion rupees and covering nearly 30 crore workers, had allowed the Paytm Payments Bank to settle claims in November",
      url: "https://www.hindustantimes.com/business/after-rbi-curbs-now-epfo-blocks-paytm-payments-bank-101707473714558.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/02/09/1600x900/epfo_1707474519469_1707474519767.jpg",
      publishedAt: "2024-02-09T10:41:55Z",
      content:
        "More trouble for Paytm Payments Bank as the Employees' Provident Fund (EPFO) has now asked its officers to refrain from accepting claims associated with the Paytm subsidiary. \r\nIn a circular issued o… [+2038 chars]",
    },
    {
      source: {
        id: null,
        name: "Cricket.one",
      },
      author: "Aakash Saini",
      title:
        "[Watch] David Warner Scoops Holder For A Blazing Start In Landmark T20I Vs WI - OneCricket",
      description:
        "Australian opening batsman David Warner crashes West Indies paceman Jason Holder with a thumping boundary over short fine in the first T20I of their three-match series.",
      url: "https://cricket.one/match-hub/watch-david-warner-scoops-holder-for-a-blazing-start-in-landmark-t20i-vs-wi/65c5fabdc9fd7d3002117fa8",
      urlToImage:
        "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1707473505655_Untitled design (12).jpg",
      publishedAt: "2024-02-09T10:13:17Z",
      content:
        "David Warner celebrating his 22-ball 50 against WI (x.com)\r\nAustralian opener David Warner listed a belligerent 70 against West Indies in the series-opening first T20I at Hobart. After making his int… [+1481 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Vaibhav Tiwari",
      title:
        "BJP, PV Narasimha Rao's grandson attack Gandhi family after move - Hindustan Times",
      description:
        "After Bharat Ratna for PV Narasimha Rao, his grandson NV Subhash said the Gandhi family was instrumental in making him a scapegoat for their own failures | Latest News India",
      url: "https://www.hindustantimes.com/india-news/bjp-pv-narasimha-raos-grandson-attack-gandhi-family-after-bharat-ratna-announcement-101707473281240.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/02/09/1600x900/Narsimha_Rao_1707473437405_1707473440020.jfif",
      publishedAt: "2024-02-09T10:11:53Z",
      content:
        "New Delhi: NV Subhash, the grandson of late prime minister PV Narasimha Rao, slammed the Gandhi family on Friday after the Centre announced Bharat Ratna for the iconic politician, saying they were in… [+4149 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "NASA launches new climate mission to study ocean | WION Climate Tracker - WION",
      description:
        "SpaceX launches NASA's pace satellite to study earth's oceans, air and climate.#nasa #spacex #spaceAbout Channel: WION The World is One News examines global ...",
      url: "https://www.youtube.com/watch?v=gIQgNHNKgwU",
      urlToImage: "https://i.ytimg.com/vi/gIQgNHNKgwU/maxresdefault.jpg",
      publishedAt: "2024-02-09T08:58:51Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "India Today News Desk",
      title:
        "Jagan Reddy meets PM Modi day after rival Chandrababu Naidu meets Amit Shah - India Today",
      description:
        "Andhra Pradesh Chief Minister Jagan Mohan Reddy on Friday met PM Modi a day afterTDP president Chandrababu Naidu met Union Home Minister Amit Shah and BJP chief JP Nadda",
      url: "https://www.indiatoday.in/india/story/jagan-reddy-meets-pm-modi-day-after-rival-chandrababu-naidu-meets-amit-shah-2499716-2024-02-09",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/jagan-reddy-094333217-16x9_0.jpg?VersionId=ivJTvM_Te49zHcU8J2z1AG362uW7ilym",
      publishedAt: "2024-02-09T08:39:12Z",
      content:
        "Andhra Pradesh Chief Minister Jagan Mohan Reddy today met Prime Minister Narendra Modi and sought special category status for the state, party sources said, news agency PTI reported.\r\nThe Prime Minis… [+1044 chars]",
    },
    {
      source: {
        id: null,
        name: "Livelaw.in",
      },
      author: "Debby Jain",
      title:
        "'Could Preamble Have Been Amended While Keeping The Date Intact?' Supreme Court Asks In Plea To Delete... - Live Law - Indian Legal News",
      description:
        'In a public interest litigation filed by former Rajya Sabha MP Dr. Subramanian Swamy seeking to delete the words "Socialist" & "Secular" from the Preamble to the Constitution of India, the Supreme...',
      url: "https://www.livelaw.in/top-stories/supreme-court-plea-to-delete-words-socialist-secular-from-preamble-249043",
      urlToImage:
        "https://www.livelaw.in/h-upload/2024/02/09/521346-preamble-and-sc.jpg",
      publishedAt: "2024-02-09T08:13:24Z",
      content:
        'In a public interest litigation filed by former Rajya Sabha MP Dr. Subramanian Swamy seeking to delete the words "Socialist" &amp; "Secular" from the Preamble to the Constitution of India, the Suprem… [+2344 chars]',
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "Abhishek Ghosalkar murder: From Devendra Fadnavis to Ajit Pawar, here's what political leaders said | Mint - Mint",
      description:
        "The murder of Abhishek Ghosalkar, a Shiv Sena (UBT) leader, during a Facebook Live has led to demands for Deputy Chief Minister Devendra Fadnavis' resignation. The incident has raised concerns about the law and order situation in Maharashtra.",
      url: "https://www.livemint.com/news/india/abhishek-ghosalkar-murder-from-devendra-fadnavis-to-ajit-pawar-heres-what-political-leaders-said-11707459134121.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2024/02/09/1600x900/Abhishek_Ghosalkar_1707460217926_1707460234391.jpg",
      publishedAt: "2024-02-09T08:12:01Z",
      content:
        "Several senior politicians have described the murder of Shiv Sena (UBT) leader Abhishek Ghosalkar as 'unfortunate' who was shot dead during a `Facebook Live' by a local `social activist'.\r\n Maharasht… [+3245 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TOI Sports Desk",
      title:
        "Injured Shreyas Iyer may miss last three Tests against England: Report - Times of India",
      description:
        "Cricket News: Another setback hits the Indian team as batsman Shreyas Iyer grapples with back and groin injuries, potentially sidelining him for the final three Tes",
      url: "https://timesofindia.indiatimes.com/sports/cricket/england-in-india/injured-shreyas-iyer-may-miss-last-three-tests-against-england-report/articleshow/107550279.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-107550378,width-1070,height-580,imgsize-46316,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-02-09T07:56:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Business Standard",
      },
      author: "Press Trust of India",
      title:
        "Govt push puts spotlight on cervical cancer, experts hope for turning point - Business Standard",
      description:
        "Cervical cancer is at the centrestage of public health concern with the government's push for vaccinations in the Union interim budget, a move that is a potential game changer for the disease that kills more than 77,000 women in India each year.",
      url: "https://www.business-standard.com/health/govt-push-puts-spotlight-on-cervical-cancer-experts-hope-for-turning-point-124020900475_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/14/full/1705251685-6527.jpg",
      publishedAt: "2024-02-09T07:47:03Z",
      content:
        "The battle is complex and tough, they admitted, but governmental intervention will make a difference\r\nRepresentational image\r\nPress Trust of IndiaNew Delhi\r\nCervical cancer is at the centrestage of p… [+6686 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Nikhil Agarwal",
      title:
        "Jefferies downgrades ITC, cuts target price by Rs 90. It's not just about BAT - The Economic Times",
      description:
        "BAT's potential stake sale in ITC could result in a supply overhang of about $2.5 billion. BAT is facing challenges from declining cigarette volumes in key markets, including the US. The company also holds $40 billion in net debt, accounting for 3x Ebitda and…",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/jefferies-downgrades-itc-cuts-target-price-by-rs-90-its-not-just-about-bat/articleshow/107548448.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-107549201,width-1200,height-630,imgsize-9020,overlay-etmarkets/photo.jpg",
      publishedAt: "2024-02-09T07:18:45Z",
      content:
        "ITC shares, which ended 4% lower on Thursday after its largest shareholder British American Tobacco (BAT) confirmed its intent to divest stake, were in focus today with Jefferies downgrading the Nift… [+2488 chars]",
    },
    {
      source: {
        id: null,
        name: "Pragativadi.com",
      },
      author: "Itishree Sethy",
      title:
        "Apollo Asteroid To Pass Earth At Breakneck 27463 Kmph Today: NASA - Pragativadi",
      description:
        "Washington: As per the details issued by NASA's Center for Near-Earth Object Studies (CNEOS), the asteroid 2024 CJ1 is expected to pass Earth at a distance of just 367,000 kilometres today, which is closer to Earth than the Moon.It is one of the clos",
      url: "https://pragativadi.com/apollo-asteroid-to-pass-earth-at-breakneck-27463-kmph-today-nasa/",
      urlToImage:
        "https://pragativadi.com/wp-content/uploads/2024/02/713318230.jpg",
      publishedAt: "2024-02-09T07:04:38Z",
      content:
        "Washington: As per the details issued by NASA’s Center for Near-Earth Object Studies (CNEOS), the asteroid 2024 CJ1 is expected to pass Earth at a distance of just 367,000 kilometres today, which is … [+1076 chars]",
    },
    {
      source: {
        id: null,
        name: "Editorji.com",
      },
      author: "Editorji News Desk",
      title:
        "iPhone 15 sees big price drop on Flipkart, includes massive discount for Valentine's Day - Editorji",
      description:
        "iPhone 15 price drops on Flipkart to Rs 65,999. Offers and specs make it an attractive buy: 6.1-inch OLED, A16 chip, dual cameras, and IP68 certification.",
      url: "https://www.editorji.com/tech-news/iphone-15-sees-big-price-drop-on-flipkart-includes-massive-discount-for-valentine-s-day-1707461863835",
      urlToImage: "https://cdn.editorji.com/WopSehckp7.jpg",
      publishedAt: "2024-02-09T06:57:43Z",
      content:
        "The Apple iPhone 15, launched in September 2023, has witnessed a significant price reduction on the Indian e-commerce platform Flipkart. This development presents a compelling opportunity for consume… [+1307 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        'Biden Says No "Memory Loss", Then Calls Egypt President Leader Of Mexico - NDTV',
      description:
        "President Joe Biden forcefully - and at times angrily - sought to combat suggestions his acuity was declining in a hastily-arranged press conference Thursday night.",
      url: "https://www.ndtv.com/world-news/biden-says-no-memory-loss-then-calls-egypt-president-leader-of-mexico-5023823",
      urlToImage:
        "https://c.ndtvimg.com/2023-01/2k20ol7g_joe-biden-bloomberg_625x300_15_January_23.jpg",
      publishedAt: "2024-02-09T06:51:34Z",
      content:
        "The 81-year-old leader may have made his biggest election-year liability worse.\r\nPresident Joe Biden forcefully - and at times angrily - sought to combat suggestions his acuity was declining in a has… [+4998 chars]",
    },
  ];
//constructor: jb b class ka koi obj instatntiate hta h tb constructor() run hta h yeh render method se b pehle run hta h
//                                              |
//                                              v
//render method ke andar component ke state ko chnge(modify) nhi kr skte h. render() should be pure
//                                              |
//                                              v
//(yh pe DOM update ho gi fhir componentDidMount() run hga): updating kb hgi? jb new props ayenge, jb kahi se set stae chlega, jb (force state) hga tb
//componentDidMount(): after compnnet output has been  render componentDidMount() will run: her we fetch the data, use async, chnage state etc.(mount ho cuka h). rendering ke baad kch krna ho toh
//                                              |
//                                              v
//componentDidUpdate(): if we change or modify something(like state chnge) or when he get new props(update ho cuka h)(upadat ka flow : updatingby any thigs->render->react dom ko and ref ko update krega fhir componentDidUpdate() hga)
//                                              |
//                                              v
//componenntWillmount():jb coponent destroy hta h, like cleanup yeh(pehle del hga fhir unmount hga) // direct  unmount ho jyegi
 
constructor(props) { //jb b class ka koi obj instatntiate hta h tb constructor() run hta h yeh render method se b pehle run hta h
  super(props);
  this.state = {
    //You use state to manage and update the dynamic data within your React component, enabling it to react to changes and render UI accordingly.
    articles: this.articles,
    loading: false,
    page: 1,
    totalResults:0,
    apiRequestCounter: 0 ,
  };
  // console.log(this.articles);
}
async updatenews(){
  this.props.setProgress(10);
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=636c5d944e2242a1b0b9b80a13be4982&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
  this.setState({ loading: true });
  let data = await fetch(url);
  this.props.setProgress(30);
  let parsedData = await data.json();
  this.props.setProgress(50);
  console.log(parsedData);
  this.setState({
    articles: parsedData.articles,
    totalResults: parsedData.totalResults,
    loading: false,
  }); //sample output se aya
  this.props.incrementApiReq();
  this.props.setProgress(100);
}
// pehele mera constructor run hga then the things after render and then  componentDidMount()
async componentDidMount() { //birth of component
 this.updatenews();
}

toNew=(time)=>{
  const currentDate = new Date();
  const ans = currentDate.toISOString();
  const date1=new Date(time);
  const date2=new Date(ans);
  const differenceInMilliseconds = date2.getDate() - date1.getDate();
  console.log("differenceInMilliseconds is: ",differenceInMilliseconds);
  if(differenceInMilliseconds>1) return false;
  else return true;
}
handleNewNewsToggle = () => {
    this.setState((prevState) => ({
    filterNewNews: !prevState.filterNewNews
  }));
};
fetchMoreData = async () => {
  this.props.setProgress(10);
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=636c5d944e2242a1b0b9b80a13be4982&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState((prevState) => ({
      articles: prevState.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: prevState.page + 1, 
    }));
    this.props.incrementApiReq();
    this.props.setProgress(100);
};

render() {
  let { mode} = this.props;
  const { filterNewNews } = this.state;
  const { apiRequestCounter } = this.state;
  const filteredArticles = filterNewNews
  ? this.state.articles.filter((el) => this.toNew(el.publishedAt))
  : this.state.articles;
  return (
    <>

    <h2 className="text-center" style={{marginTop:"4rem"}}> Today's Headlines:  <p>Total API requests made: {this.props.totalApiReq}</p></h2>
      <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.handleNewNewsToggle} />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">New news</label>
    </div>
  <InfiniteScroll
      dataLength={this.state.articles.length}
      next={this.fetchMoreData}
      hasMore={this.state.articles.length < this.state.totalResults}
      loader={<Spinner/>}
      style={{overflow:"hidden"}}
      >
    <div className=" container">
      <div className="row">
        {filteredArticles.map((el) => {
          return (
              <div className="col-md-4" key={el.url}>
                 {console.log(el)}
                <NewsItem
                  title={
                    el.title === null ? "Empty Title" : el.title.slice(0, 45)
                  }
                  description={
                    el.description !== null
                      ? el.description.slice(0, 75)
                      : "Empty description"
                  }
                  imageUrl={
                    el.urlToImage !== null
                      ? el.urlToImage
                      : "https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg"
                  }
                  newsUrl={el.url}
                  name={el.source.name}
                  author={el.author!==null ? el.author:"unknown"}
                  time={el.publishedAt}
                  mode={mode}
                ></NewsItem>
              </div>
            );
          })}
</div>
</div>
          </InfiniteScroll>
          <h2>END OF THE PAGE</h2>
 
      </>

  );
}
}
export default News


