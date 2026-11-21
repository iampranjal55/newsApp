import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class Everything extends Component {
    articles=[
        {
            "source": {
            "id": "the-hill",
            "name": "The Hill"
            },
            "author": "Nick Robertson",
            "title": "Byron Donalds defends Trump’s remarks on Black voters: ‘This is something similar’",
            "description": "Rep. Byron Donalds (R-Fla.) defended former President Trump on Sunday against allegations of racism after Trump said Black voters are more likely to back him because of his criminal indictments. Trump said Friday during an event in South Carolina that Black v…",
            "url": "https://thehill.com/homenews/campaign/4487980-byron-donalds-defends-trumps-remarks-on-black-voters-this-is-something-similar/",
            "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/02/donaldsbyron_022224gn03_w.jpg?w=1280",
            "publishedAt": "2024-02-25T15:12:05Z",
            "content": "Skip to content\r\nRep. Byron Donalds (R-Fla.) defended former President Trump on Sunday against allegations of racism after Trump said Black voters are more likely to back him because of his criminal … [+1824 chars]"
            },
            {
            "source": {
            "id": "google-news-uk",
            "name": "Google News (UK)"
            },
            "author": "BBC",
            "title": "South Carolina primary: Donald Trump easily defeats Nikki Haley in her home state - BBC",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiM2h0dHBzOi8vd3d3LmJiYy5jby51ay9uZXdzL3dvcmxkLXVzLWNhbmFkYS02ODM5NTQxNNIBN2h0dHBzOi8vd3d3LmJiYy5jby51ay9uZXdzL3dvcmxkLXVzLWNhbmFkYS02ODM5NTQxNC5hbXA?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-02-25T15:03:44+00:00",
            "content": null
            },
            {
            "source": {
            "id": "the-hill",
            "name": "The Hill"
            },
            "author": "Lauren Sforza",
            "title": "Newsom calls Trump ‘weakness masquerading as strength’",
            "description": "California Gov. Gavin Newsom (D) labeled former President Trump as “weakness masquerading as strength” in an interview that aired Sunday. NBC’s Kristen Welker pressed Newsom in an interview on “Meet the Press” whether Democrats were underestimating Trump as h…",
            "url": "https://thehill.com/homenews/campaign/4487975-newsom-calls-trump-weakness-masquerading-as-strength/",
            "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/10/651e053f77bf06.63952886-e1703304285709.jpeg?w=1280",
            "publishedAt": "2024-02-25T15:02:11Z",
            "content": "Skip to content\r\nCalifornia Gov. Gavin Newsom (D) labeled former President Trump as “weakness masquerading as strength” in an interview that aired Sunday. \r\nNBC’s Kristen Welker pressed Newsom in an … [+1886 chars]"
            },
            {
            "source": {
            "id": "google-news",
            "name": "Google News"
            },
            "author": "The New York Times",
            "title": "South Carolina Republican Primary Live Results: Trump Wins - The New York Times",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiamh0dHBzOi8vd3d3Lm55dGltZXMuY29tL2ludGVyYWN0aXZlLzIwMjQvMDIvMjQvdXMvZWxlY3Rpb25zL3Jlc3VsdHMtc291dGgtY2Fyb2xpbmEtcmVwdWJsaWNhbi1wcmltYXJ5Lmh0bWzSAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-02-25T14:55:00+00:00",
            "content": null
            },
            {
            "source": {
            "id": "cnn-es",
            "name": "CNN Spanish"
            },
            "author": "Rocío Muñoz-Ledo",
            "title": "Estas son cinco conclusiones de las primarias republicanas de Carolina del Sur",
            "description": "Donald Trump ganó las primarias presidenciales republicanas de Carolina del Sur, según proyecta CNN. Estas son 5 conclusiones.",
            "url": "https://cnnespanol.cnn.com/2024/02/25/conclusiones-primarias-republicanas-carolina-sur-trax/",
            "urlToImage": "https://cnnespanol.cnn.com/wp-content/uploads/2024/02/primarias-republicanas-carolina-sur-trump-haley.jpg?quality=100&strip=info",
            "publishedAt": "2024-02-25T14:38:27Z",
            "content": "La hegemonía de Donald Trump entre los votantes republicanos 4:57\r\n(CNN) -- Donald Trump ganó las primarias presidenciales republicanas de Carolina del Sur, según proyecta CNN, al derrotar a Nikki Ha… [+7877 chars]"
            },
            {
            "source": {
            "id": "fox-news",
            "name": "Fox News"
            },
            "author": "Taylor Penley",
            "title": "Bob Costas draws fire for branding Trump supporters as 'toxic cult': 'Not a great look' for him",
            "description": "'The Big Weekend Show' hosts reacted to sportscaster Bob Costas over his criticism of Trump and his supporters during a segment of CNN's 'Smerconish.'",
            "url": "https://www.foxnews.com/media/bob-costas-draws-fire-trump-supporters-toxic-cult-great-look-him",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/02/Bob-Costas.jpg",
            "publishedAt": "2024-02-25T14:21:12Z",
            "content": "Join Fox News for access to this content\r\nPlus get unlimited access to thousands of articles, videos and more with your free account!\r\nPlease enter a valid email address.\r\nBy entering your email, you… [+3456 chars]"
            },
            {
            "source": {
            "id": "the-hill",
            "name": "The Hill"
            },
            "author": "Nick Robertson",
            "title": "Newsom on Haley staying in race despite loss to Trump: ‘I’m applauding every single day’",
            "description": "Gov. Gavin Newsom (D-Calif.) came to the defense of Nikki Haley on Sunday, calling on her not to drop out because of her attacks on former President Trump. “I don’t know why Democrats would want her out of the race. She’s one of our better surrogates,” Newsom…",
            "url": "https://thehill.com/homenews/campaign/4487932-newsom-on-haley-staying-in-race-despite-loss-to-trump-im-applauding-every-single-day/",
            "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/01/AP24010780068229-e1706369179129.jpg?w=1280",
            "publishedAt": "2024-02-25T14:00:00Z",
            "content": "Skip to content\r\nGov. Gavin Newsom (D-Calif.) came to the defense of Nikki Haley on Sunday, calling on her not to drop out because of her attacks on former President Trump.\r\n“I don’t know why Democra… [+1972 chars]"
            },
            {
            "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
            },
            "author": "Hannah Knowles",
            "title": "As Trump continues to trounce Haley, she presses on as MAGA antagonist",
            "description": "The former South Carolina governor has become a vehicle for the deep discontent that some in the party feel about a Trump-Biden rematch.",
            "url": "https://www.washingtonpost.com/politics/2024/02/25/haley-trump-republicans-presidential/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5IQ6TF7Y4CNTNVY5BUMBMNRYGM.JPG&w=1440",
            "publishedAt": "2024-02-25T14:00:00Z",
            "content": "She came in third in Iowa. She lost by double digits in New Hampshire. In Nevada where Donald Trumps name wasnt on the primary ballot Nikki Haleytrailed none of these candidates by more than 30 point… [+6898 chars]"
            },
            {
            "source": {
            "id": "goteborgs-posten",
            "name": "Göteborgs-Posten"
            },
            "author": null,
            "title": "Britt-Marie Mattsson: Trumps vinst avslöjar sprickan inom republikanerna",
            "description": "Nikki Haley vägrar beskriva sig som förlorare, skriver Britt-Marie Mattsson.",
            "url": "http://www.gp.se/nyheter/varlden/trumps-vinst-avslojar-sprickan-inom-republikanerna.9071af11-0621-42a4-885c-6763faf32459",
            "urlToImage": "https://www.gp.se/images/og/9071af11-0621-42a4-885c-6763faf32459/images/4s9GJp8Etr6cXP7VceFAKjXPUVfM.jpg?width=1200&quality=75",
            "publishedAt": "2024-02-25T13:07:21.8109722Z",
            "content": "Grundades 1810 som Göteborgs-Posten.\r\nChefredaktör och ansvarig utgivare: Christofer Ahlqvist\r\nAdress: Göteborgs-Posten, Polhemsplatsen 5 \r\n405 02 Göteborg Sverige\r\nTelefon: 031-62 40 00"
            },
            {
            "source": {
            "id": "the-hill",
            "name": "The Hill"
            },
            "author": "Nick Robertson",
            "title": "‘SNL’ mocks Republican senators endorsing Trump in cold open following South Carolina win",
            "description": "“Saturday Night Live” went after the GOP senators who have endorsed former President Trump in its post-South Carolina primary cold open on Saturday, pointing out the many times Trump has insulted the same men who now back him for president. The cold open show…",
            "url": "https://thehill.com/homenews/media/4487928-snl-mocks-republican-senators-endorsing-trump-in-cold-open-following-south-carolina-win/",
            "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/02/Screenshot-2024-02-25-at-7.41.11 AM.png?w=1280",
            "publishedAt": "2024-02-25T12:42:27Z",
            "content": "Skip to content\r\n“Saturday Night Live” went after the GOP senators who have endorsed former President Trump in its post-South Carolina primary cold open on Saturday, pointing out the many times Trump… [+2191 chars]"
            },
            {
            "source": {
            "id": "msnbc",
            "name": "MSNBC"
            },
            "author": "Molly Jong-Fast",
            "title": "Lara Trump’s pending RNC appointment is going to cost Republicans",
            "description": "Trump's 2024 South Carolina primary election results position him to appoint his daughter-in-law Lara Trump to allocate RNC funds to pay his legal fees.",
            "url": "https://www.msnbc.com/opinion/msnbc-opinion/lara-trumps-pending-rnc-appointment-going-cost-republicans-rcna140348",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-02/240224-lara-trump-ch-1503-f16cd0.jpg",
            "publishedAt": "2024-02-25T11:54:31Z",
            "content": "When Lara Trump addressed a South Carolina crowd ahead of Saturdays Republican primary in the state, her message was hardly subtle. I can assure you that my loyalty is to my father-in-law and I will … [+5289 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
            },
            {
            "source": {
            "id": "fox-news",
            "name": "Fox News"
            },
            "author": "Kyle Morris",
            "title": "Democrats react to Trump GOP primary victory in South Carolina: 'He's in a weak position'",
            "description": "Several Democrats took aim at Donald Trump on social media Saturday night following his victory in the South Carolina GOP primary election, claiming he's in a \"weak position.\"",
            "url": "https://www.foxnews.com/politics/democrats-trump-gop-primary-victory-south-carolina-weak-position",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/02/Donald-Trump.jpg",
            "publishedAt": "2024-02-25T11:00:59Z",
            "content": "Several Democrats took to social media Saturday night to poke fun at former President Donald Trump following his victory in the South Carolina Republican primary election, with some even encouraging … [+4752 chars]"
            },
            {
            "source": {
            "id": "new-york-magazine",
            "name": "New York Magazine"
            },
            "author": null,
            "title": "What Real Estate Does Trump Own in NYC Anyway?",
            "description": null,
            "url": "http://nymag.com//www.curbed.com/article/trump-lawsuit-real-estate-nyc-letitia-james.html",
            "urlToImage": null,
            "publishedAt": "2024-02-25T10:22:12.482494Z",
            "content": "Description: Group Number: Group Name: Ip Address: Username: Computer Name:"
            },
            {
            "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
            },
            "author": "Aaron Zitner, Jack Gillum",
            "title": "Trump Tightens Hold on GOP, Crowding Out Even Popular Rivals",
            "description": "Haley, governors and other key Republicans can’t put a dent in his support as he steamrolls toward the nomination",
            "url": "https://www.wsj.com/politics/elections/trump-tightens-hold-on-gop-crowding-out-even-popular-rivals-93810b3a",
            "urlToImage": "https://images.wsj.net/im-929891/social",
            "publishedAt": "2024-02-25T10:00:00Z",
            "content": null
            },
            {
            "source": {
            "id": "usa-today",
            "name": "USA Today"
            },
            "author": "Ingrid Jacques",
            "title": "Nikki Haley dominates Biden in polls. Why are Republican primary voters so stuck on Trump?",
            "description": "Donald Trump is a liability to the Republican Party and to the country. As Nikki Haley likes to say, 'chaos follows' him.",
            "url": "https://www.usatoday.com/story/opinion/columnist/2024/02/25/haley-trump-gop-south-carolina-primary/72710319007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/02/20/NHEJ/72666192007-haley-trump.jpg?crop=1999,1125,x0,y0&width=1999&height=1125&format=pjpg&auto=webp",
            "publishedAt": "2024-02-25T09:00:38+00:00",
            "content": "Heres something I cant wrap my head around: Republicans have a sure thing in Nikki Haley. Yet they cant move past Donald Trump. \r\nSo far, each primary state has chosen the former president over the f… [+3881 chars]"
            },
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "",
            "title": "‘SNL,’  Trump, and Republican Senators | CNN Business",
            "description": "The former president’s relationship with Republican senators is the subject of ‘SNL’s cold open",
            "url": "https://www.cnn.com/videos/media/2024/02/25/snl-trump-senators-orig.cnn",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240225033041-snl-trump-senators-orig-00000000.png?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-02-25T08:40:13Z",
            "content": null
            },
            {
            "source": {
            "id": "les-echos",
            "name": "Les Echos"
            },
            "author": "Véronique Le Billon",
            "title": "Présidentielle américaine : Donald Trump inflige une nouvelle défaite à Nikki Haley",
            "description": "L'ex-président a facilement remporté samedi la primaire de Caroline du Sud face à celle qui a pourtant été gouverneure de cet Etat conservateur. Nikki Haley a confirmé vouloir se maintenir en course.",
            "url": "https://www.lesechos.fr/monde/etats-unis/presidentielle-americaine-donald-trump-inflige-une-nouvelle-defaite-a-nikki-haley-2078475",
            "urlToImage": "https://media.lesechos.com/api/v1/images/view/65daf6a6c3c9df3862642777/1280x720/01003154621834-web-tete.jpg",
            "publishedAt": "2024-02-25T08:13:22Z",
            "content": "L'ex-président a facilement remporté samedi la primaire de Caroline du Sud face à celle qui a pourtant été gouverneure de cet Etat conservateur. Nikki Haley a confirmé vouloir se maintenir en course."
            },
            {
            "source": {
            "id": "google-news-fr",
            "name": "Google News (France)"
            },
            "author": "La Voix du Nord",
            "title": "Écrasée par Donald Trump, Nikki Haley refuse d'abandonner la primaire républicaine - La Voix du Nord",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMie2h0dHBzOi8vd3d3Lmxhdm9peGR1bm9yZC5mci8xNDM0Mjg3L2FydGljbGUvMjAyNC0wMi0yNS9lY3Jhc2VlLXBhci1kb25hbGQtdHJ1bXAtbmlra2ktaGFsZXktcmVmdXNlLWQtYWJhbmRvbm5lci1sYS1wcmltYWlyZdIBAA?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-02-25T06:34:15+00:00",
            "content": null
            },
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "",
            "title": "‘Why waste my time?’: Michigan voter weighs in on upcoming primary | CNN Politics",
            "description": "CNN’s Gary Tuchman speaks with Michigan voters, who will vote in their state’s primary days after former President Donald Trump’s decisive projected GOP primary win in South Carolina.",
            "url": "https://www.cnn.com/videos/politics/2024/02/25/michigan-voters-react-south-carolina-primary-2024-sot-vpx.cnn",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240224215221-michigan-voters.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-02-25T04:30:23Z",
            "content": null
            }
    ]
    constructor(props) { 
        super(props);
        this.state = {
          articles: this.articles,
          loading: true,
          page: 1,
          searchText:"",
          totalResults:0,
          apiRequestCounter: 0 ,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
      }
      handleInputChange = (event) => {
        this.setState({
          searchText: event.target.value,
        });
      }
     async handleSearch() {
        const { searchText } = this.state;
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/everything?q=${searchText}&apiKey=d093053d72bc40248998159804e0e67d`;
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
        }); 
        this.props.incrementApiReq();
        this.props.setProgress(100);
        console.log("Search Text:", searchText);
      }
      async componentDidMount() { //birth of component
        let url = `https://newsapi.org/v2/everything?q=india&apiKey=d093053d72bc40248998159804e0e67d`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          loading: false,
        }); 
        this.props.incrementApiReq();
      }
      render() {
        let { mode} = this.props;
        console.log(this.state.articles);
        return (
          <div className=" container">
            <div style={{marginTop:"3rem"}}>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-3"
                  type="text"
                  value={this.state.searchText}
                  onChange={this.handleInputChange}
                  placeholder="Enter search text"
                />
                <button
                  className="btn btn-outline-success"
                  type="button"
                  onClick={this.handleSearch}
                >
                  Search
                </button>
              </form>
              <h2>Showing Search related with: {this.state.searchText}</h2>
              <p style={{    marginLeft: "17rem",marginTop: "2rem",fontWeight: "bolder"}}>Total API requests made: {this.props.totalApiReq}</p>
            </div>
            {this.state.loading && <Spinner></Spinner>}
            <div className="row">
              {this.state.articles.map((el) => {
                return (
                  
                  <div className="col-md-4" key={el.url}>
                    {console.log(el)}

                    <NewsItem
                      title={
                        el.title === null
                          ? "Empty Title"
                          : el.title.slice(0, 45)
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
                      author={el.author !== null ? el.author : "unknown"}
                      time={el.publishedAt}
                      mode={mode}
                      istrue={true}
                    ></NewsItem>
                  </div>
                );
              })}
              {this.state.totalResults <= 0 && (
                <div className="alert alert-danger" role="alert" style={{    textAlign: "center",margin: "3rem",padding: "2rem",marginLeft: "18rem",width: "30rem"}}>
                  Page Not Found
                </div>
              )}
              {console.log(this.state.totalResults)}
            </div>
            {this.totalResults <= 0 && <h2>END OF THE PAGE </h2>}
          </div>
        );
      }
    }
    