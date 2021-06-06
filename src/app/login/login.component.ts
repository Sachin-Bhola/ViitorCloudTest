import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { CommonService } from '../services/common.service';
import { catchError } from 'rxjs/operators';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup;
  loginSubscription!: Subscription;

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private commonService: CommonService,
    private localStorageService: LocalStorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {

    this.loginService.login(this.loginForm.value).pipe().subscribe(
      data => {
        if (data.status === 'Error') {
          this.commonService.handleError(data);
        } else {
          this.localStorageService.setToken(data);
          this.router.navigate(['/dashboard']);
        }
      }
    );
  }


  ngOnDestroy() {
    this.loginSubscription?.unsubscribe();
  }

}
