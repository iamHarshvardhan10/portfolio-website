import aboutImageBanner from "../assets/aboutImageBanner.jpeg";

const About = () => {
  return (
    <div className="px-[24px]">
      <h1 className="text-[48px] font-semibold">About Harshvardhan</h1>
      <p className="text-[16px] font-medium mt-[16px]">
        Harshvardhan is a software engineer who loves to code and play games.
      </p>
      <img
        src={aboutImageBanner}
        alt="aboutBanner"
        className="w-[720px] h-[480px] mt-[32px] rounded-[6px]"
      />
      <p className="mt-[32px] text-[14px] text-[#747679]">
        With over a year of practical experience in MERN stack development, I
        have successfully worked on more than 10 projects that highlight my
        skills and creativity. My professional journey includes internships at
        Prodigy, Octanet, and Pinnacle Labs, where I took on roles as both a
        frontend and full-stack developer. These experiences have significantly
        enriched my technical expertise and project management skills.
        <br/>
        <br/>
        I hold a Bachelor's degree in Computer Science and am currently pursuing
        a Master's degree in Data Science and Artificial Intelligence. This
        academic background, combined with my hands-on experience, has provided
        me with a strong foundation to tackle complex problems and innovate
        within the tech industry.
        <br/>
        <br/>
        In addition to my web development experience, I have a robust
        understanding of Python and have demonstrated my problem-solving
        abilities by tackling over 450 questions on CodeChef. This combination
        of academic knowledge and hands-on experience has equipped me with the
        tools to navigate and contribute to the dynamic landscape of technology.
        <br/>
        <br/>
        As I continue to delve deeper into the realms of data science and
        artificial intelligence, I am eager to apply my skills to solve
        real-world problems and drive innovation. My passion for coding and
        continuous learning motivates me to stay updated with the latest
        industry trends and technologies, ensuring that I am always at the
        forefront of this ever-evolving domain. As I continue to explore the
        realms of data science and artificial intelligence, I am committed to
        applying my skills to real-world challenges and staying at the forefront
        of technological advancements.
      </p>
    </div>
  );
};

export default About;
