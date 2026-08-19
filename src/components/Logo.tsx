import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="InnServe home">
      <Image
        src="/innserve-logo.png"
        alt="InnServe"
        width={220}
        height={56}
        className="h-9 w-auto sm:h-10"
        priority
      />
    </Link>
  );
}
