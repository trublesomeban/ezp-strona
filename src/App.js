import "./App.css";

import React from "react";


import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/sources" component={Sources} />
        </Switch>
      </Router>

    </div>
  );
};

const Sources = () => {
  return (
    <div className="main">
      <div className="title">Sources</div>
      <div className="sources">
        <a href="https://researchleap.com/measuring-societal-vulnerability-critical-infrastructure-failure-due-extreme-weather-events/" target="_blank" title="MultiLinkr Link">https://researchleap.com/measuring-societal-vulnerability-critical-infrastructure-failure-due-extreme-weather-events/</a><br />
        <a href="https://www.climatehubs.usda.gov/content/extreme-weather" target="_blank" title="MultiLinkr Link">https://www.climatehubs.usda.gov/content/extreme-weather</a><br />
        <a href="https://www.encyclopedie-environnement.org/en/air-en/tropical-cyclones-impacts-and-risks/" target="_blank" title="MultiLinkr Link">https://www.encyclopedie-environnement.org/en/air-en/tropical-cyclones-impacts-and-risks/</a><br />
        <a href="https://cdn4.vectorstock.com/i/1000x1000/95/88/sign-symbol-health-logo-hospital-red-cross-vector-35679588.jpg" target="_blank" title="MultiLinkr Link">https://cdn4.vectorstock.com/i/1000x1000/95/88/sign-symbol-health-logo-hospital-red-cross-vector-35679588.jpg</a><br />
        <a href="https://ladnydom.pl/moja-woda-gromadze-nie-marnuje-wykorzystanie-deszczowki-z-dofinansowaniem" target="_blank" title="MultiLinkr Link">https://ladnydom.pl/moja-woda-gromadze-nie-marnuje-wykorzystanie-deszczowki-z-dofinansowaniem</a><br />
        <a href="https://www.searchenginejournal.com/analyze-ranking-crash/298783/#close" target="_blank" title="MultiLinkr Link">https://www.searchenginejournal.com/analyze-ranking-crash/298783/#close</a><br />
        <a href="https://myloview.pl/fototapeta-hands-holding-team-of-tiny-business-persons-social-help-or-support-nr-FC9C789" target="_blank" title="MultiLinkr Link">https://myloview.pl/fototapeta-hands-holding-team-of-tiny-business-persons-social-help-or-support-nr-FC9C789</a><br />
        <a href="https://pl.freepik.com/premium-zdjecie/brazowa-sucha-gleba-lub-spekana-pustynia-tekstura-ziemi_14906444.htm" target="_blank" title="MultiLinkr Link">https://pl.freepik.com/premium-zdjecie/brazowa-sucha-gleba-lub-spekana-pustynia-tekstura-ziemi_14906444.htm</a><br />
        <a href="http://www.riopavilion.org/drylands-biodiversity/" target="_blank" title="MultiLinkr Link">http://www.riopavilion.org/drylands-biodiversity/</a><br />
        <a href="https://pl.wikipedia.org/wiki/%C5%9Awiatowy_Dzie%C5%84_Walki_z_Pustynnieniem_i_Susz%C4%85#/media/Plik:Corn_shows_the_affect_of_drought.jpg" target="_blank" title="MultiLinkr Link">https://pl.wikipedia.org/wiki/%C5%9Awiatowy_Dzie%C5%84_Walki_z_Pustynnieniem_i_Susz%C4%85#/media/Plik:Corn_shows_the_affect_of_drought.jpg</a><br />
        <a href="https://scontent-frt3-2.xx.fbcdn.net/v/t1.6435-9/119125931_10157312533020178_6634087029494605277_n.jpg?stp=dst-jpg_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=WvCwDNcKe5QAX8pB3WB&_nc_ht=scontent-frt3-2.xx&oh=00_AfDjMiW3zos4HC0x5PRe0WdF8WDJuqTTDqvHu_5i646KHA&oe=6457FA8A" target="_blank" title="MultiLinkr Link">https://scontent-frt3-2.xx.fbcdn.net/v/t1.6435-9/119125931_10157312533020178_6634087029494605277_n.jpg?stp=dst-jpg_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=WvCwDNcKe5QAX8pB3WB&_nc_ht=scontent-frt3-2.xx&oh=00_AfDjMiW3zos4HC0x5PRe0WdF8WDJuqTTDqvHu_5i646KHA&oe=6457FA8A</a><br />
        <a href="https://inzynieria.com/wodyopadowe/analizy_i_komentarze/62225,czy-polacy-boja-sie-skutkow-zmian-klimatu" target="_blank" title="MultiLinkr Link">https://inzynieria.com/wodyopadowe/analizy_i_komentarze/62225,czy-polacy-boja-sie-skutkow-zmian-klimatu</a><br />
        <a href="https://www.worldatlas.com/r/w1200/upload/2a/5d/a1/drought.jpg" target="_blank" title="MultiLinkr Link">https://www.worldatlas.com/r/w1200/upload/2a/5d/a1/drought.jpg</a><br />
        <a href="https://www.ekologia.pl/wiedza/slowniki/leksykon-ekologii-i-ochrony-srodowiska/burza" target="_blank" title="MultiLinkr Link">https://www.ekologia.pl/wiedza/slowniki/leksykon-ekologii-i-ochrony-srodowiska/burza</a><br />
        <a href="https://mymodernmet.com/wp/wp-content/uploads/2022/04/storm-photo-of-the-year-3.jpg" target="_blank" title="MultiLinkr Link">https://mymodernmet.com/wp/wp-content/uploads/2022/04/storm-photo-of-the-year-3.jpg</a><br />
        <a href="https://imgw.pl/wydarzenia/szybka-powodz-krotkotrwale-zdarzenie-wielkie-zagrozenie" target="_blank" title="MultiLinkr Link">https://imgw.pl/wydarzenia/szybka-powodz-krotkotrwale-zdarzenie-wielkie-zagrozenie</a><br />
        <a href="https://zpe.gov.pl/pdf/PpzyAQ2dA" target="_blank" title="MultiLinkr Link">https://zpe.gov.pl/pdf/PpzyAQ2dA</a><br />
        <a href="https://zpe.gov.pl/a/zagrozenia-naturalne---powodzie/DmBpBjN0o" target="_blank" title="MultiLinkr Link">https://zpe.gov.pl/a/zagrozenia-naturalne---powodzie/DmBpBjN0o</a><br />
        <a href="https://www.google.com/search?q=floods+causes&&tbm=isch&ved=2ahUKEwjZ0vjO8Zj-AhVIuyoKHTNmA74Q2-cCegQIABAA&oq=floods+causes&gs_lcp=CgNpbWcQAzIHCAAQgAQQEzIHCAAQgAQQEzIHCAAQgAQQEzIICAAQBRAeEBMyCAgAEAUQHhATMggIABAIEB4QEzIICAAQCBAeEBMyCAgAEAgQHhATMggIABAIEB4QEzIICAAQCBAeEBM6BAgjECc6CAgAEAcQHhATUPEGWJ4OYJcQaABwAHgAgAFriAGxBZIBAzYuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=Y6IwZJmVLMj2qgGzzI3wCw&bih=842&biw=1536&rlz=1CAUILC_enPL1027#imgrc=1vVBW4iZ1LzKiM" target="_blank" title="MultiLinkr Link">https://www.google.com/search?q=floods+causes&&tbm=isch&ved=2ahUKEwjZ0vjO8Zj-AhVIuyoKHTNmA74Q2-cCegQIABAA&oq=floods+causes&gs_lcp=CgNpbWcQAzIHCAAQgAQQEzIHCAAQgAQQEzIHCAAQgAQQEzIICAAQBRAeEBMyCAgAEAUQHhATMggIABAIEB4QEzIICAAQCBAeEBMyCAgAEAgQHhATMggIABAIEB4QEzIICAAQCBAeEBM6BAgjECc6CAgAEAcQHhATUPEGWJ4OYJcQaABwAHgAgAFriAGxBZIBAzYuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=Y6IwZJmVLMj2qgGzzI3wCw&bih=842&biw=1536&rlz=1CAUILC_enPL1027#imgrc=1vVBW4iZ1LzKiM</a><br />
        <a href="https://youtu.be/4PXj7bOD7IY" target="_blank" title="MultiLinkr Link">https://youtu.be/4PXj7bOD7IY</a><br />
        <a href="https://www.mapchart.net/world.html" target="_blank" title="MultiLinkr Link">https://www.mapchart.net/world.html</a><br />
        <a href="https://i.natgeofe.com/k/98df4efe-4898-4a51-aa94-b0b984365059/Trees-in-Park_Blizzard_KIDS_0123.jpg?w=636&h=426" target="_blank" title="MultiLinkr Link">https://i.natgeofe.com/k/98df4efe-4898-4a51-aa94-b0b984365059/Trees-in-Park_Blizzard_KIDS_0123.jpg?w=636&h=426</a><br />
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div></div>
  )
}

const Footer = () => {
  return (
    <footer>
      <div className="warning">
        ⚠ European authorities suspect this site of being used for money
        laundering.{" "}
        <a href="https://eur-lex.europa.eu/EN/legal-content/glossary/money-laundering.html">
          Learn more
        </a>
      </div>
    </footer>
  );
};

export default App;