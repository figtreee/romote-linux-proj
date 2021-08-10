import { Component, OnInit } from '@angular/core';
import { UserInfo } from './userinfo';
import { UserPostService } from './user-post.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    title = "USER SYSTEM";
    userInfo: UserInfo = {
        userName: "",
        userPwd: ""
    };

    Res = ""

    constructor(private userPostService: UserPostService) { }
    ngOnInit(): void {
    }

    onLogin() {
        this.userPostService.logIn(this.userInfo).subscribe(
            next => {
                console.log('Login result:', next)
                this.Res = next.Login
            });
    }
    onRegister() {
        this.userPostService.Register(this.userInfo).subscribe(
            next => {
                console.log('Insert result:', next)
                this.Res = next.Register
            }
        )

    }

}
