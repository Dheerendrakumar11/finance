// src/sanityClient.js
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'qq7ffo2e',  // Replace with your project ID
  dataset: 'production',  // Replace with your dataset name, usually 'production'
  apiVersion: '2024-10-23',      // Use the current date as the API version
  useCdn: true,                  // Use CDN for faster response, set to false for fresh data
});
