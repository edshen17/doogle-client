const Footer = () => {
  const getCurrentYear = (): number => {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }

  return <footer>
    <div className="border border-t-2 border-gray-200">
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <p className="sm:ml-6 sm:mt-0 mt-4">
          © { getCurrentYear() } — Doogle / Edwin S.
        </p>
      </div>
    </div>
  </footer>
}

export default Footer
