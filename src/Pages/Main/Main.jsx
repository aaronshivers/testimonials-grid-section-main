import React from 'react';
import Card from '../../components/Card';
import cardData from '../../assets/cardData';
import Header from '../../components/Header';
import Body from '../../components/Body';

const Main = () => (
  <main>
    {
      cardData.map(({
        id, image, title, subtitle, statement, quote, variant,
      }) => (
        <Card key={id} variant={variant}>
          <Header
            title={title}
            subtitle={subtitle}
            image={image}
            variant={variant}
          />
          <Body statement={statement} quote={quote} variant={variant} />
        </Card>
      ))
    }
  </main>
);

export default Main;
