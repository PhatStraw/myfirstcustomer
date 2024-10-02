"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import logo from "../../logomfc.png";
export function LandingPageComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 p-4">
      <div className="w-full max-w-3xl">
        <div className="flex justify-center mb-2">
          <Image src={logo} alt="logo" height={64} width={64} />
        </div>
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
              Hire us for $50/hr
            </Button>
          </div>
          <div className="pt-8 space-y-2 text-sm text-gray-500 flex flex-col items-center">
            <div className="flex items-center justify-center">
              <span className="mr-2">
                10+ years experience in software development
              </span>
              <span className="flex-shrink-0 mx-2 text-2xl text-center">•</span>

              <span className="ml-2">
                Comprehensive user testing and feedback
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-2">
                48-hour turnaround on initial feedback
              </span>
              <span className="flex-shrink-0 mx-2 text-2xl text-center">•</span>
              <span className="ml-2">Detailed report included via PDF</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center flex flex-col items-center justify-center text-sm text-gray-500">
          <p className="mb-8 max-w-md">
            *We&apos;re here for you Monday to Friday! Just a heads up, if
            things get busy, it might take a bit longer than 48 hours to get
            back to you, but don&apos;t worry—we&apos;ll keep you in the loop!
          </p>
          <p className="max-w-md">
            MyFirstCustomer is a service launched in 2024, created by an
            experienced software developer based in San Francisco.
          </p>
        </div>
      </div>
    </div>
  );
}

// As a builder, I know the frustration of pouring time and effort into developing an app, only to struggle with getting real, honest feedback. I've been there — launching products, wondering where the pain points are, and needing someone to truly walk through the flow and tell me what works and what doesn't.

// That’s why I created MyFirstCustomer. We’ll be your first super user, helping you avoid the guesswork by offering actionable feedback on your app. We identify pain points, test your user flow, and give you detailed insights to help you improve fast.

// You’ll get a comprehensive user testing experience, with a detailed report and initial feedback delivered within 48 hours. I’ve felt the pain of not getting feedback, and now I’m turning that into a service.
