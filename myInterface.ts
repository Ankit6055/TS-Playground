interface Client {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string // It's optional
    // startTrial: () => string
    startTrial(): string // upper one is also correct 
    getCoupon(couponname: string, value: number): number
}

const ankit: Client = {dbId: 22, email: "a@a.com", userId: 2211, startTrial: () => {
    return "trial started"
}, getCoupon: (name: "hitesh10", off: 10) => { // you dont have to match the name and couponname
    return 10
}}
ankit.email = "b@b.com";