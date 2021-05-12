import React from 'react';
import Card from '../../Components/Card';
import cardData from '../../Assets/cardData.json';

const Main = () => (
  <div>
    {
      cardData.map(({
        id, title, subtitle, statement, quote,
      }) => (
        <Card key={id}>
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
  </div>
);

export default Main;
