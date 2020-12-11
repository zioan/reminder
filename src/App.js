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
            />
          </div>
          <div className="col-md-6">
            <Video
              title="Second video"
              url="https://www.youtube.com/embed/cE7tSzwHGiQ"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
