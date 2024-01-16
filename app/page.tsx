"use client";

import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import { useState } from "react";

initMercadoPago("TEST-dfc0402a-4fa3-4f63-833c-d7425184d56d", {
  locale: "es-PE",
});

export default function Home() {
  const [preferenceId, setPreferenceId] = useState<string>("");

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={async () => {
          const response = await fetch("http://localhost:3000/api", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          });

          const data = await response.json();
          setPreferenceId(data);
          console.log(data);
        }}
      >
        Pagar
      </button>
      {preferenceId}
      <Wallet
        initialization={{ preferenceId }}
        customization={{
          texts: {
            valueProp: "security_details",
          },
        }}
      />
    </div>
  );
}
