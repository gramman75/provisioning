package com.miniproject.provisioning.service;

import com.miniproject.provisioning.model.NewsModel;
import com.miniproject.provisioning.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class NewsService {

    private final NewsRepository newsRepository;

    public List<NewsModel> findAll() {
        return newsRepository.findAll();
    }

    public NewsModel addNews(NewsModel newsModel){
        NewsModel news = newsRepository.save(newsModel);
        return news;
    }

    public boolean deleteNews(NewsModel newsModel){
        newsRepository
    }
}
