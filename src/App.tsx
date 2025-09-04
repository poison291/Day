
import "./App.css";

function App() {
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [selectedDay, setSelectedDay] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingText, setLoadingText] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const loadingMessages = [
    "Getting data from NASA...",
    "Analyzing secret code...",
    "Hacking the matrix...",
    "Calculating your destiny...",
    "Consulting the ancient scrolls...",
  ];

  const handleClick = () => {
    if (!selectedDay) return;

    setLoading(true);
    setMessage("");
    setProgress(0);

    let i = 0;

    const interval = setInterval(() => {
      setLoadingText(loadingMessages[i % loadingMessages.length]);
      setProgress((prev) => Math.min(prev + 10, 100));
      i++;
    }, 300);

    setTimeout(() => {
      clearInterval(interval);
      setLoading(false);
      setProgress(100);
      setMessage("Hello World!");
    }, 3000); // simulate 3s loading
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Select a Day:</h1>
      <select
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      >
        <option value="">Select a day</option>
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <button
        onClick={handleClick}
        style={{ padding: "10px 20px", marginLeft: "10px", fontSize: "16px" }}
      >
        Start
      </button>

      {loading && (
        <div style={{ marginTop: "20px" }}>
          <h2>{loadingText}</h2>
          <div
            style={{
              height: "20px",
              width: "300px",
              border: "2px solid #000",
              margin: "10px auto",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #4caf50, #81c784)",
                borderRadius: "10px",
                transition: "width 0.3s",
              }}
            ></div>
          </div>
        </div>
      )}

      {message && !loading && (
        <h2 style={{ marginTop: "20px" }}>{message}</h2>
      )}
    </div>
  );
}

export default App;
