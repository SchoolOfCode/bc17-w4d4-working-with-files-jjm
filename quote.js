import fs, { readFile, writeFile, appendFile } from "node:fs/promises";
import { stringify } from "node:querystring";
import { v4 as uuidv4 } from "uuid";

const fileName = "quotes.json";

function textIn(text) {
  return `{"id":"${uuidv4()}","quoteText": "${text}"}`;
}

export async function getQuotes(filePath) {
  try {
    const data = await readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

export async function addQuote(filePath, quote) {
  try {
    await writeFile(filePath, quote, "utf8");
    console.log("File written successfully");
  } catch (error) {
    console.error("Error writing file:", error);
  }
}

export async function appendQuote(filePath, quote) {
  try {
    await appendFile(filePath, quote, "utf8");
    console.log("File appended successfully");
  } catch (error) {
    console.error("Error writing file:", error);
  }
}

// await addQuote(fileName, textIn("some text"));
await appendQuote(fileName, textIn("some text"));

const result = await getQuotes(fileName);
console.log(result);

// export async function getRandomQuote() {}

// export async function editQuote(id, quoteText) {}

// export async function deleteQuote(id) {}
