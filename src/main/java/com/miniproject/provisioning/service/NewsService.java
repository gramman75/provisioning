package com.miniproject.provisioning.service;

import com.miniproject.provisioning.model.NewsModel;
import com.miniproject.provisioning.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class NewsService {

    private final NewsRepository newsRepository;

    public List<NewsModel> findAll() {
        return newsRepository.findAll();
    }

    public NewsModel findById(Long id) {
        return newsRepository.findById(id).get();
    }

    public NewsModel addNews(NewsModel newsModel){
        NewsModel news = newsRepository.save(newsModel);
        return news;
    }

    public List<NewsModel> addBatchNews(List<NewsModel> newsModelList){
        return newsRepository.saveAll(newsModelList);
    }

    public boolean deleteNews(Long id){
        Optional<NewsModel> findNews = newsRepository.findById(id);
        if (findNews.isPresent()){
            newsRepository.deleteById(findNews.get().getId());
            return true;
        }
        return false;
    }
}
