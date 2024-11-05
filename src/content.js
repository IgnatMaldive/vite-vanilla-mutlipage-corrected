import { marked } from 'marked';

export async function loadMarkdown(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    return marked(text);
  } catch (error) {
    console.error('Error loading markdown:', error);
    return ''; // Return empty string if loading fails
  }
}

export async function loadJSON(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading JSON:', error);
    return {}; // Return empty object if loading fails
  }
}