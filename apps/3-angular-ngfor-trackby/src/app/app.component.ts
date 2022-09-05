import { Component, OnInit } from '@angular/core';
import { IUser } from './user.interface';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'advanced-angular-course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public users: IUser[] = [];

  public ngOnInit(): void {
    for(let i = 0; i < 5; i++) {
      this.addUser();
    }
  }

  public addUser(): void {
    const id = faker.datatype.uuid();

    this.users.push({
      id,
      name: faker.name.findName()
    })
  }

  public removeUser(user: IUser): void {
    this.users.splice(
      this.users.findIndex((theUser) => theUser.id === user.id),
      1
    )
  }

  public setRandomName(user: IUser): void {
      user.name = faker.name.findName();
  }

  public setRandomId(user: IUser): void {
      user.id = faker.datatype.uuid();
  }

  public changeObjectReference(index: number): void {
    this.users[index] = { ...this.users[index] };
  }

  public trackById(index: number, user: IUser): string {
    return user.id;
  }


}
