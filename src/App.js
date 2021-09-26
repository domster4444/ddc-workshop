import React from 'react';
import Nav from './components/Nav/Nav';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';

// css
import './App.css';
function App() {
  return (
    <div>
      <main>
        <header>
          {/* navigation */}
          <Nav />
        </header>
        <section id="hero-section">
          <h1>Welcome</h1>

          <div class="btn-container">
            {/* button  */}
            <Button title="explore" />
            <Button title="donate" />
            <Button title="connect" />
          </div>
        </section>
        <section id="card-section">
          <div class="card-division">
            <Card
              title="green Card"
              description="   The Green Economy is an alternative vision for growth and
                development; one that can generate economic development and
                improvements in people’s lives in ways consistent with advancing
                also environmental and social well-being. One"
            />
            <Card
              title="Yello Card"
              description="     The color yellow can be bright and intense, which is perhaps why
                it can often invoke such strong feelings. Yellow can quickly
                grab attention, but it can also be abrasive when overused. It
                can appear warm and bright, yet it can also lead to visual
                fatigue."
            />
            <Card
              title="Pink Card"
              description=" Pink is a color that is a pale tint of red and is named after a
                flower of the same name.[2][3] It was first used as a color name
                in the late 17th century.[4] According to surveys in Europe and
                the United States, pink is the color most often"
            />
            <Card
              title="Red Card"
              description="  Red is the color at the long wavelength end of the visible
                spectrum of light, next to orange and opposite violet. It has a
                dominant wavelength of approximately 625–740 nanometres.[1] It
                is a primary color in the RGB color m"
            />
            <Card
              title="White Card"
              description="  white majority which has to defend its power by any means
                necessary. These notions, once the preserve of fringe white
                nationalist groups, have increasingly infiltrated the mainstream"
            />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
