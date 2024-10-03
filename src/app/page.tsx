import { LandingPageComponent } from "./c/components/landing-page";

export default function Home() {
  return (
    <div>
      <div className="fixed bottom-4 right-4">
        <a href="https://www.producthunt.com/posts/my-first-customer?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-my&#0045;first&#0045;customer" target="_blank">
          <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=493763&theme=light" alt="My&#0032;First&#0032;Customer - Pay&#0032;for&#0032;feedback | Product Hunt" className="w-[100px] md:w-[200px] lg:w-[250px] h-auto" />
        </a>
      </div>
      <LandingPageComponent />
    </div>
  );
}
