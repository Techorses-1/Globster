import { PhoneCall, UserCheck, CalendarClock, Settings2, Rocket } from "lucide-react";

export const PROCESS_STEPS = [
    {
        icon: PhoneCall,
        number: "01",
        title: "Discovery Call",
        description:
            "Discuss your requirements and the kind of VA you want. We go through your project in detail and find out exactly how we can help you.",
    },
    {
        icon: UserCheck,
        number: "02",
        title: "Choose Your VA",
        description:
            "Interview candidates from our team of expert VAs, talk with them, and find out who's the best fit for you. You take the interview and select your own VA.",
    },
    {
        icon: CalendarClock,
        number: "03",
        title: "Take Your 1-Week Trial",
        description:
            "Work with your chosen VA for one week - completely free. No payment, just a real chance to see their skill and how they can help you.",
    },
    {
        icon: Settings2,
        number: "04",
        title: "Onboarding",
        description:
            "We set up your project and all the tools that we - and you - need, so everything runs smoothly from day one.",
    },
    {
        icon: Rocket,
        number: "05",
        title: "Start Your Journey With Us",
        description:
            "Start growing your business with us and save your precious time. You focus on growth - we'll take care of the rest.",
    },
];