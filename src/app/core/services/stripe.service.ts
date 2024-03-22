import { Injectable } from "@angular/core";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class StripeServices {
    stripePromise: Promise<Stripe>

    constructor() {
        this.loadConfigForStripe();
    }

    private loadConfigForStripe() {
        this.stripePromise = loadStripe(environment.stripePublicKey);
    }

    async goToCheckOutForStripe() : Promise<void> {
        const stripe = await this.stripePromise;
        const sessionId = await this.createCheckoutSession();
        await stripe.redirectToCheckout({
            sessionId: sessionId
        })
    }

    async createCheckoutSession() : Promise<string> {
        return '';
    }
}