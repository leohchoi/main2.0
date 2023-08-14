import Script from "next/script";

export default function Email() {
    function init() {
        emailjs.init("LJ_WiUwXTNdQQz2dg");
    }
    return (
        <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" />
    )
}