import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const NewsSection = () => {
    const [news, setNews] = useState([]);
    const {id} = useParams();
    const newsData = useLoaderData();
    useEffect(() => {
        if(id == "0"){
            setNews(newsData);
            return;
        }
        else if(id == "1"){
            const filterNews = newsData.filter(news => news.others.is_today_pick == true);
            setNews(filterNews);
            return;
        }
        const filterNews = newsData.filter(news => news.category_id == id);
        setNews(filterNews);
    }, [newsData, id]);
    return (
        <div>
            <h1 className='font-bold'>Total <span className='text-secondary font-bold'>{news.length}</span> News found</h1>
            <div>
                {
                    news.map(singleNews => <NewsCard key={singleNews.id} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default NewsSection;