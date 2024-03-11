export const apiCall = async (method, url, payload) => {
  console.log(method, url, payload);
  let data, response;
  try {
    switch (method) {
      case "GET":
        console.log(url, payload);
        response = await fetch(url, {
          credentials: "include",
        });
        break;
      case "POST":
        console.log(url, payload, method);

        response = await fetch(url, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        break;
      case "PUT":
        console.log(url, payload, method);

        response = await fetch(url, {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        break;
      case "DELETE":
        response = await fetch(url, {
          method: "delete",
          credentials: "include",
        });
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      case "FORMDATA":
        const formData = new FormData();
        for (const property in payload) {
          formData.append(property, payload[property]);
        }

        response = await fetch(url, {
          method: "POST",
          body: formData,
        });
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      default:
        console.log(`Sorry, we are out of.`);
    }
    data = await response.json();
    return data;
  } catch (error) {
    return { status: "fail" };
  }
};
