package cn.cwx521.controller;

import cn.cwx521.pojo.User;
import cn.cwx521.service.UserSiver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by zxc on 2017/7/19.
 */
@Controller
public class LoginController {

//    @Autowired
//    private UserSiver userSiver;


    @RequestMapping(value = "login", method = RequestMethod.GET)
    public String login( ) {
        return "login";
    }

    @RequestMapping(value = "register", method = RequestMethod.GET)
    public String register() {
        return "register";
    }


}
