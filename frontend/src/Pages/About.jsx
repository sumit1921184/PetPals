import { Box, Image, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <>
      <Heading textAlign="center" fontSize="55px" mt="40px">
        {" "}
        About Us
      </Heading>
      <Text w="55%" margin="auto" textAlign="center" mt="16px" mb="50px">
        Petpals are proud to be the No.1 award-winning multi-service pet care
        company in the UK. We were founded in 2001 and since then have grown to
        cover over 150 areas nationwide. We pride ourselves on delivering the
        highest standards of ethical pet care in the UK.
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={10} w="90%" m="auto">
        <GridItem w="100%">
          <Image
            src="https://i0.wp.com/ipapharma.org/wp-content/uploads/2020/08/Regulations-Guidelines.jpg?fit=300%2C300&ssl=1"
            alt="Guidelines"
          />
          <Heading fontSize="25px">Guidelines and Requirements</Heading>
          <Text
            margin="auto"
            pt="20px"
            pb="10px"
            fontSize="18px"
            textAlign="justify"
          >
            Provide clear and transparent guidelines outlining the requirements
            for potential adopters. This includes information on eligibility
            criteria, adoption fees, required documentation, and any other
            relevant details. Clarity in these guidelines helps manage
            expectations process upfront.
          </Text>
        </GridItem>
        <GridItem w="100%">
          <Image src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/26193755/Application-to-the-Principal.png" />
          <Heading fontSize="25px" mt="15%">
            Application Review Process
          </Heading>
          <Text
            margin="auto"
            pt="20px"
            pb="10px"
            fontSize="18px"
            textAlign="justify"
          >
            Implement a thorough review process for adoption applications to
            ensure that dogs are placed in suitable homes. This may involve
            assessing factors such as the adopter's living situation, and their
            ability to provide proper care and attention to a dog. A
            comprehensive review process helps ensure the well-being and safety
            of the animals.
          </Text>
        </GridItem>

        <GridItem w="100%">
          <Image src="https://fastercapital.co/i/Pet-adoption--Finding-Forever-Homes--Classified-Boards-for-Pet-Adoption--Types-of-Pets-Available-for-Adoption-on-Classified-Boards.webp" />
          <Heading fontSize="25px" mt="15%">
            Personalized Matching
          </Heading>
          <Text
            margin="auto"
            pt="20px"
            pb="10px"
            fontSize="18px"
            textAlign="justify"
          >
            Focus on personalized matching between dogs and potential adopters.
            Take into account factors such as the adopter's and the dog's
            temperament and needs. By matching dogs with compatible adopters,
            you increase the likelihood of successful adoptions and reduce the
            risk of dogs being returned to the shelter or rescue organization.
          </Text>
        </GridItem>
        <GridItem w="100%">
          <Image src="https://pub.mdpi-res.com/animals/animals-12-02562/article_deploy/html/images/animals-12-02562-g001.png?1664165685" />

          <Heading fontSize="25px">Post-Adoption Support and Follow-Up</Heading>
          <Text
            margin="auto"
            pt="20px"
            pb="10px"
            fontSize="18px"
            textAlign="justify"
          >
            Offer post-adoption support and follow-up to ensure the ongoing
            well-being of the adopted dogs. Provide resources, guidance,
            behavior training, and access to veterinary services. Regular
            follow-up communication helps address any concerns or challenges
            that may arise and reinforces the bond between adopters and their
            new pets.{" "}
          </Text>
        </GridItem>
      </Grid>
      <br />
      <Box w="90%" margin="auto">
        ******************************** Team Member ********************
      </Box>
      <br />
      <Box w="70%" margin="auto">
        <Heading textAlign="center" fontSize="29px" mt="40px">
          {" "}
          OUR MISSION
        </Heading>
        <Text textAlign="center">
          To use Internet technology and the resources it can generate to:
        </Text>
        <br />
        <Text textAlign="center">
          Increase public awareness of the availability of high-quality
          adoptable pets Increase the overall effectiveness of pet adoption
          programs across North America to the extent that the euthanasia of
          adoptable pets is eliminated Elevate the status of pets to that of
          family member
        </Text>
        <br />
        <Text textAlign="center">
          From the comfort of their personal computers, pet lovers can search
          for a pet that best matches their needs. They can then reference a
          shelter’s web page and discover what services it offers. Petfinder
          also includes discussion forums, a pet-care resource directory and a
          library of free pet-care articles to help keep pets in their homes.
        </Text>
      </Box>

      <Box w="70%" margin="auto">
        <Heading textAlign="center" fontSize="29px" mt="40px">
          {" "}
          OUR STORY
        </Heading>
        <br />
        <hr />
        <Text fontFamily="bold" fontSize="19px">
          Mar 21, 2024 by Lesley Spiller:
        </Text>
        <br />
        <Text>
          I am so pleased we have PetPals in our lives. They are so
          professional, caring and 100% reliable. We would be lost without them
          and I can thoroughly recommend them. Thank you PetPals x
        </Text>
        <br />
        <hr />
        <Text fontFamily="bold" fontSize="19px">
          Mar 21, 2024 by Nicola
        </Text>
        <br />
        <Text>
          We're so happy to have found Petpals Bracknell as they look after our
          cat (who needs daily medication) and our chickens!
        </Text>
        <br />
        <hr />
        <Text fontFamily="bold" fontSize="19px">
          Mar 21, 2024 by Bess And Delfi
        </Text>
        <br />
        <Text>
          We have been very happy girls when Phil and Bev looked after us when
          our humans are not hereOur Mum and Dad say they offer a brilliant
          service and look after us like we were one of there own dogs which
          makes us feel very specialThey also think they are very caring,
          supportive , flexible and trustworthy.Sometimes our Mum has to work at
          short notice or swop shifts and they can always manage to come and see
          usOur Dad is retiring soon but we hope we still get to see Phil and
          Bev from time to time as they are simply fabulous
        </Text>
        <br />
        <hr />
        <Text fontFamily="bold" fontSize="19px">
          Mar 18, 2024 by Charlotte Wilson
        </Text>
        <br />
        <Text>
          Always been grateful to Peter and the team for the love and care they
          have shown my various pets over the years. Highly professional and
          reliable and, more importantly, they really do love and treat my pets
          as if they were their own. Thank you
        </Text>
        <br />
        <hr />
        <Text fontFamily="bold" fontSize="19px">
          Mar 15, 2024 by Chris Willman
        </Text>
        <br />
        <Text>
          The Basingstoke Petpals team of Alex and Phil have been walking and
          helping with our dog Dusty for a couple of years now and I genuinely
          couldn't be happier with them. They take absolute pride in providing
          an exceptional service, always flexible where needed and responsive if
          we need to discuss any changes with them; even at the last
          minute.Ensuring our dog is taken care of and provided with a
          professional - but fun and love filled - dog walk, particular to keep
          her socialising regularly in the right mix of other dogs means a lot
          to us and we really couldn't be happier with the awesome job they do.
          And we're sure that Dusty our cockapoo would agree with every word
          too!
        </Text>
        <br />
        <hr />

        <Text fontFamily="bold" fontSize="19px">
          Mar 11, 2024 by Maria
        </Text>
        <br />
        <Text>
          James has been taking care of my cat on several occasions since last
          October and I am so pleased I have found him. James is very
          professional and he cares a lot about giving good care. The reports he
          provides are very well detailed and it's very reassuring read them
          when I am away (love the photos!). He is also very patient and
          respectful, as always encourages Eowyn to play but never forces her
          when is lazy. His service is fantastic and I would recommend him 100%.
          Thank you so much for looking after Eowyn!
        </Text>
        <br />
        <hr />
      </Box>
    </>
  );
};

export default About;
