import { BsQrCodeScan } from "react-icons/bs";
import { BsSuitcaseLg } from "react-icons/bs";
import { IoHelpCircleOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import { ReactElement, useState } from "react";
import { MdOutlineThumbUp } from "react-icons/md";

const PromotionComponent = () => {
  return (
    <div className="flex flex-row max-w-6xl mx-auto px-6 py-8 gap-4 items-start">
      <AppDownloadSection />
      <div className="flex flex-col gap-4">
        <FindMyTripSection />
        <HelpCenterSection />
      </div>
    </div>
  );
};

export default PromotionComponent;

const AppDownloadSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [linkSent, setLinkSent] = useState(false);

  const formatPhoneNumber = (input: string) => {
    // Prepend "+1 " for the first entered digit
    if (!input.startsWith("+")) {
      input = "+1 " + input;
    }

    // Remove all non-digit characters
    const cleaned = input.replace(/\D/g, "");

    // Limit to 10 digits
    const limited = cleaned.slice(0, 11);

    // Format the number
    if (limited.length > 7) {
      return `+1 (${limited.slice(1, 4)}) ${limited.slice(
        4,
        7
      )}-${limited.slice(7)}`;
    } else if (limited.length === 7) {
      return `+1 (${limited.slice(1, 4)}) ${limited.slice(4)}-`;
    } else if (limited.length > 4) {
      return `+1 (${limited.slice(1, 4)}) ${limited.slice(4)}`;
    } else if (limited.length === 4) {
      return `+1 (${limited.slice(1, 4)}) `;
    } else if (limited.length > 1) {
      return `+1 (${limited.slice(1)}`;
    } else {
      return "";
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedNumber);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendLink();
    }
  };

  const handleSendLink = () => {
    if (phoneNumber.length === 17) {
      // "+1 (###) ###-####" is 17 characters long
      setLinkSent(true);
      console.log(phoneNumber);
    }
  };

  return (
    <div className="flex flex-row gap-4 bg-white rounded-lg shadow-md px-4 py-8 border-2 border-slate-200">
      <div>
        <h2 className="text-xl font-bold mb-2">
          Our Best Deals are in the App
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Discover hotel, flight and rental car deals exclusively in the app.
          Download today to stay connected with important trip details.
        </p>
        <div className="flex items-center mb-4 mr-4">
          {!linkSent ? (
            <>
              <input
                type="text"
                placeholder="+1 (###) ###-####"
                className="flex-grow border rounded-l-lg px-3 py-2 text-sm"
                value={phoneNumber}
                onChange={handlePhoneChange}
                onKeyDown={handleKeyPress}
              />

              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg text-sm"
                onClick={handleSendLink}
              >
                Send Link
              </button>
            </>
          ) : (
            <div className="flex flex-row gap-2 items-center text-sm bg-green-100 font-semibold p-2 rounded-lg mb-2">
              <MdOutlineThumbUp size={20} className="text-green-400" />
              <p className="m-0 leading-tight">
                We've sent a link to the number you provided. Happy Savings!
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-between bg-blue-50 rounded-lg px-4 py-2">
        <BsQrCodeScan size={100} />
        <span className="text-xs text-gray-500">Or scan QR code!</span>
      </div>
    </div>
  );
};

const ClickableCard = ({ title, content, children }: ClickableCardProp) => {
  return (
    <div className="rounded-lg p-4 flex items-center justify-between border-2 border-slate-200 cursor-pointer shadow-md hover:shadow-[rgba(0,0,0,0.2)]">
      <div className="flex items-center ">
        <div className="text-blue-800  mr-3 ">{children}</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{content}</p>
        </div>
      </div>
      <FaChevronRight className="text-blue-500" />
    </div>
  );
};

const FindMyTripSection = () => {
  return (
    <ClickableCard
      title={"My Trips"}
      content="Quickly find your booking reservations and redeem flight credits"
    >
      <BsSuitcaseLg />
    </ClickableCard>
  );
};

const HelpCenterSection = () => {
  return (
    <ClickableCard
      title={"Help Center"}
      content="We are always Here for you - reach us 24hrs a day, 7 days a week"
    >
      <IoHelpCircleOutline />
    </ClickableCard>
  );
};

interface ClickableCardProp {
  title: string;
  content: string;
  children: ReactElement;
}
