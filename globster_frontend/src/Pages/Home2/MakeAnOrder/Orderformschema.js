import * as Yup from "yup";

export const SERVICE_OPTIONS = [
    { value: "", label: "Select a service" },
    { value: "vector-artwork", label: "Vector Artwork Services" },
    { value: "embroidery-digitizing", label: "Custom Embroidery Digitizing" },
    { value: "image-video-editing", label: "Image & Video Editing" },
    { value: "product-mockups", label: "Product Mockups" },
    { value: "data-processing", label: "Data Processing Solutions" },
    { value: "virtual-assistant", label: "Virtual Assistant" },
    { value: "website-development", label: "Custom Website Development" },
    { value: "ecommerce-development", label: "E-commerce Website Development" },
];

export const orderFormInitialValues = {
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    service: "",
    message: "",
    acceptTerms: false,
};

export const orderFormValidationSchema = Yup.object({
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
    companyName: Yup.string()
        .trim()
        .min(2, "Please enter your company name")
        .required("Company name is required"),
    service: Yup.string().required("Please select a service"),
    message: Yup.string()
        .trim()
        .min(10, "Please tell us a bit more (min. 10 characters)")
        .required("Message is required"),
    acceptTerms: Yup.boolean()
        .oneOf([true], "You must accept the Privacy Policy & Terms")
        .required("You must accept the Privacy Policy & Terms"),
});

// Swap this out for a real API call (fetch/axios) when the backend is ready.
export const submitOrderForm = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    // Simulated success — replace with real request handling:
    // const res = await fetch("/api/orders", { method: "POST", body: JSON.stringify(values) });
    // if (!res.ok) throw new Error("Request failed");
    return { ok: true, values };
};