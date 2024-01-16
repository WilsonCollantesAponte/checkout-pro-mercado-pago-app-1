import { MercadoPagoConfig, Preference } from "mercadopago";

export async function POST() {
  const client = new MercadoPagoConfig({
    accessToken: process.env.ACCESS_TOKEN,
  });

  const preference = new Preference(client);

  const response = await preference.create({
    body: {
      items: [
        {
          id: "1",
          quantity: 5,
          title: "Fe with me",
          unit_price: 25,
          category_id: "photo",
          description: "friendship",
          picture_url:
            "https://res.cloudinary.com/dputhhzyb/image/upload/v1705079802/qzgolsnzdl13wtqwvfk8.jpg",
        },
      ],
      back_urls: {
        failure: "",
        pending: "",
        success: "https://utp-app.vercel.app/",
      },
    },
  });

  return Response.json(response, { status: 200 });
}

export async function GET() {
  return Response.json(
    { data: "ok", token: process.env.ACCESS_TOKEN },
    { status: 200 }
  );
}
