import { InformationManualBankingModel } from "./infomation-banking";
import { PurchaseDetailsModel } from "./purchase-details";

export class PurchaseOrder {
    idStudent?: number;
    contentTranferBanking?: string;
    totalPrice?: number;
    discountAmount?: number;
    purcharseStatus?: string;
    purcharseCode?: string;
    listPurchaseCourseDetails?: PurchaseDetailsModel[];
    infoBanking?: InformationManualBankingModel;
}