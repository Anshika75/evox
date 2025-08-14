import Image from "next/image";
import Link from "next/link";

interface NavbarProps {

    footerData?: {
        id: number;
        newsLetterHeading: string;
        newsLetterDescription: string;
        footerCompanyDescription: string;
        newsLetterImage: {
            id: number;
            documentId: string;
            name: string;
            url: string;
            alternativeText: string | null;
        };
        ctaSubscribeLink: {
            id: number;
            text: string;
            href: string;
            isExternal: boolean;
        };

        ctaContactLink: {
            id: number;
            text: string;
            href: string;
            isExternal: boolean;
        };

        socialLinks: Array<{
            id: number;
            text: string;
            href: string;
            isExternal: boolean;
        }>;
        contactUs: {
            id: number;
            address: string;
            phoneNumber: string;
            email: string;
            websiteLink: string;
            heading: string;
        };
        openingHours: {
            id: number;
            heading: string;
            dayRange1: string;
            dayRange2: string;
        };
        quickLink: {
            id: number;
            heading: string;
            links: Array<{
                id: number;
                text: string;
                href: string;
                isExternal: boolean;
            }>;
        };
    } | null

}


export default function Footer({ footerData }: NavbarProps) {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-custom-black text-gray-300 py-10 lg:py-16">
            <div className="px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-gray-700">


                    {/* Column 1: Logo, Description, Social Media */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center justify-items-start">
                            <Image
                                src="/images/common/logo-white.png"
                                alt="Evox Logo"
                                width={100}
                                height={100}
                                className="h-4 w-auto flex md:hidden"
                            />
                            <Image
                                src="/images/common/logo-white.png"
                                alt="Evox Logo"
                                width={100}
                                height={100}
                                className="h-8 w-auto hidden md:block"
                            />
                        </Link>
                        <p className="text-sm tracking-wider font-extralight plus-jakarta-sans-extralight text-white opacity-50 leading-7">{footerData?.footerCompanyDescription}

                        </p>
                        <div className="flex items-center space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram text-custom-black text-lg"></i>
                            </a>


                            <a
                                href="#"
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook-f text-custom-black text-lg"></i>
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                                aria-label="Twitter"
                            >
                                <i className="fab fa-twitter text-custom-black text-lg"></i>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Opening Hours */}
                    <div className="space-y-4">
                        <h3 className="text-xl plus-jakarta-sans-semibold font-semibold text-white mb-4">Opening Hours</h3>
                        <p className="text-sm text-white plus-jakarta-sans-extralight font-extralight opacity-50 tracking-wider">Mon-Fri : 08.00 - 20.00</p>
                        <p className="text-sm text-white plus-jakarta-sans-extralight font-extralight opacity-50 tracking-wider">Sat-Sun: 10.00 - 16.00</p>
                    </div>




                    {/* Column 3: Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl plus-jakarta-sans-semibold font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-sm text-white plus-jakarta-sans-extralight font-extralight opacity-50 tracking-wider hover:text-white transition-colors duration-200">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/why-us" className="text-sm text-white plus-jakarta-sans-extralight font-extralight opacity-50 tracking-wider hover:text-white transition-colors duration-200">
                                    Why with Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-sm text-white plus-jakarta-sans-extralight font-extralight opacity-50 tracking-wider hover:text-white transition-colors duration-200">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/how-it-works" className="text-sm text-white plus-jakarta-sans-extralight font-extralight opacity-50 tracking-wider hover:text-white transition-colors duration-200">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing-plan" className="text-sm text-white plus-jakarta-sans-extralight font-extralight opacity-50 tracking-wider hover:text-white transition-colors duration-200">
                                    Pricing Plan
                                </Link>
                            </li>
                            <li>
                                <Link href="/appointment" className="text-sm text-white plus-jakarta-sans-extralight font-extralight opacity-50 tracking-wider hover:text-white transition-colors duration-200">
                                    Appointment
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-white plus-jakarta-sans-extralight font-extralight opacity-50 tracking-wider hover:text-white transition-colors duration-200">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>



                    {/* Column 4: Contact Us */}
                    <div className="space-y-4">
                        <h3 className="text-xl plus-jakarta-sans-semibold font-semibold text-white mb-4">Contact us</h3>
                        <p className="text-sm text-white plus-jakarta-sans-extralight font-extralight opacity-50 tracking-wider">1271 Gladstone Rd, Nassau, Bahamas</p>
                        <p className="text-sm text-white plus-jakarta-sans-extralight font-extralight opacity-50 tracking-wider">+1 234-789-0876</p>
                        <p className="text-sm text-white plus-jakarta-sans-extralight font-extralight opacity-50 tracking-wider">hello@loreipsum.com</p>
                        <p className="text-sm text-white plus-jakarta-sans-extralight font-extralight opacity-50 tracking-wider">www.loreipsum.com</p>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="pt-8 text-center text-sm text-white plus-jakarta-sans-extralight font-extralight opacity-50 tracking-wider">
                    <p>{`Copyright © ${currentYear} Evox. All rights reserved.`}</p>
                </div>
            </div>
        </footer>
    )
}