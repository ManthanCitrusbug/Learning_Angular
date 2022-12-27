export class UserDataModelService {

  name:string | undefined;
  email:string | undefined;
  phoneNumber:string | undefined;
  gender:string | undefined;
  city:string | undefined;
  hobby: string | undefined;
  dob: string | undefined;
  age: number | undefined;
  range: number | undefined;
  userType:string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;


  constructor(name:string, email:string, phoneNumber:string, gender:string, city:string, hobby:string,
    dob:string, age:number, range:number, userType:string, password:string, confirmPassword:string) { 

      this.name = name;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.gender = gender;
      this.city = city;
      this.hobby = hobby;
      this.dob = dob;
      this.age = age;
      this.range = range;
      this.userType = userType;
      this.password = password;
      this.confirmPassword = confirmPassword;

     }
}
