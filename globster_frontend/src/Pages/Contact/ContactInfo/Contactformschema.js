import * as Yup from "yup";

export const contactFormInitialValues = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
};

export const contactFormValidationSchema = Yup.object({
    fullName: Yup.string()
        .trim()
        .min(2, "Please enter your full name")
        .required("Full name is required"),
    email: Yup.string()
        .trim()
        .email("Enter a valid email address")
        .required("Email is required"),
    phone: Yup.string()
        .trim()
        .matches(/^[+]?[\d\s()-]{7,20}$/, "Enter a valid phone number")
        .required("Phone number is required"),
    message: Yup.string()
        .trim()
        .min(10, "Please tell us a bit more (min. 10 characters)")
        .required("Message is required"),
});

// Swap this out for a real API call (fetch/axios) when the backend is ready.
export const submitContactForm = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    // const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) });
    // if (!res.ok) throw new Error("Request failed");
    return { ok: true, values };
};