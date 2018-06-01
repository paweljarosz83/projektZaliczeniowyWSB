import React from 'react';
import Test from './Test';
import Calendar from 'rc-calendar';
import {Footer} from '../Footer';

export const Home = () => {
  return (

    <div className="container">

      <div className="row">
        <hr />
      </div>

      <div className="row main">

        <div className="col-md-6">

          <div id="slogan1">
            Jesteśmy największym producentem maszyn CMC w Europie Środkowej
           </div>

          <div id="slogan2">
            Oferujemy szeroki asortyment kabli, przewodów oraz systemów kablowych.
            Produkty     wytwarzane w naszych zakładach znajdują odbiorców w ponad 90 krajach.
            Nasza firma łączy dobre tradycje przemysłu kablowego z nowymi rozwiązaniami technicznymi.
           </div>

          <div className="regularButton">
            <button className="btn btn-success">Dowiedz się więcej</button>
          </div>

        </div>

        <div className="col-md-6" >
          <img src="http://newsletter.tfkable.com/banner.png"/>
        </div>

      </div>







      <div className="row rowDivider">
        <div className="col-md-12">
          AKTUALNOŚCI
      </div>
      </div>

      <div className="row" id="newsSection">
        <div className="col-md-4">

          <img src='http://newsletter.tfkable.com/banner.png' />
          <div className="newsTitle">
            Kolejna realizacja wykonana terminowo.<br />
            Jedna z największych inwestycji roku 2018 zakończona sukcesem dzięki wsparciu Firmy.
          </div>
          <div className="newsSummary">
            Kolejna realizacja wykonana terminowo.<br />
            Jedna z największych inwestycji roku 2018 zakończona sukcesem dzięki wsparciu Firmy.
          </div>
          <br />
          <span className="badge">12 maja 2018</span>

        </div>



        <div className="col-md-4">
          <img src='http://newsletter.tfkable.com/banner.png' />
          <div className="newsTitle">
            Firma po raz kolejny wyróżniona<br />
            Prestiżowa nagroda złotego kloca przyznana jednomyślnie przez komisję.
          </div>
          <div className="newsSummary">
            W imieniu Firmy nagrodę odebrał osobicie Prezes Jan Kowalski.
            Jest to jedna z najbardziej cennych nagród tegoricznej edycji targów.
          </div>
          <br />
          <span className="badge">12 maja 2018</span>




        </div>
        <div className="col-md-4">
          <img src='http://newsletter.tfkable.com/banner.png' />
          <div className="newsTitle">
            Firma partnerem konferencji 'W Biznesie'<br />
            wspólnie z Druga Firma S.A
            <br />
            <br />
          </div>
          <div className="newsSummary">
            Kolejna realizacja wykonana terminowo.<br />
            Jedna z największych inwestycji roku 2018 zakończona sukcesem dzięki wsparciu Firmy  oraz inwestycjom.
          </div>
          <br />
          <span className="badge">12 maja 2018</span>
        </div>
      </div>

      <hr />


      <div id="middleSection">
        <div className="middleSectionHeader">NASZA JAKOSĆ</div>

        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur. Adipisci velit, sed quia non      numquam eius modi tempora. Incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam.

<div className="middleSectionHeader">NASZA JAKOSĆ</div>

        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui


      </div>

      <Footer/>
    </div>
  );
}