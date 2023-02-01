package com.batis.login.Controller;

import com.batis.login.Service.UserDaoService;
import com.batis.login.dto.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserDaoService userDaoService;
    User tempUser = new User();
    User tempUser2 = new User();
    User tempUser3 = new User();
    @GetMapping("/api/users")
    public List<User> users() throws Exception{
        return userDaoService.getAll();
    }
    @PostMapping("/api/user")
    public void user(@RequestBody HashMap<String,String> Input) throws SQLException,Exception{
        User user = new User();
        user.setId(Input.get("id"));
        user.setName(Input.get("name"));
        user.setPassword(Input.get("password"));
        userDaoService.saveUser(user);
    }
    @PostMapping("/api/id/pw")
    public void login(@RequestBody HashMap<String,String> Input) throws SQLException,Exception{
        tempUser.setId(Input.get("id"));
        tempUser.setName("null");
        tempUser.setPassword(Input.get("password"));
    }
    @GetMapping("/api/id/pw/user")
    public List<User> isLogin() throws Exception{
        return userDaoService.isLogin(tempUser);
    }
    @PostMapping("/api/id")
    public void exist(@RequestBody String Input) throws SQLException,Exception{
        String tempID = Input.substring(0, Input.length() - 1);
        tempUser.setId(tempID);
        tempUser.setName("null");
        tempUser.setPassword("null");
    }
    @GetMapping("/api/id/user")
    public List<User> isExist() throws Exception{
        return userDaoService.isExist(tempUser);
    }

    @PostMapping("/api/user/information/id")
    public void userID(@RequestBody String ID) throws SQLException,Exception{
        String tempID = ID.substring(0, ID.length() - 1);
        tempUser2.setId(tempID);
        tempUser2.setName("null");
        tempUser2.setPassword("null");
    }

    @GetMapping("/api/user/information/all")
    public List<User> userInformation() throws Exception{
        return userDaoService.userInformation(tempUser2);
    }

    @PostMapping("/api/user/pw")
    public void changePW(@RequestBody HashMap<String,String> Input) throws SQLException,Exception{
        User user = new User();
        user.setId(Input.get("id"));
        user.setName("null");
        user.setPassword(Input.get("password"));
        userDaoService.changePW(user);
    }
    @PostMapping("/user/id")
    public void delete(@RequestBody String ID) throws SQLException,Exception{
        String tempID = ID.substring(0, ID.length() - 1);
        System.out.println(tempID);
        tempUser3.setId(tempID);
        tempUser3.setName("null");
        tempUser3.setPassword("null");
        userDaoService.delete(tempUser3);
    }



}