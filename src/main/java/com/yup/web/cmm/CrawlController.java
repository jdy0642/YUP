package com.yup.web.cmm;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yup.web.pxy.Box;

@RestController
@RequestMapping("/crawl")
public class CrawlController {
	@Autowired Box<String> box;
	
	@GetMapping("/naver")
	public Box<String> bringNaver() {
		System.out.println("컨트롤러 들어옴: >>>>>");
		box.clear();
		box.add("네이버 크롤");
		return box;
	}
	@GetMapping("/cgv")
	public Box<String> bringCgv() {
		System.out.println("컨트롤러 들어옴2: >>>>>");
		box.clear();
		box.add("씨지비 크롤 ");
		return box;
	}
	@GetMapping("/bugs")
	public Box<String> bringBugs() {
		System.out.println("컨트롤러 들어옴3: >>>>>");
		box.clear();
		box.add("벅스 크롤");
		return box;
	}

}
