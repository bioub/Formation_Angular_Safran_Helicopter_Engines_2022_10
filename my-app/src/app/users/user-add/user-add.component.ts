import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'my-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  userFormGroup = new FormGroup({
    username: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl<string>('', { nonNullable: true }),
  });

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    // this.userFormGroup.valueChanges.subscribe((user) => {
    //   console.log(user);
    // })
  }

  createUser() {
    this.userService.create(this.userFormGroup.value).subscribe((user) => {
      // this.router.navigate(['users'])
      this.userService.userCreated.next(user);
      this.router.navigateByUrl('/users');
    });
  }
}
