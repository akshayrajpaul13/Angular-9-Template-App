export class User {
  Id: number;
  Email: string;
  Password: string;
  FirstName: string;
  LastName: string;
  Token?: string;

  public static getTestUser(): User {
    const user = new User();
    user.Id = 1;
    user.FirstName = 'Akshay';
    user.LastName = 'Rajpaul';
    user.Email = 'akshayrajpaul13@msn.com';
    user.Token = '123456789';
    return user;
  }
}
