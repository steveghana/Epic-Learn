import { Button } from "../ui/button";

const UpgradeToPro = () => {
  return (
    <div className="hidden md:flex justify-between items-start bg-darkslategray text-yellow-500 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Upgrade to Pro</h2>

      <ul className="text-sm">
        <li className="flex items-center mb-2">
          <svg
            className="w-4 h-4 mr-2 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 18a1 1 0 100-2 1 1 0 000 2zM10 14a1 1 0 100-2 1 1 0 000 2zM10 10a1 1 0 100-2 1 1 0 000 2zM10 6a1 1 0 100-2 1 1 0 000 2z"></path>
          </svg>
          Access to premium courses
        </li>
        <li className="flex items-center mb-2">
          <svg
            className="w-4 h-4 mr-2 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.414 14.95a1 1 0 001.414-1.414L12.414 11l2.828-2.828a1 1 0 10-1.414-1.414L11 9.586 8.172 6.758a1 1 0 00-1.414 1.414L9.586 11l-2.828 2.828a1 1 0 101.414 1.414L11 12.414l2.828 2.828z"></path>
          </svg>
          Priority customer support
        </li>
        <li className="flex items-center">
          <svg
            className="w-4 h-4 mr-2 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 18a1 1 0 100-2 1 1 0 000 2zM10 14a1 1 0 100-2 1 1 0 000 2zM10 10a1 1 0 100-2 1 1 0 000 2zM10 6a1 1 0 100-2 1 1 0 000 2z"></path>
          </svg>
          Monthly webinars and workshops
        </li>
      </ul>
      <Button className=" bg-yellow-500 hover:bg-yellow-400 text-gray-800 py-2 px-4 rounded-full">
        Upgrade Now
      </Button>
    </div>
  );
};
export function UpgradeToProMobile() {
  return (
    <div className="lg:hidden md:block bg-gray-800 text-yellow-500 flex flex-col items-center justify-center p-4 rounded-md shadow-md">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-base md:text-xl lg:text-2xl font-semibold mb-2 md:mb-4">
          Upgrade to Pro
        </h2>
        <p className="text-xs md:text-sm lg:text-base text-center text-gray-300 mb-4 line-clamp-3">
          Unlock exclusive features and supercharge your learning experience
          with Pro. Upgrade now and take your education journey to the next
          level!
        </p>
        <Button className="mt-2 bg-yellow-500 hover:bg-yellow-400 text-gray-800">
          Upgrade
        </Button>
      </div>
    </div>
  );
}
export default UpgradeToPro;
