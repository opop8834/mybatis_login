package com.batis.login.Service;

import com.batis.login.dto.User;
import com.batis.login.mapper.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDaoService {

    @Autowired
    UserDao userDao;

    public List<User> getAll() throws Exception{
        return userDao.getAll();
    }

    public void saveUser(User user) throws  Exception{
        userDao.saveUser(user);
    }
    public void delete(User user) throws  Exception{
        userDao.delete(user);
    }


    public List<User> isLogin(User user) throws Exception{
        return userDao.isLogin(user);
    }
    public List<User> isExist(User user) throws Exception{
        return userDao.isExist(user);
    }
    public List<User> userInformation(User user) throws Exception{
        return userDao.userInformation(user);
    }

    public void changePW(User user) throws  Exception{
        userDao.changePW(user);
    }
}