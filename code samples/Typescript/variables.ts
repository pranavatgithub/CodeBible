var fullName: string;
var age: number = 36;
var married: boolean = true;
var jobs: Array<string> = ['IBM', 'Microsoft', 'Google'];
var jobs: string[] = ['Apple', 'Dell', 'HP'];

enum Role {Employee, Manager, Admin};
var role: Role = Role.Employee;
console.log(role); // 0
var r2: Role = Role.Manager;
r2; // 1 how? 0 by default for employee, so next one 1+1

enum test { a = 2, b, c};
console.log(test.a); // 2
console.log(test.b); // 3

enum again  { a = 2, b = 4, c};
console.log(again.b); //4
console.log(again.c); // 5 not 6 ok??
console.log(again[2]); // a

var something: any = 'as string';
something = 1;
something = [1, 2, 3]; // anything goes for any