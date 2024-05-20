import React from 'react';
import './RSSFeed.css';

function RSSFeed() {
  const news = [
    {
      title: 'New Stealth Fighter Unveiled',
      description: 'The latest stealth fighter jet has been unveiled by XYZ Aviation.',
      link: 'https://www.example.com/planes/new-stealth-fighter',
      category: 'Military Aircraft',
      published: 'Tue, 20 May 2024 08:00:00 GMT',
      tags: ['aviation', 'military', 'technology'],
      comments: 20,
      likes: 100,
    },
    {
      title: 'Record-breaking Flight Across the Atlantic',
      description: 'Pilot John Smith breaks the record for the fastest solo flight across the Atlantic.',
      link: 'https://www.example.com/planes/atlantic-flight-record',
      category: 'Record Flights',
      published: 'Wed, 21 May 2024 10:00:00 GMT',
      tags: ['aviation', 'records'],
      comments: 15,
      likes: 90,
    },
    {
      title: 'New Model Launch: XYZ-2000',
      description: 'XYZ Aviation unveils its latest aircraft model, promising revolutionary features and performance.',
      link: 'https://www.example.com/planes/new-model-launch',
      category: 'New Models',
      published: 'Thu, 22 May 2024 14:00:00 GMT',
      tags: ['aviation', 'technology'],
      comments: 30,
      likes: 120,
    },
    {
      title: 'Supersonic Speed Record Broken',
      description: 'A new supersonic speed record is set by the HyperJet X-1, reaching Mach 3.5.',
      link: 'https://www.example.com/planes/supersonic-speed-record',
      category: 'Speed Records',
      published: 'Fri, 23 May 2024 12:00:00 GMT',
      tags: ['aviation', 'records', 'technology'],
      comments: 25,
      likes: 150,
    },
    {
      title: 'New Airport Opens to Handle Increased Air Traffic',
      description: 'The new Smith International Airport opens its doors to handle the growing number of flights.',
      link: 'https://www.example.com/planes/new-airport-opens',
      category: 'Airports',
      published: 'Sat, 24 May 2024 09:00:00 GMT',
      tags: ['aviation', 'infrastructure'],
      comments: 10,
      likes: 80,
    },
    {
      title: 'Electric Aircraft Revolution',
      description: 'Companies are investing heavily in electric aircraft technology, promising a greener future for aviation.',
      link: 'https://www.example.com/planes/electric-aircraft-revolution',
      category: 'Green Aviation',
      published: 'Sun, 25 May 2024 15:00:00 GMT',
      tags: ['aviation', 'technology', 'environment'],
      comments: 40,
      likes: 200,
    }
  ];

  return (
    <div className="rss-feed">
      <h2>Aeroplanes News</h2>
      <ul>
        {news.map((item, index) => (
          <li key={index} className="rss-item">
            <a href={item.link}>{item.title}</a>
            <p>{item.description}</p>
            <p>Category: {item.category}</p>
            <p>Published: {item.published}</p>
            <p>Tags: {item.tags.join(', ')}</p>
            <p>Comments: {item.comments}</p>
            <p>Likes: {item.likes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RSSFeed;