/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";

  try {
    console.log("Base URL:", baseUrl);
    console.log("Full request URL:", request.url);

    const { searchParams } = new URL(request.url);
    console.log("Search Params:", Object.fromEntries(searchParams));

    // Validation des variables d'environnement
    if (!baseUrl) {
      throw new Error("NEXT_PUBLIC_API_URL is not set");
    }

    // Paramètre title
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "JujuBlog";

    console.log("Title:", title);
    console.log("Font fetch URL:", `${baseUrl}/assets/fonts/Inter-Bold.ttf`);
    console.log("Image fetch URL:", `${baseUrl}/avatar.png`);
    console.log("Background image URL:", `${baseUrl}/bg-og.jpg`);

    // Charger la police
    let fontData;
    try {
      const fontResponse = await fetch(
        `${baseUrl}/assets/fonts/Inter-Bold.ttf`
      );
      if (!fontResponse.ok) {
        throw new Error(
          `Font fetch failed: ${fontResponse.status} ${fontResponse.statusText}`
        );
      }
      fontData = await fontResponse.arrayBuffer();
    } catch (fontError) {
      console.error("Font loading error:", fontError);
      throw new Error(
        `Failed to load font: ${
          fontError instanceof Error ? fontError.message : "Unknown error"
        }`
      );
    }

    // Vérification supplémentaire des ressources
    try {
      const imageResponse = await fetch(`${baseUrl}/avatar.png`);
      if (!imageResponse.ok) {
        throw new Error(
          `Avatar image fetch failed: ${imageResponse.status} ${imageResponse.statusText}`
        );
      }

      const bgResponse = await fetch(`${baseUrl}/bg-og.jpg`);
      if (!bgResponse.ok) {
        throw new Error(
          `Background image fetch failed: ${bgResponse.status} ${bgResponse.statusText}`
        );
      }
    } catch (resourceError) {
      console.error("Resource loading error:", resourceError);
      throw new Error(
        `Failed to load resources: ${
          resourceError instanceof Error
            ? resourceError.message
            : "Unknown error"
        }`
      );
    }

    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col p-12 w-full h-full items-start text-black"
          style={{
            backgroundImage: `url(${baseUrl}/bg-og.jpg)`,
          }}
        >
          {/* Reste de votre code inchangé */}
          <div tw="flex flex-col justify-center flex-1 py-10 px-50 text-white">
            <div tw="flex text-xl uppercase font-bold tracking-tight font-normal">
              Article
            </div>
            <div tw="flex text-[80px] font-bold text-[50px]">{title}</div>
          </div>
          {/* ... */}
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
    // Gestion détaillée des erreurs
    const errorMessage = error instanceof Error ? error.message : String(error);

    console.error("Complete OG Image Generation Error:", {
      message: errorMessage,
      stack: error instanceof Error ? error.stack : "No stack trace",
    });

    return new Response(
      `Failed to generate OG image. Details: ${errorMessage}`,
      {
        status: 500,
        headers: {
          "Content-Type": "text/plain",
        },
      }
    );
  }
}
