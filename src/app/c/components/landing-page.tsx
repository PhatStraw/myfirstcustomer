"use client";
import { Button } from "./ui/button";

export function LandingPageComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 p-4">
      <div className="w-full max-w-3xl">
        {/* Main content */}
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Need your first super user?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;ll be your first customer, providing actionable feedback and
            identifying pain points to improve your app&apos;s user experience.
          </p>
          <div className="inline-block">
            <Button
              className="bg-black text-white hover:bg-gray-800 text-lg py-6 px-8"
              onClick={() =>
                window.open("https://calendly.com/kevindsimsjr/30min", "_blank")
              }
            >
              Hire us for $50/hour
            </Button>
          </div>
          <div className="pt-8 space-y-2 text-sm text-gray-500">
            <p>20+ years experience in software development</p>
            <p>Comprehensive user testing and feedback</p>
            <p>48-hour turnaround on initial feedback</p>
            <p>Detailed report included</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-500">
          <p className="mb-2">
            *We&apos;re here for you Monday to Friday! Just a heads up, if
            things get busy, it might take a bit longer than 48 hours to get
            back to you, but don&apos;t worry—we&apos;ll keep you in the loop!
          </p>
          <p>
            MyFirstCustomer is a service launched in 2024, created by an
            experienced software developer based in San Francisco.
          </p>
        </div>
      </div>
    </div>
  );
}
