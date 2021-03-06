package com.yup.web.cmm;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.yup.web.pxy.ContextProxy;

@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired ContextProxy ctx;
	
	@GetMapping("/")
	public String home() {
		logger.info("Welcome home!");
		ctx.execute();
		return "home";
	}
	
}
