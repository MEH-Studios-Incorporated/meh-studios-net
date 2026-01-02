import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="self-center dark"
          src="/ms-banner.png"
          alt="MEH Studios Banner"
          width={400}
          height={38}
          priority
        />
        <ol className="font-mono list-none text-sm/6 text-center sm:text-center">
          <li className="mb-2 tracking-[-.01em]">
            This website is currently under construction.
          </li>
          <li className="tracking-[-.01em]">
            Need immediate support? Send us an email.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row self-center">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="mailto:support@mehstudios.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark"
              src="/mail.png"
              alt="Support Email"
              width={20}
              height={20}
            />
            Contact support
          </a>
        </div>
      </main>
      <footer className="row-start-4 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="font-mono text-[10px]/5 text-center opacity-50 max-w-[600px]">
          © Copyright 2026, All rights reserved. MEH Studios, MEH Studios Logo, MEH Studios Research Facility are among our registered and unregistered trademarks in the U.S. and other countries. 
        </p>
      </footer>
    </div>
  );
}
