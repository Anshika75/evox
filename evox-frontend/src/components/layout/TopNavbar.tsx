import Image from 'next/image';

interface TopNavbarProps {
  navbarData?: {
    phoneNumber: string;
    email: string;
    socialLinks: Array<{
      id: number;
      text: string;
      href: string;
      isExternal: boolean;
    }>;
  };
}

const getSocialIcon = (text: string) => {
  switch (text.toLowerCase()) {
    case 'instagram':
      return 'fab fa-instagram';
    case 'facebook':
      return 'fab fa-facebook-f';
    case 'x':
    case 'twitter':
      return 'fab fa-twitter';
    default:
      return 'fas fa-link';
  }
};

export default function TopNavbar({ navbarData }: TopNavbarProps) {
  // Fallback data
  const phoneNumber = navbarData?.phoneNumber || '+916202271745';
  const email = navbarData?.email || 'corporate@evox.com';
  const socialLinks = navbarData?.socialLinks || [];

  return (
    <div className="bg-custom-black text-white py-3 px-4 md:px-6 lg:px-12">
      <div className="w-full hidden md:flex items-center justify-between">
        {/* Contact Information */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/call.svg"
              alt="Phone Icon"
              width={20}
              height={20}
              className="mb-1"
            />
            <span className="plus-jakarta-sans-medium text-sm">{phoneNumber}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/mail.svg"
              alt="Mail Icon"
              width={20}
              height={20}
              className="mb-1"
            />
            <span className="plus-jakarta-sans-medium text-sm">{email}</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-6">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.href}
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              aria-label={social.text}
              target={social.isExternal ? "_blank" : "_self"}
              rel={social.isExternal ? "noopener noreferrer" : ""}
            >
              <i className={`${getSocialIcon(social.text)} text-black text-sm`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Contact Info */}
      <div className="md:hidden flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/icons/call.svg"
            alt="Phone Icon"
            width={14}
            height={14}
            className="mb-1"
          />
          <span className="plus-jakarta-sans-medium text-xs">{phoneNumber}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Image
            src="/icons/mail.svg"
            alt="Mail Icon"
            width={14}
            height={14}
            className="mb-1"
          />
          <span className="plus-jakarta-sans-medium text-xs">{email}</span>
        </div>
      </div>
    </div>
  )
}