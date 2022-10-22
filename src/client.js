import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: REACT_APP_SANITY_PROJECT_ID,
  dataset: 'Your data seta',
  apiVersion: '2022-02-01',
  useCdn: true,



  
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);