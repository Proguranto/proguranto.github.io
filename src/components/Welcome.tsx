import "@/styles/Welcome.css";
import duckyro from "@/assets/duckyro.gif";

export default function Welcome() {
  return (
    <>
      <div className="welcome-layout">
        <div className="welcome-content">
          <h2>你好</h2>
        </div>
        <img src={duckyro} className="duckyro"></img>
      </div>
    </>
  );
}
