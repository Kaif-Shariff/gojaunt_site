import {email, phone} from "@/core/constant.js";

export const footerSections = [
    {
        title: "Navigation",
        links: [
            {text: "Home", to: "/"},
            {text: "About", to: "/about"},
            {text: "Service", to: "/services"},
            {text: "Contact", to: "/contact"},
        ],
    },
    {
        title: "Service",
        links: [
            {text: "Plane Ticket Booking", to: "/"},
            {text: "Railway Ticket Booking", to: "/"},
            {text: "Visa Service", to: "/"},
            {text: "Tours Package", to: "/"},
            {text: "Car Rental Service", to: "/"},
            {text: "Hotel Booking", to: "/"},
        ],
    },
    {
        title: "Contact",
        links: [
            {text: "Shop No.1, 152, Bapu Khote Street"},
            {text: "Surthiwala building, Mumbai - 400003"},
            {text: `${email}`},
            {text: `${phone}`},
        ],
    },
];
