package cn.cwx521.service.imp;

import cn.cwx521.mapper.UserMapper;
import cn.cwx521.pojo.User;
import cn.cwx521.pojo.UserExample;
import cn.cwx521.service.UserSiver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by zxc on 2017/7/19.
 */
@Service
public class UserServiceImp implements UserSiver {
    @Autowired
    private UserMapper userMapper;

    @Override
    public boolean insertUser(User user) {
        if (userMapper.insert(user) != 0) {
            return true;
        }
        return false;

    }

    @Override
    public boolean selectUser(User user) {
        System.out.println(user);
        User u = userMapper.selectUser(user);
            return u!=null;
    }
}
