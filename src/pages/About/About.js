import React from "react";
import { Heading, Text, Image, Href } from "./About.styled";
import Cocktail1 from "../../images/Cocktail1.webp";
import { Container } from "../../components/Container/Container";

export default function About() {
  return (
    <Container>
      <Heading>NO ONE KNOWS FOR SURE WHY IT’S CALLED A “COCKTAIL”</Heading>
      <Text>
        There are about as many different explanations for the meaning behind
        the term “cocktail” as there are varieties of cocktails to order at a
        bar. That’s right, no one knows the true story behind how the cocktail
        got its name, but there are a few educated guesses. One rumor says that
        the first cocktail appeared in the 17th century, when it was reportedly
        topped with a unique garnish – a rooster’s tail – giving us the name
        cocktail. Another explanation comes from a British publication from
        1936. It described that when British sailors first visited Mexico, they
        were served mixed drinks stirred with a Cola de Gallo, a root shaped
        like a rooster’s tail. As a result, the drink quickly became referred to
        as the cocktail. Yet another everlasting tale connects the mixed drink’s
        origins{" "}
        <Href
          href="https://www.thespruceeats.com/what-is-a-cocktail-760163"
          target="_blank"
          rel="noopener noreferrer"
        >
          to the term for a mixed-breed horse
        </Href>
        . When horse racing was big in America – and not just in Kentucky – a
        mixed-breed horse was commonly referred to as a cocktail. At a time when
        horse racing and drinking went hand-in-hand (as they still do), the
        popular mixed drink soon became referred to as a cocktail. Whichever
        story you choose to believe, the name for cocktails has stood the test
        of time.
      </Text>

      <Heading>
        YOU CAN TASTE THE RECIPE FOR THE WORLD’S EARLIEST COCKTAIL
      </Heading>
      <Text>
        If you walked into a bar today and said, “I want a cocktail,” the
        bartender would probably look at you like you were crazy. While the term
        “cocktail” may refer to hundreds of combinations of drinks today, it was
        originally used to reference one type of mixed drink. Historically, the{" "}
        <Href
          href="https://www.huffpost.com/entry/post_b_9286984"
          target="_blank"
          rel="noopener noreferrer"
        >
          original
        </Href>{" "}
        recipe for a cocktail was first recorded by Scottish soldier J. E.
        Alexander in 1831. The base for Alexander’s drink included your choice
        of brandy, gin, or rum with a ratio of one-third spirit to two-thirds
        water. His cocktail also calls for an unspecified amount of bitters,
        enriched with sugar and nutmeg. Despite there being a multitude of
        different cocktail recipes out there today (thank you bartenders), the
        recipe for the signature cocktail lives on, albeit as a slightly
        modernized version. You can make this updated iteration of Alexander’s
        cocktail by combining brandy, orange curacao, bitters, and ice. Yum!
      </Text>
      <Image src={Cocktail1} alt="Cocktail preparing" />
    </Container>
  );
}
