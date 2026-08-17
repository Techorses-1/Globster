import {
    PenTool,
    Shirt,
    Film,
    Box,
    Database,
    Headset,
    Globe2,
    ShoppingCart,
} from "lucide-react";

// NOTE: Replace the `image` URLs with your final production photography.
// Placeholders are served from picsum.photos (seeded, so they stay
// consistent) purely so the layouts are visible while you wire up real assets.

export const SERVICES = [
    {
        icon: Headset,
        image: "https://picsum.photos/seed/svc-va/1000/1200",
        title: "Virtual Support, Real Results",
        oneLiner: "Your Time Back, Every Day",
        description:
            "Reliable support for admin, inbox, and daily tasks - so you can focus on growth and scale your business effortlessly with expert assistance.",
        link: "/service/virtual-assistant",
    },
    {
        icon: Globe2,
        image: "https://picsum.photos/seed/svc-website/1000/1200",
        title: "Websites Crafted Around You",
        oneLiner: "Websites Built Around You",
        description:
            "Custom-coded websites designed to match your brand identity and convert visitors into loyal, long-term customers effectively.",
        link: "/service/website-development",
    },
    {
        icon: ShoppingCart,
        image: "https://picsum.photos/seed/svc-ecommerce/1000/1200",
        title: "E-Commerce Stores Built To Convert",
        oneLiner: "Stores Built to Sell",
        description:
            "High-performing online stores designed for a seamless shopping experience and higher conversion rates that drive revenue growth.",
        link: "/service/ecommerce-development",
    },
    {
        icon: PenTool,
        image: "https://picsum.photos/seed/svc-vector/1000/1200",
        title: "Vector Artwork, Perfected",
        oneLiner: "Clean, Scalable, Print-Ready",
        description:
            "We turn your designs into crisp vector artwork - perfect for print, branding, merchandise, and digital use across all platforms.",
        link: "/service/vector-art",
    },
    {
        icon: Shirt,
        image: "https://picsum.photos/seed/svc-embroidery/1000/1200",
        title: "Embroidery Digitizing, Stitched Right",
        oneLiner: "From Design to Stitch",
        description:
            "Precise, machine-ready embroidery files that bring your designs to life on fabric with exceptional detail and flawless execution.",
        link: "/service/embroidery",
    },
    {
        icon: Film,
        image: "https://picsum.photos/seed/svc-imagevideo/1000/1200",
        title: "Visuals That Demand Attention",
        oneLiner: "Polished Visuals, Every Time",
        description:
            "Professional editing that makes your photos and videos look sharp, compelling, and market-ready for any platform or campaign.",
        link: "/service/image-editing",
    },
    {
        icon: Box,
        image: "https://picsum.photos/seed/svc-mockups/1000/1200",
        title: "Mockups That Sell The Vision",
        oneLiner: "See Your Product Before It's Made",
        description:
            "Realistic mockups that showcase your products beautifully - before a single unit ships to customers or hits the market.",
        link: "/service/product-mockup",
    },
    {
        icon: Database,
        image: "https://picsum.photos/seed/svc-data/1000/1200",
        title: "Data Processing, Done Right",
        oneLiner: "Your Data, Organized & Ready",
        description:
            "Accurate data entry, cleaning, and processing - so you always work with reliable and actionable information for better decision-making.",
        link: "/service/data-processing",
    },
];