import { facebook, instagram, twitter } from "../assets/icons";
import { category1, category2, category3, categorye, customer1, customer2 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#feature", label: "Features" },
    { href: "#contact-us", label: "Contact Us" },
];


export const services = [
    {
        imgURL: category1,
        equ: categorye,
        label: "Lifestyle",
        subtext: "Enjoy seamless podcast with our lifestyle audio story."
    },
    {
        imgURL: category2,
        equ: categorye,
        label: "Health",
        subtext: "Enjoy seamless podcast with our health audio story."
    },
    {
        imgURL: category3,
        equ: categorye,
        label: "Business & Finance",
        subtext: "Enjoy seamless podcast with our business audio story."
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];