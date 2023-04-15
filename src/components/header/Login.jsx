function Login() {
  return (
    <div className="relative box-border mr-12 transition ease-in-out delay-100 hover:scale-110 duration-100">
      <a
        href=""
        className="flex flex-col justify-center relative py-2 pr-12 pl-5 rounded-3xl  min-h-11 hover:bg-slate-800/10 active:bg-secondary  active:!text-bg "
      >
        <div className="absolute top-2 right-2.5 w-8 h-8 text-center text-xl leading-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
        <div className="block text-xs leading-4">خوش‌آمدی</div>
        <div className="block overflow-hidden max-w-[120px] font-bold whitespace-nowrap text-ellipsis">
          ثبت‌نام / ورود
        </div>
      </a>
    </div>
  );
}

export default Login;
