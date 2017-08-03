package cn.cwx521.service;

import cn.cwx521.pojo.User;

/**
 * Created by zxc on 2017/7/19.
 */
public interface UserSiver {
    boolean insertUser(User user);

    boolean selectUser(User user);
}
