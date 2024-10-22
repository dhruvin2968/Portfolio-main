// src/components/ProjectCardList.tsx
import React from 'react';

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

const cards: Card[] = [
  {
    id: 1,
    content: 'Content for card 1',
    className: 'card-class-1',
    thumbnail: '/kvs-logo.png', // Updated path
  },
  {
    id: 2,
    content: 'This is a text content for card 2',
    className: 'card-class-2',
    thumbnail: 'https://example.com/thumbnail2.jpg',
  },
  {
    id: 3,
    content: <p>This is a paragraph for card 3</p>,
    className: 'card-class-3',
    thumbnail: 'https://example.com/thumbnail3.jpg',
  },
  {
    id: 4,
    content: <img src="https://example.com/image4.jpg" alt="Card 4" />,
    className: 'card-class-4',
    thumbnail: 'https://example.com/thumbnail4.jpg',
  },
];

const ProjectCardList: React.FC = () => {
  return (
    <div className="project-card-list scale-75 transform origin-top">
      {cards.map(card => (
        <div key={card.id} className={card.className}>
          <img src={card.thumbnail} alt="Thumbnail" />
          <div className="card-content">{card.content}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCardList;
