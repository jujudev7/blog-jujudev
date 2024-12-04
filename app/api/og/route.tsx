/* eslint-disable @next/next/no-img-element */
import { siteConfig } from "@/config/site";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";

  try {
    const { searchParams } = new URL(request.url);

    // Paramètre title
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "JujuBlog";

    // Charger la police
    const fontResponse = await fetch("/assets/fonts/Inter-Bold.ttf");
    if (!fontResponse.ok) {
      throw new Error("Failed to load font");
    }
    const fontData = await fontResponse.arrayBuffer();

    // Charger l'image
    const imageResponse = await fetch("/avatar.png");
    if (!imageResponse.ok) {
      throw new Error("Failed to load image");
    }
    // const imageData = await imageResponse.arrayBuffer();

    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col p-12 w-full h-full items-start text-black"
          style={{
            backgroundImage: `url(${baseUrl}/bg-og.jpg)`,
          }}
        >
          <div tw="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 11a9 9 0 0 1 9 9" />
              <path d="M4 4a16 16 0 0 1 16 16" />
              <circle cx="5" cy="19" r="1" />
            </svg>
            <p tw="ml-2 font-bold text-2xl">JujuBlog</p>
          </div>
          <div tw="flex flex-col justify-center flex-1 py-10 px-50 text-white">
            <div tw="flex text-xl uppercase font-bold tracking-tight font-normal">
              Article
            </div>
            <div tw="flex text-[80px] font-bold text-[50px]">{title}</div>
          </div>
          <div tw="flex items-end w-full justify-between">
            <div tw="flex text-xl">{siteConfig.url}</div>
            <div tw="flex items-center flex-col text-xl overflow-hidden">
              {/* <div tw="flex ml-2">{siteConfig.links.github}</div> */}

              <img
                tw="w-40 h-40 rounded-full scale-150 border border-2 border-white ml-2"
                src={`${baseUrl}/avatar.png`}
                alt="Julien Penna"
              />
              <span tw="text-lg mt-2 text-white">Julien Penna</span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
  } catch (error) {
    console.error(error);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
