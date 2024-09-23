const fs = require("fs");
async function query(filename) {
  const data = fs.readFileSync(filename);
  const response = await fetch(
    "https://api-inference.huggingface.co/models/Falconsai/nsfw_image_detection",
    {
      headers: {
        Authorization: "Bearer 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",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: data,
    }
  );
  const result = await response.json();
  return result;
}
query("./WhatsApp Image 2024-09-02 at 15.23.24_6bb391a8.jpg").then((response) => {
  if (response[0].label === "nsfw") {
    console.log("NSFW Image");
  } else {
    console.log("Safe Image");
  }
});
