import Button from "./Button";
import TextInput from "./TextInput";
import Video from "./Video";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center">My Videos</h1>
          <div className="col-md-6">
            <Video
              title="First video"
              url="https://www.youtube.com/embed/C3tIKYXQ3xY"
              text="Video 1 description"
            />
          </div>
          <div className="col-md-6">
            <Video
              title="Second video"
              url="https://www.youtube.com/embed/cE7tSzwHGiQ"
              text="Video 2 description"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
