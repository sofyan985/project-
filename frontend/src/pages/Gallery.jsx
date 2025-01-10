import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard'; // Correct casing

const Home = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/news');
                
                // Shuffle the news array
                const shuffledNews = response.data.sort(() => Math.random() - 0.5);

                // Limit the news to the first 10 items
                setNews(shuffledNews.slice(0, 4));
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 roboto-mono-unique title">Gallery News</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((item) => (
                    <NewsCard
                        key={item._id}
                        title={item.title}
                        description={item.description}
                        date={new Date(item.publishedAt).toLocaleDateString()}
                        imageUrl={item.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
