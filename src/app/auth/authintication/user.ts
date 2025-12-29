// export class User{
// constructor(public email : string,
//      public Id: string,
//       private _idToken: string,
//        private _tokenExpierationData: Date) {}

//        get token(){
//         if(!this._idToken || new Date()>this._tokenExpierationData)
//             return null;
//         return this._idToken;
//        }
// }
export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}

