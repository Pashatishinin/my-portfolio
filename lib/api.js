import { useSanityClient, groq } from "astro-sanity";

export async function getService() {
  const query = groq`*[_type == "service"] | order(_createdAt)`;
  const service = await useSanityClient().fetch(query);
  return service;
}

export async function getContact() {
  const query = groq`*[_type == "contact"] | order(_createdAt)`;
  const contact = await useSanityClient().fetch(query);
  return contact;
}

export async function getEducation() {
  const query = groq`*[_type == "education"] | order(_createdAt)`;
  const education = await useSanityClient().fetch(query);
  return education;
}

export async function getSkills() {
  const query = groq`*[_type == "skills"] | order(_createdAt)`;
  const education = await useSanityClient().fetch(query);
  return education;
}

export async function getProjects() {
  const query = groq`*[_type == "projects"] {
  title,
  projectLink,
  githubLink,
  cover,
  _createdAt,
  tools[]-> {
    name,
    svgPath
  }
} | order(_createdAt)`;
  const project = await useSanityClient().fetch(query);
  return project;
}

