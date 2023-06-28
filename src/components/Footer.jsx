const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-auto bg-gray-600 text-white text-center text-xl py-3">
      @{year}. All right reserved.
    </div>
  );
};
export default Footer;
