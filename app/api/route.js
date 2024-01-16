import { MercadoPagoConfig, Preference } from "mercadopago";

export async function POST() {
  try {
    const client = new MercadoPagoConfig({
      accessToken: process.env.ACCESS_TOKEN,
    });

    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items: [
          {
            id: "1",
            quantity: 3,
            title: "Fe with me",
            unit_price: 10,
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

    // return Response.json({ client, preference, response }, { status: 200 });
    return Response.json(response.id, { status: 200 });
  } catch (error) {
    return Response.json(error, {
      status: "400",
      statusText: "Verify token or other causes",
    });
  }
}

export async function GET() {
  return Response.json(
    { data: "ok", token: process.env.ACCESS_TOKEN },
    { status: 200 }
  );
}

//Los resultados se envían por query a la url de retorno
