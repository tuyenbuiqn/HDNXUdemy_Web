import { Injectable } from "@angular/core";
import { TransferHttp } from "../transfer-http/transfer-http";
import { LinkSettings } from "src/app/library/linksetting/LinkSetting";
import { map } from "rxjs/operators";
import { RepositoryModel } from "src/app/models/models/repository_base";
import { LoginRegister } from "src/app/models/respone_model/login-register-respone";
import { GoogleLoginProvider, SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthenticationServices {
    constructor(
        private transferHttp: TransferHttp,
    ) {


    }

    registerUser(email: string, password: string, name: string, phone: string) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Authentication', 'RegisterUser', email, password, name, phone);
        return this.transferHttp.get(ApiUrl).pipe(map((res: RepositoryModel<LoginRegister>) => res));
    }

    loginNormalAccount(email: string, password: string) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Authentication', 'LoginNormalAccount', email, password);
        return this.transferHttp.get(ApiUrl).pipe(map((res: RepositoryModel<LoginRegister>) => res));
    }

    loginWithGoogle(model: SocialUser) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Authentication', 'LoginWithGoogle');
        return this.transferHttp.post(ApiUrl, model).pipe(map((res: RepositoryModel<LoginRegister>) => res));
    }

    loginWithFaceBook(model: SocialUser) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Authentication', 'LoginWithFaceBook');
        return this.transferHttp.post(ApiUrl, model).pipe(map((res: RepositoryModel<LoginRegister>) => res));
    }
}