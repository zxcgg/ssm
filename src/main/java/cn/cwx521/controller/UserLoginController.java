package cn.cwx521.controller;

import cn.cwx521.pojo.User;
import cn.cwx521.service.UserSiver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by zxc on 2017/7/19.
 */
@Controller
@RequestMapping(value = "/user")
public class UserLoginController {

    @Autowired
    private UserSiver userSiver;


    @RequestMapping(value = "login", method = RequestMethod.POST)
    public String login(User u) {
        if (userSiver.selectUser(u)) {
            return "success";
        }
        return "fail";
    }

    @RequestMapping(value = "register", method = RequestMethod.POST)
    public String register(User u) {
        if (userSiver.insertUser(u)) {
            return "success";
        }
        return "fail";


    }


}
