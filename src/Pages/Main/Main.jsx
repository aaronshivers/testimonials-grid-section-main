import React from 'react';
import Card from '../../Components/Card';
import cardData from '../../assets/cardData';
import { TitleWrapper } from '../../Components/Card/Card.styles';

const Main = () => (
  <main>
    {
      cardData.map(({
        id, image, title, subtitle, statement, quote, variant,
      }) => (
        <Card key={id} variant={variant}>
          <Card.Header>
            <Card.Image
              src={image}
              alt={title}
            />
            <TitleWrapper>
              <Card.Title>
                {title}
              </Card.Title>
              <Card.Subtitle>
                {subtitle}
              </Card.Subtitle>
            </TitleWrapper>
          </Card.Header>
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
