import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <>
      <div
        // className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "2rem",
          paddingBottom: "50px",
        }}
      >
        <h1 style={{ align: "center"}}>ABOUT US</h1>
      </div>
      <div
        className="d-flex justify-content-center"
        style={{
          alignItems: "stretch",
          backgroundColor: "#D1E8E2",
          hegiht: "100%",
          paddingTop: "5rem",
          paddingLeft: "5rem",
          paddingRight: "5rem",
          paddingBottom: "5rem",
        }}
      >
      
        <Card>
          <Card.Img
            variant="top"
            src="/images/aboutus/jem.jpeg"
          />
          <Card.Body>
            <Card.Title>Jemma</Card.Title>
            <Card.Text className="text-dark">
            I'm Jem, and I'm from the Philippines. I have a degree in Applied Mathematics, but I fell in love with programming the moment I first tried it. Coding makes me feel alive, so I never regretted this path since.
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="/images/aboutus/hs.jpeg"
          />
          <Card.Body>
            <Card.Title>HyunSung</Card.Title>
            <Card.Text className="text-dark">
            I am a passionate junior programmer, fueled by an insatiable curiosity for all things code. With each line I write, I am weaving my aspirations into reality, eager to contribute to the ever-evolving tech landscape. </Card.Text>
            
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="/images/aboutus/jinny.jpeg"
          />
          <Card.Body>
            <Card.Title>Jinny</Card.Title>
            <Card.Text className="text-dark">
            I'm Jinny. I used to work as a data analyst and am passionate about data and technology solutions, with a specific focus on marketing automation. Participating in this program has been an absolute joy.
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="/images/aboutus/baris.jpeg"
          />
          <Card.Body>
            <Card.Title>Baris</Card.Title>
            <Card.Text className="text-dark">
            A full-stack developer who is astonished by the development of technology, eager to learn and stay up-to-date with the latest languages and trends, constantly explores new apps and devices to expand their skill set.</Card.Text>
            
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="/images/aboutus/divine.jpeg"
          />
          <Card.Body>
            <Card.Title>Divine</Card.Title>
            <Card.Text className="text-dark">
            I'm a code maestro with a knack for both frontend and backend wizardry, sprinkled with a dash of DevOps sorcery. When I'm not waging war against those feisty red squiggly lines in VS Code, I transform into a Blender virtuoso.</Card.Text>
            
          </Card.Body>
        </Card>
  
      </div>
    </>
  );
};

export default About;
