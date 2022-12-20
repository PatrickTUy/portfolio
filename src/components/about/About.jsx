import Slider from './Slider';
function About() {
  return (
    <div className="bg-secondary flex flex-col h-full w-full" id="about">
      <div className="flex flex-col lg:flex-row m-8 max-h-3/5">
        <div className="w-fit font-bold self-center">
          <h2 className="text-white text-3xl mb-2">WHO IS LOREM Ipsum?</h2>
        </div>

        <div className="">
          <h4 className="text-white text-xl">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary,
          </h4>
        </div>
      </div>
      <div className="w-full self-center h-2/5 m-6">
        <h2 className="text-white text-xl font-bold text-center">SKILLS</h2>
        <div className="h-full w-10/11 m-6">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default About;
