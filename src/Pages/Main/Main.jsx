import React from 'react';
import Card from '../../Components/Card';
import cardData from '../../assets/cardData';

const Main = () => (
  <main>
    {
      cardData.map(({
        id, image, title, subtitle, statement, quote,
      }) => (
        <Card key={id}>
          <Card.Image
            src={image}
            alt={title}
          />
          <Card.Title>
            {title}
          </Card.Title>
          <Card.Subtitle>
            {subtitle}
          </Card.Subtitle>
          <Card.Paragraph>
            {statement}
          </Card.Paragraph>
          <Card.Quote>
            {quote}
          </Card.Quote>
        </Card>
      ))
    }
  </main>
);

export default Main;
