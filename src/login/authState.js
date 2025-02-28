export class AuthState {
    static Unknowon = new AuthState('unknown');
    static Authenticated = new AuthState('authenticated');
    static Unatuthenticated = new AuthState('unauthenticated');

    constructor(type) {
        this.type = type;
    }
}