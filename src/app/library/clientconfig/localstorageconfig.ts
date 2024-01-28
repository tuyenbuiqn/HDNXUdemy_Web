import { StudentUser } from "src/app/models/models/student-user";
import { LoginRegister } from "src/app/models/respone_model/login-register-respone";

export class LocalStorageConfig {

  private static currentUserKey = 'currentUser';

  public static RemoveUser() {
    localStorage.removeItem(this.currentUserKey);
  }

  public static SetUser(pJSONStringify: LoginRegister) {
    const valueUpdate = JSON.stringify(pJSONStringify);
    localStorage.setItem(this.currentUserKey, valueUpdate);
  }

  public static GetUser(): LoginRegister {
    const user = localStorage.getItem(this.currentUserKey);
    if (user === null) return null;
    return <LoginRegister>JSON.parse(user ?? '');
  }

  public static GetCurrentYearActive(): string {
    const currentYearActive = JSON.parse(localStorage.getItem(this.currentUserKey) ?? '').yearCurrent;
    return currentYearActive;
  }

}
