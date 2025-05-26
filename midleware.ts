//without a defined matcher this one line applies
//next-auth to the whole project.

export { default } from "next-auth/middleware"

export const config ={
    matcher: [
        "/news",
    ]
}