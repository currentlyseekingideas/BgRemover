import Image from "next/image";
import googleLogo from "@/assets/logo/googleLogo.jpeg";
import Link from "next/link";

const inputStyle =
  "w-full rounded-lg border border-[#737373] p-3 bg-transparent";

function Page() {
  return (
    <div className="relative top-12 flex h-screen w-full flex-col items-center gap-5 px-40 pt-5 sm:top-16">
      <span className="w-screen text-center text-xl font-semibold sm:text-4xl">
        Log in PixelMind Account
      </span>
      <div className="flex h-[400px] w-80 flex-col items-center gap-5 rounded-lg p-4 shadow sm:w-96">
        <h1 className="text-2xl font-semibold text-[#737373]">Log in</h1>
        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#737373] p-2">
          <Image src={googleLogo} alt="googleLogo" width={20} height={20} />
          <span className="font-semibold text-[#737373]">
            Continue with Google
          </span>
        </div>
        <form className="flex w-full flex-col items-center gap-5">
          <input type="email" placeholder="Email" className={`${inputStyle}`} />
          <input
            type="password"
            placeholder="Password"
            className={`${inputStyle}`}
            id="password"
          />
          <span className="sm:text-md flex gap-2 text-sm">
            If you don't have an account
            <Link href="/login-page" className="text-blue-500 underline">
              Sign Up
            </Link>
          </span>
          <button className="w-40 rounded-lg border border-[#737373] bg-[#73737340] p-2 text-xl font-semibold active:bg-[#73737357]">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
export default Page;
