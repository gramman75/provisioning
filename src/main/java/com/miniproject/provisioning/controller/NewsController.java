package com.miniproject.provisioning.controller;

import com.miniproject.provisioning.model.NewsModel;
import com.miniproject.provisioning.service.NewsService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class NewsController {

    private final NewsService newsService;

    @GetMapping("/news/all")
    public List<NewsModel> getAllNews(){
        return newsService.findAll();
    }

    @PostMapping("/news")
    public NewsModel save(@RequestBody NewsModel newsModel){
        NewsModel savedNews= newsService.addNews(newsModel);
        return savedNews;
    }

    @PostMapping("/news/batch")
    public List<NewsModel> saveBatch(@RequestBody List<NewsModel> newsModelList){
        return newsService.addBatchNews(newsModelList);
    }

    
    @GetMapping("/news/{id}")
    public NewsModel getNews(@PathVariable Long id){
        return newsService.findById(id);
    }
    
    @DeleteMapping(value = "/news/{id}")
    public boolean deleteNews(@PathVariable Long id){
        return newsService.deleteNews(id);
    }



}
