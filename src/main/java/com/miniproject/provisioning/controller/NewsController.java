package com.miniproject.provisioning.controller;

import com.miniproject.provisioning.model.NewsModel;
import com.miniproject.provisioning.service.NewsService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class NewsController {

    private final NewsService newsService;

    @GetMapping("/news")
    public List<NewsModel> getNews(){
        return newsService.findAll();
    }

    @PostMapping("/news")
    @ResponseBody
    public NewsModel save(@RequestBody NewsModel newsModel){
        NewsModel savedNews= newsService.addNews(newsModel);
        return savedNews;
    }

}
