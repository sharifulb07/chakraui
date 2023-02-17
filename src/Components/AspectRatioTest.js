import { AspectRatio, Flex, Image } from "@chakra-ui/react";

const AspectRatioTest = () => {
  return (
    <>
      {/* <AspectRatio maxW="560px" ratio={1}>
          <iframe
            width="885"
            height="498"
            src="https://www.youtube.com/embed/FKuNkIFlgdU"
            title="Chakra UI Crash Course #12 - Customizing the Theme"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </AspectRatio> */}

      <AspectRatio maxW="400px" ratio={4 / 2}>
        <Image
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          alt="naruto"
          objectFit="cover"
        />
      </AspectRatio>

      <AspectRatio maxW="600px" ratio={16 / 9}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
      </AspectRatio>
    </>
  );
};

export default AspectRatioTest;
