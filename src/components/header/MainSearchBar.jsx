function MainSearchBar() {
  return (
    <div className="relative w-[420px]">
      <form action="">
        <div className="search_bg rounded-3xl  flex justify-between box-border min-w-0 w-full h-10">
          <div className="">
            <input
              type="search"
              title="Search Site"
              autoComplete="off"
              className="absolute w-full py-0 pr-5 pl-14 border-0 outline-0 box-border rounded-3xl h-full bg-transparent appearance-none"
            />
          </div>
          <div>
            <button className="bg-primary appearance-none py-0 px-5 rounded-3xl border-0 outline-0 box-border w-full h-full cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100 self-end block relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block text-white "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <span className="hidden">جستجو</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MainSearchBar;
