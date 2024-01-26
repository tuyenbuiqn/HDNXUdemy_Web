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


    private authChangeSub = new Subject<boolean>();
    private extAuthChangeSub = new Subject<SocialUser>();
    public authChanged = this.authChangeSub.asObservable();
    public extAuthChanged = this.extAuthChangeSub.asObservable();

    constructor(
        private transferHttp: TransferHttp,
        private readonly externalAuthService: SocialAuthService
    ) {

        this.externalAuthService.authState.subscribe((user) => {
            this.extAuthChangeSub.next(user);
        });
    }

    clientLoginWithGoogle() {
        console.log("clientLoginWithGoogle");
        this.externalAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    clientLogoutGoogle() {
        this.externalAuthService.signOut();
    }

    registerUser(email: string, password: string, name: string, phone: string) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Authentication', 'RegisterUser', email, password, name, phone);
        return this.transferHttp.get(ApiUrl).pipe(map((res: RepositoryModel<LoginRegister>) => res));
    }

    loginNormalAccount(email: string, password: string) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Authentication', 'LoginNormalAccount', email, password);
        return this.transferHttp.get(ApiUrl).pipe(map((res: RepositoryModel<LoginRegister>) => res));
    }

    loginWithGoogle(credential: string) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Authentication', 'LoginWithGoogle', credential);
        return this.transferHttp.get(ApiUrl).pipe(map((res: RepositoryModel<LoginRegister>) => res));
    }

    loginWithFaceBook(credential: string) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Authentication', 'LoginWithFaceBook', credential);
        return this.transferHttp.get(ApiUrl).pipe(map((res: RepositoryModel<LoginRegister>) => res));
    }
}