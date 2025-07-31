import Image from 'next/image';

export default function TopNavbar() {
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
            <span className="plus-jakarta-sans-medium text-sm">+916202271745</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/mail.svg"
              alt="Phone Icon"
              width={20}
              height={20}
              className="mb-1"
            />
            <span className="plus-jakarta-sans-medium text-sm">corporate@evox.com</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-black text-sm"></i>
          </a>
          <a
            href="#"
            className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f text-black text-sm"></i>
          </a>
          <a
            href="#"
            className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter text-black text-sm"></i>
          </a>
        </div>
      </div>

      {/* Mobile Responsive - Hide contact info on small screens */}
      <div className="hidden md:hidden items-center justify-center space-x-4 mt-2">
        <a
          href="#"
          className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram text-black text-sm"></i>
        </a>
        <a
          href="#"
          className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f text-black text-sm"></i>
        </a>
        <a
          href="#"
          className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter text-black text-sm"></i>
        </a>
      </div>

      {/* Mobile Contact Info */}
      <div className="md:hidden flex justify-between text-center">
        <div className="flex items-center justify-center space-x-2">
          <Image
            src="/icons/call.svg"
            alt="Phone Icon"
            width={14}
            height={14}
            className="mb-1"
            />
          <span className="text-xs">+916202271745</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Image
            src="/icons/mail.svg"
            alt="Phone Icon"
            width={14}
            height={14}
            />
          <span className="text-xs">corporate@evox.com</span>
        </div>
      </div>
    </div>
  )
}
