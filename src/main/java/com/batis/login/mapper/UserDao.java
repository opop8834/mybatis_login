package com.batis.login.mapper;

import com.batis.login.dto.User;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

// XML과 연동
public interface UserDao {
    public List<User> getAll();
    public void saveUser(User user);
    public void delete(User user);
    public List<User> isLogin(User user);
    public List<User> isExist(User user);
    public List<User> userInformation(User user);
    public void changePW(User user);
}
