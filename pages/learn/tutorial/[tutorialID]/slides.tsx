import SlideBottomNav from "@/components/SlideBottomNavigation";
import TutorialSlide from "@/components/TutorialSlide/TutorialSlide";
import type { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { separateSlides, separateMetadata } from "@/helpers/slides";
import { useState } from "react";

type Props = {
  tutorial: {
    slides: string[];
    metadata: {
      title: string;
      description: string;
      difficulty: string;
      points: number;
      tutorialID: string;
    };
    totalSlides: number;
  };
};

const Tutorial = ({ tutorial }: Props) => {
  const { slides, metadata, totalSlides } = tutorial;
  const { title, description, difficulty, points, tutorialID } = metadata;
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <TutorialSlide currentSlide={currentSlide} slides={slides} />
      <SlideBottomNav
        tutorialID={tutorialID}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        totalSlides={totalSlides}
      />
    </>
  );
};

export default Tutorial;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  const markdown = `
## What is useEffect?

useEffect is a React hook that allows you to perform side effects in function components.
 It is a close cousin of the componentDidMount, 
 componentDidUpdate, and componentWillUnmount lifecycle methods in class components.

## Why is useEffect useful?

useEffect allows you to perform side effects in function components. 
This means that you can perform data fetching, subscriptions, 
or manually changing the DOM from React components.

## How do I use useEffect?

useEffect takes a function as its first argument. 
This function is called after the component is rendered for the first time. 
The function can optionally return a cleanup function, 
which is called before the component is removed from the DOM.

~~~js
useEffect(() => {
  /* This function is called 
  after the component is rendered 
  for the first time */
  return () => {
    /* This function is called 
    before the component is removed 
    from the DOM */
  };
});
~~~

%slide

## Understanding useEffect dependencies

useEffect can take a second argument, which is an array of values.
  This array is called the dependencies array.
  If the dependencies array is empty, the effect will only run once,
  when the component is first rendered.
  If the dependencies array contains values, the effect will run every time
  one of the values in the array changes.

~~~js
useEffect(() => {
  /* This function is called
  after the component is rendered
  for the first time */
  return () => {
    /* This function is called
    before the component is removed
    from the DOM */
  };
}, [/* dependencies array */]);
~~~

%slide

## Using useEffect to fetch data

useEffect is a great way to fetch data from an API.
  In this example, we will fetch data from the [JSON Placeholder API](https://jsonplaceholder.typicode.com/).
  We will use the useEffect hook to fetch data from the API when the component is first rendered.
  We will also use the useEffect hook to fetch data from the API when the user clicks the button.

~~~js
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;

%tutorialMetadata
{
  "id": "d286c33c-aeac-4d7b-994a-36ebbb452647",
  "title": "useEffect Basics",
  "description": "useEffect is a React hook that allows you to perform side effects in function components.",
  "duration": 10,
  "difficulty": "Beginner",
  "tags": ["React", "Hooks", "useEffect"]
  "points": 10
}
`;

  const slides = separateSlides(markdown);
  const metadata = {
    id: "d286c33c-aeac-4d7b-994a-36ebbb452647",
    title: "useEffect Basics",
    description:
      "useEffect is a React hook that allows you to perform side effects in function components.",
    duration: 10,
    difficulty: "Beginner",
    tags: ["React", "Hooks", "useEffect"],
    points: 10,
  };
  const totalSlides = slides.length;
  const tutorial = {
    totalSlides,
    slides,
    metadata,
  };

  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"], null, [
        "en",
        "es",
      ])),
      tutorial,
    },
  };
};
