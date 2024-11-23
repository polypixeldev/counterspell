import AirtablePlus from "airtable-plus";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      ok: false,
      error: "Method not allowed",
    });
  }

  const { type, id } = req.body;

  if (!type || !id) {
    return res.status(400).json({
      ok: false,
      error: "Missing required fields",
    });
  }

  const WaiversTable = new AirtablePlus({
    baseID: process.env.AIRTABLE_BASE_ID,
    apiKey: process.env.AIRTABLE_API_KEY,
    tableName: "Waivers",
  });

  let filter = "";

  if (type === "email") {
    filter = `{Student Email} = '${id}'`;
  }
  else if (type === "name") {
    filter = `{Student Full Name} = '${id}'`;
  }
  else {
    return res.status(400).json({
      ok: false,
      error: "Invalid type",
    });
  }
  const waivers = await WaiversTable.read({
    filterByFormula: filter
  });

  return res.status(200).json(waviers.length > 0);
}