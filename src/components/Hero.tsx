
import Link from "next/link";

export default function Hero() {
    return (
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Welcome to SwasthyaConnect</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          Your health, connected. Seamless access to healthcare services, right at your fingertips.
        </p>
        <div className="mt-8">
            <Link
              href="/signup"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-transform hover:scale-105 inline-block"
            >
              Get Started
            </Link>
        </div>
      </section>
    );
  }
