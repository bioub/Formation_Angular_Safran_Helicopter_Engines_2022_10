import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, Observable, Subscription, switchMap } from 'rxjs';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'my-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user: User = {};

  user$!: Observable<User>;

  // subscription!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params) => {
    //   this.userService.getById(params['id']).subscribe({
    //     next: (user) => {
    //       this.user = user;
    //     },
    //     error: (err) => {
    //       console.log('Erreur', err.message);
    //     }
    //   });
    // });
    // this.subscription = this.activatedRoute.params
    //   .pipe(switchMap((params) => this.userService.getById(params['id'])))
    //   .subscribe((user) => {
    //     this.user = user;
    //   });

    this.user$ = this.activatedRoute.params.pipe(
      switchMap((params) => this.userService.getById(params['id']))
    );
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
