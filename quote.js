import fs, { readFile, writeFile, appendFile } from "node:fs/promises";
import { stringify } from "node:querystring";
import { v4 as uuidv4 } from "uuid";

const fileName = "quotes.json";
const text = `{ "name": "marco" }`;

export async function getQuotes(filePath) {
  try {
    const data = await readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}
// const result = await getQuotes(fileName);
// console.log(result);

export async function addQuote(filePath, data) {
  try {
    await writeFile(filePath, data, "utf8");
    console.log("File written successfully");
  } catch (error) {
    console.error("Error writing file:", error);
  }
}
await addQuote(fileName, text);

const result = await getQuotes(fileName);
console.log(result);

// export async function getRandomQuote() {}

// export async function editQuote(id, quoteText) {}

// export async function deleteQuote(id) {}
