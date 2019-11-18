package com.yup.web;

import java.util.Arrays;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yup.web.pxy.Trunk;
@RestController
@RequestMapping("/cmm")
public class CmmController {
	@Autowired Trunk<Object> trunk;
	
	@GetMapping("/")
	public Map<?,?> cmm() {
		trunk.put(Arrays.asList("msg"), Arrays.asList("주동엽"));
		return trunk.get();
	}
}
